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
            <div class="skills-grid">
              <div>
                <p><strong>Technical:</strong> Python (Pandas, NumPy, Seaborn), SQL, Data Cleaning, Data Visualization</p>
                <p><strong>Tools:</strong> Power BI, Tableau, Excel (PivotTables), Jupyter Notebook</p>
              </div>
              <div>
                <p><strong>Soft Skills:</strong> Leadership, Problem Solving, Communication, Time Management, Critical Thinking</p>
              </div>
            </div>
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
                <h2 className="text-xl font-bold text-blue-600 border-b border-blue-600 pb-2 mb-4">
                  Professional Summary
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Final-year B.Tech Computer Science (AI) student with hands-on experience in data analytics, Python,
                  and deep learning. Skilled in tools like Tableau, Power BI, and SQL. Interned with IIT Patna on image
                  processing and AI-based disaster prediction. Looking for internships or entry-level roles in data
                  science or AI.
                </p>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-xl font-bold text-blue-600 border-b border-blue-600 pb-2 mb-4">Education</h2>
                <div className="space-y-2">
                  <p>
                    <strong>B.Tech – Savitribai Phule Pune University (2022–2026)</strong> | CGPA: 7.65
                  </p>
                  <p>
                    <strong>HSC – Tukaram Kayande Higher Secondary School (2022)</strong> | 85.67%
                  </p>
                  <p>
                    <strong>SSC – Shakar Vidya Mandir School (2020)</strong> | 81.40%
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div>
                <h2 className="text-xl font-bold text-blue-600 border-b border-blue-600 pb-2 mb-4">Skills</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="mb-2">
                      <strong>Technical:</strong> Python (Pandas, NumPy, Seaborn), SQL, Data Cleaning, Data
                      Visualization
                    </p>
                    <p>
                      <strong>Tools:</strong> Power BI, Tableau, Excel (PivotTables), Jupyter Notebook
                    </p>
                  </div>
                  <div>
                    <p>
                      <strong>Soft Skills:</strong> Leadership, Problem Solving, Communication, Time Management,
                      Critical Thinking
                    </p>
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
                      <li>Built a CNN-based tool to detect pneumonia from chest X-rays</li>
                      <li>Achieved high accuracy using trained deep learning model</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Lernifyy3 – Udemy Replica (Dec 2023 – May 2024)</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Developed a platform offering video courses, tests, and analytics</li>
                      <li>Features included daily scores, test tracking, and personal dashboards</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Internships */}
              <div>
                <h2 className="text-xl font-bold text-blue-600 border-b border-blue-600 pb-2 mb-4">Internships</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">AI & Deep Learning Intern – IIT Patna (May 2024 – Jul 2024)</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Worked on AI models for disaster prediction</li>
                      <li>Focused on image processing & research-based development</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Campus Ambassador – Pregrad (Oct 2023 – Nov 2023)</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Promoted platform services & student engagement activities</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Leadership & Volunteer */}
              <div>
                <h2 className="text-xl font-bold text-blue-600 border-b border-blue-600 pb-2 mb-4">
                  Leadership & Volunteer
                </h2>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Public Relations Head – AI Coding Club (GHRCEM)</li>
                  <li>Finance & Sponsorship Head – E-Cell (GHRCEM)</li>
                  <li>Volunteer – National Service Scheme (Jan 2024 – Present)</li>
                </ul>
              </div>

              {/* Languages */}
              <div>
                <h2 className="text-xl font-bold text-blue-600 border-b border-blue-600 pb-2 mb-4">Languages</h2>
                <p className="text-gray-700">English, Hindi, Marathi</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
