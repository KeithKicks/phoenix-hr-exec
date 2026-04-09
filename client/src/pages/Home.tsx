import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("phoenix-theme") || "light";
    setTheme(saved as "light" | "dark");
    document.documentElement.classList.toggle("dark", saved === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("phoenix-theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqItems = [
    {
      q: "What is our liability position if we refer a leader to this program?",
      a: "Phoenix Executive Reset is a voluntary private coaching engagement, not a clinical program. The organization's referral does not create a formal duty of care obligation beyond what already exists. The engagement is not documented in the leader's HR record unless specifically requested. We recommend organizations consult their employment counsel on their specific situation, but the voluntary and private nature of this engagement is specifically designed to preserve the organization's discretion and minimize formal liability exposure.",
    },
    {
      q: "What if the leader refuses the referral or is not willing to participate?",
      a: "The program is always voluntary. If the leader declines, the initial consultation with HR can still be useful. The principal can advise on how to have the conversation, what the referral pathway looks like, and how to position the option in a way the leader is most likely to be receptive to. In some cases, the leader will engage directly after the initial conversation once they understand the private and non-clinical nature of what is being offered.",
    },
    {
      q: "Does the organization receive any reporting or progress updates?",
      a: "Only with the leader's explicit written consent. The default position is that all engagement information is private between the principal and the leader. At Day 31, a non-clinical completion summary can be provided to HR if the leader consents. Some organizations request a brief mid-point confirmation of engagement, which is also available with the leader's consent. The default at every stage is privacy.",
    },
    {
      q: "Can the organization fund the engagement confidentially?",
      a: "Yes. Payment arrangements can be structured to maintain discretion for both the organization and the individual. The organization's name does not appear on engagement documentation unless specifically requested. Payment method and invoicing are discussed on the initial consultation to ensure they fit the organization's procurement and discretion requirements.",
    },
    {
      q: "How is this different from an EAP program or clinical referral?",
      a: "EAP programs are designed for a different level of need. They are primarily short-term counseling referrals with limited accountability, no structured daily operating system, and no follow-through mechanism. Clinical referral requires the leader to step out of role, creates formal clinical records, and is calibrated for acute crisis. Phoenix Executive Reset is a structured private intensive for a leader who is still functioning, not in acute crisis, but at a risk level that requires serious intervention.",
    },
    {
      q: "What happens if the leader needs a higher level of clinical care during the engagement?",
      a: "The principal will identify this during the diagnostic assessment and will refer the leader to appropriate clinical resources before the engagement begins. If this need becomes apparent during the engagement, the principal will discuss it directly with the leader and facilitate an appropriate referral. The program is not designed to substitute for clinical care when clinical care is what is required.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex items-center justify-between gap-2 py-2 md:py-4">
          <div className="flex items-center gap-1 md:gap-2 min-w-0">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663403480741/XK8BuF8bKskDQGZWW8NazM/bottled-phoenix-logo_2b8e9a1f.png"
              alt="The Bottled Phoenix"
              className="h-6 md:h-8 w-auto flex-shrink-0"
            />
            <div className="hidden sm:block text-sm md:text-lg font-bold text-primary truncate">The Bottled Phoenix</div>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <span className="hidden md:inline text-xs uppercase tracking-wide text-muted-foreground">
              HR & Corporate Referrals
            </span>
            <button
              onClick={toggleTheme}
              className="rounded-lg border border-border p-1.5 md:p-2 hover:bg-secondary transition-colors flex-shrink-0"
              aria-label="Toggle theme"
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
            <Button variant="default" size="sm" className="text-xs md:text-sm">
              <span className="hidden sm:inline">Request Consultation</span>
              <span className="sm:hidden">Consult</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-card py-20 md:py-32">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-transparent" />
        </div>
        <div className="container relative">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663403480741/XK8BuF8bKskDQGZWW8NazM/bottled-phoenix-logo_2b8e9a1f.png"
              alt="Phoenix"
              className="h-4 w-auto"
            />
            <span className="text-xs uppercase tracking-wider text-muted-foreground">
              Confidential | Corporate Referral Program
            </span>
          </div>

          <h1 className="mb-6 max-w-3xl text-4xl md:text-5xl font-bold leading-tight">
            The Executive You Can't Afford to Lose Is Already at{" "}
            <span className="text-primary">Risk.</span>
          </h1>

          <p className="mb-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Phoenix Executive Reset is a private 31-day performance restoration program for organizations that have identified a high-value leader whose alcohol-related performance risk, operational discipline erosion, or personal volatility is beginning to affect their effectiveness, before it becomes a visible, costly problem.
          </p>

          <div className="mb-8 flex flex-wrap gap-2">
            {["Fully Confidential", "No Disruption to Role", "31-Day Structured Engagement", "Direct Principal Delivery"].map(
              (pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-border bg-background px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground"
                >
                  {pill}
                </span>
              )
            )}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button size="lg" className="w-full sm:w-auto">
              Request a Confidential Consultation →
            </Button>
            <span className="text-sm italic text-muted-foreground">
              For HR, CPO, CHRO, and CEO enquiries
            </span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="border-b border-border bg-background py-16 md:py-24">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <span className="text-xs uppercase tracking-wider text-primary">
                The Business Case
              </span>
              <h2 className="mb-4 mt-2 text-3xl md:text-4xl font-bold">
                Leadership Risk Is the Most Expensive Risk You Carry.
              </h2>
              <div className="mb-6 h-1 w-12 bg-primary" />

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The cost of losing a senior executive through performance failure, forced departure, or public incident is rarely just the replacement cost. It is the disruption to strategy, the institutional knowledge that walks out the door, the team instability that follows, and the reputational exposure that can accompany a high-profile exit under difficult circumstances.
                </p>
                <p>
                  Most organizations in this position are operating with limited options. Formal HR process is a blunt instrument. EAP programs are designed for a different level of problem. Rehab or clinical intervention requires the leader to step out of role, which creates its own risk.
                </p>
                <p>
                  Phoenix Executive Reset is built specifically for this gap: a private, structured, 31-day engagement that restores a high-value leader's performance and discipline, while they remain fully in role, and the organization's exposure remains zero.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {[
                {
                  stat: "$450K–$1M+",
                  desc: "The typical cost of replacing a senior executive, before disruption, knowledge loss, or team instability is factored in. A $300K leader costs $450K–$600K to replace. A $500K leader costs significantly more.",
                },
                {
                  stat: "31 Days",
                  desc: "The Phoenix Executive Reset engagement window. The leader stays in role throughout. No clinical records. No formal documentation unless specifically required.",
                },
                {
                  stat: "$8,500",
                  desc: "The investment in the Reset engagement. A fraction of the cost of executive replacement, disciplinary process, or reputational incident management.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-border bg-card p-6 shadow-sm"
                >
                  <div className="mb-2 text-2xl md:text-3xl font-bold text-foreground">
                    {item.stat}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Signals Section */}
      <section className="border-b border-border bg-card py-16 md:py-24">
        <div className="container">
          <span className="text-xs uppercase tracking-wider text-primary">
            What Organizations Notice
          </span>
          <h2 className="mb-4 mt-2 text-3xl md:text-4xl font-bold">
            The Signs That Bring HR to This Conversation.
          </h2>
          <div className="mb-8 h-1 w-12 bg-primary" />

          <p className="mb-12 max-w-2xl text-muted-foreground leading-relaxed">
            The leaders who benefit most from this program are rarely in visible crisis. They are still performing. Still in the room. But the signals are there, and HR, CPOs, and senior leaders often see them clearly before the individual is ready to acknowledge them.
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                num: "01",
                title: "Performance Degradation",
                desc: "Declining output, missed deadlines, reduced strategic engagement, or withdrawal from leadership responsibilities that were previously core to their role.",
              },
              {
                num: "02",
                title: "Behavioral Shift",
                desc: "Increased irritability, shorter patience with direct reports, harder to reach, more reactive in decision-making. The emotional regulation that made them effective is visibly degraded.",
              },
              {
                num: "03",
                title: "After-Hours Incidents",
                desc: "Corporate events, client dinners, or travel situations where alcohol use has been noticed, not yet an incident, but enough that it has been flagged internally and is being monitored.",
              },
              {
                num: "04",
                title: "Confidential Disclosures",
                desc: "The individual has disclosed privately to a trusted colleague, to HR, or to a direct superior that they are aware something is wrong and that they want to address it without formal process.",
              },
              {
                num: "05",
                title: "Succession Risk",
                desc: "A critical role (founder, CEO, COO, division head) where instability in the individual creates instability in the organization. The cost of losing this person is disproportionately high.",
              },
              {
                num: "06",
                title: "Self-Referred Interest",
                desc: "The leader themselves has reached out internally and indicated interest in a private solution, but does not want to use EAP, does not want clinical referral, and needs something that fits how they operate.",
              },
            ].map((signal, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-background p-6 shadow-sm hover:border-primary transition-colors"
              >
                <div className="mb-3 flex h-8 w-8 items-center justify-center rounded border border-border bg-primary/10 text-xs font-bold text-primary">
                  {signal.num}
                </div>
                <h3 className="mb-2 font-bold text-foreground">{signal.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {signal.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-lg border-l-4 border-primary bg-foreground/5 p-6">
            <p className="italic text-muted-foreground">
              "The leaders who come through this program are not the leaders who have already failed publicly. They are the leaders who are still performing and who know, privately, that something has to change before it costs more than it already has."
            </p>
          </div>
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section className="border-b border-border bg-card py-16 md:py-24">
        <div className="container">
          <span className="text-xs uppercase tracking-wider text-primary">
            The Comparison
          </span>
          <h2 className="mb-4 mt-2 text-3xl md:text-4xl font-bold">
            Inaction Is Also a Decision.
          </h2>
          <div className="mb-8 h-1 w-12 bg-primary" />

          <div className="mb-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-background p-8">
              <h3 className="mb-6 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Cost of Inaction
              </h3>
              <ul className="space-y-3">
                {[
                  "Continued performance degradation, increasing drag on team and output",
                  "Risk of a visible incident at a client event, board meeting, or on travel",
                  "Formal HR process: legal exposure, documentation, potential tribunal",
                  "Executive replacement: 1.5 to 2× annual salary plus recruitment, onboarding, knowledge loss",
                  "Team disruption following an unplanned or high-profile departure",
                  "Reputational risk to the organization if the exit becomes public",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-primary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-primary bg-background p-8">
              <h3 className="mb-6 text-xs uppercase tracking-wider text-primary font-semibold">
                Phoenix Executive Reset
              </h3>
              <ul className="space-y-3">
                {[
                  "Leader restores discipline and performance over 31 days, stays in role throughout",
                  "No formal documentation unless specifically requested by the organization",
                  "No HR process triggered, engagement is private between principal and leader",
                  "$8,500 total investment, a fraction of the cost of any alternative outcome",
                  "Succession risk neutralized, the individual continues in role with improved stability",
                  "Organization's exposure remains zero: complete discretion throughout",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-foreground">
                    <span className="text-primary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-background p-6">
            <p className="text-muted-foreground leading-relaxed">
              The question is not whether to act. It is whether to act now, privately, with a structured solution that protects the leader and the organization, or later, when the cost is higher, the options are fewer, and the discretion that is currently possible is no longer guaranteed.{" "}
              <strong className="text-foreground">
                Phoenix Executive Reset is built for the window before that window closes.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* Programme Section */}
      <section className="border-b border-border bg-background py-16 md:py-24">
        <div className="container">
          <span className="text-xs uppercase tracking-wider text-primary">
            The Program
          </span>
          <h2 className="mb-4 mt-2 text-3xl md:text-4xl font-bold">
            How the Engagement Works.
          </h2>
          <div className="mb-8 h-1 w-12 bg-primary" />

          <p className="mb-12 max-w-2xl text-muted-foreground leading-relaxed">
            The referral and enrollment process is designed to be low-friction for the organization and zero-disruption for the leader's role. From initial consultation to Day 31 completion, the entire engagement is managed privately between the principal and the individual.
          </p>

          <div className="mb-12 space-y-0 border border-border rounded-lg overflow-hidden">
            {[
              {
                num: "01",
                title: "Confidential HR Consultation",
                desc: "A private 30–45 minute call between the referring HR professional, CPO, or CEO and the principal. The situation is discussed in confidence. No information is shared with the leader at this stage. The principal assesses fit and provides a recommendation on whether the Reset is appropriate for the individual's situation.",
              },
              {
                num: "02",
                title: "Leader Introduction",
                desc: "The organization introduces the program to the leader, either through HR or through a trusted internal relationship. The leader is given the option to proceed independently. The engagement is always voluntary. The organization may cover the cost directly or the leader may self-fund, which is discussed on the initial consultation.",
              },
              {
                num: "03",
                title: "Private Diagnostic Assessment",
                desc: "The leader completes a confidential intake assessment and a private 60-minute diagnostic call with the principal. A written Risk and Reset Summary is delivered within 48 hours with a specific next-step recommendation. The organization receives no information from this stage unless the leader explicitly consents to a summary being shared.",
              },
              {
                num: "04",
                title: "31-Day Phoenix Executive Reset",
                desc: "The full engagement begins. The leader remains in role throughout. Coaching calls run via Zoom or phone outside of business hours or during protected windows. Daily accountability and scorecard run through secure communication channels. The organization sees no disruption to the leader's schedule or performance.",
              },
              {
                num: "05",
                title: "Completion and Continuation",
                desc: "At Day 31, the leader receives a written transition and continuation plan. If the organization wishes to receive a non-clinical summary of completion, this can be provided with the leader's explicit written consent. Optional continuation support is available through Phoenix Continuation ($1,500/month) for organizations that want ongoing accountability infrastructure in place.",
              },
            ].map((step, i) => (
              <div
                key={i}
                className={`grid grid-cols-[60px_1fr] gap-4 p-6 ${
                  i < 4 ? "border-b border-border" : ""
                } hover:bg-card transition-colors`}
              >
                <div className="flex items-start justify-center pt-1">
                  <div className="flex h-10 w-10 items-center justify-center rounded border border-border bg-primary/10 text-xs font-bold text-primary">
                    {step.num}
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 font-bold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            {[
              {
                day: "First 72 Hours",
                title: "Containment",
                desc: "Structure installed. Trigger map begins. Scorecard activated. Ambiguity removed. Immediate stabilization.",
              },
              {
                day: "Day 7",
                title: "Stabilization",
                desc: "Mental clarity improving. Follow-through strengthening. First signs of regained self-command and reduced private volatility.",
              },
              {
                day: "Day 14",
                title: "Visible Shift",
                desc: "Behavioral change becomes observable. Emotional steadiness more consistent. Pattern interrupted. Performance improving.",
              },
              {
                day: "Day 31",
                title: "Restored Stability",
                desc: "Functioning operating system. Measurable improvement in discipline and stability. Written continuation plan delivered.",
              },
            ].map((milestone, i) => (
              <div key={i} className="rounded-lg border border-border bg-card p-6">
                <div className="mb-2 text-xs uppercase tracking-wider text-primary font-semibold">
                  {milestone.day}
                </div>
                <h4 className="mb-3 font-bold text-foreground">{milestone.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {milestone.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discretion Section */}
      <section className="border-b border-border bg-card py-16 md:py-24">
        <div className="container">
          <span className="text-xs uppercase tracking-wider text-primary">
            Confidentiality
          </span>
          <h2 className="mb-4 mt-2 text-3xl md:text-4xl font-bold">
            What the Organization Is Guaranteed.
          </h2>
          <div className="mb-12 h-1 w-12 bg-primary" />

          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                label: "No Clinical Records",
                desc: "Phoenix Executive Reset is a private coaching and accountability engagement, not a clinical or medical program. No clinical records are created. No referrals to clinical databases. The engagement leaves no formal paper trail unless explicitly requested.",
              },
              {
                label: "Zero Organizational Exposure",
                desc: "The engagement is private between the principal and the individual. The organization's referral is not documented unless specifically requested. The leader's participation is entirely confidential.",
              },
              {
                label: "No Role Disruption",
                desc: "All coaching calls and accountability touchpoints are structured to occur outside of standard business hours or within protected personal time. The leader's calendar, availability, and public performance remain unaffected throughout the engagement.",
              },
              {
                label: "Leader-Controlled Disclosure",
                desc: "The individual decides what, if anything, is shared with the organization. If a completion summary is requested, it is provided only with the leader's explicit written consent. HR visibility into the program is determined entirely by the leader.",
              },
              {
                label: "Voluntary Participation",
                desc: "The Phoenix Executive Reset is always entered voluntarily. The organization may refer and fund the engagement, but the decision to proceed belongs to the individual. This structure protects both the leader's dignity and the organization's liability position.",
              },
              {
                label: "Principal-Led Confidentiality",
                desc: "All client information is held by the principal personally. There is no internal team, no case management platform accessible to third parties, and no information shared with partner organizations. The engagement stays between the principal and the leader.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-lg border border-border bg-background p-6 hover:border-primary transition-colors group"
              >
                <h3 className="mb-3 font-bold text-foreground group-hover:text-primary transition-colors">
                  {item.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="border-b border-border bg-background py-16 md:py-24">
        <div className="container">
          <span className="text-xs uppercase tracking-wider text-primary">
            Outcomes
          </span>
          <h2 className="mb-4 mt-2 text-3xl md:text-4xl font-bold">
            What the Organization Gets From This Engagement.
          </h2>
          <div className="mb-12 h-1 w-12 bg-primary" />

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                For the Individual
              </h3>
              <ul className="space-y-3">
                {[
                  "Restored alcohol discipline and measurable behavioral control",
                  "A functioning daily operating system that holds under professional pressure",
                  "Improved emotional regulation and leadership consistency",
                  "Regained self-trust and private stability",
                  "A written continuation strategy at Day 31",
                  "Total privacy and dignity throughout the process",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-muted-foreground">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-xs uppercase tracking-wider text-primary font-semibold">
                For the Organization
              </h3>
              <ul className="space-y-3">
                {[
                  "Leadership continuity: a high-value asset retained and restored",
                  "Succession risk neutralized without formal HR process",
                  "Zero disruption to the leader's role or responsibilities",
                  "No clinical records, no formal documentation, no organizational exposure",
                  "Improved team performance as leader's stability returns",
                  "A private, credible solution to present to a leader who has self-identified risk",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm text-foreground">
                    <span className="text-primary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Investment Section */}
      <section className="border-b border-border bg-card py-16 md:py-24">
        <div className="container">
          <span className="text-xs uppercase tracking-wider text-primary">
            The Investment
          </span>
          <h2 className="mb-4 mt-2 text-3xl md:text-4xl font-bold">
            What the Engagement Costs and What It Contains.
          </h2>
          <div className="mb-8 h-1 w-12 bg-primary" />

          <p className="mb-12 max-w-2xl text-muted-foreground leading-relaxed">
            The full Phoenix Executive Reset engagement is $8,500. In the context of executive retention, succession planning, and the cost of the alternatives, it is consistently the lowest-cost intervention available for this level of risk.
          </p>

          <div className="mb-8 rounded-lg border border-border bg-background p-8">
            <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-baseline">
              <div className="text-4xl md:text-5xl font-bold text-foreground">
                $8,500
              </div>
              <span className="text-sm italic text-muted-foreground">
                Private | 31-day engagement | Leader stays in role
              </span>
            </div>

            <h3 className="mb-6 text-xs uppercase tracking-wider text-primary font-semibold">
              What the engagement includes
            </h3>

            <div className="grid gap-3 md:grid-cols-2">
              {[
                "Executive Reset Diagnostic & Action Map",
                "Daily Phoenix OS scorecard",
                "Trigger mapping and interruption protocol",
                "Recovery and performance standards",
                "2 private coaching calls per week",
                "Weekday secure communication accountability",
                "Personal and professional alignment protocols",
                "Travel protocol",
                "Weekly recalibration",
                "Written 31-day transition plan",
              ].map((item, i) => (
                <div key={i} className="flex gap-3 text-sm text-foreground">
                  <span className="text-primary">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 border-t border-border pt-6 text-sm italic text-muted-foreground">
              The engagement may be funded directly by the organization or by the individual. Payment arrangements are discussed on the initial consultation call. The organization's name does not appear on any engagement documentation unless specifically requested.
            </p>
          </div>

          <div className="mb-8 rounded-lg border border-border bg-background p-6">
            <h3 className="mb-2 font-bold text-foreground">
              Concierge Tier: $12,500
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              For organizations requiring deeper customization, expanded direct access, or a higher level of involvement from the principal throughout the engagement. Concierge tier clients receive enhanced check-in frequency, priority scheduling, and a more tailored daily structure built around the leader's specific role demands and travel schedule. Available by arrangement, discussed on the initial consultation.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button size="lg" className="w-full sm:w-auto">
              Request a Confidential Consultation →
            </Button>
            <span className="text-sm italic text-muted-foreground">
              For HR, CPO, CHRO, and CEO enquiries. 30–45 minutes. Private. No obligation.
            </span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="border-b border-border bg-background py-16 md:py-24">
        <div className="container">
          <span className="text-xs uppercase tracking-wider text-primary">
            Common Questions
          </span>
          <h2 className="mb-12 mt-2 text-3xl md:text-4xl font-bold">
            What HR Professionals Ask.
          </h2>

          <div className="space-y-2 border-t border-border">
            {faqItems.map((item, i) => (
              <div key={i} className="border-b border-border">
                <button
                  onClick={() => toggleFaq(i)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left hover:text-primary transition-colors"
                >
                  <span className="font-medium text-foreground">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-muted-foreground transition-transform ${
                      expandedFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === i && (
                  <div className="pb-4 text-sm text-muted-foreground leading-relaxed">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden bg-card py-20 md:py-32">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-transparent" />
        </div>
        <div className="container relative text-center">
          <span className="text-xs uppercase tracking-wider text-primary">
            Get in Touch
          </span>
          <h2 className="mb-6 mt-4 text-3xl md:text-4xl font-bold">
            A Private Conversation. No Obligation. Complete Discretion.
          </h2>

          <p className="mb-8 mx-auto max-w-2xl text-muted-foreground leading-relaxed">
            The initial consultation is 30 to 45 minutes. We discuss the situation, the individual, and whether this engagement is the right fit. Nothing discussed on that call leaves the conversation without your consent.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Button size="lg" className="w-full sm:w-auto">
              Request a Confidential Consultation →
            </Button>
            <span className="text-sm italic text-muted-foreground">
              For HR, CPO, CHRO, and CEO enquiries | Fully confidential
            </span>
          </div>

          <div className="my-8 h-px bg-border" />

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Keith Allen Schuh, Principal | The Bottled Phoenix
            </p>
            <p className="text-xs text-muted-foreground">
              Phoenix Executive Reset | Private Executive Performance Restoration
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-foreground/5 py-8">
        <div className="container">
          <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663403480741/XK8BuF8bKskDQGZWW8NazM/bottled-phoenix-logo_2b8e9a1f.png"
                alt="The Bottled Phoenix"
                className="h-6 w-auto"
              />
              <div className="text-lg font-bold text-primary">The Bottled Phoenix</div>
            </div>
            <div className="flex gap-6">
              <a href="#" className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
                Assessment Page
              </a>
              <a href="#" className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
                Individual Enrollment
              </a>
            </div>
          </div>
          <div className="border-t border-border pt-4">
            <p className="text-xs text-muted-foreground leading-relaxed">
              Phoenix Executive Reset is a private coaching and accountability engagement. It is not a licensed clinical treatment, medical program, or substitute for clinical care when clinically necessary. This page is intended for HR professionals, CPOs, CHROs, and senior organizational leaders making referral decisions on behalf of their organizations.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
