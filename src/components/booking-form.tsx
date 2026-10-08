"use client";

import { useState, type FormEvent } from "react";

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const requiredFields = Array.from(
      form.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("[required]"),
    );

    requiredFields.forEach((field) => {
      field.setCustomValidity(field.value.trim() ? "" : "Please complete this required field.");
    });

    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const value = (name: string) => String(formData.get(name) ?? "").trim();
    const message = [
      "🚜 *New Equipment Booking Request*",
      "",
      `👤 *Customer Name:* ${value("customerName")}`,
      `📞 *Phone:* ${value("phone")}`,
      `📧 *Email:* ${value("email")}`,
      `📍 *Project Location:* ${value("location")}`,
      `🚜 *Equipment Required:* ${value("equipment")}`,
      `📅 *Rental Duration:* ${value("duration")}`,
      "",
      "📝 *Project Details:*",
      value("details"),
    ].join("\n");
    const whatsappUrl = `https://wa.me/919752264618?text=${encodeURIComponent(message)}`;

    const whatsappWindow = window.open(whatsappUrl, "_blank");
    if (whatsappWindow) {
      whatsappWindow.opener = null;
    } else {
      window.location.assign(whatsappUrl);
    }
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      onChange={(event) => {
        setSubmitted(false);
        const field = event.target;
        if (field instanceof HTMLInputElement || field instanceof HTMLSelectElement || field instanceof HTMLTextAreaElement) {
          field.setCustomValidity("");
        }
      }}
      className="space-y-4 rounded-[1.75rem] border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          Customer Name
          <input required name="customerName" placeholder="Your name" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
        </label>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          Phone Number
          <input required name="phone" placeholder="+91 98765 43210" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          Email
          <input required type="email" name="email" placeholder="you@example.com" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
        </label>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          Project Location
          <input required name="location" placeholder="Betul, Bhopal, Nagpur..." className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          Equipment Required
          <select required name="equipment" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white">
            <option value="">Select equipment</option>
            <option value="Backhoe Loader">Backhoe Loader</option>
            <option value="Hydraulic Excavator">Hydraulic Excavator</option>
            <option value="Hydraulic Breaker">Hydraulic Breaker</option>
            <option value="Bulldozer">Bulldozer</option>
            <option value="Wheel Loader">Wheel Loader</option>
          </select>
        </label>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          Rental Duration
          <select required name="duration" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white">
            <option value="">Select duration</option>
            <option value="1 day">1 day</option>
            <option value="1 week">1 week</option>
            <option value="1 month">1 month</option>
            <option value="Long term">Long term</option>
          </select>
        </label>
      </div>
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
        Project Details
        <textarea required name="details" rows={5} placeholder="Share your site requirements, timeline and scope of work." className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
      </label>
      <button type="submit" className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-orange-400">
        Submit Booking Request
      </button>
      {submitted ? <p className="text-sm text-emerald-600">WhatsApp opened with your booking details. Press Send in WhatsApp to submit your request.</p> : null}
    </form>
  );
}
