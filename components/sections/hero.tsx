import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background via-background to-accent/5 px-4 py-20 sm:px-6 lg:px-8">
      {/* Decorative gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl opacity-30" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-balance text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
          Launch Your AI Dreams Faster
        </h1>

        <p className="text-balance text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Empower your team to build, deploy, and scale AI applications with unmatched speed and simplicity. LaunchPad
          AI is your complete platform for AI innovation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
            Get Started Free
          </Button>
        </div>
      </div>
    </section>
  )
}
