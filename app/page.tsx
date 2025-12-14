"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, FileText, ExternalLink, ChevronDown } from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "experience", "projects", "certifications", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-lg font-semibold hover:text-accent-foreground transition-colors"
            >
              Vidit Pawar
            </button>

            <div className="hidden md:flex items-center gap-8">
              {["About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-sm transition-colors hover:text-foreground ${
                    activeSection === item.toLowerCase() ? "text-foreground font-medium" : "text-muted-foreground"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon" asChild className="hover:text-accent-foreground">
                <a href="https://github.com/viditpawar" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="hover:text-accent-foreground">
                <a href="https://www.linkedin.com/in/viditpawar/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-6 lg:px-12">
        <div className="max-w-7xl w-full">
          <div className="grid lg:grid-cols-[300px_1fr] gap-12 lg:gap-20 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-3xl" />
                <img
                  src="/images/Vidit.jpg"
                  alt="Vidit Pawar"
                  className="relative w-64 h-64 rounded-full object-cover border-4 border-cyan-500/30 shadow-2xl"
                />
              </div>
            </div>

            {/* Hero Content */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance">Cloud & DevOps Engineer</h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty">
                  Automating secure, scalable multi-cloud infrastructure across AWS, Azure, and GCP using Terraform,
                  CI/CD, and Kubernetes.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild className="bg-cyan-500 hover:bg-cyan-600 text-white">
                  <a href="#contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Get in Touch
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="/assets/Resume_Vidit.pdf" target="_blank" rel="noreferrer">
                    <FileText className="mr-2 h-5 w-5" />
                    View Resume
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block"
          >
            <ChevronDown className="h-8 w-8 text-muted-foreground" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 lg:px-12 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-cyan-500">About</h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Cloud & DevOps Engineer with hands-on experience designing and automating multi-cloud (AWS, Azure, GCP)
              infrastructure. Skilled in Infrastructure as Code (Terraform, Ansible), CI/CD (Azure DevOps, Jenkins,
              GitHub Actions), and container orchestration (Kubernetes, Docker).
            </p>
            <p>
              Proven success improving deployment efficiency, security, and scalability through automation and
              observability practices. Currently pursuing a Master's in Management Information Systems at the University
              of Arizona.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 lg:px-12 border-t border-border bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-cyan-500">Technical Skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow border-border/50">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Cloud Platforms</h3>
              <div className="flex flex-wrap gap-2">
                {["AWS", "Azure", "GCP", "EC2", "S3", "Lambda", "RDS", "ECS", "EKS", "AKS"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-cyan-500/10 text-cyan-300 border-cyan-500/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-border/50">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Infrastructure as Code</h3>
              <div className="flex flex-wrap gap-2">
                {["Terraform", "Ansible", "CloudFormation", "Chef", "Puppet", "ARM Templates"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-cyan-500/10 text-cyan-300 border-cyan-500/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-border/50">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">CI/CD & Automation</h3>
              <div className="flex flex-wrap gap-2">
                {["Azure DevOps", "Jenkins", "GitHub Actions", "Docker", "Kubernetes", "Helm", "ArgoCD"].map(
                  (skill) => (
                    <Badge key={skill} variant="secondary" className="bg-cyan-500/10 text-cyan-300 border-cyan-500/20">
                      {skill}
                    </Badge>
                  ),
                )}
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-border/50">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Monitoring & Security</h3>
              <div className="flex flex-wrap gap-2">
                {["Grafana", "Prometheus", "CloudTrail", "Azure Security Center", "Vault", "SonarQube", "Veracode"].map(
                  (skill) => (
                    <Badge key={skill} variant="secondary" className="bg-cyan-500/10 text-cyan-300 border-cyan-500/20">
                      {skill}
                    </Badge>
                  ),
                )}
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-border/50">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "C Programming", "SQL", "PowerShell", "Bash"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-cyan-500/10 text-cyan-300 border-cyan-500/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow border-border/50">
              <h3 className="text-xl font-semibold mb-4 text-cyan-400">Databases & BI</h3>
              <div className="flex flex-wrap gap-2">
                {["MySQL", "PostgreSQL", "Oracle SQL", "BigQuery", "Power BI", "Tableau"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-cyan-500/10 text-cyan-300 border-cyan-500/20">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 lg:px-12 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-cyan-500">Experience</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-cyan-500/30 hidden md:block" />

            <div className="space-y-12">
              {/* Blue Cross Blue Shield */}
              <div className="relative pl-0 md:pl-8">
                <div className="absolute left-0 top-2 w-3 h-3 bg-cyan-500 rounded-full hidden md:block -translate-x-[5px]" />

                <Card className="p-6 hover:shadow-lg transition-all hover:translate-x-1 border-border/50">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">DevOps Intern</h3>
                      <p className="text-cyan-400">Blue Cross Blue Shield of Arizona</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">May 2025 - Aug 2025</span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>
                      Automated AWS infrastructure provisioning using Terraform and CloudFormation, standardizing
                      multi-environment deployments
                    </li>
                    <li>
                      Integrated Veracode security scans into 300+ CI/CD pipelines to proactively identify and mitigate
                      vulnerabilities
                    </li>
                    <li>
                      Built 10+ automated smoke tests with REST API validation in ADO, increasing deployment reliability
                    </li>
                    <li>
                      Collaborated with DevSecOps teams to integrate Azure Key Vault and enforce role-based access
                    </li>
                  </ul>
                </Card>
              </div>

              {/* LTIMindtree */}
              <div className="relative pl-0 md:pl-8">
                <div className="absolute left-0 top-2 w-3 h-3 bg-cyan-500 rounded-full hidden md:block -translate-x-[5px]" />

                <Card className="p-6 hover:shadow-lg transition-all hover:translate-x-1 border-border/50">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">Cloud Engineer</h3>
                      <p className="text-cyan-400">LTIMindtree</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">Jul 2022 - May 2024</span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>
                      Streamlined infrastructure deployment within CI/CD pipelines using Terraform and Ansible,
                      resulting in a 70% reduction in manual effort
                    </li>
                    <li>Deployed AWS Lambda and Python automation scripts to streamline cloud operations</li>
                    <li>
                      Optimized containerized workloads on Kubernetes (AKS, EKS), ensuring high availability and
                      scalability
                    </li>
                    <li>
                      Configured Grafana and Prometheus dashboards to monitor cloud workloads, enabling real-time
                      observability
                    </li>
                  </ul>
                </Card>
              </div>

              {/* MEDTOUREASY */}
              <div className="relative pl-0 md:pl-8">
                <div className="absolute left-0 top-2 w-3 h-3 bg-cyan-500 rounded-full hidden md:block -translate-x-[5px]" />

                <Card className="p-6 hover:shadow-lg transition-all hover:translate-x-1 border-border/50">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">Data Analyst Intern</h3>
                      <p className="text-cyan-400">MEDTOUREASY</p>
                    </div>
                    <span className="text-sm text-muted-foreground whitespace-nowrap">Jun 2021 - Jul 2021</span>
                  </div>
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    <li>
                      Engineered scalable data warehouse on GCP with partitioning and automation, improving query
                      performance by 30%
                    </li>
                    <li>Built automated data pipelines integrating multiple sources into BigQuery</li>
                    <li>Developed monitoring dashboards using Google Data Studio for real-time visibility</li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 lg:px-12 border-t border-border bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-cyan-500">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-border/50 group">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-semibold group-hover:text-cyan-400 transition-colors">
                  Dynamic Fare Estimation for NYC Taxis
                </h3>
                <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-cyan-400 transition-colors flex-shrink-0" />
              </div>
              <p className="text-muted-foreground mb-4">
                Developed a cloud-hosted fare prediction system using NYC TLC data, deploying regression models for
                real-time taxi fare estimation with Streamlit UI, PostgreSQL, and Redis caching.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Cloud Computing", "Docker", "PostgreSQL", "Redis", "GitHub Actions"].map((tech) => (
                  <Badge key={tech} variant="outline" className="border-cyan-500/30 text-cyan-400">
                    {tech}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Aug 2025 – Dec 2025</p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-border/50 group">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-semibold group-hover:text-cyan-400 transition-colors">
                  YouTube Trends Analysis
                </h3>
                <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-cyan-400 transition-colors flex-shrink-0" />
              </div>
              <p className="text-muted-foreground mb-4">
                Collected 320,000+ YouTube Trending Video records from multiple countries into AWS S3. Architected AWS
                Glue ETL pipeline and integrated AWS Athena with Power BI to build dashboards.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["AWS Glue", "AWS Athena", "S3", "Power BI", "Data Mining"].map((tech) => (
                  <Badge key={tech} variant="outline" className="border-cyan-500/30 text-cyan-400">
                    {tech}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Jan 2025 – Apr 2025</p>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-all hover:-translate-y-1 border-border/50 group">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-semibold group-hover:text-cyan-400 transition-colors">Care Companion</h3>
                <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-cyan-400 transition-colors flex-shrink-0" />
              </div>
              <p className="text-muted-foreground mb-4">
                Led agile ceremonies and collaborated with cross-functional teams using Microsoft Project, Figma, and
                Jira. Developed comprehensive user stories with Figma for process visualization.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Agile", "Figma", "Jira", "Microsoft Project", "System Analysis"].map((tech) => (
                  <Badge key={tech} variant="outline" className="border-cyan-500/30 text-cyan-400">
                    {tech}
                  </Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Aug 2024 – Dec 2024</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 px-6 lg:px-12 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-cyan-500">Certifications</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Microsoft Certified: Azure Administrator Associate",
              "Microsoft Certified: Azure Fundamentals",
              "Microsoft 365 Certified: Fundamentals",
              "Microsoft Certified: Power BI Data Analyst Associate",
              "Microsoft Certified: Azure Data Fundamentals",
              "HackerRank SQL (Intermediate)",
            ].map((cert) => (
              <Card
                key={cert}
                className="p-4 hover:shadow-lg transition-all hover:translate-x-1 border-border/50 group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full group-hover:scale-150 transition-transform" />
                  <p className="text-sm">{cert}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 lg:px-12 border-t border-border bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-cyan-500">Get In Touch</h2>
          <p className="text-lg text-muted-foreground mb-8 text-balance">
            I'm always open to discussing new opportunities, collaborations, or cloud infrastructure challenges. Feel
            free to reach out!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Button size="lg" asChild className="bg-cyan-500 hover:bg-cyan-600 text-white">
              <a href="mailto:vidit.pawar25@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                vidit.pawar25@gmail.com
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="tel:+15205353666">+1 520-535-3666</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <Button variant="ghost" size="lg" asChild>
              <a href="https://www.linkedin.com/in/viditpawar/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="https://github.com/viditpawar" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 lg:px-12 border-t border-border text-center text-sm text-muted-foreground">
        <p>© 2025 Vidit Pawar. Built with Next.js and Tailwind CSS.</p>
      </footer>
    </div>
  )
}
