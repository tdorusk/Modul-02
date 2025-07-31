import { Wifi, Zap, Router, ShieldCheck, Globe, Smartphone } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardTitle, CardDescription, CardHeader } from "./ui/card";



const services = [
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description:
      "Enjoy blazing-fast internet for streaming, gaming, and working from home without interruptions.",
    iconBgColor: "bg-blue-100",
    iconColor: "text-blue-600",
  },
    {
    icon: Zap,
    title: "24/7 Customer Support",
    description:
        "Our support team is available anytime via phone, chat, or email to assist you whenever you need.",
    iconBgColor: "bg-orange-100",
    iconColor: "text-orange-600",
    },
  {
    icon: Router,
    title: "Free Installation",
    description:
      "Professional installation of modem and router at your home—completely free of charge.",
    iconBgColor: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    icon: ShieldCheck,
    title: "Secure Connection",
    description:
      "Keep your data and family safe with encrypted networks and advanced firewall protection.",
    iconBgColor: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Globe,
    title: "Unlimited Data",
    description:
      "Surf, stream, and connect as much as you want with truly unlimited internet access.",
    iconBgColor: "bg-teal-100",
    iconColor: "text-teal-600",
  },
  {
    icon: Smartphone,
    title: "Smart App Control",
    description:
      "Manage your home network anytime with our mobile app—monitor usage and set parental controls.",
    iconBgColor: "bg-pink-100",
    iconColor: "text-pink-600",
  },
];

const ServicesSection = () => {
  return <section id='features' className='py-20 px-4 bg-white'>
    <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
            <Badge 
            className="mb-4 bg-brand-50 text-brand-600"
            variant={"outline"}
            >
            Services
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Why Choose <span className="text-emerald-600">Netthink</span> ?
            </h2>
            <p className="text-lg text-gray-600">
                Discover the benefits of our high-speed internet services.
            </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
                const Icon = service.icon;

                return (
                    <Card 
                    key={index} 
                    className="border-0 shadow-md hover:shadow-lg transition-shadow
                    hover: shadow-brand-700/40">
                        <CardHeader>
                            <div 
                            className={`w-12 h-12 ${service.iconBgColor} rounded-lg flex items-center justify-center mb-4`}
                              >
                            <Icon className={`w-6 h-6 ${service.iconColor}`} />
                            </div>
                            <CardTitle>{service.title}</CardTitle>
                            <CardDescription>
                                {service.description}
                            </CardDescription>
                        </CardHeader>
                    </Card>
                )
            })}
        </div>
    </div>
  </section>
}

export default ServicesSection