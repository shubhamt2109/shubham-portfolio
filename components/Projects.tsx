const projects = [
  {
    title: "FinOps Cost Optimization Framework",
    result: "30% Cost Savings"
  },
  {
    title: "Automated Resource Scheduler",
    result: "25% Idle Cost Reduction"
  },
  {
    title: "Real-Time Cost Alerting",
    result: "Budget Protection"
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold mb-16">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project) => (

            <div
              key={project.title}
              className="glass p-8 rounded-2xl"
            >
              <h3 className="text-xl font-bold">
                {project.title}
              </h3>

              <p className="mt-4 text-cyan-400">
                {project.result}
              </p>
            </div>

          ))}

        </div>

      </div>
    </section>
  );
}