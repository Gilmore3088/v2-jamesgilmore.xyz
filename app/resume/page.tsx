import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Download, Mail, MapPin, Phone, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Resume - James Gilmore',
  description: 'Professional resume and experience of James Gilmore.',
}

export default function ResumePage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-6">
        {/* Header with Download */}
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold tracking-tight">Resume</h1>
          <Button>
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </Button>
        </div>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <span>james@jamesgilmore.xyz</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-muted-foreground" />
              <span>[Phone number]</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-muted-foreground" />
              <span>Seattle, WA</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <span>jamesgilmore.xyz</span>
            </div>
          </CardContent>
        </Card>

        {/* Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Professional Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              [Professional summary will be managed through admin interface]
            </p>
          </CardContent>
        </Card>

        {/* Work Experience */}
        <Card>
          <CardHeader>
            <CardTitle>Work Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Experience items will be populated from database */}
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-lg">Senior Developer</h3>
                  <p className="text-muted-foreground">Company Name</p>
                </div>
                <span className="text-sm text-muted-foreground">2023 - Present</span>
              </div>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 ml-4">
                <li>Led development of key features</li>
                <li>Mentored junior developers</li>
                <li>Improved system performance</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <Card>
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <h4 className="font-medium mb-2">Programming Languages</h4>
                <p className="text-sm text-muted-foreground">JavaScript, TypeScript, Python, SQL</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Frameworks & Libraries</h4>
                <p className="text-sm text-muted-foreground">React, Next.js, Node.js, Express</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Tools & Platforms</h4>
                <p className="text-sm text-muted-foreground">Git, Docker, AWS, Vercel</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Education */}
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
                  <p className="text-muted-foreground">University Name</p>
                </div>
                <span className="text-sm text-muted-foreground">2019 - 2023</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certifications */}
        <Card>
          <CardHeader>
            <CardTitle>Certifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {/* Certifications will be populated from database */}
              <div className="flex justify-between items-center">
                <span>AWS Certified Developer</span>
                <span className="text-sm text-muted-foreground">2023</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
