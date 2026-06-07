const certs = [
  "AWS Certified Solutions Architect",
  "FinOps Certified Practitioner",
  "Introduction To FinOps",
  "Introduction To FOCUS",
  "Cloud GreenOps Philosopher",
  "Cloud GreenOps For AI",
  "Generative AI Foundations"
];

export default function Certifications() {
  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-16">
          Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {certs.map((cert) => (

            <div
              key={cert}
              className="
              glass
              rounded-2xl
              p-8
              text-center
              "
            >
              🏆
              <div className="mt-4">
                {cert}
              </div>
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}