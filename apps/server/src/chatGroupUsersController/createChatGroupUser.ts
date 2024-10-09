// import your Prisma client
import prisma from "@repo/db/client";
import { Request, Response } from "express";

export async function createChatGroupUser(req: Request, res: Response) {
    try {
        const { user_id, group_id } = req.body;
        
        if (!user_id || !group_id) {
            return res.status(400).json({ message: "Missing required fields" });
        }
        console.log("printing");
        console.log(user_id, group_id);
        const existingUser = await prisma.groupUsers.findFirst({
            where: {
                user_id: Number(user_id),
                group_id,
            },
            include: {
                user: true
            }
        });

        console.log("existing user is : ", existingUser);
        if (existingUser) {
            return res.status(200).json({ message: "User already in the group", data: existingUser });
        }
        
        const newUser = await prisma.groupUsers.create({
            data: {
                user_id: Number(user_id),
                group_id,
            },
            include:{
                user: true
            }
        });

        console.log("new user is : ", newUser);
        return res.status(200).json({ message: "User added to group successfully", data: newUser });
    } catch (err) {
        console.error("Error creating group user:", err);
        return res.status(500).json({ message: "Unable to add user to the group", error: "some error occured" });
    }
}
