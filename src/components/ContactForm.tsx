import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";
import contact from "/src/assets/contact.jpg";
import "./contact.css";
// import { console } from "inspector";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;

    try {
      const result = await emailjs.send(
        "service_a9kgneu",
        "template_8lfhtk3",
        { name, email, message },
        "D0htYagxQScGDLP_N"
      );
      console.log(result);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error sending message.",
        description: "Please try again later.",
        // status: error,
      });
      console.log(error);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white-50 backgroundimage"
      style={{ backgroundImage: `url(${contact})` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-white-900 mb-4">Contact Us</h2>
          <p className="text-xlbg-white-50">
            Get in touch with us for any questions or inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side: Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold bg-white-50 mb-4">
              Empower your business with Code Triggered
            </h3>
            <p className="text-lg bg-white-50 mb-2">
              <strong>Phone:</strong> 8802102728,9773877402
            </p>
            <p className="text-lg bg-white-50 mb-2">
              <strong>Email:</strong> codetriggered@gmail.com
            </p>
            {/* <p className="text-lg text-gray-700 mb-2">
              <strong>Address:</strong> 1234 Street Name, City, Country
            </p> */}
          </div>

          {/* Right Side: Form */}
          <div className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-mediumbg-white-50 mb-1"
                >
                  Name
                </label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-mediumbg-white-50 mb-1"
                >
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium bg-white-50 mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="w-full min-h-[100px]"
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
