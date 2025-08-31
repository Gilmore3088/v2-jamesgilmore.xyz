import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github, Grid, List } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Projects - James Gilmore',
  description: 'Portfolio of projects and technical work by James Gilmore.',
}

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A collection of my technical projects, experiments, and contributions.
          </p>
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center">
          {/* View Toggle */}
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Grid className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="sm">
              <List className="w-4 h-4" />
            </Button>
          </div>

          {/* Filter */}
          <div className="flex gap-2">
            <Button variant="outline" size="sm">All</Button>
            <Button variant="outline" size="sm">Web Apps</Button>
            <Button variant="outline" size="sm">Mobile</Button>
            <Button variant="outline" size="sm">Open Source</Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project cards will be populated from database */}
          <Card className="group hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
              <span className="text-muted-foreground">Project Screenshot</span>
            </div>
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors">
                Project Name
              </CardTitle>
              <CardDescription>
                A brief description of the project and what it accomplishes.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">Next.js</Badge>
              </div>
              
              {/* Links */}
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* More project cards... */}
          <Card className="group hover:shadow-lg transition-shadow">
            <div className="aspect-video bg-muted rounded-t-lg flex items-center justify-center">
              <span className="text-muted-foreground">Project Screenshot</span>
            </div>
            <CardHeader>
              <CardTitle className="group-hover:text-primary transition-colors">
                Another Project
              </CardTitle>
              <CardDescription>
                Another project description showcasing different skills.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">Django</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
              </div>
              
              <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Demo
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline">Load More Projects</Button>
        </div>
      </div>
    </div>
  )
}
