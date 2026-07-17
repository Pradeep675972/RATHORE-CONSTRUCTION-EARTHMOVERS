"use client";

import { useState } from "react";

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    await fetch("/api/booking", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-[1.75rem] border border-slate-200 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          Customer Name
          <input required name="customerName" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-0 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
        </label>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          Phone Number
          <input required name="phone" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-0 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          Email
          <input required type="email" name="email" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-0 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
        </label>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          Project Location
          <input required name="location" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-0 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          Equipment Required
          <input required name="equipment" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-0 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
        </label>
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
          Rental Duration
          <input required name="duration" className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-0 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
        </label>
      </div>
      <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
        Project Details
        <textarea required name="details" rows={5} className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none ring-0 dark:border-slate-700 dark:bg-slate-950 dark:text-white" />
      </label>
      <button type="submit" className="rounded-full bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
        Submit Booking Request
      </button>
      {submitted ? <p className="text-sm text-emerald-600">Booking request received. Our team will contact you shortly.</p> : null}
    </form>
  );
}
