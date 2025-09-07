"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Play } from "lucide-react"
import { useState } from "react"

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      title: "iWedGH Platform",
      category: "web",
      description: "Wedding planning platform connecting couples with vendors and services across Ghana.",
      image: "/wedding-platform-website-interface.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "https://iwedgh.com",
      featured: true,
    },
    {
      title: "Educational Training Portal",
      category: "web",
      description: "Comprehensive learning management system for technical training programs.",
      image: "/educational-learning-management-system-dashboard.jpg",
      technologies: ["JavaScript", "PHP", "MySQL", "Bootstrap"],
      featured: true,
    },
    {
      title: "Brand Promotional Videos",
      category: "video",
      description: "Series of engaging promotional videos for Oseiloopy Media clients.",
      image: "/video-editing-timeline-professional-setup.jpg",
      technologies: ["Adobe Premiere", "After Effects", "Motion Graphics"],
      featured: false,
    },
    {
      title: "Community Education App",
      category: "mobile",
      description: "Mobile application supporting non-formal education initiatives in rural communities.",
      image: "/mobile-education-app-interface-community-learning.jpg",
      technologies: ["Java", "Android Studio", "SQLite"],
      featured: false,
    },
    {
      title: "StepTek Solutions",
      category: "web",
      description: "Custom software solutions developed during volunteer work at StepTek.",
      image: "/business-software-dashboard-analytics.jpg",
      technologies: ["Python", "Django", "PostgreSQL", "JavaScript"],
      githubUrl: "https://github.com",
      featured: false,
    },
    {
      title: "Training Content Library",
      category: "content",
      description: "Comprehensive digital library of programming and web development training materials.",
      image: "/digital-library-training-materials-coding-tutorial.jpg",
      technologies: ["Content Creation", "Curriculum Design", "Video Production"],
      featured: true,
    },
  ]

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "video", label: "Video Content" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "content", label: "Content Creation" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            A showcase of projects that demonstrate technical expertise and creative problem-solving
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeFilter === filter.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                project.featured ? "ring-2 ring-primary/20" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {project.featured && (
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">Featured</Badge>
                )}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                  {project.liveUrl && (
                    <Button size="sm" variant="secondary" className="bg-white/90 text-black hover:bg-white">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button size="sm" variant="secondary" className="bg-white/90 text-black hover:bg-white">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                  )}
                  {project.category === "video" && (
                    <Button size="sm" variant="secondary" className="bg-white/90 text-black hover:bg-white">
                      <Play className="h-4 w-4 mr-1" />
                      Watch
                    </Button>
                  )}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">{project.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Want to See More?</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                These are just a few highlights from my portfolio. I'm always working on new projects and exploring
                innovative solutions. Let's connect to discuss how we can collaborate on your next big idea!
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
