export const metadata = {
  title: "Product Innovation Lab | MVP & SaaS Incubation",
  description:
    "SkilledHyre Labs' Product Innovation Lab builds production-grade digital ventures, high-speed MVPs, and market-ready SaaS applications.",
  alternates: {
    canonical: "/product-innovation-lab",
  },
  openGraph: {
    title: "Product Innovation Lab | MVP & SaaS Incubation",
    description:
      "Transforming disruptive concepts into scalable, production-grade digital products and SaaS platforms.",
    url: "/product-innovation-lab",
  },
};

export default function ProductInnovationLab() {
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
          SkilledHyre Labs – <br />
          <span style={{ color: "#2563eb" }}>Product Innovation Lab</span>
        </h1>
        <p
          style={{
            fontSize: "1.5rem",
            color: "rgb(189, 189, 193)",
            marginBottom: "2rem",
            fontWeight: 500,
          }}
        >
          End-to-End Product Strategy, UX Design, MVP Development & Scalable
          Engineering
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
          At SkilledHyre Labs, our Product Innovation Lab is designed to help
          organizations conceptualize, validate, build, and scale digital
          products with confidence. We combine product strategy, research, UX/UI
          design, modern engineering, and continuous optimization to transform
          your vision into market-ready solutions.
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
            Book a Strategy Call
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
            Get an Estimate
          </button>
        </div>
      </section>

      {/* What is Section */}
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
                What is SkilledHyre’s <br/> Product Innovation Lab?
            </h2>
            <p
                style={{
                fontSize: "1.125rem",
                color: "rgb(189, 189, 193)",
                marginBottom: "1.5rem",
                lineHeight: "1.6",
                }}
            >
                The Product Innovation Lab is a dedicated ecosystem where
                multidisciplinary product teams collaborate to create
                high-performing digital products. Our approach integrates:
            </p>
            <ul style={{ listStyle: "none", padding: 0, color: "rgb(189, 189, 193)", fontSize: "1.125rem", lineHeight: "2" }}>
                {[
                "User research & product discovery",
                "Experience design & prototyping",
                "Full-stack development",
                "Cloud deployment & QA",
                "Product scaling & feature expansion",
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
                    <span style={{ color: "#555" }}>Illustration / Image Placeholder</span>
                </div>
           </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section style={{ padding: "6rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: 700, marginBottom: "4rem" }}>
          Our Core Capabilities
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
          {[
            {
              title: "1. Product Discovery & Market Research",
              desc: "We help you define the problem, understand user needs, and shape a solution that aligns with your business model.",
              items: ["User personas & journey mapping", "Competitive & market research", "Product vision & opportunity analysis", "MVP blueprint & product roadmap"],
            },
            {
              title: "2. UX/UI Design & User Experience Engineering",
              desc: "Good products are built on great experiences. Our design team focuses on usability, clarity, and aesthetics.",
              items: ["Wireframes & user flows", "UI design & visual layouts", "High-fidelity prototypes", "Design systems & brand UI kits"],
            },
            {
              title: "3. Full-Stack Product Engineering",
              desc: "We build fast, scalable, and secure digital products using modern technologies trusted by global companies.",
              items: ["MERN stack development", "Mobile app development", "API-first architecture", "DevOps, CI/CD & cloud infrastructure"],
            },
            {
              title: "4. MVP Development & Rapid Prototyping",
              desc: "Speed is critical for early-stage validation. We deliver clean, production-ready MVPs that let you test real user behavior.",
              items: ["Core functional product", "Scalable backend architecture", "Responsive UI/UX", "Analytics & insights setup"],
            },
            {
              title: "5. Product Modernization & Scaling",
              desc: "For growing businesses, we help improve performance, update technology, and introduce new modules.",
              items: ["Architecture improvements", "Feature expansion", "UX revamp", "Performance optimization"],
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

      {/* Why SkilledHyre */}
      <section style={{ padding: "6rem 2rem", backgroundColor: "#232324" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: 700, marginBottom: "3rem" }}>
            Why SkilledHyre Labs?
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem" }}>
            {[
                { title: "End-to-End Ownership", desc: "From concept to launch — everything happens under one coordinated team." },
                { title: "Agile Execution", desc: "Weekly sprints, transparent communication, structured milestones." },
                { title: "High-Quality Engineering", desc: "Clean code, scalable architecture, and enterprise-level security." },
                { title: "Flexible Engagement", desc: "Full product build, dedicated team, or MVP-only projects." },
            ].map((reason, i) => (
                <div key={i} style={{ textAlign: "center", padding: "1.5rem" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>✔</div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.5rem" }}>{reason.title}</h3>
                <p style={{ color: "rgb(189, 189, 193)" }}>{reason.desc}</p>
                </div>
            ))}
            </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: "6rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "2.5rem", fontWeight: 700, marginBottom: "4rem" }}>
          Our Product Development Process
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
                { phase: "Phase 1: Research & Product Discovery", desc: "Identify users, goals, workflows, and market gaps." },
                { phase: "Phase 2: UX/UI Design & Prototyping", desc: "Craft intuitive interfaces and interactive prototypes." },
                { phase: "Phase 3: Engineering & Development", desc: "Build scalable, high-performance digital products." },
                { phase: "Phase 4: Testing & Quality Assurance", desc: "Ensure functionality, usability, speed, and security." },
                { phase: "Phase 5: Launch & Deployment", desc: "Deployment to cloud platforms with monitoring & analytics." },
                { phase: "Phase 6: Continuous Improvement", desc: "Feature upgrades, optimization, and long-term product support." },
            ].map((step, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "2rem", backgroundColor: "#242424", padding: "1.5rem", borderRadius: "0.75rem" }}>
                    <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#2563eb", minWidth: "150px" }}>0{i + 1}</div>
                    <div>
                        <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.25rem" }}>{step.phase}</h3>
                        <p style={{ color: "rgb(189, 189, 193)" }}>{step.desc}</p>
                    </div>
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
          Start Your Product Journey
        </h2>
        <p style={{ fontSize: "1.25rem", marginBottom: "2.5rem", maxWidth: "700px", margin: "0 auto 2.5rem" }}>
          Build your next breakthrough with a team that blends creativity, strategy, and engineering excellence.
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
          Book a Consultation
        </button>
      </section>
    </div>
  );
}
