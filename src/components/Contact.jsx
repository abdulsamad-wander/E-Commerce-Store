import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
// import { error } from 'console';
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: " ", email: " ", message: " " });
  const [loading, setLoading] = useState(false);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_x0r70dd",
        "template_iwbygpg",
        {
          form_name: form.name,
          to_name: "Abdul Samad",
          from_email: form.email,
          to_email: "abdullsamad3800@gmail.com",
          message: form.message,
        },
        "ew7WQtOCHRIphD-1Q"
      )
      .then(() => {
        setLoading(false);
        toast.success("Thank You, I'll reply You soon");
        setForm({ name: " ", email: " ", message: " " }).catch(() => {
          setLoading(false);
          toast.error("❌ Something went wrong.");
          // console.log(error);
        });
      });
  };
  return (
    <div className="min-h-screen  bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center px-4 py-10">
      <div className="md:w-[50%] w-full backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-10  max-w-5xl">
        <h2 className="text-4xl font-bold text-white text-center mb-10">
          Get in Touch with <span className="text-red-400">E-Comerce</span>
        </h2>

        <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
          <div>
            <label className="block text-white mb-1">Your Name</label>
            <input
            name="name"
              type="name"
              placeholder="John Doe"
              value={form.name}
              onChange={handleForm}
              className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-white mb-1">Email Address</label>
            <input
            name="email"
              type="email"
              placeholder="john@example.com"
              value={form.email}
              onChange={handleForm}
              className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-white mb-1">Your Message</label>
            <textarea
            name="message"
              rows="4"
              placeholder="Type your message..."
              value={form.message}
              onChange={handleForm}
              className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white rounded-xl placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-[#64ffda] to-[#4facfe] py-2.5 px-6 rounded-md text-[#0a192f] font-semibold shadow-md hover:shadow-[#64ffda]/40 transition-all duration-300 w-fit self-start mt-2 text-base cursor-pointer"
          >
            {loading ? (
              <span className="flex items-center text-base">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#0a192f]"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
