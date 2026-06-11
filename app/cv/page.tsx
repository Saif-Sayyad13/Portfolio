"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CVPage() {
  const handleDownload = () => {
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
            <h3>HealthBridge AI - Healthcare Platform (Full Stack)</h3>
            <ul>
              <li>Developed production-deployed healthcare AI platform using Python, FastAPI, JWT authentication, and Groq's Llama 3.3 LLM</li>
              <li>Built secure REST APIs with SQLite backend, addressing uninformed self-medication affecting 70% of Indians</li>
              <li>Frontend: https://healthbridgeaii.netlify.app | Streamlit: https://healthbridgeaiai.streamlit.app</li>
            </ul>
            
            <h3>Skin Tone Detection & Recommendation System (Published - IEEE)</h3>
            <ul>
              <li>Built a custom CNN model using the UTKFace dataset (23,000+ images) for skin-tone classification</li>
              <li>Achieved 81.12% accuracy across five classes using batch normalization and model optimization</li>
              <li>Published Research Paper: https://ieeexplore.ieee.org/document/11377529</li>
            </ul>

            <h3>Pneumonia Detection Using CNN</h3>
            <ul>
              <li>Designed and trained a CNN-based system to classify pneumonia from chest X-ray images</li>
              <li>Applied image preprocessing techniques and model tuning to improve classification performance on medical image data</li>
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
            <h2>Campus Involvement & Leadership</h2>
            <h3>Public Relations Head – AICC (GHRCEM) (2025)</h3>
            <p>Led student communication initiatives and supported coordination of college-level activities.</p>
            
            <h3>Finance & Sponsorship Head – Entrepreneurship Cell (GHRCEM) (2025)</h3>
            <p>Assisted with sponsorship outreach and budget handling for student entrepreneurship events.</p>
            
            <h3>Volunteer – National Service Scheme (NSS) (2022 – 2025)</h3>
            <p>Actively involved in community service and social awareness programs over multiple academic years.</p>
            
            <h3>Event Coordination Experience</h3>
            <p>Contributed to planning and coordination of large-scale college events, including fresher and cultural activities.</p>
          </div>

          <div class="section">
            <h2>Certifications & Learning</h2>
            <ul>
              <li><strong>Generative AI Essentials for Data Analytics</strong> – Coursera</li>
              <li><strong>Google Analytics Certification</strong> – Google Skillshop</li>
              <li><strong>Train ML Models for Document Understanding</strong> – UiPath</li>
            </ul>
            <p><em>Additional certificates and detailed project documentation available upon request.</em></p>
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <Link href="/">
            <Button className="border border-blue-400/50 hover:bg-blue-500/20 text-blue-300 hover:text-blue-200 bg-transparent transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
          <Button onClick={handleDownload} className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 animate-pulse-glow">
            <Download className="w-4 h-4 mr-2" />
            Download/Print CV
          </Button>
        </div>

        <Card className="shadow-lg">
          <CardContent className="p-8">
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

              {/* Campus Involvement & Leadership */}
              <div>
                <h2 className="text-xl font-bold text-blue-600 border-b border-blue-600 pb-2 mb-4">
                  Campus Involvement & Leadership
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-1">Public Relations Head – AICC (GHRCEM)</h3>
                    <p className="text-sm text-gray-600 mb-2">2025</p>
                    <p className="text-gray-700">
                      Led student communication initiatives and supported coordination of college-level activities.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-1">Finance & Sponsorship Head – Entrepreneurship Cell (GHRCEM)</h3>
                    <p className="text-sm text-gray-600 mb-2">2025</p>
                    <p className="text-gray-700">
                      Assisted with sponsorship outreach and budget handling for student entrepreneurship events.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-1">Volunteer – National Service Scheme (NSS)</h3>
                    <p className="text-sm text-gray-600 mb-2">2022 – 2025</p>
                    <p className="text-gray-700">
                      Actively involved in community service and social awareness programs over multiple academic years.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-1">Event Coordination Experience</h3>
                    <p className="text-gray-700">
                      Contributed to planning and coordination of large-scale college events, including fresher and
                      cultural activities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Certifications & Learning */}
              <div>
                <h2 className="text-xl font-bold text-blue-600 border-b border-blue-600 pb-2 mb-4">
                  Certifications & Learning
                </h2>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">Generative AI Essentials for Data Analytics</p>
                    <p className="text-sm text-gray-600">Coursera</p>
                  </div>
                  <div>
                    <p className="font-semibold">Google Analytics Certification</p>
                    <p className="text-sm text-gray-600">Google Skillshop</p>
                  </div>
                  <div>
                    <p className="font-semibold">Train ML Models for Document Understanding</p>
                    <p className="text-sm text-gray-600">UiPath</p>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm text-gray-600 italic">
                      Additional certificates and detailed project documentation available upon request.
                    </p>
                  </div>
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
