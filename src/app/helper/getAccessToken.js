let cachedToken = null;
let tokenExpiry = null;

export const getAccessToken = async () => {
    try {

        if (cachedToken && tokenExpiry && Date.now() < tokenExpiry) {
            return cachedToken;
        };

        const res = await fetch("https://accounts.zoho.in/oauth/v2/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                grant_type: "refresh_token",
                client_id: process.env.ZOHO_CLIENT_ID,
                client_secret: process.env.ZOHO_CLIENT_SECRET,
                refresh_token: process.env.ZOHO_REFRESH_TOKEN,
            }),
        });

        const data = await res.json();

        if (!res.ok || data?.error) {
            console.error("Zoho Token Error:", data);
            throw new Error(data?.error || "Failed to fetch access token");
        };

        cachedToken = data.access_token;

        // expires_in is in seconds
        tokenExpiry = Date.now() + (data.expires_in - 60) * 1000;

        return cachedToken;
    } catch (error) {
        console.error("getAccessToken Error:", error);
        return null;
    }
};