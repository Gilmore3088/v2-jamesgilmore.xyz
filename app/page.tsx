import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Github, Linkedin, Twitter, Mail, Calendar, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'James Gilmore - Developer & Technology Enthusiast',
  description: 'Professional developer and technology enthusiast with a passion for building meaningful solutions.',
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
              Hi, I&apos;m <span className="text-primary">James Gilmore</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Professional developer and technology enthusiast with a passion for building 
              meaningful solutions that make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/projects">
                  View My Work
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Navigation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  About Me
                </CardTitle>
                <CardDescription>
                  Learn about my background, skills, and professional journey.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/about">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Resume
                </CardTitle>
                <CardDescription>
                  Download my resume and view my professional experience.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/resume">View Resume</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Blog
                </CardTitle>
                <CardDescription>
                  Read my thoughts on development, technology, and software engineering.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full">
                  <Link href="/blog">Read Blog</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Recent Blog Posts</h2>
            <p className="text-muted-foreground mt-2">
              Latest thoughts and insights on development and technology
            </p>
          </div>
          
          <div className="space-y-6">
            {/* Blog post cards will be populated from database */}
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>August 31, 2025</span>
                  <Clock className="w-4 h-4 ml-4" />
                  <span>5 min read</span>
                </div>
                <CardTitle className="group-hover:text-primary transition-colors text-xl">
                  Building a Modern Personal Website with Next.js
                </CardTitle>
                <CardDescription className="text-base">
                  A comprehensive guide to building a professional personal website using Next.js 14, 
                  shadcn/ui, and modern web technologies.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Next.js</Badge>
                    <Badge variant="secondary">React</Badge>
                    <Badge variant="secondary">TypeScript</Badge>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/blog">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground mt-2">
              A selection of my recent work and contributions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project cards will be populated from database */}
            <Card className="group hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                <span className="text-muted-foreground">Project Screenshot</span>
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Personal Website v2
                </CardTitle>
                <CardDescription>
                  A modern, responsive personal website built with Next.js 14 and shadcn/ui.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                </div>
                <Button asChild className="w-full">
                  <Link href="/projects">View Project</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
                <span className="text-muted-foreground">Project Screenshot</span>
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  Task Management App
                </CardTitle>
                <CardDescription>
                  A full-stack task management application with real-time updates.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                </div>
                <Button asChild className="w-full">
                  <Link href="/projects">View Project</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-8">Let&apos;s Connect</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new opportunities, interesting projects, 
            or just connecting with fellow developers.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-5 h-5 mr-2" />
                Twitter
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="mailto:james@jamesgilmore.xyz">
                <Mail className="w-5 h-5 mr-2" />
                Email
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
