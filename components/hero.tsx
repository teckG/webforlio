"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function Hero() {
  const [displayText, setDisplayText] = useState("")
  const fullText = "Hi, I'm Cephas Tsatsu"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary/30 to-accent/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-balance">
              <span className="text-foreground">{displayText}</span>
              <span className="animate-pulse text-primary">|</span>
            </h1>
            <div className="text-xl sm:text-2xl lg:text-3xl text-primary font-semibold">
              Software Engineer & Creative Problem Solver
            </div>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Welcome to <span className="text-primary font-semibold">teckGenius</span> - where technology meets
              creativity. I build innovative solutions, train the next generation of developers, and bring ideas to life
              through code.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
              onClick={scrollToAbout}
            >
              Explore My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <div className="flex gap-4">
            <Link href='https://www.github.com/teckG'>
              <Button variant="outline" size="icon" className="h-12 w-12 bg-transparent">
                <Github className="h-6 w-6" />
              </Button>
            </Link>
            <Link href='https://www.linkedin.com/in/cephas-tsatsu-601b0a236'>
              <Button variant="outline" size="icon" className="h-12 w-12 bg-transparent">
                <Linkedin className="h-6 w-6" />
              </Button>
              </Link>
               <Link href='https://mailto:tsatsuc@gmail.com'>
              <Button variant="outline" size="icon" className="h-12 w-12 bg-transparent">
                <Mail className="h-6 w-6" />
              </Button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Students Trained</div>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">10+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
