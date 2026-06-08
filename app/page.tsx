"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Linkedin, Download, Award, Users, Github, ExternalLink, Sparkles, Code2, Brain } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Header */}
      <header className="relative overflow-hidden border-b border-white/10">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-6 py-20 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">AI & Machine Learning Engineer</span>
          </div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
            Saif Sayyad
          </h1>
          <p className="text-xl mb-6 text-slate-300">B.Tech Computer Science (AI) • CGPA: 7.47 • Final Year</p>

          <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-slate-300">
            <div className="flex items-center gap-2 hover:text-blue-300 transition-colors">
              <MapPin className="w-4 h-4" />
              <span>Pune, Maharashtra</span>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-300 transition-colors">
              <Mail className="w-4 h-4" />
              <a href="mailto:aaamansayyad.131@gmail.com" className="hover:underline">
                aaamansayyad.131@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 hover:text-blue-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91-7798692515</span>
            </div>
          </div>

          <div className="flex justify-center gap-3 flex-wrap">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white border-0" asChild>
              <a href="https://linkedin.com/in/saif-sayyad-ab7ba0250" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button
              className="border border-blue-400/50 hover:bg-blue-500/20 text-blue-300 hover:text-blue-200 bg-transparent"
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
    <h2>Summary</h2>
    <p>Final-year B.Tech Computer Science (AI) student with academic and internship exposure to applied machine learning and computer vision. Experience using Python to implement CNN-based models and solve problem-oriented tasks, along with foundational understanding of software development concepts such as object-oriented programming and data structures.</p>
  </div>

  <div class="section">
    <h2>Technical Skills</h2>
    <p><strong>AI / ML:</strong> Convolutional Neural Networks (CNNs), Basic Image Processing</p>
    <p><strong>Programming:</strong> Python, SQL (Basics)</p>
    <p><strong>Web Basics:</strong> HTML, CSS, JavaScript (Basics)</p>
    <p><strong>Programming Fundamentals:</strong> Object-Oriented Programming, Data Structures (Basics)</p>
    <p><strong>Tools:</strong> Jupyter Notebook, Google Colab, VS Code</p>
  </div>

  <div class="section">
    <h2>Experience</h2>
    <h3>AI & Deep Learning Intern – IIT Patna (May 2024 – Jul 2024)</h3>
    <p><em>Research Internship, Patna, India</em></p>
    <ul>
      <li>Worked on CNN-based deep learning models for disaster prediction using image-based datasets as part of a research internship</li>
      <li>Implemented CNN architectures and applied image preprocessing techniques using Python</li>
    </ul>
    
    <h3>Campus Ambassador – Pregrad (Oct 2023 – Nov 2023)</h3>
    <p><em>Marketing & Outreach, Remote</em></p>
    <ul>
      <li>Promoted platform services and supported student engagement initiatives</li>
    </ul>
  </div>

  <div class="section">
    <h2>Projects</h2>
    <h3>Pneumonia Detection Using CNN (Jun 2024 – Nov 2024)</h3>
    <ul>
      <li>Designed and trained a CNN-based system to classify pneumonia from chest X-ray images</li>
      <li>Applied image preprocessing techniques and model tuning to improve classification performance on medical image data</li>
    </ul>
    
    <h3>Skin Tone Detection & Recommendation System (Jun 2025 – Nov 2025)</h3>
    <ul>
      <li>Built a custom CNN model using the UTKFace dataset (23,000+ images) for skin-tone classification</li>
      <li>Achieved 81.12% accuracy across five classes using batch normalization and model optimization</li>
      <li>Project implementations and code maintained locally and available upon request</li>
    </ul>
  </div>

  <div class="section">
    <h2>Education</h2>
    <p><strong>Savitribai Phule Pune University (2022 – 2026)</strong></p>
    <p>B.Tech in Computer Science (AI) — CGPA: 7.47 (7th Sem SGPA: 8.57)</p>
    <p>Pune, India</p>
    <br />
    <p><strong>Tukaram Kayande Higher Secondary School (2022)</strong></p>
    <p>Higher Secondary Certificate (HSC) — 85.67%</p>
    <p>Maharashtra, India</p>
    <br />
    <p><strong>Shakar Vidya Mandir School (2020)</strong></p>
    <p>Secondary School Certificate (SSC) — 81.40%</p>
    <p>Maharashtra, India</p>
  </div>

  <div class="section">
    <h2>Languages</h2>
    <p>English (Professional), Hindi (Native), Marathi (Native)</p>
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
              Final-year B.Tech Computer Science (AI) student with academic and internship exposure to applied machine
              learning and computer vision. Experience using Python to implement CNN-based models and solve
              problem-oriented tasks, along with foundational understanding of software development concepts such as
              object-oriented programming and data structures.
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
              <p className="text-sm text-gray-500 mb-2">Jun 2024 – Nov 2024</p>
              <p className="text-gray-600 mb-3">
                Designed and trained a CNN-based system to classify pneumonia from chest X-ray images. Applied image
                preprocessing techniques and model tuning to improve classification performance on medical image data.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">CNN</Badge>
                <Badge variant="secondary">Medical AI</Badge>
                <Badge variant="secondary">Image Processing</Badge>
              </div>
            </div>

            <Separator />

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Skin Tone Detection & Recommendation System</h3>
              <p className="text-sm text-gray-500 mb-2">Jun 2025 – Nov 2025</p>
              <p className="text-gray-600 mb-3">
                Built a custom CNN model using the UTKFace dataset (23,000+ images) for skin-tone classification.
                Achieved 81.12% accuracy across five classes using batch normalization and model optimization.
              </p>
              <div className="flex gap-2">
                <Badge variant="secondary">Python</Badge>
                <Badge variant="secondary">CNN</Badge>
                <Badge variant="secondary">Computer Vision</Badge>
                <Badge variant="secondary">UTKFace Dataset</Badge>
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
                <p className="text-blue-600 font-medium mb-2">IIT Patna - Research Internship</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>
                    Worked on CNN-based deep learning models for disaster prediction using image-based datasets as part
                    of a research internship
                  </li>
                  <li>Implemented CNN architectures and applied image preprocessing techniques using Python</li>
                </ul>
              </div>
            </div>

            <Separator />

            <div className="flex flex-col md:flex-row md:items-start gap-4">
              <div className="md:w-1/4">
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">Oct - Nov 2023</Badge>
              </div>
              <div className="md:w-3/4">
                <h3 className="font-semibold text-lg">Campus Ambassador</h3>
                <p className="text-blue-600 font-medium mb-2">Pregrad - Marketing & Outreach</p>
                <p className="text-gray-600">
                  Promoted platform services and supported student engagement initiatives.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Campus Involvement & Leadership */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Users className="w-6 h-6" />
              Campus Involvement & Leadership
            </CardTitle>
            <CardDescription>Active participation in student organizations and community service</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Public Relations Head – AICC (GHRCEM)</h3>
              <p className="text-sm text-gray-500 mb-2">2025</p>
              <p className="text-gray-600">
                Led student communication initiatives and supported coordination of college-level activities.
              </p>
            </div>

            <Separator />

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">
                Finance & Sponsorship Head – Entrepreneurship Cell (GHRCEM)
              </h3>
              <p className="text-sm text-gray-500 mb-2">2025</p>
              <p className="text-gray-600">
                Assisted with sponsorship outreach and budget handling for student entrepreneurship events.
              </p>
            </div>

            <Separator />

            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Volunteer – National Service Scheme (NSS)</h3>
              <p className="text-sm text-gray-500 mb-2">2022 – 2025</p>
              <p className="text-gray-600">
                Actively involved in community service and social awareness programs over multiple academic years.
              </p>
            </div>

            <Separator />

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-lg mb-2">Event Coordination Experience</h3>
              <p className="text-gray-600">
                Contributed to planning and coordination of large-scale college events, including fresher and cultural
                activities.
              </p>
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
                  <h4 className="font-medium mb-2">AI / ML</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>CNNs</Badge>
                    <Badge>Image Processing</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Programming</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Python</Badge>
                    <Badge>SQL</Badge>
                    <Badge>OOP</Badge>
                    <Badge>Data Structures</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Web Basics</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>HTML</Badge>
                    <Badge>CSS</Badge>
                    <Badge>JavaScript</Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Jupyter Notebook</Badge>
                    <Badge>Google Colab</Badge>
                    <Badge>VS Code</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Education</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Savitribai Phule Pune University</h4>
                  <p className="text-sm text-gray-600">B.Tech in Computer Science (AI)</p>
                  <p className="text-sm text-gray-600">2022 – 2026</p>
                  <p className="text-sm font-medium text-blue-600">CGPA: 7.47 (7th Sem SGPA: 8.57)</p>
                </div>
                <div>
                  <h4 className="font-semibold">Tukaram Kayande Higher Secondary School</h4>
                  <p className="text-sm text-gray-600">HSC - 85.67%</p>
                  <p className="text-sm text-gray-600">2022</p>
                </div>
                <div>
                  <h4 className="font-semibold">Shakar Vidya Mandir School</h4>
                  <p className="text-sm text-gray-600">SSC - 81.40%</p>
                  <p className="text-sm text-gray-600">2020</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications & Learning */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <Award className="w-6 h-6" />
              Certifications & Learning
            </CardTitle>
            <CardDescription>Professional development and continuous learning</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Generative AI Essentials for Data Analytics</h4>
                  <p className="text-sm text-gray-600">Coursera</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Google Analytics Certification</h4>
                  <p className="text-sm text-gray-600">Google Skillshop</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 border rounded-lg hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold">Train ML Models for Document Understanding</h4>
                  <p className="text-sm text-gray-600">UiPath</p>
                </div>
              </div>

              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  Additional certificates and detailed project documentation available upon request.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leadership */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Leadership & Activities</CardTitle>
            <CardDescription>Community involvement and leadership roles</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 border rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-blue-600 font-bold">PR</span>
                </div>
                <h4 className="font-semibold mb-1">Public Relations Head</h4>
                <p className="text-sm text-gray-600">AICC (GHRCEM) - 2025</p>
              </div>

              <div className="text-center p-4 border rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 font-bold">FS</span>
                </div>
                <h4 className="font-semibold mb-1">Finance & Sponsorship Head</h4>
                <p className="text-sm text-gray-600">E-Cell (GHRCEM) - 2025</p>
              </div>

              <div className="text-center p-4 border rounded-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 font-bold">NSS</span>
                </div>
                <h4 className="font-semibold mb-1">NSS Volunteer</h4>
                <p className="text-sm text-gray-600">2022 – 2025</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Initiatives */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Initiatives</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <h4 className="font-semibold mb-2">School Tiffin Service (Concept Stage)</h4>
              <p className="text-gray-600">
                Explored a small-scale food service idea, focusing on basic planning, cost estimation, and feasibility
                analysis.
              </p>
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
