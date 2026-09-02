"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, X, ShieldCheck, Clock, FileText, RotateCw } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  // Helper to generate a random 6-character alphanumeric Captcha string
  const createCaptchaString = () => {
    const chars = "23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
  };

  // Initialize captchaCode with lazy initial state
  const [captchaCode, setCaptchaCode] = useState<string>(createCaptchaString);
  const [userCaptcha, setUserCaptcha] = useState("");

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [referenceCode, setReferenceCode] = useState("");
  const [submittedDetails, setSubmittedDetails] = useState({ name: "", enquiryType: "" });

  // Function to refresh Captcha code
  const generateCaptcha = () => {
    setCaptchaCode(createCaptchaString());
    setUserCaptcha("");
  };

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

    // Validate Alphanumeric Captcha
    if (userCaptcha.trim().toLowerCase() !== captchaCode.toLowerCase()) {
      setStatus("error");
      setErrorMessage("Invalid Captcha code. Please enter the correct characters displayed in the security box.");
      generateCaptcha();
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Generate a reference code for the customer
        const generatedCode = `FND-${Math.floor(100000 + Math.random() * 900000)}`;
        setReferenceCode(generatedCode);
        setSubmittedDetails({ name: formData.name, enquiryType: formData.enquiryType });
        
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to submit enquiry. Please try again.");
        generateCaptcha();
      }
    } catch {
      setStatus("error");
      setErrorMessage("An unexpected network error occurred. Please try again later.");
      generateCaptcha();
    }
  };

  const handleCloseModal = () => {
    setStatus("idle");
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
    generateCaptcha();
  };

  return (
    <div className="bg-warm-white p-8 md:p-12 rounded-2xl border border-accent/20 shadow-xl max-w-3xl mx-auto relative">
      
      {/* 1. PROFESSIONAL SUCCESS POPUP MODAL */}
      <AnimatePresence>
        {status === "success" && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="bg-warm-white max-w-lg w-full rounded-3xl border border-accent/30 shadow-2xl overflow-hidden relative"
            >
              {/* Brand Color Header Bar */}
              <div className="bg-gradient-to-r from-forest via-[#9A1218] to-forest h-3 w-full" />
              
              {/* Close Icon */}
              <button
                onClick={handleCloseModal}
                className="absolute top-5 right-5 p-2 text-foreground/40 hover:text-forest hover:bg-black/5 rounded-full transition-colors"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="p-8 md:p-10 text-center space-y-6">
                {/* Glowing Checkmark Badge */}
                <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                  <div className="absolute inset-0 bg-forest/15 rounded-full animate-ping opacity-75" />
                  <div className="relative bg-forest text-warm-white p-5 rounded-full shadow-lg border border-accent/30">
                    <CheckCircle2 className="h-10 w-10 text-warm-white" />
                  </div>
                </div>

                {/* Title & Body Text */}
                <div className="space-y-2">
                  <h3 className="font-display font-extrabold text-2xl md:text-3xl text-forest tracking-tight">
                    Enquiry Submitted!
                  </h3>
                  <p className="font-body text-foreground/80 text-sm md:text-base leading-relaxed">
                    Thank you, <span className="font-bold text-forest">{submittedDetails.name}</span>. Your enquiry has been received and dispatched to our farm office. We will get back to you shortly.
                  </p>
                </div>

                {/* Reference Details Box */}
                <div className="bg-beige/40 p-5 rounded-2xl border border-accent/20 space-y-3 text-left font-body">
                  <div className="flex items-center justify-between border-b border-accent/15 pb-2 text-xs">
                    <span className="text-foreground/60 uppercase font-bold tracking-wider">Reference Code:</span>
                    <span className="font-mono font-bold text-forest bg-forest/10 px-2.5 py-1 rounded-md text-sm">{referenceCode}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="text-foreground/60 flex items-center gap-1">
                      <FileText className="h-3.5 w-3.5 text-accent" /> Category:
                    </span>
                    <span className="font-semibold text-foreground">{submittedDetails.enquiryType}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-foreground/60 flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-accent" /> Expected Response:
                    </span>
                    <span className="font-semibold text-forest">Within 24 Hours</span>
                  </div>
                </div>

                {/* Security Note */}
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-foreground/60 font-body">
                  <ShieldCheck className="h-4 w-4 text-forest shrink-0" />
                  <span>A copy of your enquiry has been sent to our management team.</span>
                </div>

                {/* Action Button */}
                <button
                  onClick={handleCloseModal}
                  className="w-full bg-forest text-warm-white hover:bg-forest-light py-3.5 rounded-xl font-body font-bold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg"
                >
                  Done / Return to Portal
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 2. SUBMISSION ERROR ALERT */}
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

      {/* 3. ENQUIRY FORM */}
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

        {/* Security Alphanumeric Captcha */}
        <div className="flex flex-col gap-2 pt-2 border-t border-accent/15">
          <label htmlFor="captchaInput" className="font-body text-xs font-bold uppercase tracking-wider text-forest/80">
            Security Verification (Captcha) <span className="text-red-500">*</span>
          </label>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Styled Alphanumeric Display Box */}
            <div className="flex items-center gap-2 bg-[#121212] border border-accent/30 px-4 py-2.5 rounded-xl shadow-inner select-none relative overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-gradient-to-r from-forest/20 via-transparent to-forest/20 pointer-events-none" />
              <span className="font-mono font-bold text-xl tracking-[0.25em] text-[#C5A880] italic select-none transform -skew-x-6">
                {captchaCode}
              </span>
              <button
                type="button"
                onClick={generateCaptcha}
                className="p-1.5 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors ml-2"
                title="Generate New Captcha Code"
              >
                <RotateCw className="h-4 w-4" />
              </button>
            </div>

            {/* User Captcha Text Input */}
            <input
              type="text"
              id="captchaInput"
              name="captchaInput"
              required
              value={userCaptcha}
              onChange={(e) => setUserCaptcha(e.target.value)}
              placeholder="Enter Captcha Code"
              className="flex-grow px-4 py-3 rounded-xl border border-accent/30 focus:border-forest focus:outline-none bg-white/50 focus:bg-white transition-all text-sm font-body font-mono uppercase"
            />
          </div>
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
