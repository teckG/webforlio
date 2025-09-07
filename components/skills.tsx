"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("technical")

  const skillCategories = {
    technical: {
      title: "Technical Skills",
      skills: [
        { name: "JavaScript", level: 90, description: "ES6+, Node.js, React" },
        { name: "Python", level: 85, description: "Django, Flask, Data Analysis" },
        { name: "Java", level: 80, description: "Spring Boot, Android Development" },
        { name: "HTML5 & CSS", level: 95, description: "Responsive Design, Animations" },
        { name: "Database Management", level: 85, description: "SQL Server, MySQL, MongoDB" },
        { name: "Web Development", level: 90, description: "Full-stack Development" },
      ],
    },
    tools: {
      title: "Tools & Technologies",
      skills: [
        { name: "Bootstrap", level: 90, description: "Responsive Framework" },
        { name: "Microsoft Office Suite", level: 95, description: "Excel, Access, PowerPoint" },
        { name: "Video Editing", level: 85, description: "Professional Content Creation" },
        { name: "Graphic Design", level: 75, description: "Visual Communication" },
        { name: "Digital Marketing", level: 80, description: "SEO, Social Media" },
        { name: "Analytics", level: 85, description: "Data-driven Insights" },
      ],
    },
    soft: {
      title: "Soft Skills",
      skills: [
        { name: "Communication", level: 95, description: "Public Speaking, Training" },
        { name: "Leadership", level: 90, description: "Team Management, Mentoring" },
        { name: "Problem Solving", level: 95, description: "Creative Solutions" },
        { name: "Project Planning", level: 85, description: "Agile Methodologies" },
        { name: "Team Collaboration", level: 90, description: "Cross-functional Teams" },
        { name: "Conflict Management", level: 85, description: "Negotiation Skills" },
      ],
    },
  }

  const categories = Object.keys(skillCategories) as Array<keyof typeof skillCategories>

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            A comprehensive toolkit built through years of hands-on experience and continuous learning
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {skillCategories[category].title}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>{skill.name}</span>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {skill.level}%
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Progress value={skill.level} className="h-2" />
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Always Learning</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, methodologies, and
                tools to stay at the forefront of innovation. My commitment to continuous learning ensures that I can
                tackle any challenge with the latest and most effective solutions.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
