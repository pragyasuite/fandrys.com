"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    country: "India",
    enquiryType: "General Enquiry",
    quantity: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields (Name, Phone, Email, and Message).");
      return;
    }

    setStatus("submitting");

    // Simulate server request
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        country: "India",
        enquiryType: "General Enquiry",
        quantity: "",
        message: "",
      });
    } catch {
      setStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="bg-warm-white p-8 md:p-12 rounded-2xl border border-accent/20 shadow-xl max-w-3xl mx-auto">
      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 p-6 bg-forest/5 border border-forest/20 rounded-xl flex items-start gap-4 text-forest"
        >
          <CheckCircle2 className="h-6 w-6 text-accent shrink-0 mt-0.5" />
          <div>
            <h3 className="font-display font-bold text-lg text-forest mb-1">
              Enquiry Submitted Successfully!
            </h3>
            <p className="font-body text-sm text-foreground/80 leading-relaxed">
              Thank you for contacting us. Our farm management team will review your requirements and respond via email or phone shortly.
            </p>
          </div>
        </motion.div>
      )}

      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 p-6 bg-rose-50 border border-rose-200 rounded-xl flex items-start gap-4 text-rose-900"
        >
          <AlertCircle className="h-6 w-6 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-display font-bold text-lg text-rose-950 mb-1">
              Submission Error
            </h3>
            <p className="font-body text-sm leading-relaxed text-rose-800">
              {errorMessage}
            </p>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="font-body text-xs font-bold uppercase tracking-wider text-forest/80">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Rahul Sharma"
              className="px-4 py-3 rounded-xl border border-accent/30 focus:border-forest focus:outline-none bg-white/50 focus:bg-white transition-all text-sm font-body"
            />
          </div>

          {/* Company / Organization */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="company" className="font-body text-xs font-bold uppercase tracking-wider text-forest/80">
              Company / Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Farm name or business (Optional)"
              className="px-4 py-3 rounded-xl border border-accent/30 focus:border-forest focus:outline-none bg-white/50 focus:bg-white transition-all text-sm font-body"
            />
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="font-body text-xs font-bold uppercase tracking-wider text-forest/80">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 98765 43210"
              className="px-4 py-3 rounded-xl border border-accent/30 focus:border-forest focus:outline-none bg-white/50 focus:bg-white transition-all text-sm font-body"
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="font-body text-xs font-bold uppercase tracking-wider text-forest/80">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. name@example.com"
              className="px-4 py-3 rounded-xl border border-accent/30 focus:border-forest focus:outline-none bg-white/50 focus:bg-white transition-all text-sm font-body"
            />
          </div>

          {/* Country */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="country" className="font-body text-xs font-bold uppercase tracking-wider text-forest/80">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="e.g. India"
              className="px-4 py-3 rounded-xl border border-accent/30 focus:border-forest focus:outline-none bg-white/50 focus:bg-white transition-all text-sm font-body"
            />
          </div>

          {/* Enquiry Type */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="enquiryType" className="font-body text-xs font-bold uppercase tracking-wider text-forest/80">
              Enquiry Type
            </label>
            <select
              id="enquiryType"
              name="enquiryType"
              value={formData.enquiryType}
              onChange={handleChange}
              className="px-4 py-3 rounded-xl border border-accent/30 focus:border-forest focus:outline-none bg-white/50 focus:bg-white transition-all text-sm font-body appearance-none cursor-pointer"
            >
              <option value="Adult Pigs">Adult Pigs</option>
              <option value="Piglets">Piglets</option>
              <option value="Pork Meat Supply">Pork Meat Supply</option>
              <option value="General Enquiry">General Enquiry</option>
              <option value="Business Enquiry">Business Enquiry</option>
              <option value="International Enquiry">International Enquiry</option>
            </select>
          </div>
        </div>

        {/* Quantity Required */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="quantity" className="font-body text-xs font-bold uppercase tracking-wider text-forest/80">
            Quantity Required
          </label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="e.g. Number of heads or metric tons"
            className="px-4 py-3 rounded-xl border border-accent/30 focus:border-forest focus:outline-none bg-white/50 focus:bg-white transition-all text-sm font-body"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="font-body text-xs font-bold uppercase tracking-wider text-forest/80">
            Enquiry Details / Message <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder="Please specify your detailed requirements (e.g. weight requirements, delivery timelines, shipping destination)..."
            className="px-4 py-3 rounded-xl border border-accent/30 focus:border-forest focus:outline-none bg-white/50 focus:bg-white transition-all text-sm font-body resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full bg-forest text-warm-white hover:bg-forest-light py-4 rounded-xl font-body font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === "submitting" ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Submitting Enquiry...
            </>
          ) : (
            <>
              Submit Commercial Enquiry
              <Send className="h-4 w-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
