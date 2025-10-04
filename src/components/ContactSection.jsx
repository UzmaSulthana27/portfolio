import {
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const ContactSection = () => {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.target);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    setLoading(false);

    if (result.success) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-secondary/30 overflow-hidden"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center transition-all duration-700 ease-out hover:scale-105">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto transition-opacity duration-700 ease-out hover:opacity-80">
          Have a project in mind or want to collaborate? <br /> Feel free to
          reach out — I’m always open to exciting opportunities.
        </p>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-10 animate-fadeIn">
            <h3 className="text-2xl font-semibold mb-6">📌 Contact Info</h3>

            {/* Email */}
            <div className="flex items-start space-x-4 group transition-all duration-500 hover:translate-x-2">
              <div className="p-3 rounded-full border border-primary transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg hover:bg-[#EA4335] hover:border-[#EA4335]">
                <Mail className="h-6 w-6 text-primary transition-colors duration-500 group-hover:text-white" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:uzmasulthana2725@gmail.com"
                  className="text-muted-foreground hover:text-[#EA4335] transition-colors duration-300"
                >
                  uzmasulthana2725@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4 group transition-all duration-500 hover:translate-x-2">
              <div className="p-3 rounded-full border border-primary transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg hover:bg-[#25D366] hover:border-[#25D366]">
                <Phone className="h-6 w-6 text-primary transition-colors duration-500 group-hover:text-white" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <a
                  href="tel:+918548929280"
                  className="text-muted-foreground hover:text-[#25D366] transition-colors duration-300"
                >
                  (+91) 85489 29280
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-4 group transition-all duration-500 hover:translate-x-2">
              <div className="p-3 rounded-full border border-primary transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg hover:bg-[#FF0000] hover:border-[#FF0000]">
                <MapPin className="h-6 w-6 text-primary transition-colors duration-500 group-hover:text-white" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-muted-foreground hover:text-[#FF0000] transition-colors duration-300">
                  Bengaluru, Karnataka
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-start space-x-4 group transition-all duration-500 hover:translate-x-2">
              <div className="p-3 rounded-full border border-primary transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg hover:bg-[#0A66C2] hover:border-[#0A66C2]">
                <Linkedin className="h-6 w-6 text-primary transition-colors duration-500 group-hover:text-white" />
              </div>
              <div>
                <h4 className="font-medium">Connect With Me</h4>
                <div className="flex space-x-4 mt-2">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    className="p-2 rounded-full text-muted-foreground transition-all duration-500 hover:bg-[#0A66C2] hover:text-white hover:scale-110"
                  >
                    <Linkedin />
                  </a>
                  <a
                    href="https://github.com/UzmaSulthana27"
                    target="_blank"
                    className="p-2 rounded-full text-muted-foreground transition-all duration-500 hover:bg-black hover:text-white hover:scale-110"
                  >
                    <Github />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    className="p-2 rounded-full text-muted-foreground transition-all duration-500 hover:bg-[#E4405F] hover:text-white hover:scale-110"
                  >
                    <Instagram />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 border rounded-xl shadow-md bg-background/60 backdrop-blur-sm transition-transform duration-500 hover:scale-[1.02] hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              ✉️ Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Web3Forms Access Key */}
              <input
                type="hidden"
                name="access_key"
                value="49755b1a-c788-4b00-8c40-c0ec8bc6ccf5"
              />

              {/* Name */}
              <div className="transition-all duration-500 hover:translate-x-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-hidden transition-all duration-300 focus:scale-[1.02]"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div className="transition-all duration-500 hover:translate-x-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-hidden transition-all duration-300 focus:scale-[1.02]"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message */}
              <div className="transition-all duration-500 hover:translate-x-1">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary focus:outline-hidden resize-none transition-all duration-300 focus:scale-[1.02]"
                  placeholder="Write your message..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 transition-transform duration-500 hover:scale-105 hover:shadow-lg"
                )}
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </form>

            {/* ✅ Success/Error Message */}
            {status === "success" && (
              <p className="mt-4 text-green-600 font-medium text-center animate-pulse">
                ✅ Form submitted successfully!
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-red-600 font-medium text-center animate-pulse">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
