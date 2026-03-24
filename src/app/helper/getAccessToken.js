export const getAccessToken = async () => {
    try {
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
        // console.log("Access Token Response", data);
        if (!res.ok || data?.error) {
            console.error("Zoho Token Error:", data);
            throw new Error(data?.error || "Failed to fetch access token");
        };

        return data?.access_token;
    } catch (error) {
        console.error("getAccessToken Error:", error);
        return null;
    }
};