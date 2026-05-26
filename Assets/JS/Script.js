// dark/light theme toggle
function toggleTheme() {
  const html = document.documentElement;
  const icon = document.getElementById('theme-icon');
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  icon.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

(function () {
  const saved = localStorage.getItem('theme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    const icon = document.getElementById('theme-icon');
    if (icon) icon.textContent = '🌙';
  }
})();

// scroll reveal
(function () {
  const sections = document.querySelectorAll('section, header');
  sections.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  sections.forEach(el => observer.observe(el));
})();


// side nav active state
(function () {
  const dots = document.querySelectorAll('.side-nav__link');
  const sectionIds = ['hero', 'about', 'impact', 'background', 'stack', 'projects', 'certifications'];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        dots.forEach(d => d.classList.remove('active'));
        const active = document.querySelector(`.side-nav__link[href="#${id}"]`);
        if (active) active.classList.add('active');
      }
    });
  }, { threshold: 0.35 });

  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
})();


// chat responses
const responses = [
  {
    keys: ['who is doms', 'about doms', 'about you', 'tell me about', 'introduce', 'yourself', 'who are you', 'who is doms'],
    reply: "Hi! 👋 Doms (Dominic Verano) is a Microsoft Power Platform Developer based in Cebu, Philippines.\n\nHe spent 20 months at Alliance Software Inc. — starting with a structured training program (Aug–Dec 2024), then transitioning to a full internship (Feb 2025–May 2026) delivering production applications for real clients."
  },
   {
    keys: ['project', 'projects', 'work', 'built', 'developed', 'portfolio', 'enterprise'],
    reply: "Doms contributed to 8 projects at Alliance Software Inc. across 20 months — in chronological order:\n\n🎫 Ticketing Management System (Training)\n📊 Project Management Tracker — Internal\n📊 Project Management Tracker — External (includes timeline auto-generation engine)\n⭐ Clinical Study Management System — Phase 1 (featured)\n🏭 Multi-Plant Inventory Management\n📦 Material Disposal Management System\n⭐ Clinical Study Management System — Phase 2\n📋 Document Approval System\n\nProjects span healthcare, manufacturing, and project management industries — all contributed to as part of a team with full SDLC involvement."
  },
  {
    keys: ['tech', 'stack', 'skill', 'tools', 'technology', 'technologies', 'use', 'power', 'apps', 'automate', 'pages', 'dataverse', 'sharepoint', 'html', 'css', 'javascript', 'liquid'],
    reply: "Doms' core stack:\n\n⚡ Power Platform — Power Apps, Power Automate, Power Pages, Dataverse, Power BI\n🌐 Web — HTML, CSS, JavaScript, Liquid templating\n💻 Languages — C#, Java, C, PHP\n🔧 Tools — VS Code, SharePoint, Figma, Moqups\n📐 Process — UI/UX, Wireframing, Database Design, QA Testing, Agile, SDLC, App Deployment"
  },
  {
    keys: ['hire', 'freelance', 'available', 'opportunity', 'job', 'work with', 'collaborate', 'client'],
    reply: "Yes — Doms is open to opportunities! 🟢\n\nHe's looking for:\n• Power Platform Developer roles (full-time or contract)\n• Low-code / enterprise application roles\n• Freelance Power Platform projects\n\nHe brings real enterprise experience, not just personal projects. Reach out via email or LinkedIn!"
  },
  {
    keys: ['contact', 'email', 'linkedin', 'github', 'reach', 'message', 'connect', 'get in touch'],
    reply: "Here's how to reach Doms:\n\n📧 dominicverano10@gmail.com\n💼 linkedin.com/in/dominic-verano\n🐙 github.com/doms\n\nEmail is usually the fastest — he responds within a day!"
  },
  {
    keys: ['certification', 'certif', 'pl-900', 'pl900', 'pl-200', 'pl200', 'microsoft cert', 'tesda'],
    reply: "Certifications:\n\n✅ TESDA CSS NC Level II (active)\n⏳ Electronics NC Level II — exam scheduled June 2026\n🎯 PL-900: Power Platform Fundamentals (planned)\n⚡ PL-200: Power Platform Functional Consultant (planned)\n\nHe's on track to add official Microsoft credentials to complement his hands-on experience."
  },
  {
    keys: ['intern', 'internship', 'alliance', 'company', 'alliance software'],
    reply: "Doms has been interning at Alliance Software Inc. in Cebu — a professional software company — since August 2024 — starting with a structured training program, then transitioning to full internship in February 2025. Over 20 months total at Alliance Software, he contributed to 7 enterprise projects for real clients across healthcare, manufacturing, and project management industries."
  },
  {
    keys: ['education', 'school', 'university', 'degree', 'course', 'study', 'studying', 'diploma', 'computer engineering'],
    reply: "Doms is pursuing a Diploma in Computer Engineering at CITE Technical Institute in the Philippines (Aug 2023 – Aug 2026).\n\nHe's been balancing full-time internship work at Alliance Software alongside his studies — graduating with both academic credentials and real enterprise experience."
  },
  {
    keys: ['healthcare', 'hospital', 'clinical', 'medical', 'excel', 'spreadsheet', 'extract'],
    reply: "The Clinical Study Management System is Doms' most technically challenging project.\n\nThe client requested a new study subtype on an existing hospital platform. That meant building a new Power Pages web template (HTML/CSS/JS/Liquid), updating the Power Apps model for the new subtype, and adding Power Automate flows.\n\nThe hardest part: a single automation flow that pulls data from 3 separate SharePoint lists and exports each into its own tab — all inside one Excel file. Getting the multi-sheet structure right with correct column mapping took significant work to get production-ready."
  },
  {
    keys: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'sup', 'yo'],
    reply: "Hey there! 👋 I'm Doms' portfolio assistant.\n\nFeel free to ask me about his projects, skills, experience, or how to hire him. I'll give you a straight answer!"
  },
  {
    keys: ['thank', 'thanks', 'thank you', 'appreciate', 'cheers'],
    reply: "You're welcome! 😊 If you have any other questions about Doms — his work, his availability, or anything else — just ask."
  },
  {
    keys: ['difference', 'stand out', 'why hire', 'why doms', 'what makes'],
    reply: "Here's what sets Doms apart:\n\n✅ Real enterprise experience (not just personal projects)\n✅ 7 production apps shipped for actual clients\n✅ Full SDLC coverage — design → dev → QA → deploy\n✅ Works across healthcare, manufacturing & PM domains\n✅ Bridges low-code and web dev with HTML/CSS/JS/Liquid\n✅ Production-ready despite being a student"
  }
];

const fallback = "Good question — I don't have a specific answer for that one.\n\nTry asking about Doms' projects, his tech stack, enterprise experience, certifications, or how to get in touch. I'll give you a direct answer!";

function getReply(input) {
  const lower = input.toLowerCase();
  for (const r of responses) {
    if (r.keys.some(k => lower.includes(k))) return r.reply;
  }
  return fallback;
}


// chat UI
function addMessage(text, role, animate = true) {
  const log = document.getElementById('chatLog');
  const wrapper = document.createElement('div');
  wrapper.className = `chat-message chat-message--${role}`;

  const bubble = document.createElement('div');
  bubble.className = 'chat-message__bubble';
  bubble.style.whiteSpace = 'pre-line';

  if (role === 'bot' && animate) {
    bubble.textContent = '';
    wrapper.appendChild(bubble);
    log.appendChild(wrapper);
    log.scrollTop = log.scrollHeight;

    // Typing effect
    let i = 0;
    const speed = 12;
    function type() {
      if (i < text.length) {
        bubble.textContent += text[i++];
        log.scrollTop = log.scrollHeight;
        setTimeout(type, speed);
      }
    }
    type();
  } else {
    bubble.textContent = text;
    wrapper.appendChild(bubble);
    log.appendChild(wrapper);
    log.scrollTop = log.scrollHeight;
  }
}

function sendMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  hideSuggestions();
  addMessage(text, 'user', false);
  input.value = '';
  setTimeout(() => addMessage(getReply(text), 'bot', true), 300);
}

function sendChip(btn) {
  const text = btn.textContent.replace(/^[^\s]+\s/, '').trim();
  hideSuggestions();
  addMessage(text, 'user', false);
  setTimeout(() => addMessage(getReply(text), 'bot', true), 300);
}

function hideSuggestions() {
  const s = document.getElementById('chatSuggestions');
  if (s) { s.style.display = 'none'; }
}

let chatOpen = false;

function toggleChat() {
  chatOpen = !chatOpen;
  document.getElementById('chatPanel').classList.toggle('chat-panel--open', chatOpen);
  if (chatOpen && document.getElementById('chatLog').children.length === 0) {
    setTimeout(() => addMessage("Hi! 👋 I'm Doms' assistant. I can tell you about his enterprise projects, Power Platform skills, or how to hire him. What would you like to know?", 'bot', true), 200);
  }
}
