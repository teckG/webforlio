import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Website Developer | Digital Marketer",
      company: "Data Link Institute",
      website: "www.datalink.edu.gh",
      period: "March 2025 – Current",
      location: "Hybrid",
      type: "Part-time",
      description:
        "Managing and maintaining wedding platform website, ensuring optimal performance and user experience.",
      skills: ["Web Administration", "Content Management", "User Experience"],
    },
    {
      title: "Website Admin",
      company: "iWedGH",
      website: "www.iwedgh.com",
      period: "January 2024 – Current",
      location: "Remote",
      type: "Full-time",
      description:
        "Managing and maintaining wedding platform website, ensuring optimal performance and user experience.",
      skills: ["Web Administration", "Content Management", "User Experience"],
    },
    {
      title: "Video Editor",
      company: "Oseiloopy Media",
      period: "July 2021 – Current",
      location: "Ghana",
      type: "Freelance",
      description:
        "Creating engaging video content, managing post-production workflows, and delivering high-quality multimedia projects.",
      skills: ["Video Editing", "Content Creation", "Post-Production"],
    },
    {
      title: "Trainer",
      company: "OpenLabs (Formerly NIIT Ghana)",
      period: "October 2021 – July 2023",
      location: "Ghana",
      type: "Full-time",
      description:
        "Developed training content, delivered technical training in programming and web development, and managed classroom environments effectively.",
      skills: ["Technical Training", "Curriculum Development", "Classroom Management"],
    },
    {
      title: "Facilitator",
      company: "Non-Formal Education Division Ghana",
      period: "July 2019 – August 2020",
      location: "Ghana",
      type: "NSS",
      description:
        "Facilitated educational programs, prepared learning materials, and supported community education initiatives.",
      skills: ["Education", "Community Outreach", "Program Facilitation"],
    },
    {
      title: "Teaching Assistant (TA)",
      company: "NIIT Ghana",
      period: "March 2019 – August 2019",
      location: "Ghana",
      type: "Part-time",
      description:
        "Provided support to trainers, tutored small groups, and maintained student records while evaluating progress.",
      skills: ["Mentoring", "Student Support", "Academic Assessment"],
    },
    {
      title: "Developer",
      company: "StepTek",
      period: "January 2019 – August 2019",
      location: "Ghana",
      type: "Volunteer",
      description:
        "Voluntarily contributed to software development projects, including documentation, programming, testing, and troubleshooting.",
      skills: ["Software Development", "Testing", "Implementation", "Documentation"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            A journey of growth, learning, and making meaningful contributions across diverse roles
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                      {exp.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                      {exp.website && <span className="text-primary">• {exp.website}</span>}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </Badge>
                    <Badge variant="secondary">{exp.type}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="bg-primary/5 text-primary border-primary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Key Accomplishments</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Successfully completed various projects within specified timeframes and quality standards
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Demonstrated leadership skills in guiding teams and effectively executing projects
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Received commendations for innovative problem-solving and attention to detail
                    </p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">Exhibited strong negotiation and conflict management skills</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Maintained a proactive approach to learning and personal development
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Demonstrated versatility across programming, database management, and digital marketing
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
