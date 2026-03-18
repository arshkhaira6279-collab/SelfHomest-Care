import mongoose from "mongoose";

const EnquirySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please provide your name"],
        },
        email: {
            type: String,
            required: [true, "Please provide your email"],
        },
        phone: {
            type: String,
            required: [true, "Please provide your phone number"],
        },
        message: {
            type: String,
            required: [true, "Please provide your message"],
        },
    },
    { timestamps: true }
);

export default mongoose.models.Enquiry || mongoose.model("Enquiry", EnquirySchema);
