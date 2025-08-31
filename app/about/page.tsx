import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - James Gilmore',
  description: 'Learn more about James Gilmore - professional background, skills, and personal journey.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="space-y-8">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional developer and technology enthusiast with a passion for building meaningful solutions.
          </p>
        </section>

        {/* Bio Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Background</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              [Bio content will be managed through admin interface]
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Skills will be populated from database */}
            <div className="p-4 border rounded-lg bg-card">
              <h3 className="font-medium">Frontend</h3>
              <p className="text-sm text-muted-foreground">React, Next.js, TypeScript</p>
            </div>
            <div className="p-4 border rounded-lg bg-card">
              <h3 className="font-medium">Backend</h3>
              <p className="text-sm text-muted-foreground">Node.js, Python, Databases</p>
            </div>
            <div className="p-4 border rounded-lg bg-card">
              <h3 className="font-medium">Tools</h3>
              <p className="text-sm text-muted-foreground">Git, Docker, AWS</p>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Professional Journey</h2>
          <div className="space-y-4">
            {/* Timeline items will be populated from database */}
            <div className="flex gap-4">
              <div className="w-24 text-sm text-muted-foreground">2023-2024</div>
              <div className="flex-1">
                <h3 className="font-medium">Senior Developer</h3>
                <p className="text-sm text-muted-foreground">Company Name</p>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Interests */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Personal Interests</h2>
          <p className="text-muted-foreground">
            [Personal interests content will be managed through admin interface]
          </p>
        </section>
      </div>
    </div>
  )
}
