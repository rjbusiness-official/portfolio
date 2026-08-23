import Image from "next/image";
import ScrollAnimator from "./ScrollAnimator";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const profile = {
  name: "Rhustom C. De Guzman",
  role: "Full Stack Developer",
  email: "rhustom09@gmail.com",
  location: "Rizal, Philippines",
  phone: "(+63)9465855149",
  availability: "Available for custom web apps and business systems",
};

const services = [
  {
    title: "Custom Web Applications",
    copy: "Internal tools, portals, request systems, dashboards, and role-based business apps built around your workflow.",
    detail: "React, Vue, Laravel, ASP.NET",
  },
  {
    title: "Business Process Automation",
    copy: "Replace spreadsheets, forms, and manual approvals with clean systems that track work from request to completion.",
    detail: "Approvals, records, reporting",
  },
  {
    title: "API & System Integration",
    copy: "Connect web apps with third-party platforms and business software so data moves with less manual effort.",
    detail: "SAP Business One, Jodoo, SSO",
  },
  {
    title: "Maintenance & Feature Development",
    copy: "Improve existing Laravel, React, Vue, ASP.NET, and database-backed systems with steady fixes and enhancements.",
    detail: "Performance, reliability, updates",
  },
];

const projects = [
  {
    title: "Grocery Management System",
    category: "Inventory and sales operations",
    result:
      "A web app concept for managing grocery products, stock movement, transactions, and daily operational records.",
    accent: "from-emerald-400 to-teal-300",
    tags: ["Inventory", "Transactions", "Admin Panel", "Reports"],
    githubUrl: "https://rjbusiness-official.github.io/groceryapp/",
  },
  {
    title: "Medical Management System",
    category: "Clinic and patient workflow",
    result:
      "A system for organizing patient records, appointments, medical transactions, and staff-facing management screens.",
    accent: "from-sky-400 to-indigo-300",
    tags: ["Patient Records", "Appointments", "Roles", "Database"],
    githubUrl: "https://rjbusiness-official.github.io/medicalcenterpro/",
  },
  {
    title: "CRM System",
    category: "Customer relationship management",
    result:
      "A CRM-style application for tracking customers, inquiries, follow-ups, sales activity, and business communication.",
    accent: "from-rose-400 to-orange-300",
    tags: ["Leads", "Follow-ups", "Pipeline", "Dashboard"],
    githubUrl: "https://rjbusiness-official.github.io/crmapp/",
  },
  {
    title: "SmartLib System",
    category: "Library application",
    result:
      "A customized web application designed to record and monitor students’ time-in and time-out in the library.",
    accent: "from-[#ff874e] to-[#fffa81]",
    tags: ["Custom Workflow", "Library Tools", "Admin UI", "Dashboard"],
    githubUrl: "",
  },
  {
    title: "Custom Web App",
    category: "Business-fit application",
    result:
      "A customized web application built to fit my friend's business process, daily tasks, and management needs.",
    accent: "from-[#f8d56b] to-[#7ee7d4]",
    tags: ["Custom Workflow", "Business Tools", "Admin UI", "Automation"],
    githubUrl: "https://rjbusiness-official.github.io/customapp/",
  },
];

const experience = [
  "Developed and maintained business-critical systems at Cathay Land Inc. using VB.NET, PHP Laravel, Vue, ASP.NET, React, and SQL Server.",
  "Transformed a payment request process from Google Forms into a Laravel web application with better tracking and workflow control.",
  "Built API integrations with Jodoo and SAP Business One to automate workflows and synchronize important business data.",
  "Designed Single Sign-On systems and re-architected one with Vue and ASP.NET API for a more scalable setup.",
];

const skills = [
  "ReactJS",
  "Vue JS",
  "TypeScript",
  "JavaScript",
  "PHP Laravel",
  "ASP.NET",
  "VB.NET",
  "C#",
  "SQL Server",
  "T-SQL",
  "Stored Procedures",
  "Tailwind CSS",
  "API Integration",
  "SAP Business One DI API",
  "Jodoo",
  "Apache",
  "cPanel",
  "Gitea",
  "Codex"
];

const workProcess = [
  "Map the business workflow and identify the records, roles, approvals, and reports the system needs.",
  "Design the screens and database flow so users can complete daily tasks without extra confusion.",
  "Build the application with clean frontend, backend, API, and database layers.",
  "Test real scenarios, refine performance, and support future features after launch.",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070d0c] text-[#eef7f4]">
      <ScrollAnimator />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#070d0c]/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#top" className="text-sm font-black uppercase tracking-[0.18em] text-white">
            {profile.name}
          </a>
          <div className="hidden items-center gap-7 text-sm font-semibold text-[#9cafaa] md:flex">
            <a className="transition hover:text-white" href="#services">
              Services
            </a>
            <a className="transition hover:text-white" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-white" href="#experience">
              Experience
            </a>
            <a className="transition hover:text-white" href="#contact">
              Contact
            </a>
          </div>
          <a
            href={`mailto:${profile.email}?subject=Web%20App%20Project%20Inquiry`}
            className="rounded-full bg-[#7ee7d4] px-4 py-2 text-sm font-bold text-[#06110f] shadow-lg shadow-[#7ee7d4]/15 transition hover:bg-[#a4f4e5]"
          >
            Hire Me
          </a>
        </nav>
      </header>

      <section
        id="top"
        className="mx-auto grid max-w-[88rem] gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[0.76fr_1.24fr] lg:items-center lg:pb-20 lg:pt-16"
      >
        <div data-scroll-reveal="left">
          <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#b8c9c3] shadow-sm">
            <span>{profile.role}</span>
            <span className="h-1 w-1 rounded-full bg-[#ff8a65]" />
            <span>{profile.location}</span>
          </div>
          <p className="mb-4 text-base font-bold uppercase tracking-[0.24em] text-[#7ee7d4]">
            {profile.availability}
          </p>
          <h1 className="max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            I BUILD WEB APPS THAT MAKE BUSINESS WORK EASIER TO MANAGE.
          </h1>
          <p className="mt-6 max-w-2xl text-l font-semibold leading-8 text-[#c2d4cf] sm:text-l">
            I help teams turn manual processes into scalable web applications, dashboards, API integrations, and
            database-backed systems.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-[#7ee7d4] px-6 py-3 text-sm font-black text-[#06110f] shadow-lg shadow-[#7ee7d4]/15 transition hover:bg-[#a4f4e5]"
            >
              View Projects
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-black text-white shadow-sm transition hover:border-[#7ee7d4]/60 hover:bg-[#7ee7d4]/10"
            >
              See Services
            </a>
          </div>
        </div>

        <div className="relative lg:-mr-6 xl:-mr-10" data-scroll-reveal="right" data-reveal-delay="120ms">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#101a17] p-3 shadow-2xl shadow-black/40">
            <Image
              src={`${basePath}/portfolio-hero.png`}
              alt="Laptop and mobile screens showing polished website and dashboard mockups"
              width={1536}
              height={864}
              priority
              className="aspect-[16/10] rounded-[1.4rem] object-cover brightness-[0.72] contrast-110 saturate-125"
            />
            <div className="absolute bottom-6 left-6 right-6 grid gap-3 rounded-2xl border border-white/10 bg-[#07110f]/88 p-4 shadow-xl shadow-black/30 backdrop-blur sm:grid-cols-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#7ee7d4]">Focus</p>
                <p className="mt-1 text-sm font-bold text-white">Business apps</p>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#ff8a65]">Systems</p>
                <p className="mt-1 text-sm font-bold text-white">Custom style workflows</p>
              </div>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.14em] text-[#f8d56b]">Build</p>
                <p className="mt-1 text-sm font-bold text-white">Full stack delivery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="border-y border-white/10 bg-[#0c1513]">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div data-scroll-reveal="left">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#7ee7d4]">Services</p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
                Full stack development for teams that need working systems, not just pages.
              </h2>
              <p className="mt-5 leading-7 text-[#aebfba]">
                I build practical web apps that organize data, automate repetitive work, and give teams a clearer way
                to manage daily operations.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  data-scroll-reveal
                  data-reveal-delay={`${index * 90}ms`}
                  className="rounded-lg border border-white/10 bg-[#111d1a] p-6 shadow-lg shadow-black/15"
                >
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff8a65]">{service.detail}</p>
                  <h3 className="mt-3 text-xl font-black text-white">{service.title}</h3>
                  <p className="mt-3 leading-7 text-[#aebfba]">{service.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-[90rem] px-5 py-16 sm:px-8">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end" data-scroll-reveal>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#7ee7d4]">Project Showcase</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
              Useful systems built for real users and business ideas.
            </h2>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {projects.map((project, index) => (
            <article
              key={project.title}
              data-scroll-reveal
              data-reveal-delay={`${index * 100}ms`}
              className="overflow-hidden rounded-lg border border-white/10 bg-[#101a17] shadow-xl shadow-black/20"
            >
              <div className={`h-2 bg-gradient-to-r ${project.accent}`} />
              <div className="p-5">
                <div className="mb-5 rounded-lg border border-white/10 bg-[#07110f] p-4">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-[#ff8a65]" />
                      <span className="h-3 w-3 rounded-full bg-[#f8d56b]" />
                      <span className="h-3 w-3 rounded-full bg-[#7ee7d4]" />
                    </div>
                    <span className="text-xs font-black uppercase tracking-[0.14em] text-[#93a8a1]">App</span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-6 w-3/4 rounded bg-[#e8f5f1]" />
                    <div className="h-3 w-full rounded bg-[#263832]" />
                    <div className="h-3 w-5/6 rounded bg-[#263832]" />
                    <div className="grid grid-cols-3 gap-2 pt-3">
                      <div className="h-16 rounded bg-[#16231f] shadow-sm" />
                      <div className="h-16 rounded bg-[#16231f] shadow-sm" />
                      <div className="h-16 rounded bg-[#16231f] shadow-sm" />
                    </div>
                  </div>
                </div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7ee7d4]">{project.category}</p>
                <h3 className="mt-2 text-2xl font-black text-white">{project.title}</h3>
                <p className="mt-3 leading-7 text-[#aebfba]">{project.result}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-bold text-[#c9d8d3]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-[#7ee7d4]/60 bg-[#7ee7d4]/10 px-5 py-3 text-sm font-black text-[#7ee7d4] transition hover:bg-[#7ee7d4] hover:text-[#06110f]"
                  >
                    Go to Demo App
                  </a>
                ) : (
                  <span className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-black text-[#93a8a1]">
                    Go to Demo App
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="border-y border-white/10 bg-[#0c1513] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div data-scroll-reveal="left">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#7ee7d4]">Experience</p>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
              Business system experience from real company operations.
            </h2>
            <p className="mt-5 max-w-lg leading-7 text-[#aebfba]">
              At Cathay Land Inc., I work on internal systems, integrations, database-backed workflows, and tools that
              support accounting and operational teams.
            </p>
          </div>
          <ol className="grid gap-4">
            {experience.map((item, index) => (
              <li
                key={item}
                data-scroll-reveal="right"
                data-reveal-delay={`${index * 90}ms`}
                className="grid gap-4 rounded-lg border border-white/10 bg-[#111d1a] p-5 sm:grid-cols-[4rem_1fr] sm:items-center"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#7ee7d4] text-lg font-black text-[#06110f]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-lg font-semibold leading-7 text-[#eef7f4]">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div data-scroll-reveal="left">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#7ee7d4]">Stack</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
              A practical full stack toolkit for business applications.
            </h2>
            <p className="mt-5 leading-7 text-[#aebfba]">
              My experience covers frontend interfaces, backend APIs, database procedures, integrations, and deployment
              environments used by real teams.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={skill}
                data-scroll-reveal="fade"
                data-reveal-delay={`${index * 35}ms`}
                className="rounded-full border border-white/10 bg-[#101a17] px-4 py-2 text-sm font-black text-[#e0ebe7] shadow-lg shadow-black/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="border-y border-white/10 bg-[#0c1513]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div data-scroll-reveal="left">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#7ee7d4]">Process</p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
              From rough workflow to usable system.
            </h2>
          </div>
          <ol className="grid gap-4">
            {workProcess.map((item, index) => (
              <li
                key={item}
                data-scroll-reveal="right"
                data-reveal-delay={`${index * 90}ms`}
                className="grid gap-4 rounded-lg border border-white/10 bg-[#111d1a] p-5 sm:grid-cols-[4rem_1fr] sm:items-center"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff8a65] text-lg font-black text-[#06110f]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-lg font-semibold leading-7 text-[#eef7f4]">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-[#070d0c]">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div data-scroll-reveal="left">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-[#ff8a65]">Contact</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-white sm:text-5xl">
              Need a web app for operations, records, requests, or reporting?
            </h2>
            <p className="mt-5 max-w-2xl leading-7 text-[#aebfba]">
              Send the workflow you want to improve and I can help turn it into a clear, maintainable system.
            </p>
          </div>
          <div
            className="rounded-lg border border-white/10 bg-[#101a17] p-6 shadow-xl shadow-black/20"
            data-scroll-reveal="right"
            data-reveal-delay="120ms"
          >
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#93a8a1]">Email</p>
            <a className="mt-2 block break-words text-2xl font-black text-[#7ee7d4]" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-[#93a8a1]">Mobile Number</p>
            <p className="mt-2 block break-words text-base font-bold text-white">{profile.phone}</p>
            <a
              href={`mailto:${profile.email}?subject=Web%20App%20Project%20Inquiry`}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#7ee7d4] px-6 py-3 text-sm font-black text-[#06110f] transition hover:bg-[#a4f4e5]"
            >
              Start a Web App Project
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
