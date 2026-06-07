const jobs = [
  {
    company: "Infinx Services",
    role: "Cloud Engineer - FinOps",
    period: "2023 - Present",
    points: [
      "Achieved 20-30% AWS cost reduction",
      "Built QuickSight + CUR dashboards",
      "Implemented tagging governance",
      "Savings Plan optimization",
      "Terraform automation"
    ]
  },
  {
    company: "Unizen Technologies",
    role: "Cloud Operations Engineer",
    period: "2020 - 2023",
    points: [
      "Managed AWS Infrastructure",
      "CloudWatch Monitoring",
      "Production RCA",
      "Operational Stability"
    ]
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-24 max-w-6xl mx-auto px-6"
    >
      <h2 className="text-4xl font-bold mb-16">
        Experience
      </h2>

      <div className="space-y-10">

        {jobs.map((job) => (

          <div
            key={job.company}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold">
              {job.company}
            </h3>

            <p className="text-cyan-400">
              {job.role}
            </p>

            <p className="text-slate-500 mb-4">
              {job.period}
            </p>

            <ul className="space-y-2">

              {job.points.map((point) => (
                <li key={point}>
                  ✓ {point}
                </li>
              ))}

            </ul>

          </div>

        ))}

      </div>
    </section>
  );
}