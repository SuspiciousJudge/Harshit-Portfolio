import type {
  BilingualText,
  CourseItem,
  ExperienceEntry,
  LanguageItem,
  Project,
  SkillCategory,
} from '../types'

export const navLinks = [
  { id: 'home', en: 'Home', de: 'Startseite' },
  { id: 'about', en: 'About', de: 'Über mich' },
  { id: 'skills', en: 'Skills', de: 'Fertigkeiten' },
  { id: 'experience', en: 'Experience', de: 'Erfahrung' },
  { id: 'education', en: 'Education', de: 'Ausbildung' },
  { id: 'projects', en: 'Projects', de: 'Projekte' },
  { id: 'courses', en: 'Courses', de: 'Kurse' },
  { id: 'contact', en: 'Contact', de: 'Kontakt' },
] as const

export const heroTitles = {
  en: [
    'Systems Engineer',
    'CAD Automation Specialist',
    'Digital Engineering Student',
    'FEM & Simulation Expert',
    'Battery System Designer',
  ],
  de: [
    'Systemingenieur',
    'CAD-Automatisierungsspezialist',
    'Digital-Engineering-Student',
    'FEM & Simulationsexperte',
    'Batteriesystem-Designer',
  ],
}

export const heroStats = []

export const aboutText: BilingualText = {
  en: 'MSc student in Systems Engineering (Manufacturing) with CAD/FEM experience and a focus on digital engineering & design automation. Confident in standard-compliant documentation, technical analysis and configuration-oriented work; specifically targeting CATIA V5/DMU and KBE/Python in a targeted manner to reduce manual design effort and accelerate architecture/integration processes.',
  de: 'MSc-Student Systems Engineering (Fertigung) mit CAD-/FEM Praxis und Fokus auf Digital Engineering & Designautomatisierung. Sicher in normgerechter Dokumentation, technischer Analyse und konfigurationsorientiertem Arbeiten; baue CATIA V5/DMU sowie KBE/Python gezielt aus, um manuellen Konstruktionsaufwand zu reduzieren und Architektur-/Integrationsprozesse zu beschleunigen.',
}

export const skillCategories: SkillCategory[] = [
  {
    titleEN: 'CAD Design & Simulation',
    titleDE: 'CAD Konstruktion',
    iconName: 'FaDraftingCompass',
    variant: 'bar',
    accentColor: '#00D4FF',
    skills: [
      { name: 'CATIA V5', level: 90 },
      { name: 'Siemens NX', level: 85 },
      { name: 'SolidWorks', level: 80 },
      { name: 'Altair HyperWorks', level: 75 },
      { name: 'Fusion 360', level: 70 },
      { name: 'Synera', level: 72 },
    ],
  },
  {
    titleEN: 'MATLAB & Simulink',
    titleDE: 'MATLAB & Simulink',
    iconName: 'VscGraph',
    variant: 'radial',
    accentColor: '#00FFC8',
    skills: [
      { name: 'Optimization Toolbox', level: 85 },
      { name: 'Simscape Battery', level: 88 },
      { name: 'Powertrain Blockset', level: 78 },
      { name: 'Global Opt. Toolbox', level: 80 },
      { name: 'Stateflow', level: 75 },
      { name: 'Battery Builder App', level: 82 },
    ],
  },

]

export const additionalBadges = [
  'FEM Simulation', 'ANSYS', 'Parametric Design', 'Digital Engineering',
  'DMU Review', 'CFD (Synera)', 'Requirements Engineering',
  'Python', 'KBE', 'PLC Programming', 'MATLAB Scripting', 'Altair HyperWorks',
]

export const experiences: ExperienceEntry[] = [
  {
    current: true,
    role: { en: 'Master Thesis Researcher', de: 'Masterarbeit' },
    organization: 'Otto Von Guericke University',
    location: 'Magdeburg, Germany',
    period: 'Feb 2026 – Present',
    topic: {
      en: 'CAD-based design automation for battery housings: automatic rough design based on variants and requirements with simulation/load cases and DMU review capability.',
      de: 'CAD-basierte Design-Automation für Batteriegehäuse: automatische Grobauslegung aus Varianten & Anforderungen mit Simulation/Lastfällen und DMU-Review-Fähigkeit.',
    },
    bullets: [
      { en: 'State of the art in design automation, parametric CAD, and DMU (virtual reviews/variants) developed.', de: 'CAD-Konstruktionsautomatisierung für frühe Batteriegehäuse-Layouts aus Varianten + Anforderungen (parametrisches CAD / Siemens NX).' },
      { en: 'Existing variant tool analyzed: results presentation checked, relevant geometric parameters identified.', de: 'Überprüfung eines bestehenden Varianten-Tools; Extraktion wichtiger geometrischer Parameter.' },
      { en: 'Requirements engineering: requirements for (partially) automated rough design of the battery housing defined.', de: 'Definition von Anforderungen für die halbautomatische Konstruktion von Verpackungen/Einbauräumen.' },
      { en: 'Load cases, crash constraints, cell/module fixation, and thermal management integrated into simulation.', de: 'Integrierte Lastfälle + Crash-Beschränkungen; Berechnungen/Datenprüfungen mit MATLAB und Python.' },
      { en: 'CAD framework developed & verified; outputs prepared for DMU/product structure navigation and reviews.', de: 'Vorbereitung DMU-fähiger Ausgaben für Navigation und Konstruktionsprüfungen.' },
    ],
    image: '/thesis.jpg',
  },
  {
    current: false,
    role: { en: 'Volunteer Engineer', de: 'Ehrenamtliche Mitarbeiter' },
    organization: 'ELARA Aerospace',
    location: 'Munich, Germany',
    period: 'Aug 2024 – Apr 2025',
    bullets: [
      { en: 'Created logic and simulation in Synera Workspace for cooling channels of the rocket engine.', de: 'Erstellung von Logik und Simulation in Synera Workspace für Kühlkanäle für den Raketenantrieb.' },
      { en: 'Created topologies for the design space & CFD structural simulation of fuel tanks.', de: 'Erstellung von Topologien für den Designraum & CFD Simulation.' },
      { en: 'ANSYS structural and pressure simulation of fuel tanks.', de: 'ANSYS - Struktur- und Drucksimulation von Kraftstofftanks.' },
    ],
    image: '/elara_aerospace_logo.jpg',
  },
  {
    current: false,
    role: { en: 'Internship — Rail Vehicle Design & Simulation', de: 'Praktikum – Schienenfahrzeugkonstruktion & Simulation' },
    organization: 'DLR Institute of Vehicle Concepts',
    location: 'Stuttgart, Germany',
    period: 'Apr 2024 – Jul 2024',
    bullets: [
      { en: 'Designed a temporary underframe for inspecting Fr8Rail bogies using load case calculations and FEM simulations.', de: 'Entwurf eines temporären Untergestells zur Inspektion von Fr8Rail-Drehgestellen unter Anwendung von Lastfallberechnungen und FEM-Simulationen.' },
      { en: 'Managed CAD design of a night train car body in CATIA V5, following EBO (Gauss 2) and EN standards (EN 12663, EN 15227).', de: 'Leitung der CAD-Konstruktion eines Nachtzug-Wagenkastens in CATIA V5 unter Berücksichtigung von EBO (Gauß 2) sowie EN-Normen (EN 12663, EN 15227).' },
      { en: 'Applied parametric design for modular vehicle development: coupling systems, track gauge flexibility, and load variants.', de: 'Einsatz von Parametric Design zur modularen Fahrzeugentwicklung mit Fokus auf Kupplungssysteme, Spurweitenflexibilität und Ladungsvarianten.' },
    ],
    image: '/internship.jpeg',
  },
]

export const education = {
  degree: { en: 'MSc Systems Engineering for Manufacturing', de: 'MSc Systemtechnik für die Fertigung' },
  institution: 'Otto Von Guericke University',
  period: 'Oct 2022 – Present',
  location: 'Magdeburg, Germany',
  modules: [
    { en: 'Systems engineering for manufacturing systems', de: 'Systemtechnik für Fertigungssysteme' },
    { en: 'Factory automation and industrial robotics', de: 'Fabrikautomation und Industrierobotik' },
    { en: 'Advanced applications of Industry 4.0', de: 'Fortgeschrittene Anwendungen von Industrie 4.0' },
    { en: 'Modeling and simulation of mechatronic systems', de: 'Modellierung und Simulation von mechatronischen Systemen' },
  ] as BilingualText[],
}

export const projects: Project[] = [
  {
    title: { en: 'CAD-Based Battery Housing Design Automation', de: 'CAD-basierte Batteriegehäuse-Design-Automation' },
    category: { en: 'Master Thesis / Digital Engineering', de: 'Masterarbeit / Digital Engineering' },
    tags: ['Siemens NX', 'Python', 'MATLAB', 'KBE', 'Parametric CAD', 'DMU'],
    image: '/projects/proj1.jpg',
    description: {
      en: 'Automated rough design pipeline for battery housings using parametric CAD and requirements-driven logic. Integrates load cases, crash constraints, cell/module fixation, and thermal management into a DMU-ready framework.',
      de: 'Automatisierte Grobauslegungs-Pipeline für Batteriegehäuse mittels parametrischem CAD und anforderungsgesteuerter Logik. Integration von Lastfällen, Crash-Beschränkungen und Thermomanagement in ein DMU-fähiges Framework.',
    },
  },
  {
    title: { en: 'Automation of Battery Pack Design', de: 'Automatisierung des Batteriepack-Designs' },
    category: { en: 'Simulation & Modeling — MATLAB/Simulink', de: 'Simulation & Modellierung — MATLAB/Simulink' },
    tags: ['MATLAB', 'Simulink', 'Simscape Battery', 'Stateflow', 'Battery Builder'],
    image: '/projects/proj2.jpg',
    github: 'https://github.com/Thruster55/Battery-Pack-Design-Automation-Project-1',
    description: {
      en: 'Full automation of battery pack sizing using Simscape Battery toolchain. Simulates electrical and thermal behavior, optimizes cell configuration (series/parallel), and implements BMS logic (SoC/SoH) via Stateflow.',
      de: 'Vollautomatisierte Batteriepack-Auslegung mit Simscape Battery. Simulation elektrischen und thermischen Verhaltens, Zellkonfigurationsoptimierung (Serie/Parallel) und BMS-Logik (SoC/SoH) in Stateflow.',
    },
  },
  {
    title: { en: 'Patient-Specific High-Tech Knee Orthosis', de: 'Patientenspezifische Hightech-Knieorthese' },
    category: { en: 'Design Engineering Project', de: 'Konstruktionsprojekt (ED)' },
    period: 'Oct 2022 – Jul 2023',
    tags: ['3D Modeling', 'FDM', 'SLA', 'SLS/SLM', 'Composite Materials', 'AM Workflow'],
    image: '/projects/proj3.jpg',
    description: {
      en: 'Patient-specific 3D modeling for personalized medical solutions using lightweight composite materials for structural integrity. Full AM workflow: CAD → Toolpath → Scanning → Microstructure Analysis → Post-processing.',
      de: 'Patientenspezifische 3D-Modellierung für medizinische Lösungen. Leichtbau-Verbundwerkstoffe. AM-Workflow: CAD → Toolpath → Scannen → Mikrostrukturanalyse → Nachbearbeitung.',
    },
  },
  {
    title: { en: 'PLC Control Code for Conveyor System', de: 'PLC Steuercode für Fördersystem' },
    category: { en: 'Laboratory Project (Master)', de: 'Laborprojekt (Master)' },
    tags: ['PLC', 'Control Logic', 'I/O Management', 'Ladder Logic'],
    image: '/projects/proj4.jpg',
    description: {
      en: 'Design and implementation of control configuration for an automated conveyor system. Developed application logic and custom control algorithms for smooth operation with full I/O variable management.',
      de: 'Entwurf und Implementierung der Steuerungskonfiguration für ein automatisiertes Fördersystem. Entwicklung der Anwendungslogik und maßgeschneiderter Steuerungsalgorithmen.',
    },
  },
  {
    title: { en: 'Altair Global Student Competition — TL-403 Latch Optimization', de: 'Altair Global Student Competition — TL-403 Optimierung' },
    category: { en: 'International Competition', de: 'Internationaler Wettbewerb' },
    period: 'Mar 2023 – Apr 2023',
    tags: ['Altair HyperWorks', 'Topology Optimization', 'FEM', 'Structural Analysis'],
    image: '/projects/proj5.jpg',
    description: {
      en: 'Performed topology optimization of the TL-403 pull-down latch to increase structural efficiency and reduce weight.',
      de: 'Topologieoptimierung des TL-403 Pull-Down-Riegels zur Steigerung der Struktureffizienz und Gewichtsreduzierung.',
    },
    award: {
      en: '🏆 Award for best promotional video — creativity, target audience appeal, and visual implementation.',
      de: '🏆 Preisträger für das beste Werbevideo — Kreativität, Zielgruppenansprache und visuelle Umsetzung.',
    },
  },
]

export const courses: CourseItem[] = [
  {
    title: { en: 'Design of Control Systems using MATLAB and Simulink', de: 'Entwurf von Steuerungssystemen mit MATLAB und Simulink' },
    issuer: 'MathWorks',
    year: '2024',
    certificate: '/certificate.pdf',
    bullets: [
      { en: 'Developed control loops using MATLAB and Simulink.', de: 'Entwickelte Regelkreise mit MATLAB und Simulink.' },
      { en: 'Implemented PID and lead-lag controllers.', de: 'Implementierte PID- und Vorhalt-Verzögerungs-Regler.' },
      { en: 'Applied system identification for model estimation.', de: 'Angewandte Systemidentifikation zur Modellschätzung.' },
      { en: 'Performed frequency domain analysis and linearization.', de: 'Durchgeführte Frequenzbereichsanalyse und Linearisierung.' },
      { en: 'Prepared controllers for implementation and code generation.', de: 'Vorbereitete Regler für die Implementierung und Codegenerierung.' },
    ],
  },
]

export const languages: LanguageItem[] = [
  { language: { en: 'German', de: 'Deutsch' }, level: { en: 'B1 Intermediate', de: 'B1 Mittelstufe' }, percent: 55, flag: '🇩🇪' },
  { language: { en: 'English', de: 'Englisch' }, level: { en: 'C1 Advanced', de: 'C1 Fortgeschritten' }, percent: 85, flag: '🇬🇧' },
  { language: { en: 'Hindi', de: 'Hindi' }, level: { en: 'Native', de: 'Muttersprache' }, percent: 100, flag: '🇮🇳' },
]

export const interests = [
  { icon: '♟', en: 'Chess', de: 'Schach spielen' },
  { icon: '🎨', en: 'Artwork', de: 'Kunstwerke' },
]

export const contact = {
  email: 'harshitshah92874@gmail.com',
  phone: '+49 15783454597',
  location: 'Magdeburg, Germany',
  linkedin: 'https://www.linkedin.com/in/harshit--shah/',
  github: 'https://github.com/Thruster55',
}

export const spaceQuote: BilingualText = {
  en: '"The universe is under no obligation to make sense to you.\nBut every equation you solve, every structure you design,\nis humanity reaching back into the cosmos — and making it answer."',
  de: '„Das Universum ist nicht verpflichtet, dir Sinn zu ergeben.\nDoch jede Gleichung, die du löst, jede Struktur, die du entwirfst,\nist die Menschheit, die in den Kosmos greift — und ihn zur Antwort zwingt."',
}

export const dataTickerItems = [
  'CAD AUTOMATION', 'CATIA V5', 'SIEMENS NX', 'FEM SIMULATION',
  'BATTERY HOUSING', 'DMU REVIEW', 'PARAMETRIC DESIGN', 'MATLAB',
  'STATEFLOW', 'PLC CONTROL', 'ANSYS', 'FR8RAIL', 'KBE/PYTHON',
]
