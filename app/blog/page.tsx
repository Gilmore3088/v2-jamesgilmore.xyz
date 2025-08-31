import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Search, Calendar, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - James Gilmore',
  description: 'Technical writing and thoughts on development, technology, and software engineering.',
}

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts on development, technology, and building better software.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search posts..."
              className="pl-10"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            <Button variant="default" size="sm">All</Button>
            <Button variant="outline" size="sm">Web Development</Button>
            <Button variant="outline" size="sm">React</Button>
            <Button variant="outline" size="sm">TypeScript</Button>
            <Button variant="outline" size="sm">Performance</Button>
          </div>
        </div>

        {/* Blog Posts */}
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
                shadcn/ui, and modern web technologies. Learn about the architecture, design decisions, 
                and implementation details.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                </div>
                <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Calendar className="w-4 h-4" />
                <span>August 25, 2025</span>
                <Clock className="w-4 h-4 ml-4" />
                <span>8 min read</span>
              </div>
              <CardTitle className="group-hover:text-primary transition-colors text-xl">
                Optimizing React Performance: A Deep Dive
              </CardTitle>
              <CardDescription className="text-base">
                Explore advanced techniques for optimizing React applications, including memoization, 
                code splitting, and performance monitoring. Real-world examples and benchmarks included.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Performance</Badge>
                  <Badge variant="secondary">Optimization</Badge>
                </div>
                <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <Calendar className="w-4 h-4" />
                <span>August 18, 2025</span>
                <Clock className="w-4 h-4 ml-4" />
                <span>6 min read</span>
              </div>
              <CardTitle className="group-hover:text-primary transition-colors text-xl">
                TypeScript Best Practices for Large Projects
              </CardTitle>
              <CardDescription className="text-base">
                Learn how to structure TypeScript projects for scalability, maintainability, and 
                developer experience. Covers project organization, type definitions, and common pitfalls.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Architecture</Badge>
                  <Badge variant="secondary">Best Practices</Badge>
                </div>
                <Button variant="ghost" size="sm" className="group-hover:translate-x-1 transition-transform">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pagination */}
        <div className="flex justify-center">
          <div className="flex gap-2">
            <Button variant="outline" disabled>Previous</Button>
            <Button variant="default">1</Button>
            <Button variant="outline">2</Button>
            <Button variant="outline">3</Button>
            <Button variant="outline">Next</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
