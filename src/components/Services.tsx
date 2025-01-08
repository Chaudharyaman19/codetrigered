import { Monitor, Smartphone, Globe, Shield } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Website Developement",
    description:
      "We design and develop websites tailored to  your unique business requirements using the latest technologies like MERN, PHP Laravel, Python, and WordPress. From sleek, responsive designs.",
  },
  {
    icon: Smartphone,
    title: "Dashboard/Management System",
    description:
      "Our dashboards are designed to streamline your operations, providing you with all the tools you need to track, analyze, and manage your business efficiently—all in one place.",
  },
  {
    icon: Shield,
    title: "AI/ML-Chatbots",
    description:
      "Our AI/ML-powered chatbots provide seamless, 24/7 customer support, handling queries, resolving issues, and guiding users with human-like efficiency and accuracy.",
  },
  {
    icon: Globe,
    title: "Mobile App Development",
    description:
      "We develop user-friendly mobile applications that cater to your specific business needs, ensuring seamless functionality and an engaging user experience across all devicess",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Comprehensive solutions for all your technological needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
