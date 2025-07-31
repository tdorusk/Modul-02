export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          About <span className="text-emerald-600">Netthink</span>
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          At <strong>Netthink</strong>, we’re dedicated to delivering top-tier internet services
          using cutting-edge technology. Whether it’s at home or for your business, 
          we ensure stable, fast, and secure connections.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mt-4">
          Our expert team is available <span className="font-medium">24/7</span> to support you. 
          We believe in keeping people connected—anytime, anywhere.
        </p>
      </div>
    </section>
  );
}
