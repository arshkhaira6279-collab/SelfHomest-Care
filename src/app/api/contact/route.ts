import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Enquiry from "@/models/Enquiry";

export async function POST(req: Request) {
    try {
        const { name, email, phone, message } = await req.json();

        if (!name || !email || !phone || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        await connectDB();
        const newEnquiry = await Enquiry.create({
            name,
            email,
            phone,
            message,
        });

        return NextResponse.json(
            { message: "Enquiry sent successfully!", id: newEnquiry._id },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Contact API Error:", error);
        return NextResponse.json(
            { error: "Something went wrong. Please try again later." },
            { status: 500 }
        );
    }
}
