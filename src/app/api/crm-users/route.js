import { getAccessToken } from "@/app/helper/getAccessToken";

export async function GET() {

    try {

        const token = await getAccessToken();

        if (!token) {
            return Response.json(
                {
                    status: false,
                    data: null,
                    message: "Invalid Token",
                },
                {
                    status: 400,
                },
            );
        };

        // console.log("Token", token);

        const response = await fetch("https://www.zohoapis.in/crm/v2/users", {
            method: 'GET',
            headers: {
                Authorization: `Zoho-oauthtoken ${token}`,
            },
        });

        const data = await response.json();

        // console.log("Data", data);

        if (!response.ok || !data?.users) {
            throw new Error("Failed to fetch users");
        };

        return Response.json(
            {
                success: true,
                data: data?.users,
                message: "Users fetched successfully."
            },
            {
                status: 200,
            },
        );

    } catch (err) {
        // console.log("Error from crm users", err);
        return Response.json(
            {
                success: false,
                message: "Internal Server Error",
            },
            {
                status: 500,
            },
        );
    }

};