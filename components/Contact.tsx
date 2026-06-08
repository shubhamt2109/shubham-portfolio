export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 max-w-4xl mx-auto px-6"
    >
      <h2 className="text-4xl font-bold mb-10">
        Contact
      </h2>

      <div className="glass p-10 rounded-2xl">

        <p>
          🔗{" "}
          <a
            href="https://www.linkedin.com/in/shubham-turalkar2109"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 underline"
          >
            LinkedIn Profile
          </a>
      </p>

        <p className="mt-4">
          📧 shubhamturalkar@outlook.com
        </p>

        <p className="mt-4">
          🌍 Mumbai, India
        </p>

        <p className="mt-4">
          ☁️ AWS • FinOps • Cloud Architecture
        </p>

      </div>
    </section>
  );
}