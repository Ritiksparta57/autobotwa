import type React from "react"
import { Zap, Shield, Gauge } from "lucide-react"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative bg-card border border-border rounded-xl p-6 sm:p-8 h-full">
        <div className="inline-block p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-4">{icon}</div>
        <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export function Features() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "Lightning Fast",
      description:
        "Deploy AI models in seconds, not days. Streamlined workflows accelerate your time-to-market dramatically.",
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Enterprise Secure",
      description: "Bank-grade security and compliance. Your data stays protected with SOC 2 certified infrastructure.",
    },
    {
      icon: <Gauge className="w-6 h-6 text-primary" />,
      title: "Infinitely Scalable",
      description: "Handle millions of requests with ease. Auto-scaling ensures consistent performance at any load.",
    },
  ]

  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-balance text-3xl sm:text-4xl font-bold text-foreground mb-4">Built for Modern Teams</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to succeed with AI, all in one platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
