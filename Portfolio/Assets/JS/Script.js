// display settings (light/dark)

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
    document.getElementById('theme-icon').textContent = '🌙';
  }
})();

// chat assistant (static response)

const responses = [
  {
    keys: ['who is doms', 'about doms', 'about you', 'tell me about', 'introduce', 'yourself', 'who are you'],
    reply: "Hi! I'm Doms' assistant 👋\n\nDoms is a Microsoft Power Platform Developer with hands-on experience across the full application development lifecycle — from UI/UX design to deployment — and has contributed to 6 real-world enterprise projects."
  },
  {
    keys: ['project', 'projects', 'work', 'built', 'developed', 'portfolio'],
    reply: "Doms has worked on 7 projects:\n\n1️⃣ Project Management Tracker (Internal)\n2️⃣ Project Management Tracker (External)\n3️⃣ Clinical Study Management System\n4️⃣ Multi-Plant Inventory Management\n5️⃣ Material Disposal Management System\n6️⃣ Clinical Study Management System\n7️⃣ Document Approval System\n\nScroll up to see details on each one!"
  },
  {
    keys: ['tech', 'stack', 'skill', 'tools', 'technology', 'technologies', 'use', 'power', 'apps', 'automate', 'pages', 'dataverse', 'sharepoint', 'html', 'css', 'javascript', 'liquid', 'java', 'c#', 'php', 'mysql', 'dsa', 'oop', 'programming'],
    reply: "Doms' tech stack includes:\n\n⚡ Power Platform — Power Apps, Power Automate, Power Pages, Dataverse, Power BI\n💻 Programming Languages — C#, Java, C, PHP\n🌐 Web Technologies — HTML, CSS, JavaScript, Liquid\n🔧 Tools — VS Code, SharePoint, SharePoint Designer, Figma, Moqups\n📐 Design & Process — UI/UX Design, Wireframing, Database Design, Agile, SDLC, OOP, DSA, QA Testing, App Deployment"
  },
  {
    keys: ['hire','freelance','available','opportunity','job','work with','collaborate','client'],
    reply: "Doms is open to freelance opportunities! 🟢\n\nHe specializes in Microsoft Power Platform development — particularly Power Apps, Power Automate, and Power Pages, where he also applies HTML, CSS, JavaScript, and Liquid templating to build custom web components.\n\nFeel free to reach out via email or LinkedIn to discuss a project!"
  },
  {
    keys: ['contact', 'email', 'linkedin', 'github', 'reach', 'message', 'connect', 'get in touch'],
    reply: "You can reach Doms at:\n\n📧 dominicverano10@email.com\n💼 linkedin.com/in/dominic-verano\n🐙 github.com/doms\n\nDon't hesitate to reach out — he'd love to connect!"
  },
  {
    keys: ['certification', 'certif', 'pl-900', 'pl900', 'pl-200', 'pl200', 'microsoft cert'],
    reply: "Doms currently holds a TESDA CSS NC II certification and has an Electronics NC II exam scheduled for June 2026."
  },
  {
    keys: ['intern', 'internship', 'alliance', 'company', 'alliance software'],
    reply: "Doms is currently interning at Alliance Software Inc. in Cebu, Philippines as a Software Developer.\n\nHe started in February 2025 and has since contributed to 6 enterprise projects across different industries including healthcare, manufacturing, and project management."
  },
  {
    keys: ['education', 'school', 'university', 'degree', 'course', 'study', 'studying', 'it', 'information technology'],
    reply: "Doms is currently pursuing a Diploma in Computer Engineering program in the Philippines.\n\nHe's balancing academic coursework (including theology and project management) with his hands-on internship experience."
  },
  {
    keys: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening', 'sup', 'yo'],
    reply: "Hello! 👋 Nice to meet you! I'm Doms' portfolio assistant.\n\nFeel free to ask me anything about Doms — his projects, skills, experience, or how to get in touch!"
  },
  {
    keys: ['thank', 'thanks', 'thank you', 'appreciate', 'cheers'],
    reply: "You're welcome! 😊 Feel free to ask anything else about Doms or his work!"
  }
];

const fallback = "Hmm, I'm not sure about that one 🤔\n\nTry asking about Doms' projects, tech stack, experience, certifications, or how to contact him!";

function getReply(input) {
  const lower = input.toLowerCase();
  for (const r of responses) {
    if (r.keys.some(k => lower.includes(k))) return r.reply;
  }
  return fallback;
}

// chat UI

function addMessage(text, role) {
  const log = document.getElementById('chatLog');
  const wrapper = document.createElement('div');
  wrapper.className = `chat-message chat-message--${role}`;
  const bubble = document.createElement('div');
  bubble.className = 'chat-message__bubble';
  bubble.style.whiteSpace = 'pre-line';
  bubble.textContent = text;
  wrapper.appendChild(bubble);
  log.appendChild(wrapper);
  log.scrollTop = log.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById('chatInput');
  const text = input.value.trim();
  if (!text) return;
  addMessage(text, 'user');
  input.value = '';
  setTimeout(() => addMessage(getReply(text), 'bot'), 350);
}

function sendChip(btn) {
  const text = btn.textContent.replace(/^[^\s]+\s/, '').trim();
  addMessage(text, 'user');
  setTimeout(() => addMessage(getReply(text), 'bot'), 350);
}

let chatOpen = false;

function toggleChat() {
  chatOpen = !chatOpen;
  document.getElementById('chatPanel').classList.toggle('chat-panel--open', chatOpen);
  if (chatOpen && document.getElementById('chatLog').children.length === 0) {
    setTimeout(() => addMessage("Hi there! 👋 I'm Doms' assistant. Ask me anything about his skills, projects, or how to hire him!", 'bot'), 200);
  }
}