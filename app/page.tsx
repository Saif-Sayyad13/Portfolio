"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Linkedin, Download } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-6 py-12 text-center">
          <h1 className="text-5xl font-bold mb-2">Saif Sayyad</h1>
          <p className="text-xl mb-4 text-blue-100">Final-year B.Tech Computer Science (AI)</p>

          <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Pune, Maharashtra</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:aaamansayyad.131@gmail.com" className="hover:text-blue-200 transition-colors">
                aaamansayyad.131@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91-7798692515</span>
            </div>
          </div>

          <div className="flex justify-center gap-4">
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <a href="https://linkedin.com/in/saif-sayyad-ab7ba0250" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => {
                // Create CV content
                const cvContent = `
<!DOCTYPE html>
<html>
<head>
  <title>Saif Sayyad - CV</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; color: #333; }
    .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #333; padding-bottom: 20px; }
    .header h1 { margin: 0; font-size: 28px; }
    .header p { margin: 5px 0; }
    .section { margin-bottom: 25px; }
    .section h2 { color: #2563eb; border-bottom: 1px solid #2563eb; padding-bottom: 5px; margin-bottom: 15px; }
    .section h3 { margin-bottom: 5px; }
    .section p, .section li { margin-bottom: 8px; }
    ul { padding-left: 20px; }
    @media print { body { margin: 20px; } }
  </style>
</head>
<body>
  <div class="header">
    <h1>Saif Sayyad</h1>
    <p>Pune, Maharashtra | +91-7798692515 | aaamansayyad.131@gmail.com</p>
    <p>LinkedIn: https://linkedin.com/in/saif-sayyad-ab7ba0250</p>
  </div>

  <div class="section">
    <h2>Professional Summary</h2>
    <p>Final-year B.Tech Computer Science (AI) student with hands-on experience in data analytics, Python, and deep learning. Skilled in tools like Tableau, Power BI, and SQL. Interned with IIT Patna on image processing and AI-based disaster prediction. Looking for internships or entry-level roles in data science or AI.</p>
  </div>

  <div class="section">
    <h2>Education</h2>
    <p><strong>B.Tech – Savitribai Phule Pune University (2022–2026)</strong> | CGPA: 7.65</p>
    <p><strong>HSC – Tukaram Kayande Higher Secondary School (2022)</strong> | 85.67%</p>
    <p><strong>SSC – Shakar Vidya Mandir School (2020)</strong> | 81.40%</p>
  </div>

  <div class="section">
    <h2>Skills</h2>
    <p><strong>Technical:</strong> Python (Pandas, NumPy, Seaborn), SQL, Data Cleaning, Data Visualization</p>
    <p><strong>Tools:</strong> Power BI, Tableau, Excel (PivotTables), Jupyter Notebook</p>
    <p><strong>Soft Skills:</strong> Leadership, Problem Solving, Communication, Time Management, Critical Thinking</p>
  </div>

  <div class="section">
    <h2>Projects</h2>
    <h3>Pneumonia Detection Using CNN (Jun 2024 – Nov 2024)</h3>
    <ul>
      <li>Built a CNN-based tool to detect pneumonia from chest X-rays</li>
      <li>Achieved high accuracy using trained deep learning model</li>
    </ul>
    
    <h3>Lernifyy3 – Udemy Replica (Dec 2023 – May 2024)</h3>
    <ul>
      <li>Developed a platform offering video courses, tests, and analytics</li>
      <li>Features included daily scores, test tracking, and personal dashboards</li>
    </ul>
  </div>

  <div class="section">
    <h2>Internships</h2>
    <h3>AI & Deep Learning Intern – IIT Patna (May 2024 – Jul 2024)</h3>
    <ul>
      <li>Worked on AI models for disaster prediction</li>
      <li>Focused on image processing & research-based development</li>
    </ul>
    
    <h3>Campus Ambassador – Pregrad (Oct 2023 – Nov 2023)</h3>
    <ul>
      <li>Promoted platform services & student engagement activities</li>
    </ul>
  </div>

  <div class="section">
    <h2>Leadership & Volunteer</h2>
    <ul>
      <li>Public Relations Head – AI Coding Club (GHRCEM)</li>
      <li>Finance & Sponsorship Head – E-Cell (GHRCEM)</li>
      <li>Volunteer – National Service Scheme (Jan 2024 – Present)</li>
    </ul>
  </div>

  <div class="section">
    <h2>Languages</h2>
    <p>English, Hindi, Marathi</p>
  </div>
</body>
</html>`

                // Open new window with CV content
                const printWindow = window.open("", "_blank")
                if (printWindow) {
                  printWindow.document.write(cvContent)
                  printWindow.document.close()
                  printWindow.print()
                }
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 space-y-12">
        {/* About Me */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 leading-relaxed">
              Final-year B.Tech Computer Science (AI) student with hands-on experience in data analytics, Python, and
              deep learning. Skilled in tools like Tableau, Power BI, and SQL. Interned with IIT Patna on AI-based
              disaster prediction.
            </p>
          </CardContent>
        </Card>

        {/* Projects */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Featured Projects</CardTitle>
            <CardDescription>Key projects showcasing my technical skills</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Pneumonia Detection Using CNN</h3>
              <p className="text-gray-600 mb-3">
                Built a CNN-based tool to detect pneumonia from chest X-rays with high accuracy using deep learning
                techniques.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">TensorFlow</Badge>
                <Badge variant="secondary">CNN</Badge>
                <Badge variant="secondary">Medical AI</Badge>
              </div>
            </div>

            <Separator />

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Lernifyy3 – Udemy Replica</h3>
              <p className="text-gray-600 mb-3">
                Developed a comprehensive e-learning platform offering video courses, interactive tests, and detailed
                analytics with dashboards and scoring systems.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">MongoDB</Badge>
                <Badge variant="secondary">Analytics</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Professional Experience</CardTitle>
            <CardDescription>Internships and work experience</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="md:w-1/4">
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">May - Jul 2024</Badge>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-semibold text-lg">AI & Deep Learning Intern</h3>
                <p className="text-blue-600 font-medium mb-2">IIT Patna</p>
                <p className="text-gray-600">
                  Worked on advanced image processing techniques and AI-based disaster prediction systems, contributing
                  to research in emergency response technologies.
                </p>
              </div>
            </div>

            <Separator />

            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="md:w-1/4">
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">Oct - Nov 2023</Badge>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-semibold text-lg">Campus Ambassador</h3>
                <p className="text-blue-600 font-medium mb-2">Pregrad</p>
                <p className="text-gray-600">
                  Led promotional activities and student outreach programs, enhancing brand visibility and engagement
                  across campus.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Skills */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Programming & Data Science</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Python</Badge>
                    <Badge>Pandas</Badge>
                    <Badge>NumPy</Badge>
                    <Badge>Seaborn</Badge>
                    <Badge>SQL</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Analytics & Visualization</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Tableau</Badge>
                    <Badge>Power BI</Badge>
                    <Badge>Excel</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Soft Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Leadership</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Problem Solving</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>Communication</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span>Time Management</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Leadership */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Leadership & Volunteer Work</CardTitle>
            <CardDescription>Community involvement and leadership roles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 border rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">PR</span>
                </div>
                <h4 className="font-semibold mb-1">Public Relations Head</h4>
                <p className="text-sm text-gray-600">AI Coding Club</p>
              </div>

              <div className="text-center p-4 border rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold">FS</span>
                </div>
                <h4 className="font-semibold mb-1">Finance & Sponsorship Head</h4>
                <p className="text-sm text-gray-600">E-Cell</p>
              </div>

              <div className="text-center p-4 border rounded-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 font-bold">NSS</span>
                </div>
                <h4 className="font-semibold mb-1">NSS Volunteer</h4>
                <p className="text-sm text-gray-600">Jan 2024 – Present</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">Let's connect and build something amazing together!</p>
          <div className="flex justify-center gap-4 mb-4">
            <Button
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              asChild
            >
              <a href="mailto:aaamansayyad.131@gmail.com">
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              asChild
            >
              <a href="https://linkedin.com/in/saif-sayyad-ab7ba0250" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                Connect
              </a>
            </Button>
          </div>
          <p className="text-sm text-gray-400">© 2025 Saif Sayyad | Portfolio</p>
        </div>
      </footer>
    </div>
  )
}
