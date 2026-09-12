import mongoose from "mongoose";

const InquirySchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.Mixed,
    default: () => new mongoose.Types.ObjectId(),
  },
  firstName: { type: String, default: "" },
  lastName: { type: String, default: "" },
  name: { type: String, default: "" },
  email: { type: String, default: "" },
  phone: { type: String, default: "" },
  company: { type: String, default: "" },
  service: { type: String, default: "General Inquiry" },
  budget: { type: String, default: "" },
  message: { type: String, default: "" },
  source: { type: String, default: "website_contact_page" },
  emailSent: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

if (mongoose.models && mongoose.models.Inquiry) {
  delete mongoose.models.Inquiry;
}

export default mongoose.model("Inquiry", InquirySchema);
