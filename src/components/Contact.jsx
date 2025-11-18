import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // placeholder: here you'd call your backend or email service
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section id="contact" className=" bg-amber-800">
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h4 className="text-3xl font-bold mt-12 text-white">Get in touch</h4>
          <p className="mt-6 text-white/60">
            Tell us about your hiring needs and we'll get back within one
            business day.
          </p>

          <div className="mt-12 space-y-3 text-sm text-white/60">
            <div>
              📍 &nbsp; F 16 mohammadi city corner above axis atm mohammadpura
              circle, Bharuch 392001
            </div>
            <div>
              <i class="fa-brands fa-instagram"></i>&nbsp;&nbsp;
              <a href="https://www.instagram.com/f.k_jobs_bharuch/?hl=en">
                f.k_jobs_bharuch
              </a>
            </div>
            <div className="mt-8">Monaday to Saturday</div>
            <div>10:00 am to 02:00 pm</div>
            <div>📞 (+91) 87589 09718</div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          onSubmit={handleSubmit}
          className="mb-5 mt-5 bg-amber-50 p-6 rounded-2xl shadow-md"
        >
          <label className="block text-sm text-amber-800">Name</label>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full mt-2 p-3 rounded-xl border focus:ring-2 focus:ring-blue-200"
          />

          <label className="block text-sm mt-4 text-amber-800">Email</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full mt-2 p-3 rounded-xl border focus:ring-2 focus:ring-blue-200"
          />

          <label className="block text-sm mt-4 text-amber-800">Message</label>
          <textarea
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full mt-2 p-3 rounded-xl border focus:ring-2 focus:ring-blue-200 min-h-[120px]"
          ></textarea>

          <div className="mt-4 flex items-center gap-3">
            <button
              type="submit"
              className="bg-fkblue bg-amber-800 text-white px-5 py-2 rounded-2xl shadow hover:scale-105 transition"
            >
              Send Message
            </button>
            {sent && (
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-green-600"
              >
                Message sent ✅
              </motion.div>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
