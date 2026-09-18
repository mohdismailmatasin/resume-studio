const fs = require("fs");
let html = fs.readFileSync("/tmp/reference_resumestudio.html", "utf8");

// 1. Update <title> and meta description
html = html.replace(/<title>.*?<\/title>/, `<title>Resume Studio</title>
  <meta name="description" content="ATS-friendly resume builder and optimizer with live preview and custom styling.">
  <meta property="og:title" content="Resume Studio">
  <meta property="og:description" content="ATS-friendly resume builder and optimizer with live preview and custom styling.">`);

// 2. Prepare defaultMohdProfile
const defaultMohdProfileCode = `function defaultMohdProfile(){
  return {
    id: "p-mohd",
    name: "Mohd Ismail - Security Operations Leader",
    updatedAt: Date.now(),
    data: {
      template: "ats-executive",
      pageSize: "a4",
      showPhoto: false,
      textAlign: "justify",
      fontFamily: "system-ui",
      spacing: "standard",
      sectionTitles: {
        experience: "Work Experience",
        skills: "Core Skills & Competencies",
        certifications: "Certifications & Military Courses",
        custom: "Surveillance & Technical Systems"
      },
      photo: {dataUrl: null, naturalW: 0, naturalH: 0, shape: "circle", zoom: 1, x: 0, y: 0},
      contact: {
        fullName: "Mohd Ismail Mat Asin",
        title: "Security Operations Leader",
        phone: "+60125243419",
        email: "mohdismailmatasin@gmail.com",
        location: "Petaling Jaya, Selangor, Malaysia",
        linkedin: "linkedin.com/in/mohdismailmatasin"
      },
      summary: "Security Operations Leader with 10+ years of military and private sector experience. Proven expertise in risk assessment, surveillance systems, and team management. Seeking to leverage disciplined leadership and advanced security knowledge to protect assets and ensure operational excellence in private security services.",
      sectionsOrder: ["summary", "experience", "education", "skills", "certifications", "references", "custom"],
      sectionsVisible: {summary: true, experience: true, education: true, skills: true, certifications: true, references: true, custom: true},
      experience: [
        {
          group: "Private Sector Experience",
          title: "Operation Manager",
          company: "United Security Services Sdn Bhd",
          location: "Putra Heights, Subang Jaya, Selangor",
          start: "11/2024",
          end: "",
          current: true,
          bulletsText: "• Developed and enforced comprehensive security policies across client accounts, reducing average emergency response time by 20%.\n• Recruited, vetted, scheduled, and supervised over 45 static and patrol security personnel across multiple corporate and residential sites.\n• Coordinated closely with Royal Malaysia Police (PDRM) and external statutory bodies to ensure complete regulatory compliance.\n• Audited on-site perimeter safeguards and introduced modern surveillance protocols, improving threat detection accuracy."
        },
        {
          group: "Private Sector Experience",
          title: "Shift Leader",
          company: "Kawalan Perwira Sdn. Bhd.",
          location: "Infineon Technology Penang Assignment – Bayan Lepas, Pulau Pinang",
          start: "06/2022",
          end: "11/2024",
          current: false,
          bulletsText: "• Supervised 24/7 high-security control room operations for semiconductor manufacturing facilities and remote monitoring for Asia-Pacific facilities (Tokyo, Manila, Melbourne, Taipei).\n• Led investigations into internal security breaches, unauthorized entries, and safety anomalies, preparing executive incident dossiers.\n• Conducted hands-on onboarding and recurrent technical training for security officers on enterprise VMS platforms (LENEL OnGuard, Genetec Security Center).\n• Supervised dispatch and end-to-end monitoring for high-value wafer and finished product logistics shipments, preventing asset loss."
        },
        {
          group: "Military Experience",
          title: "Security Team Leader / Corporal",
          company: "Royal Malaysian Air Force (RMAF)",
          location: "Air Bases & Tactical Deployments, Malaysia",
          start: "07/2018",
          end: "07/2021",
          current: false,
          bulletsText: "• Commanded a tactical section of 12 airmen tasked with perimeter defense, flight line protection, and sensitive military aircraft security.\n• Formulated risk assessment reports and executed physical security audits across restricted military installations.\n• Awarded the Commander\\'s Commendation for decisive leadership and operational vigilance during joint military exercises."
        }
      ],
      education: [
        {
          degree: "Diploma in Aviation Management",
          school: "Aviation Management College (UniCam)",
          location: "Dengkil, Selangor",
          date: "09/2017",
          detail: "GPA: 2.93 · Focus on Aviation Safety, Ground Operations & Regulatory Frameworks"
        }
      ],
      skillGroups: [
        {
          label: "Core Operations & Leadership",
          itemsText: "Security Operations Management, Threat & Vulnerability Assessment, Crisis Management & Emergency Response, Team Leadership & Guard Supervision, Standard Operating Procedure (SOP) Development, Incident Investigation & Reporting"
        },
        {
          label: "Surveillance & Access Control Systems",
          itemsText: "LENEL OnGuard Access Control, Genetec Security Center 5.11, Pelco VideoXpert VMS, CCTV Cross-border Remote Monitoring, Biometric Scanners, Under-Vehicle Surveillance Systems (UVSS)"
        },
        {
          label: "Safety, Tools & Compliance",
          itemsText: "Occupational Safety & Health (OSH) Coordination, Tactical Combat Casualty Care (TCCC), PDRM Regulatory Compliance, Guard Tour RFID Systems, Microsoft 365 Suite (Excel, Word, PowerPoint)"
        }
      ],
      certifications: [
        {title: "Commander\\'s Commendation Award", issuer: "Royal Malaysian Air Force (RMAF)", date: "2020", ref: "Tactical Leadership"},
        {title: "Best Security Supervisor Award", issuer: "Kawalan Perwira (Infineon Assignment)", date: "2023", ref: "Excellence in Service"},
        {title: "Air Force Base Defense Leadership Course", issuer: "Royal Malaysian Air Force", date: "2019", ref: "Tactical Defense"},
        {title: "Certified Security Operations Specialist (CSOS)", issuer: "Security Industry Association", date: "2022", ref: "CSOS-MY-8841"},
        {title: "Occupational Safety & Health (OSH) Coordinator", issuer: "Department of Occupational Safety & Health (DOSH)", date: "2023", ref: "OSH-C-2023"},
        {title: "Tactical Combat Casualty Care (TCCC) Basic", issuer: "Armed Forces Medical Training Wing", date: "2020", ref: "TCCC-B"}
      ],
      references: [
        {
          name: "Major (Rtd) Ahmad Razali",
          title: "Head of Security Operations",
          company: "United Security Services Sdn Bhd",
          phone: "+60134567890",
          email: "ahmad.razali@uss.my"
        },
        {
          name: "Kapt. Nor Azman",
          title: "Former Commanding Officer",
          company: "Provost Marshal Branch, RMAF",
          phone: "+60198765432",
          email: "azman.provost@mod.gov.my"
        }
      ],
      custom: [
        {
          title: "Surveillance & Technical Systems Expertise",
          contentText: "• Access Control & Enterprise VMS: Expert proficiency configuring and auditing LENEL OnGuard, Genetec Security Center 5.11, and Pelco VideoXpert.\n• Physical Security Hardware: Practical operation of long-range thermal cameras, PTZ perimeter surveillance, biometric turnstiles, and automated vehicle inspection barriers.\n• Remote Monitoring: Directed international multi-site video feeds across Asia-Pacific nodes, maintaining 99.8% surveillance uptime."
        }
      ]
    }
  };
}
`;

// Insert defaultMohdProfile right before isSampleProfile
html = html.replace("function isSampleProfile(p){", defaultMohdProfileCode + "\nfunction isSampleProfile(p){");

// Replace the loadStore implementation with safe migration that retains Mohd Ismail profile
const newLoadStore = `function migrateOldV2(old){
  try {
    var p = defaultMohdProfile();
    var d = p.data;
    if(old.personal){
      d.contact.fullName = old.personal.name || d.contact.fullName;
      d.contact.title = old.personal.title || d.contact.title;
      d.contact.phone = old.personal.phone || d.contact.phone;
      d.contact.email = old.personal.email || d.contact.email;
      d.contact.location = old.personal.address || d.contact.location;
      d.contact.linkedin = old.personal.linkedin || d.contact.linkedin;
    }
    if(old.objective) d.summary = old.objective;
    if(old.education && Array.isArray(old.education)){
      d.education = old.education.map(function(e){
        return {degree: e.title||"", school: e.desc||"", location:"", date: e.date||"", detail:""};
      });
    }
    if(old.skills && Array.isArray(old.skills)){
      var skNames = old.skills.map(function(s){ return typeof s === "object" ? (s.name||"") : String(s); }).filter(Boolean);
      if(skNames.length){
        d.skillGroups = [{label: "Core Competencies", itemsText: skNames.join(", ")}];
      }
    }
    return p;
  } catch(err){
    return defaultMohdProfile();
  }
}

function loadStore(){
  if(!storageAvailable){
    store = {schemaVersion:SCHEMA_VERSION, activeId:"p-mohd", profiles:[defaultMohdProfile()]};
    return;
  }
  try {
    var raw = localStorage.getItem(STORE_KEY);
    if(!raw){
      var oldV2 = localStorage.getItem("resumeBuilderV2");
      if(oldV2){
        try {
          var parsedV2 = JSON.parse(oldV2);
          var migrated = migrateOldV2(parsedV2);
          store = {schemaVersion:SCHEMA_VERSION, activeId:migrated.id, profiles:[migrated]};
          persist();
          return;
        }catch(eMigration){}
      }
      var defaultP = defaultMohdProfile();
      store = {schemaVersion:SCHEMA_VERSION, activeId:defaultP.id, profiles:[defaultP]};
      persist();
      return;
    }
    var parsed = JSON.parse(raw);
    if(!parsed.profiles || !parsed.profiles.length){
      var defP = defaultMohdProfile();
      parsed = {schemaVersion:SCHEMA_VERSION, activeId:defP.id, profiles:[defP]};
    }
    var validIds = TEMPLATES.map(function(t){return t.id;});
    parsed.profiles.forEach(function(p){
      if(!p.data || !p.data.contact || !p.data.contact.fullName){
        var fallbackP = defaultMohdProfile();
        p.data = fallbackP.data;
      }
      if(p.data && (!p.data.template || validIds.indexOf(p.data.template) === -1)){
        p.data.template = TEMPLATES[0].id;
      }
      if(p.data && !p.data.fontFamily){
        p.data.fontFamily = "sans-serif";
      }
    });
    store = parsed;
    if(!store.activeId && store.profiles.length){
      store.activeId = store.profiles[0].id;
    }
    persist();
  }catch(e){
    var fallback = defaultMohdProfile();
    store = {schemaVersion:SCHEMA_VERSION, activeId:fallback.id, profiles:[fallback]};
  }
}`;

// Replace function loadStore
const startLoadStore = html.indexOf("function loadStore(){");
const endLoadStore = html.indexOf("function persist(){");
if(startLoadStore !== -1 && endLoadStore !== -1){
  html = html.substring(0, startLoadStore) + newLoadStore + "\n" + html.substring(endLoadStore);
}

fs.writeFileSync("/tmp/transformed_index.html", html, "utf8");
console.log("Transformed length:", html.length);
