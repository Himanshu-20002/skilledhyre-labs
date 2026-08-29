export const metadata = {
  title: "Engineering Process & Delivery Lifecycle",
  description:
    "Discover SkilledHyre Labs' 5-stage software delivery framework: Discovery, Architecture Design, Agile Sprint Execution, QA, and Cloud Deployment.",
  alternates: {
    canonical: "/process",
  },
  openGraph: {
    title: "Engineering Process & Delivery Lifecycle | SkilledHyre Labs",
    description:
      "Our battle-tested 5-stage delivery framework engineered for speed, security, and scalable software execution.",
    url: "/process",
  },
};

export default function Process() {
  return (
    <div
      style={{
        backgroundColor: "#1C1C1C",
        color: "#ffffff",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          padding: "8rem 2rem 6rem",
          textAlign: "center",
          maxWidth: "1200px",
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
          Our Processes
        </h1>
        <p
          style={{
            fontSize: "1.25rem",
            color: "rgb(189, 189, 193)",
            marginBottom: "4rem",
            maxWidth: "800px",
            margin: "0 auto 4rem",
            lineHeight: "1.6",
          }}
        >
          Whether you need end-to-end product development or on-demand talent, we have a structured approach to ensure success.
        </p>
      </section>

      {/* Product Development Process */}
      <section
        style={{
          padding: "4rem 2rem 6rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            fontWeight: 700,
            marginBottom: "3rem",
            color: "#2563eb",
          }}
        >
          Product Development Process
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {[
            { phase: "1. Research & Discovery", desc: "Identify users, goals, workflows, and market gaps." },
            { phase: "2. UX/UI Design", desc: "Craft intuitive interfaces and interactive prototypes." },
            { phase: "3. Engineering", desc: "Build scalable, high-performance digital products." },
            { phase: "4. Testing & QA", desc: "Ensure functionality, usability, speed, and security." },
            { phase: "5. Launch", desc: "Deployment to cloud platforms with monitoring & analytics." },
            { phase: "6. Continuous Improvement", desc: "Feature upgrades, optimization, and long-term support." },
          ].map((step, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#242424",
                padding: "2rem",
                borderRadius: "1rem",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-1rem",
                  left: "2rem",
                  backgroundColor: "#2563eb",
                  color: "#ffffff",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  fontSize: "1.25rem",
                }}
              >
                {i + 1}
              </div>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem", marginTop: "1rem" }}>
                {step.phase}
              </h3>
              <p style={{ color: "rgb(189, 189, 193)", lineHeight: "1.6" }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TaaS Process */}
      <section
        style={{
          padding: "6rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          backgroundColor: "#232324",
          borderRadius: "1rem",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            fontWeight: 700,
            marginBottom: "3rem",
            color: "#2563eb",
          }}
        >
          Talent as a Service (TaaS) Workflow
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {[
            { step: "Step 1: Requirement Understanding", desc: "We analyze your talent needs, project scope, tech stack, experience level, and structure." },
            { step: "Step 2: Talent Shortlisting", desc: "Our team evaluates and shares the best-matching candidates from our vetted talent pool." },
            { step: "Step 3: Interview & Approval", desc: "You interview and select the professionals that best match your requirements." },
            { step: "Step 4: Seamless Onboarding", desc: "We assist with tool setup, communication channels, and onboarding." },
            { step: "Step 5: Work, Track, Optimize", desc: "Daily standups, weekly reports, sprint planning, task updates, and measurable KPIs." },
            { step: "Step 6: Scale as Needed", desc: "Add more engineers, designers, testers, or managers anytime — instantly." },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "2rem",
                alignItems: "flex-start",
                padding: "1.5rem",
                borderBottom: i < 5 ? "1px solid rgba(255,255,255,0.1)" : "none",
              }}
            >
               <div style={{ minWidth: "150px", fontWeight: "bold", color: "#2563eb", fontSize: "1.1rem" }}>
                   {item.step.split(":")[0]}
               </div>
               <div>
                   <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "0.5rem" }}>{item.step.split(":")[1]}</h3>
                   <p style={{ color: "rgb(189, 189, 193)", lineHeight: "1.6" }}>{item.desc}</p>
               </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
