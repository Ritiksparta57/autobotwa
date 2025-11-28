import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface PricingCardProps {
  plan: string
  price: number
  description: string
  features: string[]
  highlighted?: boolean
  ctaText: string
}

function PricingCard({ plan, price, description, features, highlighted, ctaText }: PricingCardProps) {
  return (
    <div
      className={`relative rounded-xl border transition-all duration-300 ${
        highlighted
          ? "bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30 shadow-lg scale-105"
          : "bg-card border-border hover:border-primary/20"
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div className="p-6 sm:p-8">
        <h3 className="text-2xl font-bold text-foreground mb-2">{plan}</h3>
        <p className="text-muted-foreground text-sm mb-6">{description}</p>

        <div className="mb-6">
          <span className="text-4xl font-bold text-foreground">${price}</span>
          <span className="text-muted-foreground ml-2">/month</span>
        </div>

        <Button
          className={`w-full mb-8 ${
            highlighted
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/90"
          }`}
          size="lg"
        >
          {ctaText}
        </Button>

        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Pricing() {
  const plans = [
    {
      plan: "Starter",
      price: 49,
      description: "Perfect for getting started",
      features: [
        "Up to 10 AI models",
        "100K API calls/month",
        "Basic analytics",
        "Community support",
        "Standard uptime SLA",
      ],
      ctaText: "Start Free Trial",
    },
    {
      plan: "Pro",
      price: 199,
      description: "For growing teams",
      features: [
        "Unlimited AI models",
        "10M API calls/month",
        "Advanced analytics",
        "Priority support",
        "99.9% uptime SLA",
        "Custom integrations",
      ],
      highlighted: true,
      ctaText: "Get Started",
    },
    {
      plan: "Enterprise",
      price: 499,
      description: "Custom solutions for large teams",
      features: [
        "Unlimited everything",
        "Unlimited API calls",
        "Custom analytics",
        "24/7 dedicated support",
        "99.99% uptime SLA",
        "Advanced security features",
        "Custom infrastructure",
      ],
      ctaText: "Contact Sales",
    },
  ]

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-balance text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your team. Always room to scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
