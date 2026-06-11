"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MapPin, Linkedin, Download, Award, Users, Github, ExternalLink, Sparkles, Code2, Brain, BookOpen } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Header */}
      <header className="relative overflow-hidden border-b border-white/10">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none"></div>
        
        <div className="container mx-auto px-6 py-20 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-blue-400/30 bg-blue-500/10 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
            <span className="text-sm text-blue-300">Full-Stack AI Developer</span>
          </div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-400 bg-clip-text text-transparent animate-fade-in-up" style={{animationDelay: '0.1s'}}>
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
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105" asChild>
              <a href="https://linkedin.com/in/saif-sayyad-ab7ba0250" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button className="bg-gradient-to-r from-slate-700 to-slate-800 hover:from-slate-800 hover:to-slate-900 text-white border-0 transition-all duration-300 hover:shadow-lg hover:shadow-slate-500/50 transform hover:scale-105" asChild>
              <a href="https://github.com/AmanSayyad13" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-0 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105" asChild>
              <a href="https://healthbridgeaii.netlify.app" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Projects
              </a>
            </Button>
            <Button
              className="border border-blue-400/50 hover:bg-blue-500/20 text-blue-300 hover:text-blue-200 bg-transparent transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 transform hover:scale-105 animate-pulse-glow"
              onClick={() => {
                const printWindow = window.open("", "_blank")
                if (printWindow) {
                  printWindow.document.write(`
<!DOCTYPE html>
<html>
<head>
  <title>Saif Sayyad - CV</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; color: #333; }
    .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #2563eb; padding-bottom: 20px; }
    .header h1 { margin: 0; font-size: 28px; color: #1e40af; }
    .header p { margin: 5px 0; color: #475569; }
    .section { margin-bottom: 25px; }
    .section h2 { color: #1e40af; border-bottom: 2px solid #3b82f6; padding-bottom: 8px; margin-bottom: 15px; font-size: 18px; }
    .section h3 { margin: 15px 0 5px 0; font-weight: bold; color: #1f2937; }
    .section p, .section li { margin-bottom: 8px; color: #374151; }
    ul { padding-left: 20px; }
    .skills { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
    .skill-item { padding: 10px; background: #f3f4f6; border-radius: 5px; }
    @media print { body { margin: 20px; } }
  </style>
</head>
<body>
  <div class="header">
    <h1>Saif Sayyad</h1>
    <p>Pune, Maharashtra • +91-7798692515 • aaamansayyad.131@gmail.com</p>
    <p><strong>LinkedIn:</strong> linkedin.com/in/saif-sayyad-ab7ba0250 • <strong>GitHub:</strong> github.com/AmanSayyad13</p>
    <p><strong>Portfolio:</strong> healthbridgeai.streamlit.app</p>
  </div>

  <div class="section">
    <h2>PROFESSIONAL SUMMARY</h2>
    <p>Final-year B.Tech Computer Science (AI) student with hands-on experience building and deploying full-stack AI applications. Developed HealthBridge AI — a live, production-deployed healthcare platform using Python, FastAPI, JWT authentication, and LLM integration. Experienced in REST API design, database management, and cloud deployment. Strong foundation in machine learning with CNN-based research internship experience at IIT Patna.</p>
  </div>

  <div class="section">
    <h2>TECHNICAL SKILLS</h2>
    <div class="skills">
      <div class="skill-item"><strong>Backend:</strong> Python, FastAPI, REST API Design, JWT Authentication, bcrypt, SQLite, SQL</div>
      <div class="skill-item"><strong>AI / ML:</strong> Groq API (Llama 3.3), CNN architectures, Image Processing, Scikit-learn</div>
      <div class="skill-item"><strong>Frontend:</strong> Streamlit, HTML, CSS, JavaScript</div>
      <div class="skill-item"><strong>DevOps & Tools:</strong> Git, GitHub, Render, Streamlit Cloud, VS Code, Jupyter Notebook, Google Colab</div>
      <div class="skill-item"><strong>CS Fundamentals:</strong> Object-Oriented Programming, Data Structures, REST Architecture</div>
    </div>
  </div>

  <div class="section">
    <h2>PROJECTS</h2>
    <h3>HealthBridge AI — Healthcare Intelligence Platform | Python • FastAPI • Groq AI • Streamlit • SQLite • JWT | 2026</h3>
    <p><strong>Live:</strong> https://healthbridgeai.streamlit.app | <strong>GitHub:</strong> github.com/AmanSayyad13/Health-Bridge-AI</p>
    <ul>
      <li>Designed and deployed a full-stack healthcare platform solving uninformed self-medication affecting 70% of Indians</li>
      <li>Built a secure REST API backend using FastAPI with JWT authentication, bcrypt password hashing, and SQLite database</li>
      <li>Integrated Groq's Llama 3.3 70B LLM for AI-powered symptom analysis, returning structured risk assessments</li>
      <li>Implemented medicine information lookup using structured AI prompts returning dosage, side effects, and Indian brand names</li>
      <li>Deployed backend on Render and frontend on Streamlit Cloud — fully live and accessible via public URL</li>
    </ul>

    <h3>Skin Tone Detection & Recommendation System | Python • CNN • TensorFlow • UTKFace Dataset | Jun 2025 – Nov 2025</h3>
    <ul>
      <li>Built a custom CNN model trained on 23,000+ images from the UTKFace dataset for skin-tone classification (5 categories)</li>
      <li>Achieved 81.12% classification accuracy using batch normalization, dropout regularization, and hyperparameter tuning</li>
      <li>Applied advanced image preprocessing techniques including augmentation and normalization for improved model generalization</li>
    </ul>

    <h3>Pneumonia Detection Using CNN | Python • CNN • Medical Imaging | Jun 2024 – Nov 2024</h3>
    <ul>
      <li>Designed and trained a CNN-based binary classification system to detect pneumonia from chest X-ray images</li>
      <li>Applied image preprocessing and model optimization techniques to improve diagnostic accuracy on medical imaging data</li>
    </ul>
  </div>

  <div class="section">
    <h2>EXPERIENCE</h2>
    <h3>AI & Deep Learning Intern — IIT Patna (Research Internship) | May 2024 – Jul 2024</h3>
    <ul>
      <li>Implemented CNN architectures for disaster prediction using satellite image datasets as part of a funded research project</li>
      <li>Applied Python-based image preprocessing pipelines and contributed to model evaluation and performance benchmarking</li>
    </ul>

    <h3>Campus Ambassador — Pregrad | Oct 2023 – Nov 2023</h3>
    <ul>
      <li>Led student outreach initiatives and promoted platform services across campus communities</li>
    </ul>
  </div>

  <div class="section">
    <h2>EDUCATION</h2>
    <h3>B.Tech in Computer Science (AI) — Savitribai Phule Pune University | 2022 – 2026</h3>
    <p>CGPA: 7.47 • 7th Semester SGPA: 8.57</p>

    <h3>HSC (Class 12) — Tukaram Kayande Higher Secondary School | 2022</h3>
    <p>85.67%</p>
  </div>

  <div class="section">
    <h2>CERTIFICATIONS & LEARNING</h2>
    <ul>
      <li>Generative AI Essentials for Data Analytics – Coursera</li>
      <li>Google Analytics Certification – Google Skillshop</li>
      <li>Train ML Models for Document Understanding – UiPath</li>
    </ul>
  </div>

  <div class="section">
    <h2>LEADERSHIP & ACTIVITIES</h2>
    <ul>
      <li>Public Relations Head – AICC (GHRCEM) (2025)</li>
      <li>Finance & Sponsorship Head – Entrepreneurship Cell (GHRCEM) (2025)</li>
      <li>Volunteer – National Service Scheme (NSS) (2022–2025)</li>
      <li>Event Coordination Experience – Large-scale college events including fresher and cultural activities</li>
    </ul>
  </div>

  <div class="section">
    <h2>LANGUAGES</h2>
    <p>English (Professional) • Hindi (Native) • Marathi (Native)</p>
  </div>
</body>
</html>`)
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

      <main className="container mx-auto px-6 py-16 space-y-16">
        {/* Professional Summary */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Brain className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">Professional Summary</h2>
          </div>
          <Card className="glass-effect card-hover border-blue-500/20 bg-blue-950/30">
            <CardContent className="pt-6">
              <p className="text-slate-200 leading-relaxed text-lg">
                Final-year B.Tech Computer Science (AI) student with hands-on experience building and deploying full-stack AI applications. Developed <span className="text-cyan-400 font-semibold">HealthBridge AI</span> — a live, production-deployed healthcare platform addressing uninformed self-medication affecting 70% of Indians. Built with Python, FastAPI, JWT authentication, Groq's Llama 3.3 LLM, and SQLite. Strong foundation in machine learning with CNN-based research internship at IIT Patna.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Technical Skills */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">Technical Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { label: "Backend", skills: ["Python", "FastAPI", "REST API", "JWT Auth", "SQLite"] },
              { label: "AI / ML", skills: ["Groq API", "CNN", "Image Processing", "Scikit-learn", "TensorFlow"] },
              { label: "Frontend", skills: ["Streamlit", "HTML", "CSS", "JavaScript"] },
              { label: "DevOps & Tools", skills: ["Git", "GitHub", "Render", "Streamlit Cloud", "Jupyter"] },
              { label: "CS Fundamentals", skills: ["OOP", "Data Structures", "REST Architecture"] },
            ].map((skillGroup, idx) => (
              <Card key={idx} className="glass-effect card-hover border-blue-500/20 bg-blue-950/20">
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm text-blue-400">{skillGroup.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-400/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Projects */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Sparkles className="w-8 h-8 text-cyan-400" />
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          </div>
          <div className="space-y-4">
            {/* HealthBridge AI */}
            <Card className="glass-effect card-hover border-cyan-500/30 bg-cyan-950/20">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-cyan-300">HealthBridge AI</CardTitle>
                    <CardDescription className="text-slate-400">Healthcare Intelligence Platform</CardDescription>
                  </div>
                  <Badge className="bg-cyan-600">Live Deployed</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">
                  Full-stack healthcare platform solving uninformed self-medication affecting 70% of Indians. Built with FastAPI backend, JWT authentication, SQLite database, and Groq's Llama 3.3 LLM for AI-powered symptom analysis.
                </p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>✓ Secure REST API with JWT authentication and bcrypt hashing</li>
                  <li>✓ AI-powered symptom analysis returning structured risk assessments</li>
                  <li>✓ Medicine information lookup with dosage, side effects, and Indian brand names</li>
                  <li>✓ Deployed on Render (backend) & Streamlit Cloud (frontend)</li>
                </ul>
                <div className="flex gap-2 flex-wrap pt-4">
                  <Badge className="bg-blue-600/50 text-blue-200">Python</Badge>
                  <Badge className="bg-blue-600/50 text-blue-200">FastAPI</Badge>
                  <Badge className="bg-blue-600/50 text-blue-200">Groq API</Badge>
                  <Badge className="bg-blue-600/50 text-blue-200">SQLite</Badge>
                  <Badge className="bg-blue-600/50 text-blue-200">Streamlit</Badge>
                </div>
                <div className="flex gap-3 pt-4 flex-wrap">
                  <Button size="sm" className="bg-cyan-600 hover:bg-cyan-700 transition-all hover:shadow-lg hover:shadow-cyan-500/50" asChild>
                    <a href="https://healthbridgeaii.netlify.app" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Frontend (Main)
                    </a>
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-500/50" asChild>
                    <a href="https://healthbridgeaiai.streamlit.app" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Streamlit Version
                    </a>
                  </Button>
                  <Button size="sm" className="bg-slate-700 hover:bg-slate-600 transition-all" asChild>
                    <a href="https://github.com/AmanSayyad13/Health-Bridge-AI" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Skin Tone Detection */}
            <Card className="glass-effect card-hover border-purple-500/30 bg-purple-950/20">
              <CardHeader>
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <CardTitle className="text-xl text-purple-300">Skin Tone Detection & Recommendation System</CardTitle>
                    <CardDescription className="text-slate-400">CNN-based Classification • Jun 2025 – Nov 2025</CardDescription>
                  </div>
                  <Badge className="bg-purple-600 whitespace-nowrap">Published</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">
                  Custom CNN model trained on 23,000+ images from UTKFace dataset for skin-tone classification across 5 categories. Achieved 81.12% accuracy using batch normalization and hyperparameter tuning. Published in IEEE conference proceedings.
                </p>
                <ul className="space-y-2 text-slate-300 text-sm">
                  <li>✓ Trained on 23,000+ images with advanced preprocessing</li>
                  <li>✓ 81.12% classification accuracy across 5 categories</li>
                  <li>✓ Batch normalization and dropout regularization</li>
                  <li>✓ Published paper: IEEE Xplore (2024)</li>
                </ul>
                <div className="flex gap-2 flex-wrap">
                  <Badge className="bg-purple-600/50 text-purple-200">Python</Badge>
                  <Badge className="bg-purple-600/50 text-purple-200">CNN</Badge>
                  <Badge className="bg-purple-600/50 text-purple-200">TensorFlow</Badge>
                  <Badge className="bg-purple-600/50 text-purple-200">Computer Vision</Badge>
                </div>
                <div className="flex gap-3 pt-4">
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700 transition-all hover:shadow-lg hover:shadow-purple-500/50" asChild>
                    <a href="https://ieeexplore.ieee.org/document/11377529" target="_blank" rel="noopener noreferrer">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Read Paper
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Pneumonia Detection */}
            <Card className="glass-effect card-hover border-green-500/30 bg-green-950/20">
              <CardHeader>
                <CardTitle className="text-xl text-green-300">Pneumonia Detection Using CNN</CardTitle>
                <CardDescription className="text-slate-400">Medical AI • Jun 2024 – Nov 2024</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-300">
                  CNN-based binary classification system for pneumonia detection from chest X-ray images with optimized preprocessing and model tuning.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Badge className="bg-green-600/50 text-green-200">Python</Badge>
                  <Badge className="bg-green-600/50 text-green-200">CNN</Badge>
                  <Badge className="bg-green-600/50 text-green-200">Medical Imaging</Badge>
                  <Badge className="bg-green-600/50 text-green-200">Image Processing</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Experience */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-orange-400" />
            <h2 className="text-3xl font-bold text-white">Professional Experience</h2>
          </div>
          <div className="space-y-4">
            <Card className="glass-effect card-hover border-orange-500/30 bg-orange-950/20">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-lg text-orange-300">AI & Deep Learning Intern</CardTitle>
                    <CardDescription className="text-slate-400">IIT Patna - Research Internship</CardDescription>
                  </div>
                  <Badge className="bg-orange-600/50 text-orange-200">May 2024 – Jul 2024</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-slate-300">
                <ul className="space-y-2 text-sm">
                  <li>✓ Implemented CNN architectures for disaster prediction using satellite image datasets</li>
                  <li>✓ Applied Python-based image preprocessing pipelines</li>
                  <li>✓ Contributed to model evaluation and performance benchmarking</li>
                  <li>✓ Part of a funded research project at IIT Patna</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-effect card-hover border-purple-500/30 bg-purple-950/20">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <CardTitle className="text-lg text-purple-300">Campus Ambassador</CardTitle>
                    <CardDescription className="text-slate-400">Pregrad - Marketing & Outreach</CardDescription>
                  </div>
                  <Badge className="bg-purple-600/50 text-purple-200">Oct 2023 – Nov 2023</Badge>
                </div>
              </CardHeader>
              <CardContent className="text-slate-300 text-sm">
                <p>Led student outreach initiatives and promoted platform services across campus communities.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Education */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl font-bold text-white">Education</h2>
          </div>
          <Card className="glass-effect card-hover border-blue-500/30 bg-blue-950/20">
            <CardContent className="pt-6 space-y-4">
              <div className="border-l-4 border-blue-400 pl-4">
                <h3 className="text-lg font-semibold text-blue-300">B.Tech in Computer Science (AI)</h3>
                <p className="text-slate-400">Savitribai Phule Pune University (2022 – 2026)</p>
                <p className="text-sm text-slate-300 mt-2">CGPA: 7.47 | 7th Semester SGPA: 8.57</p>
              </div>
              <Separator className="bg-white/10" />
              <div className="border-l-4 border-blue-400 pl-4">
                <h3 className="text-lg font-semibold text-blue-300">HSC (Class 12)</h3>
                <p className="text-slate-400">Tukaram Kayande Higher Secondary School (2022)</p>
                <p className="text-sm text-slate-300 mt-2">85.67%</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Leadership & Certifications */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Users className="w-8 h-8 text-green-400" />
            <h2 className="text-3xl font-bold text-white">Leadership & Certifications</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="glass-effect card-hover border-green-500/30 bg-green-950/20">
              <CardHeader>
                <CardTitle className="text-sm text-green-400">Leadership Roles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-slate-300 text-sm">
                <div className="border-l-4 border-green-400 pl-3">
                  <p className="font-semibold text-green-300">Public Relations Head – AICC (GHRCEM)</p>
                  <p className="text-xs text-slate-400 mt-1">2025</p>
                  <p className="mt-1">Led student communication initiatives and supported college-level activities.</p>
                </div>
                <Separator className="bg-white/10" />
                <div className="border-l-4 border-green-400 pl-3">
                  <p className="font-semibold text-green-300">Finance & Sponsorship Head – E-Cell (GHRCEM)</p>
                  <p className="text-xs text-slate-400 mt-1">2025</p>
                  <p className="mt-1">Assisted with sponsorship outreach and budget handling.</p>
                </div>
                <Separator className="bg-white/10" />
                <div className="border-l-4 border-green-400 pl-3">
                  <p className="font-semibold text-green-300">Volunteer – NSS</p>
                  <p className="text-xs text-slate-400 mt-1">2022 – 2025</p>
                  <p className="mt-1">Actively involved in community service and social awareness programs.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect card-hover border-cyan-500/30 bg-cyan-950/20">
              <CardHeader>
                <CardTitle className="text-sm text-cyan-400">Certifications & Learning</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-slate-300 text-sm">
                <div>
                  <p className="font-semibold text-cyan-300">Generative AI Essentials for Data Analytics</p>
                  <p className="text-xs text-slate-400">Coursera</p>
                </div>
                <Separator className="bg-white/10" />
                <div>
                  <p className="font-semibold text-cyan-300">Google Analytics Certification</p>
                  <p className="text-xs text-slate-400">Google Skillshop</p>
                </div>
                <Separator className="bg-white/10" />
                <div>
                  <p className="font-semibold text-cyan-300">Train ML Models for Document Understanding</p>
                  <p className="text-xs text-slate-400">UiPath</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Initiatives */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Initiatives</h2>
          <Card className="glass-effect card-hover border-slate-500/30 bg-slate-900/20">
            <CardContent className="pt-6">
              <div className="border-l-4 border-slate-500 pl-4">
                <h3 className="font-semibold text-slate-200">School Tiffin Service (Concept Stage)</h3>
                <p className="text-slate-400 mt-2">Explored a small-scale food service idea, focusing on basic planning, cost estimation, and feasibility analysis.</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8">Languages</h2>
          <div className="flex gap-4 flex-wrap">
            {["English (Professional)", "Hindi (Native)", "Marathi (Native)"].map((lang) => (
              <Badge key={lang} className="px-4 py-2 bg-blue-600/30 text-blue-300 border-blue-500/50 border">
                {lang}
              </Badge>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="container mx-auto px-6 py-8 text-center text-slate-400 text-sm">
          <p>Designed & Built by Saif Sayyad</p>
        </div>
      </footer>
    </div>
  )
}
