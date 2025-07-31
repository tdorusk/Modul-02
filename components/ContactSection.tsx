export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Whether you need technical support, service information, or just want to talk—
          we’re here for you.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mt-2">
          Contact us via <strong>email, phone, or live chat</strong>. Our support team is available <span className="font-medium">24/7</span>.
        </p>

        <div className="mt-8">
          <a
            href="/contact"
            className="inline-block px-6 py-3 text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg text-lg font-semibold transition"
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
