import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TestimonialCardProps {
  avatar: string
  initials: string
  name: string
  role: string
  feedback: string
}

function TestimonialCard({ avatar, initials, name, role, feedback }: TestimonialCardProps) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
      <div className="mb-4 flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 fill-primary" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">"{feedback}"</p>
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10">
          <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
          <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  const testimonials = [
    {
      avatar: "/abstract-geometric-shapes.png",
      initials: "SJ",
      name: "Sarah Johnson",
      role: "CEO, InnovateTech",
      feedback: "LaunchPad AI transformed how we deploy models. What used to take weeks now takes hours. Game-changer.",
    },
    {
      avatar: "/abstract-geometric-shapes.png",
      initials: "MC",
      name: "Michael Chen",
      role: "VP Engineering, DataFlow",
      feedback:
        "The simplicity and power combined is incredible. Our team productivity has increased by 40% since we switched.",
    },
    {
      avatar: "/diverse-group-collaborating.png",
      initials: "ER",
      name: "Emma Rodriguez",
      role: "Founder, AI Ventures",
      feedback: "Best investment in our infrastructure. The support team is fantastic and the platform just works.",
    },
  ]

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-balance text-3xl sm:text-4xl font-bold text-foreground mb-4">Loved by Teams Worldwide</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how leading companies are leveraging LaunchPad AI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
