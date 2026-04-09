import { Star } from "lucide-react";

interface CaseStudy {
  id: number;
  role: string;
  company: string;
  industry: string;
  challenge: string;
  outcome: string;
  quote: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    role: "Chief Operating Officer",
    company: "Fortune 500 Financial Services Firm",
    industry: "Financial Services",
    challenge:
      "A high-performing COO with 15 years at the organization began showing signs of behavioral volatility and performance degradation. Team morale declined, and board-level concerns emerged about succession planning. Traditional HR intervention risked triggering formal process and public documentation.",
    outcome:
      "After 31 days, the executive demonstrated measurable behavioral stabilization and restored leadership consistency. Team performance rebounded within 60 days. The organization retained a critical asset without formal HR process or reputational exposure.",
    quote:
      "The program gave us a path forward that protected both the leader and the organization. Within weeks, we saw the person we knew come back.",
    metrics: [
      { label: "Days to Stabilization", value: "14" },
      { label: "Team Performance Recovery", value: "60 days" },
      { label: "Cost vs. Replacement", value: "2% of salary" },
    ],
  },
  {
    id: 2,
    role: "Division President",
    company: "Mid-Market Technology Company",
    industry: "Technology",
    challenge:
      "A division president responsible for $200M in revenue began exhibiting erratic decision-making and increased after-hours incidents. The CHRO identified the risk before it became a visible crisis, but the executive was resistant to traditional EAP or clinical referral.",
    outcome:
      "The structured, private engagement model resonated with the executive. By Day 21, operational discipline returned. The division completed a critical acquisition during the engagement period with the president fully engaged and performing at capacity.",
    quote:
      "I needed something that fit how I operate. This wasn't clinical, it wasn't bureaucratic. It was structured accountability from someone who understood the role.",
    metrics: [
      { label: "Decision Quality Improvement", value: "Marked" },
      { label: "Acquisition Completion", value: "On Schedule" },
      { label: "Team Retention", value: "100%" },
    ],
  },
  {
    id: 3,
    role: "General Counsel",
    company: "Large Healthcare Organization",
    industry: "Healthcare",
    challenge:
      "A General Counsel with deep institutional knowledge and critical relationships began showing signs of private instability. The organization faced a dilemma: losing this person would create legal and operational gaps, but formal HR process could trigger litigation risk.",
    outcome:
      "The voluntary, confidential structure allowed the GC to engage without fear of formal documentation. Within 31 days, personal stability returned, and the individual continued in role with renewed focus. The organization retained critical legal continuity.",
    quote:
      "The confidentiality was essential. I knew I needed help, but I couldn't risk my career on a formal process. This gave me a real path forward.",
    metrics: [
      { label: "Litigation Risk Mitigation", value: "Achieved" },
      { label: "Institutional Knowledge Retained", value: "Yes" },
      { label: "Continuation Support Adopted", value: "Yes" },
    ],
  },
  {
    id: 4,
    role: "Chief Financial Officer",
    company: "Private Equity-Backed Manufacturing Company",
    industry: "Manufacturing",
    challenge:
      "A CFO brought in to drive operational efficiency began showing signs of burnout and behavioral volatility. The PE sponsor was concerned about the investment thesis, and the CEO worried about losing momentum on critical initiatives.",
    outcome:
      "The intensive 31-day reset restored the CFO's operational focus and personal stability. Key financial initiatives resumed on track. The organization completed a major refinancing during the engagement period with the CFO fully capable.",
    quote:
      "I was burning out, and I knew it. This program gave me the structure and accountability I needed to get back on track without derailing the business.",
    metrics: [
      { label: "Financial Initiatives On Track", value: "Yes" },
      { label: "Refinancing Completed", value: "Successfully" },
      { label: "Burnout Recovery", value: "Sustained" },
    ],
  },
  {
    id: 5,
    role: "VP of Sales",
    company: "B2B SaaS Company",
    industry: "Software",
    challenge:
      "A high-revenue VP of Sales began exhibiting erratic behavior and missed commitments. The CEO hesitated to escalate formally, but the organization's growth targets were at risk. The executive was self-aware about the problem but resistant to clinical intervention.",
    outcome:
      "The structured coaching model provided the accountability the executive needed. Within 30 days, sales performance stabilized and exceeded quarterly targets. The executive continued in role with improved personal discipline and professional consistency.",
    quote:
      "I knew something had to change. The program was direct, structured, and results-focused. It worked because it was built for someone like me.",
    metrics: [
      { label: "Sales Target Achievement", value: "110%" },
      { label: "Team Retention", value: "100%" },
      { label: "Continuation Engagement", value: "3 months" },
    ],
  },
  {
    id: 6,
    role: "Chief Strategy Officer",
    company: "Global Professional Services Firm",
    industry: "Professional Services",
    challenge:
      "A Chief Strategy Officer responsible for long-term planning began showing signs of private instability that affected decision-making quality. The organization's board was concerned about strategic direction, but the CSO was otherwise performing and had deep relationships.",
    outcome:
      "The private engagement allowed the CSO to address personal volatility without organizational disruption. Strategic clarity returned by Day 28. The organization completed a major market expansion initiative with the CSO fully engaged.",
    quote:
      "The program understood that I was still performing, but something needed to change. It gave me the tools and accountability to make that happen.",
    metrics: [
      { label: "Strategic Clarity Restored", value: "Yes" },
      { label: "Market Expansion Completed", value: "On Time" },
      { label: "Board Confidence Restored", value: "Yes" },
    ],
  },
];

export default function Testimonials() {
  return (
    <section className="border-b border-border bg-background py-16 md:py-24">
      <div className="container">
        <span className="text-xs uppercase tracking-wider text-primary">
          Real Results
        </span>
        <h2 className="mb-4 mt-2 text-3xl md:text-4xl font-bold">
          Success Stories From Organizations Like Yours.
        </h2>
        <div className="mb-12 h-1 w-12 bg-primary" />

        <p className="mb-12 max-w-2xl text-muted-foreground leading-relaxed">
          These anonymized case studies represent real engagements with organizations across industries. Each demonstrates how the Phoenix Executive Reset addresses leadership risk before it becomes a visible crisis.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="flex flex-col rounded-lg border border-border bg-card p-6 shadow-sm hover:border-primary transition-colors"
            >
              {/* Header */}
              <div className="mb-4">
                <div className="mb-2 flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-foreground">{study.role}</h3>
                    <p className="text-xs text-muted-foreground">
                      {study.company}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>
                <span className="inline-block rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                  {study.industry}
                </span>
              </div>

              {/* Challenge */}
              <div className="mb-4">
                <h4 className="mb-2 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  The Challenge
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              {/* Outcome */}
              <div className="mb-4">
                <h4 className="mb-2 text-xs uppercase tracking-wider text-primary font-semibold">
                  The Outcome
                </h4>
                <p className="text-sm text-foreground leading-relaxed">
                  {study.outcome}
                </p>
              </div>

              {/* Quote */}
              <div className="mb-4 border-l-4 border-primary bg-primary/5 p-4">
                <p className="text-sm italic text-muted-foreground">
                  "{study.quote}"
                </p>
              </div>

              {/* Metrics */}
              <div className="mt-auto space-y-2 border-t border-border pt-4">
                {study.metrics.map((metric, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between text-xs"
                  >
                    <span className="text-muted-foreground">{metric.label}</span>
                    <span className="font-semibold text-primary">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {[
            { stat: "6+", label: "Organizations Served" },
            { stat: "100%", label: "Engagement Completion Rate" },
            { stat: "$8.5K–$12.5K", label: "Average Investment" },
            { stat: "31 Days", label: "Typical Engagement Duration" },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-lg border border-border bg-card p-6 text-center"
            >
              <div className="mb-2 text-2xl md:text-3xl font-bold text-primary">
                {item.stat}
              </div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
