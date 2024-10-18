import prisma from "@repo/db/client";
import { Request, Response } from "express";

export async function getUserDetails(req: Request, res: Response) {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({
                message: "User ID is required",
            });
        }
        console.log("User ID from backend is: ", id);


        const user = await prisma.users.findFirst({
            where: {
                id: Number(id)
            },
        });

        console.log("User from backend is : ", user);

        if (!user) {
            return res.status(404).json({
                message: "No user exists with this user ID",
            });
        }

        res.status(200).json({
            message: "Successfully fetched the user",
            data: user,
        });
    } catch (err) {
        console.error("Error in backend:", err);
        res.status(500).json({
            message: "Error in finding the user",
        });
    }
}
