document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    const menuLinks = document.querySelectorAll('.nav-links a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    const allNavLinks = document.querySelectorAll('.nav-links a, .hero-content .btn');

    allNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.getElementById('header').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    const fadeElements = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElements.forEach(el => {
        observer.observe(el);
    });

    const translations = {
        pt: {
            nav_inicio: 'Início',
            nav_sobre: 'Sobre mim',
            nav_experiencia: 'Experiência',
            nav_projetos: 'Projetos',
            welcome_title: 'Bem Vindo.',
            welcome_description: 'Meu nome é <span class="highlight-name">Pedro Honorio</span>, analista de qualidade de software na Webjump. Trabalho com uma ampla gama de projetos de QA, desde automação de testes em aplicações web até testes de API e performance, com foco na criação de testes bem estruturados que não apenas identificam bugs, mas também garantem uma experiência de usuário impecável e confiável.',
            about_title: 'Sobre Mim',
            about_who_title: 'Quem Sou',
            about_who_text: 'Formado em Análise e Desenvolvimento de Sistemas e pós-graduando em Engenharia de Qualidade de Software. Atualmente, trabalho como Analista de Qualidade de Software Pleno na Webjump.',
            about_experience_title: 'Experiência',
            about_experience_text: 'Mais de 4 anos atuando em QA, desenvolvendo testes automatizados para web e API, implementando CI/CD e garantindo a qualidade em projetos de alta complexidade e impacto.',
            about_focus_title: 'Foco',
            about_focus_text: 'Comprometido com excelência em qualidade de software, atenção aos detalhes, proatividade na identificação de melhorias e entrega de soluções eficientes, escaláveis e confiáveis.',
            experience_title: 'Experiência em QA',
            experience_job_title: 'Analista de QA Pleno',
            experience_duration: '+4 anos',
            experience_mission: '<i class="fas fa-quote-left quote-icon"></i>Impulsionando a cultura de qualidade como diferencial competitivo em projetos de grande porte e visibilidade nacional — promovendo soluções assertivas, confiáveis e alinhadas ao negócio.<i class="fas fa-quote-right quote-icon"></i>',
            pillar_tech_title: 'Excelência Técnica',
            pillar_tech_1: '<i class="fas fa-bolt"></i> Shift-left testing e cultura de qualidade em times ágeis',
            pillar_tech_2: '<i class="fas fa-robot"></i> Automação E2E, API, Mobile e Web (Cypress, GraphQL, Ruby, Capybara)',
            pillar_tech_3: '<i class="fas fa-vial"></i> Testes REST/GraphQL com Postman, Curl e Newman',
            pillar_tech_4: '<i class="fas fa-sync-alt"></i> BDD e integração contínua (CI/CD)',
            pillar_tech_5: '<i class="fas fa-bug"></i> Gestão completa do ciclo de vida de bugs',
            pillar_leadership_title: 'Liderança & Comunicação',
            pillar_leadership_1: '<i class="fas fa-user-check"></i> Reconhecida como proativo e organizado',
            pillar_leadership_2: '<i class="fas fa-lightbulb"></i> Traduz complexidade técnica em soluções de negócio',
            pillar_leadership_3: '<i class="fas fa-handshake"></i> Referência em relacionamento com cliente',
            pillar_leadership_4: '<i class="fas fa-eye"></i> Visibilidade total do projeto',
            pillar_leadership_5: '<i class="fas fa-chalkboard-teacher"></i> Mentor no programa interno Jumpartener',
            pillar_leadership_6: '<i class="fas fa-balance-scale"></i> Mediação de conflitos e articulação entre áreas',
            tech_stack_title: '<i class="fas fa-layer-group"></i> Stack Tecnológica',
            projects_title: 'Meus Trabalhos',
            projects_subtitle: 'Alguns dos meus projetos passados e presentes',
            projects_category: 'Aplicações Web',
            footer_text: 'Desenvolvido com ❤️ por Pedro Honorio'
        },
        en: {
            nav_inicio: 'Home',
            nav_sobre: 'About',
            nav_experiencia: 'Experience',
            nav_projetos: 'Projects',
            welcome_title: 'Welcome.',
            welcome_description: 'My name is <span class="highlight-name">Pedro Honorio</span>, a software quality analyst at Webjump. I work with a wide range of QA projects, from web application test automation to API and performance testing, focusing on creating well-structured tests that not only identify bugs, but also ensure an impeccable and reliable user experience.',
            about_title: 'About Me',
            about_who_title: 'Who I Am',
            about_who_text: 'Graduated in Systems Analysis and Development and postgraduate student in Software Quality Engineering. Currently, I work as a Mid-level Software Quality Analyst at Webjump.',
            about_experience_title: 'Experience',
            about_experience_text: 'Over 4 years working in QA, developing automated tests for web and API, implementing CI/CD and ensuring quality in high complexity and impact projects.',
            about_focus_title: 'Focus',
            about_focus_text: 'Committed to excellence in software quality, attention to detail, proactivity in identifying improvements and delivering efficient, scalable and reliable solutions.',
            experience_title: 'QA Experience',
            experience_job_title: 'Mid-level QA Analyst',
            experience_duration: '+4 years',
            experience_mission: '<i class="fas fa-quote-left quote-icon"></i>Driving quality culture as a competitive differentiator in large-scale projects with national visibility — promoting assertive, reliable and business-aligned solutions.<i class="fas fa-quote-right quote-icon"></i>',
            pillar_tech_title: 'Technical Excellence',
            pillar_tech_1: '<i class="fas fa-bolt"></i> Shift-left testing and quality culture in agile teams',
            pillar_tech_2: '<i class="fas fa-robot"></i> E2E, API, Mobile and Web automation (Cypress, GraphQL, Ruby, Capybara)',
            pillar_tech_3: '<i class="fas fa-vial"></i> REST/GraphQL testing with Postman, Curl and Newman',
            pillar_tech_4: '<i class="fas fa-sync-alt"></i> BDD and continuous integration (CI/CD)',
            pillar_tech_5: '<i class="fas fa-bug"></i> Complete bug lifecycle management',
            pillar_leadership_title: 'Leadership & Communication',
            pillar_leadership_1: '<i class="fas fa-user-check"></i> Recognized as proactive and organized',
            pillar_leadership_2: '<i class="fas fa-lightbulb"></i> Translates technical complexity into business solutions',
            pillar_leadership_3: '<i class="fas fa-handshake"></i> Reference in customer relationship',
            pillar_leadership_4: '<i class="fas fa-eye"></i> Full project visibility',
            pillar_leadership_5: '<i class="fas fa-chalkboard-teacher"></i> Mentor in the internal Jumpartener program',
            pillar_leadership_6: '<i class="fas fa-balance-scale"></i> Conflict mediation and cross-area articulation',
            tech_stack_title: '<i class="fas fa-layer-group"></i> Tech Stack',
            projects_title: 'My Work',
            projects_subtitle: 'Some of my past and present projects',
            projects_category: 'Web Applications',
            footer_text: 'Developed with ❤️ by Pedro Honorio'
        }
    };

    let currentLang = 'pt';

    const langBtn = document.getElementById('langBtn');
    const flagIcon = langBtn.querySelector('.flag-icon');
    const langText = langBtn.querySelector('.lang-text');

    function setLanguage(lang) {
        currentLang = lang;
        
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                element.innerHTML = translations[lang][key];
            }
        });

        if (lang === 'en') {
            flagIcon.textContent = '🇺🇸';
            langText.textContent = 'EN';
        } else {
            flagIcon.textContent = '🇧🇷';
            langText.textContent = 'PT';
        }

        localStorage.setItem('preferredLanguage', lang);
    }

    langBtn.addEventListener('click', () => {
        const newLang = currentLang === 'pt' ? 'en' : 'pt';
        setLanguage(newLang);
        
        langBtn.style.transform = 'scale(0.9)';
        setTimeout(() => {
            langBtn.style.transform = 'scale(1)';
        }, 150);
    });

    const savedLang = localStorage.getItem('preferredLanguage') || 'pt';
    if (savedLang === 'en') {
        setLanguage('en');
    }

    const aboutCards = document.querySelectorAll('.about-card');
    aboutCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.05}s`;
    });

    const pillars = document.querySelectorAll('.pillar');
    pillars.forEach((pillar, index) => {
        pillar.style.animationDelay = `${index * 0.2}s`;
    });

    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const parallaxElements = document.querySelectorAll('.gradient-circle');
                
                parallaxElements.forEach((el, index) => {
                    const speed = 0.5 + (index * 0.1);
                    el.style.transform = `translateY(${scrolled * speed}px)`;
                });
                
                ticking = false;
            });
            ticking = true;
        }
    });

    const techBadges = document.querySelectorAll('.tech-badge');
    techBadges.forEach((badge, index) => {
        badge.style.animationDelay = `${index * 0.05}s`;
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

});
