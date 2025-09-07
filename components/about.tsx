import { Card, CardContent } from "@/components/ui/card"
import { Code, Users, Video, Mic } from "lucide-react"

export function About() {
  const interests = [
    { icon: Code, title: "Problem Solving", description: "Love tackling complex challenges" },
    { icon: Mic, title: "Spoken Word", description: "Expressing creativity through words" },
    { icon: Users, title: "Stand-up Comedy", description: "Making people laugh and think" },
    { icon: Video, title: "Content Creation", description: "Bringing stories to life" },
  ]

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About <span className="text-primary">teckGenius</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            A passionate technology enthusiast who believes in the power of innovation and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I am a technology enthusiast and a trustworthy, professional team player who takes great satisfaction in
                my work. My strongest assets include interpersonal relations, communication, presentation abilities,
                dedication, goal-setting, originality, and the ability to follow through.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                In an ever-challenging global business world, I am a natural goal achiever with a voracious desire for
                acquiring new skills and reaching new heights. From training the next generation of developers to
                creating engaging video content, I bring passion to everything I do.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">Education & Growth</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-4">
                  <div className="font-semibold text-foreground">BSc. Information & Communication Technology</div>
                  <div className="text-muted-foreground">January 2023 – Present</div>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <div className="font-semibold text-foreground">Diploma in Software Engineering</div>
                  <div className="text-muted-foreground">NIIT, Ghana • May 2019</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground text-center lg:text-left">What Drives Me</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {interests.map((interest, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center space-y-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-colors">
                      <interest.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground">{interest.title}</h4>
                    <p className="text-sm text-muted-foreground">{interest.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-primary mb-2">Fun Fact</h4>
                <p className="text-muted-foreground">
                  When I'm not coding, you might find me crafting the perfect punchline for my next stand-up routine or
                  diving deep into a fascinating podcast from my mentors!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
