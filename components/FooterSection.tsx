import { Separator } from '@radix-ui/react-separator';
import React from 'react'

const footerLinks = [
  {
    title: "Products & Services",
    links: [
      { name: "Home WiFi", href: "/services/home-wifi" },
      { name: "Fiber Internet", href: "/services/fiber" },
      { name: "Business Plans", href: "/services/business" },
      { name: "Coverage Areas", href: "/coverage" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "FAQs", href: "/support/faqs" },
      { name: "Help Center", href: "/support" },
      { name: "Installation Guide", href: "/support/installation" },
      { name: "Terms & Conditions", href: "/terms" },
    ],
  },
  {
    title: "Connect with Us",
    links: [
      { name: "Facebook", href: "https://facebook.com/netthink" },
      { name: "Instagram", href: "https://instagram.com/netthink" },
      { name: "Twitter", href: "https://twitter.com/netthink" },
      { name: "YouTube", href: "https://youtube.com/@netthink" },
    ],
  },
];

const FooterSection = () => {
  return (
    <footer className='bg-gray-900 text-white py-12 px-4'>
        <div className='containter mx-auto max-w-6xl'>
            <div className='grid md:grid-cols-5 gap-6'>
                <div>
                <div className='flex items-center space-x-2 mb-4'>
                    <div className='w-8 h-8 bg-gradient-to-r from-brand-600 to-brand-600 rounded-lg'></div>
                    <p className='text-xl front-bold'>Netthink</p>
                </div>
                <p className='text-gray-200'>
                    Experience WiFi Without Limits.
                </p>
                </div>

                {footerLinks.map((section, index) => (
                    <div key={index}>
                        <p className='font-semibold mb-4'>{section.title}</p>
                        <ul className='space-y-2 text-gray-400'>{section.links.map((link, listIndex) => (
                            <li key={listIndex}>
                                <a href={link.href} className='hover:text-brand-300 transition-colors'
                                >
                                {link.name}</a>
                            </li>
                        ))}
                        </ul>
                    </div>
                ))}
            </div>

            <Separator className="my-8 bg-gray-800" />

            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
                <p>&copy; 2025 Netthink. All right reserved.</p>
                    <div className="felx-space-x-6 mt-4 md:mt-0 space-x-4">
                        <a href="#" className="hover:text-brand-300 transition-colors">
                            Term
                        </a>
                        <a href="#" className="hover:text-brand-300 transition-colors">
                            Privacy
                        </a>
                        <a href="#" className="hover:text-brand-300 transition-colors">
                            Cookies
                        </a>
                    </div>
            </div>
        </div>
    </footer>
  );
}

export default FooterSection