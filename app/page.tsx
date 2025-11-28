import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Testimonials } from "@/components/sections/testimonials"
import { Pricing } from "@/components/sections/pricing"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  )
}
