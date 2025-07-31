import { StarIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const testimonials = [
  {
    initial: "SJ",
    name: "Sarah Johnson",
    role: "Freelance Designer",
    location: "Jakarta",
    message:
      "Since switching to Netthink, our whole family can stream, work, and play games without any lag. It’s the best decision we’ve made for our home!",
    avatar: "/avatars/sarah.png",
  },
  {
    initial: "DW",
    name: "Daniel Wong",
    role: "Remote Software Engineer",
    location: "Bandung",
    message:
      "Installation was quick and the connection is incredibly stable. I work remotely and haven’t had a single issue with video calls or uploads.",
    avatar: "/avatars/daniel.png",
  },
  {
    initial: "AP",
    name: "Ayu Pratiwi",
    role: "Parent & Online Seller",
    location: "Surabaya",
    message:
      "The app makes it super easy to manage my kids' screen time and monitor devices on our home WiFi. Great features and responsive support!",
    avatar: "/avatars/ayu.png",
  },
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
                <Badge 
                variant={"outline"} 
                className="mb-4 bg-brand-50 text-brand-600"
                >
                Testimonials
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                    What Our Customers Say
                </h2>
                <p className="text-lg text-gray-600">
                    Hear from our satisfied customers about their experience with Netthink.
                </p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <Card 
                    key={index} 
                    className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
                    >
                    <CardContent className="pt-6">
                        <div className="flex mb-4">
                            {[...Array(5)].map((_, i) => (
                                <StarIcon key={i} className="w-4 h-4 fill-yellow-400" />
                            ))}
                        </div>
                        <p className="text-gray-600 mb-4">&ldquo;{testimonial.message}&rdquo;</p>
                        <div className="flex items-center">
                            <Avatar className="bg-brand-100 text-brand-700">
                                <AvatarImage src={testimonial.avatar}/>
                                <AvatarFallback className="bg-brand-100 text-brand-700">
                                    {testimonial.initial}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold mx-4">{testimonial.name}</p>
                                <p className="text-sm text-gray-500 mx-4">{testimonial.role} - {testimonial.location}</p>
                            </div>
                        </div>
                    </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </section>
  )
}

export default TestimonialSection