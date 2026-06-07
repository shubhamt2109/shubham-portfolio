"use client";

import CountUp from "react-countup";

export default function Achievements() {
  return (
    <section className="py-24 bg-slate-900">

      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-4 gap-8">

          <div className="text-center">
            <CountUp end={30} suffix="%" />
            <p>Cost Savings</p>
          </div>

          <div className="text-center">
            <CountUp end={99.9} />
            <p>Availability</p>
          </div>

          <div className="text-center">
            <CountUp end={70} suffix="%" />
            <p>Security Improvement</p>
          </div>

          <div className="text-center">
            <CountUp end={60} suffix="%" />
            <p>Automation Gain</p>
          </div>

        </div>

      </div>

    </section>
  );
}