
import React from "react";
import "./App.css";

export default function Portfolio() {
  return (
    <main className="bg-gray-100 text-gray-800 min-h-screen font-sans">
      <header className="bg-blue-900 text-white py-8 text-center shadow">
        <h1 className="text-4xl font-bold">Saif Sayyad</h1>
        <p className="text-sm mt-1">Final-year B.Tech Computer Science (AI)</p>
        <p className="mt-2">📍 Pune, Maharashtra | 📧 aaamansayyad.131@gmail.com | 📞 +91-7798692515</p>
        <p><a href="https://linkedin.com/in/saif-sayyad-ab7ba0250" className="underline text-blue-300" target="_blank">LinkedIn Profile</a></p>
      </header>

      <section className="p-6">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p>
          Final-year B.Tech Computer Science (AI) student with hands-on experience in data analytics, Python, and deep learning. 
          Skilled in tools like Tableau, Power BI, and SQL. Interned with IIT Patna on AI-based disaster prediction.
        </p>
      </section>

      <section className="p-6 bg-white shadow">
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <ul className="list-disc pl-6">
          <li><strong>Pneumonia Detection Using CNN:</strong> Built a CNN-based tool to detect pneumonia from chest X-rays with high accuracy.</li>
          <li><strong>Lernifyy3 – Udemy Replica:</strong> Developed a platform offering video courses, tests, and analytics with dashboards and scoring.</li>
        </ul>
      </section>

      <section className="p-6">
        <h2 className="text-2xl font-semibold mb-2">Internships</h2>
        <ul className="list-disc pl-6">
          <li><strong>IIT Patna – AI & Deep Learning Intern:</strong> Worked on image processing and disaster prediction (May–Jul 2024).</li>
          <li><strong>Pregrad – Campus Ambassador:</strong> Promoted services and student outreach (Oct–Nov 2023).</li>
        </ul>
      </section>

      <section className="p-6 bg-white shadow">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <p><strong>Technical:</strong> Python (Pandas, NumPy, Seaborn), SQL, Tableau, Power BI, Excel</p>
        <p><strong>Soft Skills:</strong> Leadership, Problem Solving, Communication, Time Management</p>
      </section>

      <section className="p-6">
        <h2 className="text-2xl font-semibold mb-2">Leadership & Volunteer Work</h2>
        <ul className="list-disc pl-6">
          <li>Public Relations Head – AI Coding Club</li>
          <li>Finance & Sponsorship Head – E-Cell</li>
          <li>NSS Volunteer (Jan 2024 – Present)</li>
        </ul>
      </section>

      <footer className="bg-blue-900 text-white text-center py-4 mt-6">
        <p>© 2025 Saif Sayyad | Portfolio</p>
      </footer>
    </main>
  );
}
