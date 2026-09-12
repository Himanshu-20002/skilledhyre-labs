import { NextResponse } from "next/server";
import { connectToDatabase } from "@/utils/db";
import Inquiry from "@/models/Inquiry";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      firstName = "",
      lastName = "",
      name = "",
      email = "",
      phone = "",
      company = "",
      service = "General Inquiry",
      budget = "",
      message = "",
    } = body;

    const contactMethod = email || phone;
    if (!contactMethod) {
      return NextResponse.json(
        { success: false, message: "A valid email or phone number is required." },
        { status: 400 }
      );
    }

    const leadName = (name || `${firstName} ${lastName}`.trim()) || "Website Lead";

    // Save to MongoDB database
    try {
      await connectToDatabase();
      const nameParts = leadName.split(" ");
      const fallbackFirst = firstName || nameParts[0] || "Website";
      const fallbackLast = lastName || (nameParts.slice(1).join(" ") || "-");

      const savedInquiry = await Inquiry.create({
        firstName: fallbackFirst,
        lastName: fallbackLast,
        name: leadName,
        email: email || (phone ? `${phone.replace(/[^0-9]/g, "")}@callback.lead` : "lead@skilledhyre.com"),
        phone: phone || "",
        company: company || "",
        service: service || "Direct Callback",
        budget: budget || "",
        message: message || `Callback request from ${leadName} (${phone || email})`,
        emailSent: true,
      });

      return NextResponse.json({
        success: true,
        message: "Inquiry saved to database successfully",
        id: savedInquiry._id,
      });
    } catch (dbErr) {
      console.error("[Contact API] Error saving to MongoDB:", dbErr);
      return NextResponse.json(
        { success: false, message: "Database save error" },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error("[Contact API] General error:", err);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
