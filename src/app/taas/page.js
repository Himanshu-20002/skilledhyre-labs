export const metadata = {
  title: "Team as a Service (TaaS) | Dedicated Engineering Pods",
  description:
    "Scale product velocity with SkilledHyre Labs' Team as a Service (TaaS). Deploy elite senior software engineers, AI developers, and DevOps architects.",
  alternates: {
    canonical: "/taas",
  },
  openGraph: {
    title: "Team as a Service (TaaS) | Dedicated Engineering Pods",
    description:
      "Scale product velocity with SkilledHyre Labs' Team as a Service (TaaS). Deploy elite senior software engineers, AI developers, and DevOps architects.",
    url: "/taas",
  },
};

export default function TaaS() {
  return (
    <div
      style={{
        backgroundColor: "#1C1C1C",
        color: "#ffffff",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          padding: "8rem 2rem 6rem",
          textAlign: "center",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: 700,
            marginBottom: "1.5rem",
            lineHeight: "1.2",
          }}
        >
          Talent as a Service (TaaS) – <br />
          <span style={{ color: "#2563eb" }}>SkilledHyre Labs</span>
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            color: "rgb(189, 189, 193)",
            marginBottom: "2rem",
            fontWeight: 500,
          }}
        >
          Flexible, Scalable, and On-Demand Talent for High-Growth Businesses
        </p>
        <p
          style={{
            fontSize: "1.125rem",
            color: "rgb(189, 189, 193)",
            marginBottom: "3rem",
            maxWidth: "800px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: "1.6",
          }}
        >
          At SkilledHyre Labs, our Talent as a Service (TaaS) model provides
          immediate access to skilled tech professionals and dedicated teams —
          without long hiring cycles, onboarding headaches, or HR overhead.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <button
            style={{
              backgroundColor: "#2563eb",
              color: "#ffffff",
              padding: "0.75rem 2rem",
              fontSize: "1rem",
              border: "none",
              borderRadius: "0.5rem",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Request Talent
          </button>
          <button
            style={{
              backgroundColor: "transparent",
              color: "#ffffff",
              padding: "0.75rem 2rem",
              fontSize: "1rem",
              border: "1px solid #ffffff",
              borderRadius: "0.5rem",
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            Book a Consultation
          </button>
        </div>
      </section>

      {/* What is TaaS */}
      <section
        style={{
          padding: "6rem 2rem",
          backgroundColor: "#232324",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "4rem" }}>
           <div style={{ flex: "1 1 500px" }}>
            <h2
                style={{
                fontSize: "2.5rem",
                fontWeight: 700,
                marginBottom: "1.5rem",
                }}
            >
                What is Talent as a Service?
            </h2>
            <p
                style={{
                fontSize: "1.125rem",
                color: "rgb(189, 189, 193)",
                marginBottom: "1.5rem",
                lineHeight: "1.6",
                }}
            >
                TaaS (Talent as a Service) is a modern, flexible hiring model that allows businesses to bring in pre-vetted remote professionals or dedicated teams on-demand. It eliminates traditional hiring bottlenecks and gives companies access to top-tier talent globally.
            </p>
            <ul style={{ listStyle: "none", padding: 0, color: "rgb(189, 189, 193)", fontSize: "1.125rem", lineHeight: "2" }}>
                {[
                "On-demand tech professionals",
                "Fully managed dedicated teams",
                "Flexible monthly contracts",
                "Cost-efficient resource scaling",
                "High-performance delivery models",
                ].map((item, i) => (
                <li key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ color: "#2563eb", fontSize: "1.5rem" }}>•</span> {item}
                </li>
                ))}
            </ul>
           </div>
           <div style={{ flex: "1 1 400px", display: "flex", justifyContent: "center" }}>
                <div style={{
                    width: "100%",
                    maxWidth: "500px",
                    height: "400px",
                    backgroundColor: "#1C1C1C",
                    borderRadius: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid #333"
                }}>
                    <span style={{ color: "#555" }}>TaaS Illustration</span>
                </div>
           </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section style={{ padding: "6rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: 700, marginBottom: "4rem" }}>
          Our Core TaaS Capabilities
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
          {[
            {
              title: "1. On-Demand Skilled Talent",
              desc: "Get instant access to highly skilled professionals across multiple domains.",
              items: ["MERN Stack Developers", "Frontend & Backend Engineers", "Mobile Developers", "UI/UX Designers", "QA & DevOps"],
            },
            {
              title: "2. Dedicated Remote Teams",
              desc: "Build a fully dedicated team tailored to your product or project. Your chosen team works exclusively for you.",
              items: ["Development & Engineering Team", "Full Product Team", "UI/UX Design Team", "QA & Testing Team"],
            },
            {
              title: "3. Team Extension / Augmentation",
              desc: "Boost your existing capacity by adding skilled professionals to your in-house team.",
              items: ["Tight project deadlines", "Skill shortages", "Sudden workload spikes", "Module-specific expertise"],
            },
            {
              title: "4. Fully Managed Delivery Talent",
              desc: "We provide the talent and we fully manage them for you. Ideal if you want results without management burden.",
              items: ["Delivery manager", "Sprint planning & reporting", "Quality control", "Performance tracking"],
            },
            {
              title: "5. Flexible Engagement Models",
              desc: "Choose how you want to hire. Adaptability helps startups, SMEs, and enterprises manage costs.",
              items: ["Monthly full-time", "Part-time", "Hourly", "Project-based dedicated talent"],
            },
          ].map((cap, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#242424",
                padding: "2.5rem",
                borderRadius: "1rem",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem", color: "#2563eb" }}>
                {cap.title}
              </h3>
              <p style={{ color: "rgb(189, 189, 193)", marginBottom: "1.5rem", lineHeight: "1.6" }}>
                {cap.desc}
              </p>
              <ul style={{ paddingLeft: "1.2rem", color: "#ffffff", lineHeight: "1.8" }}>
                {cap.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose SkilledHyre */}
      <section style={{ padding: "6rem 2rem", backgroundColor: "#232324" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: 700, marginBottom: "3rem" }}>
            Why Choose SkilledHyre Labs for TaaS?
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {[
                { title: "Fast Deployment", desc: "Accelerate execution with pre-vetted professionals ready to start immediately (48–72 Hours)." },
                { title: "Reduce Hiring Costs", desc: "Avoid recruitment fees, onboarding delays, and infrastructure costs (Save 60–70%)." },
                { title: "Vetted Global Talent", desc: "We provide engineers, designers, and specialists tested on real-world tasks." },
                { title: "Zero Admin Effort", desc: "We handle salaries, contracts, attendance, and replacements." },
                { title: "High Productivity", desc: "Structured workflows, sprint cycles, reporting, and performance monitoring." },
                { title: "Scale Anytime", desc: "Increase or decrease team size based on workload — without penalties." },
            ].map((reason, i) => (
                <div key={i} style={{ padding: "1.5rem", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "0.5rem" }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#2563eb" }}>✔</div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.5rem" }}>{reason.title}</h3>
                <p style={{ color: "rgb(189, 189, 193)" }}>{reason.desc}</p>
                </div>
            ))}
            </div>
        </div>
      </section>

      {/* Roles We Provide */}
      <section style={{ padding: "6rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: 700, marginBottom: "4rem" }}>
          Roles We Provide Under TaaS
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
            {[
                { role: "Developers", tech: "React, Node.js, Python" },
                { role: "Mobile Devs", tech: "Flutter, React Native" },
                { role: "Designers", tech: "UI/UX, Product Design" },
                { role: "QA Engineers", tech: "Manual, Automation" },
                { role: "DevOps", tech: "AWS, Docker, CI/CD" },
                { role: "Product", tech: "PMs, Business Analysts" },
            ].map((item, i) => (
                <div key={i} style={{ backgroundColor: "#242424", padding: "2rem", borderRadius: "0.75rem", textAlign: "center" }}>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.5rem" }}>{item.role}</h3>
                    <p style={{ color: "rgb(189, 189, 193)", fontSize: "0.9rem" }}>{item.tech}</p>
                </div>
            ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "6rem 2rem",
          textAlign: "center",
          backgroundColor: "#2563eb",
          color: "#ffffff",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", fontWeight: 700, marginBottom: "1.5rem" }}>
          Scale Smarter with TaaS
        </h2>
        <p style={{ fontSize: "1.25rem", marginBottom: "2.5rem", maxWidth: "700px", margin: "0 auto 2.5rem" }}>
          Build a high-performing remote team without complicated hiring processes or overhead expenses.
        </p>
        <button
          style={{
            backgroundColor: "#ffffff",
            color: "#2563eb",
            padding: "1rem 2.5rem",
            fontSize: "1.125rem",
            border: "none",
            borderRadius: "0.5rem",
            cursor: "pointer",
            fontWeight: 700,
          }}
        >
          Build Your Team
        </button>
      </section>
    </div>
  );
}
