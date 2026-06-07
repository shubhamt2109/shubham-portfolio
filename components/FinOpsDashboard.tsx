export default function FinOpsDashboard() {

  const cards = [
    {
      title: "Cost Savings",
      value: "30%"
    },
    {
      title: "Availability",
      value: "99.9%"
    },
    {
      title: "Coverage",
      value: "95%"
    },
    {
      title: "Utilization",
      value: "92%"
    }
  ];

  return (
    <section className="py-24 bg-slate-900">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-16">
          FinOps Impact Dashboard
        </h2>

        <div className="grid md:grid-cols-4 gap-8">

          {cards.map((card) => (

            <div
              key={card.title}
              className="
              glass
              rounded-2xl
              p-8
              text-center
              "
            >
              <h3 className="text-slate-400">
                {card.title}
              </h3>

              <div
                className="
                text-5xl
                font-bold
                mt-4
                text-cyan-400
                "
              >
                {card.value}
              </div>
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}