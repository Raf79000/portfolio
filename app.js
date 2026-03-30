/* ===== TRANSLATIONS ===== */
const translations = {
  fr: {
    "nav.about": "À propos",
    "nav.skills": "Compétences",
    "nav.projects": "Projets",
    "nav.contact": "Contact",
    "hero.eyebrow": "Ingénieur DevOps & CI/CD",
    "hero.title.line1": "Je conçois des",
    "hero.title.line2": "infrastructures",
    "hero.title.line3": "fiables.",
    "hero.description":
      "De la pipeline CI/CD au déploiement en production — je construis des systèmes robustes, automatisés et maintenables. Basé en France.",
    "hero.cta.projects": "Voir mes projets",
    "hero.cta.contact": "Me contacter",
    "about.eyebrow": "À propos",
    "about.title": "Profil",
    "about.p1":
      "Ingénieur en informatique passionné par l'automatisation et les systèmes distribués. Mon parcours en alternance chez e.SNCF Solutions m'a permis de développer une expertise solide en usine logicielle, CI/CD et infrastructure cloud.",
    "about.p2":
      "Je conçois des pipelines GitLab CI avec Dagger, j'optimise des images Docker, et je déploie des applications conteneurisées sur des architectures cloud. Mon approche est méthodique, documentée et orientée amélioration continue.",
    "about.p3":
      "En dehors du code, je m'intéresse à la mécanique automobile et moto, aux jeux vidéo (game design et systèmes) et à la nature. Curieux et rigoureux, je cherche toujours à comprendre les systèmes en profondeur.",
    "about.detail.location.label": "Localisation",
    "about.detail.location.value": "France",
    "about.detail.exp.label": "Expérience",
    "about.detail.exp.value": "e.SNCF Solutions, Linnaeus University, L3i",
    "about.detail.focus.label": "Spécialité",
    "about.detail.focus.value": "DevOps & CI/CD",
    "about.detail.os.label": "Environnement",
    "about.detail.os.value": "Linux, Windows, OSX",
    "skills.eyebrow": "Compétences",
    "skills.title": "Stack technique",
    "skills.devops.title": "DevOps & Infrastructure",
    "skills.dev.title": "Développement",
    "skills.data.title": "Données & Systèmes",
    "skills.tools.title": "Outils & Méthodes",
    "skills.learning.title": "En apprentissage",
    "skills.practices.title": "Bonnes pratiques",
    "projects.eyebrow": "Projets",
    "projects.title": "Réalisations",
    "projects.cicd.title": "Analyse de code augmentée par IA",
    "projects.cicd.desc":
      "Conception et intégration d'un outil d'analyse de code enrichi par intelligence artificielle, orchestré via des pipelines GitLab CI et Dagger, en collaboration avec le socle IA de la SNCF.",
    "projects.fullstack.title": "Application web Full-Stack conteneurisée",
    "projects.fullstack.desc":
      "Architecture complète avec frontend, backend Node.js et base de données, entièrement conteneurisée avec Docker Compose. Déploiement automatisé sur cloud Azure via GitLab CI.",
    "projects.infra.title": "Infrastructure reverse proxy & load balancing",
    "projects.infra.desc":
      "Mise en place d'une infrastructure avec Traefik et NGINX comme reverse proxy, gestion SSL automatique, load balancing et routage dynamique pour des services conteneurisés.",
    "projects.docker.title": "Optimisation d'images Docker",
    "projects.docker.desc":
      "Réduction drastique de la taille des images Docker via multi-stage builds, base Alpine, et bonnes pratiques de layering. Résultat : images plus légères, builds plus rapides, déploiements accélérés.",
    "contact.eyebrow": "Contact",
    "contact.title": "Restons en contact",
    "contact.text":
      "Vous avez un projet, une opportunité ou simplement envie d'échanger ? N'hésitez pas à me contacter via les canaux ci-dessous.",
    "contact.linkedin.value": "Voir mon profil",
    "contact.github.value": "Voir mes repos",
    "footer.copy": "© 2026 Raphaël Daigre. Tous droits réservés.",
    "footer.built": "Conçu avec PerplexityAI.",
  },
  en: {
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.eyebrow": "DevOps & CI/CD Engineer",
    "hero.title.line1": "I build",
    "hero.title.line2": "reliable",
    "hero.title.line3": "infrastructure.",
    "hero.description":
      "From CI/CD pipelines to production deployment — I build robust, automated, and maintainable systems. Based in France.",
    "hero.cta.projects": "View my projects",
    "hero.cta.contact": "Get in touch",
    "about.eyebrow": "About",
    "about.title": "Profile",
    "about.p1":
      "Software engineer passionate about automation and distributed systems. My work-study experience at e.SNCF Solutions allowed me to develop strong expertise in software factory, CI/CD, and cloud infrastructure.",
    "about.p2":
      "I design GitLab CI pipelines with Dagger, optimize Docker images, and deploy containerized applications on cloud architectures. My approach is methodical, well-documented, and focused on continuous improvement.",
    "about.p3":
      "Outside of code, I'm interested in automotive and motorcycle mechanics, video games (game design and systems), and nature. Curious and thorough, I always seek to understand systems in depth.",
    "about.detail.location.label": "Location",
    "about.detail.location.value": "France",
    "about.detail.exp.label": "Experience",
    "about.detail.exp.value": "e.SNCF Solutions, Linnaeus University, L3i",
    "about.detail.focus.label": "Specialty",
    "about.detail.focus.value": "DevOps & CI/CD",
    "about.detail.os.label": "Environment",
    "about.detail.os.value": "Linux, Windows, OSX",
    "skills.eyebrow": "Skills",
    "skills.title": "Tech Stack",
    "skills.devops.title": "DevOps & Infrastructure",
    "skills.dev.title": "Development",
    "skills.data.title": "Data & Systems",
    "skills.tools.title": "Tools & Methods",
    "skills.learning.title": "Currently Learning",
    "skills.practices.title": "Best Practices",
    "projects.eyebrow": "Projects",
    "projects.title": "Work",
    "projects.cicd.title": "AI-Augmented Code Analysis",
    "projects.cicd.desc":
      "Design and integration of an AI-powered code analysis tool, orchestrated via GitLab CI and Dagger pipelines, in collaboration with the SNCF AI platform.",
    "projects.fullstack.title": "Containerized Full-Stack Web App",
    "projects.fullstack.desc":
      "Complete architecture with frontend, Node.js backend, and database, fully containerized with Docker Compose. Automated deployment on Azure cloud via GitLab CI.",
    "projects.infra.title": "Reverse Proxy & Load Balancing Infrastructure",
    "projects.infra.desc":
      "Setup of infrastructure with Traefik and NGINX as reverse proxy, automatic SSL management, load balancing, and dynamic routing for containerized services.",
    "projects.docker.title": "Docker Image Optimization",
    "projects.docker.desc":
      "Drastic reduction of Docker image sizes via multi-stage builds, Alpine base, and layering best practices. Result: lighter images, faster builds, accelerated deployments.",
    "contact.eyebrow": "Contact",
    "contact.title": "Let's connect",
    "contact.text":
      "Have a project, an opportunity, or just want to chat? Feel free to reach out through the channels below.",
    "contact.linkedin.value": "View my profile",
    "contact.github.value": "View my repos",
    "footer.copy": "© 2026 Raphaël Daigre. All rights reserved.",
    "footer.built": "Crafted with PerplexityAI.",
  },
};

/* ===== STATE ===== */
let currentLang = "fr";
let currentTheme = matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

/* ===== THEME TOGGLE ===== */
(function initTheme() {
  const html = document.documentElement;
  const toggle = document.querySelector("[data-theme-toggle]");
  html.setAttribute("data-theme", currentTheme);
  updateThemeIcon(toggle);

  if (toggle) {
    toggle.addEventListener("click", () => {
      currentTheme = currentTheme === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", currentTheme);
      updateThemeIcon(toggle);
    });
  }
})();

function updateThemeIcon(btn) {
  if (!btn) return;
  btn.setAttribute(
    "aria-label",
    currentTheme === "dark" ? "Switch to light mode" : "Switch to dark mode",
  );
  btn.innerHTML =
    currentTheme === "dark"
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
}

/* ===== LANGUAGE TOGGLE ===== */
(function initLang() {
  const btn = document.querySelector("[data-lang-toggle]");
  if (btn) {
    btn.addEventListener("click", () => {
      currentLang = currentLang === "fr" ? "en" : "fr";
      btn.textContent = currentLang === "fr" ? "EN" : "FR";
      document.documentElement.lang = currentLang;
      applyTranslations();
    });
  }
})();

function applyTranslations() {
  const t = translations[currentLang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) {
      // Preserve child SVGs in buttons
      const svg = el.querySelector("svg");
      if (svg) {
        el.textContent = "";
        el.appendChild(svg);
        el.append(" " + t[key]);
      } else {
        el.textContent = t[key];
      }
    }
  });
}

/* ===== SCROLL HEADER SHADOW ===== */
(function initHeaderScroll() {
  const header = document.getElementById("header");
  if (!header) return;
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        header.classList.toggle("header--scrolled", window.scrollY > 20);
        ticking = false;
      });
      ticking = true;
    }
  });
})();

/* ===== MOBILE NAV ===== */
(function initMobileNav() {
  const burger = document.getElementById("navBurger");
  const links = document.getElementById("navLinks");
  if (!burger || !links) return;

  burger.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });

  // Close on link click
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      links.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
})();

/* ===== SCROLL REVEAL ===== */
(function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
})();

/* ===== SMOOTH SCROLL FOR NAV ===== */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
