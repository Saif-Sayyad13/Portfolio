"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CVPage() {
  const handleDownload = () => {
    // Create a new window with the CV content for printing/saving as PDF
    const printWindow = window.open("", "_blank")
    if (printWindow) {
      printWindow.document.write(`
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
            .skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
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
            <br>
            <p><strong>Tukaram Kayande Higher Secondary School (2022)</strong></p>
            <p>Higher Secondary Certificate (HSC) — 85.67%</p>
            <p>Maharashtra, India</p>
            <br>
            <p><strong>Shakar Vidya Mandir School (2020)</strong></p>
            <p>Secondary School Certificate (SSC) — 81.40%</p>
            <p>Maharashtra, India</p>
          </div>

          <div class="section">
            <h2>Leadership & Activities</h2>
            <p><strong>Public Relations Head</strong> – AICC (GHRCEM), 2025</p>
            <p><strong>Finance & Sponsorship Head</strong> – E-Cell (GHRCEM), 2025</p>
            <p><strong>Volunteer</strong> – National Service Scheme (NSS), 2022 – 2025</p>
          </div>

          <div class="section">
            <h2>Languages</h2>
            <p>English (Professional), Hindi (Native), Marathi (Native)</p>
          </div>
        </body>
        </html>
      `)
      printWindow.document.close()
      printWindow.print()
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <Link href="/">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
          <Button onClick={handleDownload} className="bg-blue-600 hover:bg-blue-700">
            <Download className="w-4 h-4 mr-2" />
            Download/Print CV
          </Button>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-8">
            {/* CV Content */}
            <div className="space-y-8">
              {/* Header */}
              <div className="text-center border-b-2 border-gray-300 pb-6">
                <h1 className="text-3xl font-bold mb-2">Saif Sayyad</h1>
                <p className="text-gray-600">Pune, Maharashtra | +91-7798692515 | aaamansayyad.131@gmail.com</p>
                <p className="text-blue-600">LinkedIn: https://linkedin.com/in/saif-sayyad-ab7ba0250</p>
              </div>

              {/* Professional Summary */}
              <div>
                <h2 className="text-xl font-bold text-blue-600 border-b border-blue-600 pb-2 mb-4">Summary</h2>
                <p className="text-gray-700 leading-relaxed">
                  Final-year B.Tech Computer Science (AI) student with academic and internship exposure to applied
                  machine learning and computer vision. Experience using Python to implement CNN-based models and solve
                  problem-oriented tasks, along with foundational understanding of software development concepts such as
                  object-oriented programming and data structures.
                </p>
              </div>

              {/* Technical Skills */}
              <div>
                <h2 className="text-xl font-bold text-blue-600 border-b border-blue-600 pb-2 mb-4">Technical Skills</h2>
                <div className="space-y-2">
                  <p>
                    <strong>AI / ML:</strong> Convolutional Neural Networks (CNNs), Basic Image Processing
                  </p>
                  <p>
                    <strong>Programming:</strong> Python, SQL (Basics)
                  </p>
                  <p>
                    <strong>Web Basics:</strong> HTML, CSS, JavaScript (Basics)
                  </p>
                  <p>
                    <strong>Programming Fundamentals:</strong> Object-Oriented Programming, Data Structures (Basics)
                  </p>
                  <p>
                    <strong>Tools:</strong> Jupyter Notebook, Google Colab, VS Code
                  </p>
                </div>
              </div>

              {/* Experience */}
              <div>
                <h2 className="text-xl font-bold text-blue-600 border-b border-blue-600 pb-2 mb-4">Experience</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-1">AI & Deep Learning Intern – IIT Patna</h3>
                    <p className="text-sm text-gray-600 mb-2">
                      May 2024 – Jul 2024 | Research Internship, Patna, India
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>
                        Worked on CNN-based deep learning models for disaster prediction using image-based datasets as
                        part of a research internship
                      </li>
                      <li>Implemented CNN architectures and applied image preprocessing techniques using Python</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-1">Campus Ambassador – Pregrad</h3>
                    <p className="text-sm text-gray-600 mb-2">Oct 2023 – Nov 2023 | Marketing & Outreach, Remote</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Promoted platform services and supported student engagement initiatives</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Projects */}
              <div>
                <h2 className="text-xl font-bold text-blue-600 border-b border-blue-600 pb-2 mb-4">Projects</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Pneumonia Detection Using CNN (Jun 2024 – Nov 2024)</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Designed and trained a CNN-based system to classify pneumonia from chest X-ray images</li>
                      <li>
                        Applied image preprocessing techniques and model tuning to improve classification performance on
                        medical image data
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">
                      Skin Tone Detection & Recommendation System (Jun 2025 – Nov 2025)
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>
                        Built a custom CNN model using the UTKFace dataset (23,000+ images) for skin-tone classification
                      </li>
                      <li>
                        Achieved 81.12% accuracy across five classes using batch normalization and model optimization
                      </li>
                      <li>Project implementations and code maintained locally and available upon request</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xl font-bold text-blue-600 border-b border-blue-600 pb-2 mb-4">Education</h2>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Savitribai Phule Pune University (2022 – 2026)</p>
                    <p className="text-gray-700">B.Tech in Computer Science (AI) — CGPA: 7.47 (7th Sem SGPA: 8.57)</p>
                    <p className="text-sm text-gray-600">Pune, India</p>
                  </div>
                  <div>
                    <p className="font-semibold">Tukaram Kayande Higher Secondary School (2022)</p>
                    <p className="text-gray-700">Higher Secondary Certificate (HSC) — 85.67%</p>
                    <p className="text-sm text-gray-600">Maharashtra, India</p>
                  </div>
                  <div>
                    <p className="font-semibold">Shakar Vidya Mandir School (2020)</p>
                    <p className="text-gray-700">Secondary School Certificate (SSC) — 81.40%</p>
                    <p className="text-sm text-gray-600">Maharashtra, India</p>
                  </div>
                </div>
              </div>

              {/* Leadership & Volunteer */}
              <div>
                <h2 className="text-xl font-bold text-blue-600 border-b border-blue-600 pb-2 mb-4">
                  Leadership & Activities
                </h2>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Public Relations Head</strong> – AICC (GHRCEM), 2025
                  </p>
                  <p>
                    <strong>Finance & Sponsorship Head</strong> – E-Cell (GHRCEM), 2025
                  </p>
                  <p>
                    <strong>Volunteer</strong> – National Service Scheme (NSS), 2022 – 2025
                  </p>
                </div>
              </div>

              {/* Languages */}
              <div>
                <h2 className="text-xl font-bold text-blue-600 border-b border-blue-600 pb-2 mb-4">Languages</h2>
                <p className="text-gray-700">English (Professional), Hindi (Native), Marathi (Native)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
