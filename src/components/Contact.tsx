import { useState } from "react";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const encode = (data: Record<string, string>) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]),
      )
      .join("&");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData }),
    })
      .then(() => {
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error(error);
        setIsSubmitting(false);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 bg-base-100 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-base-content/70 max-w-md mx-auto">
            Have a project in mind, looking for a developer, or just want to say
            hello? Drop a message!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
          {/* Left Side: Contact Info */}
          <div className="flex flex-col justify-between space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">
                Let's discuss something great
              </h3>
              <p className="text-base-content/70 leading-relaxed">
                I am open to full-time opportunities, freelance projects, and
                technical collaborations. Let's build scalable digital
                experiences together.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-base-200 text-primary rounded-xl border border-base-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-base-content/50 uppercase font-bold tracking-wider">
                    Email Me
                  </p>
                  <a
                    href="mailto:feras.techno@gmail.com"
                    className="text-base font-medium hover:text-primary transition-colors"
                  >
                    feras.techno@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-base-200 text-secondary rounded-xl border border-base-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-base-content/50 uppercase font-bold tracking-wider">
                    Location
                  </p>
                  <p className="text-base font-medium">Hamburg, Germany</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="card bg-base-200 shadow-xl border border-base-300 w-full">
            <form
              name="contact"
              onSubmit={handleSubmit}
              className="card-body gap-5 p-6 md:p-8"
            >
              <input type="hidden" name="form-name" value="contact" />

              <div className="form-control w-full">
                <label className="label py-1">
                  <span className="label-text font-semibold">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="input input-bordered w-full bg-base-100 focus:input-primary transition-all duration-200"
                  required
                />
              </div>

              <div className="form-control w-full">
                <label className="label py-1">
                  <span className="label-text font-semibold">Your Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email@example.com"
                  className="input input-bordered w-full bg-base-100 focus:input-primary transition-all duration-200"
                  required
                />
              </div>

              <div className="form-control w-full">
                <label className="label py-1">
                  <span className="label-text font-semibold">Message</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Type your message here..."
                  className="textarea textarea-bordered w-full bg-base-100 focus:textarea-primary resize-none transition-all duration-200"
                  required
                ></textarea>
              </div>

              {isSuccess && (
                <div className="alert alert-success text-sm py-2 rounded-xl">
                  <span>Message sent successfully! Thank you.</span>
                </div>
              )}

              <div className="form-control w-full mt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary w-full gap-2 shadow-lg shadow-primary/20 hover:scale-[1.01] transition-all duration-200"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}{" "}
                  <Send size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
