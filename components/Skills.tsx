"use client";

import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "AWS Cloud",
    skills: [
      "EC2",
      "S3",
      "RDS",
      "IAM",
      "VPC",
      "Route53",
      "CloudFront",
      "ALB",
      "Lambda",
      "ECS",
      "Auto Scaling"
    ]
  },
  {
    title: "FinOps",
    skills: [
      "Cost Explorer",
      "CUR",
      "QuickSight",
      "Savings Plans",
      "Reserved Instances",
      "Forecasting",
      "Chargeback",
      "Showback",
      "Cloudability",
      "Tagging Strategy"
    ]
  },
  {
    title: "DevOps",
    skills: [
      "Terraform",
      "CloudFormation",
      "Docker",
      "Git",
      "CodePipeline"
    ]
  }
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 max-w-7xl mx-auto px-6"
    >
      <h2 className="text-4xl font-bold mb-16">
        Skills & Technologies
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {skillGroups.map((group) => (

          <div
            key={group.title}
            className="glass rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-3">

              {group.skills.map((skill) => (

                <motion.span
                  whileHover={{
                    scale: 1.1
                  }}
                  key={skill}
                  className="
                  px-4
                  py-2
                  rounded-full
                  bg-cyan-500/10
                  border
                  border-cyan-500
                  "
                >
                  {skill}
                </motion.span>

              ))}

            </div>

          </div>

        ))}

      </div>
    </section>
  );
}