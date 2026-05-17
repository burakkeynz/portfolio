//Translations
const t = {
  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_contact: "Contact",
    hero_eyebrow: "Kagithane, Istanbul · Open to Opportunities",
    hero_title_html: "Full-stack roots.<br><em>AI/ML destination.</em>",
    hero_bio_html:
      "I started by <strong>building products</strong>: deployed full-stack apps, real-time systems, mobile apps. Then, during an internship, a mentor showed me the AI side. I never looked back. Now I am an <strong>AI Engineering trainee</strong> (top 120 from 8,000+ applicants), building RL agents, completing an NLP capstone on Turkish dialogue, and I can still ship the backend.",
    hero_btn_projects: "View Projects",
    hero_btn_cv: "Download CV",
    hero_btn_contact: "Contact",
    hero_badge: "Open to Opportunities",
    hero_stat1_label: "Milli Teknoloji Akademisi",
    hero_stat1_sub: "Top 120 from 8,000+ applicants",
    hero_stat2_label: "Yapay Zeka Akademisi",
    hero_stat2_sub: "Selected from 31,700 applicants",
    hero_stat3_label: "Projects Shipped",
    about_label: "About",
    about_title_html:
      "From shipping products<br>to <em>teaching machines.</em>",
    about_p1_html:
      "I started as a <strong>full-stack developer</strong>: building real products, learning how systems work end-to-end. That foundation gave me something most ML engineers lack: I can ship.",
    about_p2_html:
      "During my internship at <strong>Çizgi Technology</strong>, I worked alongside an AI Research Engineer who redirected my entire trajectory. The problems I found most compelling were all on the AI side: autonomous systems, language models, intelligent pipelines.",
    about_p3_html:
      "I am a <strong>double major</strong> at Bahçeşehir University (Computer Engineering + Management Engineering), advancing through two competitive national AI programs, and looking for a team where I can contribute to real AI/ML work.",
    skills_header: "Skills & Technologies",
    skill_ai: "AI & Data",
    skill_lang: "Languages",
    skill_frontend: "Frontend",
    skill_backend: "Backend & DB",
    skill_devops: "DevOps, Realtime & Tools",
    projects_label: "Projects",
    projects_title_html:
      "Things I've built,<br><em>broken, and learned from.</em>",
    github_all: "All on GitHub",
    proj_github_link: "View on GitHub",
    tag_rl: "Reinforcement Learning",
    tag_fullstack_ai: "Full Stack · AI",
    tag_fullstack: "Full Stack",
    tag_mobile_ai: "Mobile · AI",
    tag_agent: "AI Agents",
    tag_ml: "Machine Learning",
    tag_deployed: "Deployed Product",
    proj_agentbench_title: "AgentBench-TR",
    proj_agentbench_desc:
      "4-agent LangGraph pipeline with hybrid BM25 and ChromaDB retrieval using Reciprocal Rank Fusion. Claim-level hallucination detection in the ValidatorAgent and automatic retry loop on low-confidence answers. Evaluation layer tracking consistency, hallucination rate, cost and latency per trace, exposed through a FastAPI backend and Plotly Dash dashboard.",
    proj_aeroguard_title: "AeroGuard",
    proj_aeroguard_desc:
      "End-to-end ML pipeline on the NASA CMAPSS dataset to predict Remaining Useful Life of turbofan engines. Engineered temporal features over 5–20 cycle windows, benchmarked five models, achieved RMSE of 1.50 with Random Forest. Applied SHAP TreeExplainer for global and local interpretability and built a three-tier early warning system.",
    proj1_title: "Autonomous Driving via Deep RL",
    proj1_desc:
      "DQN and SAC algorithms across four simulation environments (Highway, Merge, Roundabout, Racetrack). Reward functions optimized for a zero-collision policy, high-speed navigation and strategic merging.",
    proj2_title: "Hospital Panel System",
    proj2_desc:
      "Real-time hospital communication platform, full-stack owner across all modules. React/Redux + FastAPI, Socket.IO, WebRTC, Gemini 2.5 AI assistant, live speech-to-text via AudioWorklet (48→16 kHz + VAD), JWT auth, AWS S3, encrypted PDF exports.",
    proj3_title: "Chovora",
    proj3_desc:
      "Full technical ownership in a cross-functional team. JWT auth, dynamic cart, admin dashboard. Deployed on Render & Vercel, iterated on UX alongside non-technical teammates.",
    proj4_title: "Android Chat App",
    proj4_desc:
      "Android chat application integrating OpenAI API (ChatGPT) for real-time conversation. Developed all activity classes: MainActivity, User, UI and logic layers, focusing on API bindings and data flow.",
    proj5_title: "Todo Web App",
    proj5_desc:
      "Independent full-stack task manager: auth, CRUD, image upload, fully responsive. React frontend, FastAPI backend, MySQL, JWT authentication.",
    exp_label: "Experience",
    exp_title_html: "Where I've been,<br><em>what I've learned.</em>",
    present: "Present",
    upcoming: "Upcoming",
    org_baykar: "Baykar Technologies",
    org_ministry: "Ministry of Industry & Technology",
    org_yapay_zeka: "Yapay Zeka ve Teknoloji Akademisi",
    org_cizgi: "Çizgi Technology",
    org_kaan: "Kaan Makina",
    org_bau: "Bahçeşehir University",
    exp0_role: "AI Software Developer Intern",
    exp0_desc:
      "Accepted as an AI Software Developer for Baykar Technologies' 2026 Summer Internship Program before graduation.",
    exp1_role: "AI Trainee — Milli Teknoloji Akademisi",
    exp1_desc:
      "Admitted to the AI Specialization Program, top 120 from 8,000+ applicants after intensive foundational screening (Data Structures, OS, DBMS). Focusing on Advanced Python, Cloud Systems, GPU Accelerators, and Parallel Programming. Capstone project under industry mentorship.",
    exp2_role: "AI Trainee",
    exp2_desc:
      "Selected as one of 1,500 participants from 31,700 applicants. National AI program supported by Ministry of Industry and Technology, Google Turkey, and T3 Foundation. Collaborating on AI-driven initiatives within a competitive ecosystem focusing on large-scale tech integration.",
    exp3_role: "Software Development Intern",
    exp3_desc:
      "Built a full-fledged hospital communication panel under senior R&D mentorship. Real-time features with React, FastAPI, WebRTC, Socket.IO. Integrated Gemini 2.5 with live audio transcription (AudioWorklet, VAD). Delivered a production-ready demo.",
    exp4_role: "Data Analyst Intern",
    exp4_desc:
      "Optimized Python/Django backend logic for faster data handling. Generated visual analytics dashboards with Pandas, NumPy and Matplotlib to monitor production efficiency. Used Watchdog library to track file changes and update database.",
    exp5_role: "BSc Computer Engineering + Management Engineering",
    exp5_desc:
      "Double major: technical depth in CE (GPA 3.14) with systems thinking from ME (GPA 3.43). Capstone: Turkish dialogue NLP with BERTurk + Whisper. Core team member, BAU Management Engineering Club.",
    tag_doublemajor: "Double Major",
    tag_gpa: "GPA 3.14 / 3.43",
    tag_capstone: "Capstone: NLP",
    tag_ai_engineering: "AI Engineering",
    tag_cloud_systems: "Cloud Systems",
    tag_gpu_parallel: "GPU / Parallel",
    tag_ai_spec: "AI Specialization",
    tag_data_analytics: "Data Analytics",
    contact_label: "Contact",
    contact_title_html: "Let's build<br><em>something together.</em>",
    contact_desc:
      "Open to AI/ML Engineering roles, Data Science positions, and interesting conversations. Based in Istanbul, open to hybrid and remote.",
    contact_email_label: "Email",
    form_title: "Send a Message",
    form_name: "Full Name",
    form_name_ph: "Your name",
    form_email_label: "Email",
    form_email_ph: "your@email.com",
    form_message: "Message",
    form_message_ph: "What's on your mind?",
    form_submit: "Send",
    form_sending: "Sending…",
    toast_success: "Message sent. I'll get back to you soon.",
    toast_error: "Something went wrong. Please try again.",
    footer_copy: "© 2026 · burakegekaya.com",
  },
  tr: {
    nav_about: "Hakkımda",
    nav_projects: "Projeler",
    nav_experience: "Deneyim",
    nav_contact: "İletişim",
    hero_eyebrow: "Kağıthane, İstanbul · Fırsatlara Açık",
    hero_title_html: "Full-stack kökenli.<br><em>AI/ML odaklı.</em>",
    hero_bio_html:
      "<strong>Ürün geliştirerek</strong> başladım: full-stack uygulamalar, gerçek zamanlı sistemler, mobil projeler. Stajımda bir mentor bana AI tarafını gösterdi. Bir daha geriye bakmadım. Şu an 8.000'den fazla aday arasından seçilen 120 kişiden biri olarak <strong>AI Engineering stajyeriyim</strong>; RL ajanları geliştiriyor, Türkçe diyalog üzerine bir NLP bitirme projesi tamamlıyor ve hâlâ backend yazabiliyorum.",
    hero_btn_projects: "Projeleri Gör",
    hero_btn_cv: "CV İndir",
    hero_btn_contact: "İletişim",
    hero_badge: "Fırsatlara Açık",
    hero_stat1_label: "Milli Teknoloji Akademisi",
    hero_stat1_sub: "8.000+ aday arasından top 120",
    hero_stat2_label: "Yapay Zeka Akademisi",
    hero_stat2_sub: "31.700 başvurudan seçildi",
    hero_stat3_label: "Tamamlanan Proje",
    about_label: "Hakkımda",
    about_title_html: "Ürün geliştirmekten<br><em>makine öğretmeye.</em>",
    about_p1_html:
      "<strong>Full-stack developer</strong> olarak başladım: gerçek ürünler inşa ettim, sistemlerin nasıl çalıştığını uçtan uca öğrendim. Bu temel, çoğu ML mühendisinde olmayan bir şey verdi bana: üretebiliyorum.",
    about_p2_html:
      "<strong>Çizgi Teknoloji</strong>'deki stajımda bir AI Research Engineer ile çalıştım; o, kariyer yolumu tamamen değiştirdi. En ilgimi çeken problemlerin hepsi AI tarafındaydı: otonom sistemler, dil modelleri, akıllı pipeline'lar.",
    about_p3_html:
      "Bahçeşehir Üniversitesi'nde <strong>çift anadal</strong> öğrencisiyim (Bilgisayar Mühendisliği + İşletme Mühendisliği). İki ulusal AI programında ilerliyorum ve gerçek AI/ML çalışmalarına katkı sağlayabileceğim bir ekip arıyorum.",
    skills_header: "Beceriler ve Teknolojiler",
    skill_ai: "Yapay Zeka & Veri",
    skill_lang: "Programlama Dilleri",
    skill_frontend: "Arayüz",
    skill_backend: "Backend & Veri Tabanı",
    skill_devops: "DevOps, Gerçek Zamanlı & Araçlar",
    projects_label: "Projeler",
    projects_title_html: "İnşa ettiğim,<br><em>bozup öğrendiğim şeyler.</em>",
    github_all: "GitHub'da Hepsi",
    proj_github_link: "GitHub'da Gör",
    tag_rl: "Pekiştirmeli Öğrenme",
    tag_fullstack_ai: "Full Stack · YZ",
    tag_fullstack: "Full Stack",
    tag_mobile_ai: "Mobil · YZ",
    tag_agent: "YZ Ajanları",
    tag_ml: "Makine Öğrenmesi",
    tag_deployed: "Canlıya Alındı",
    proj_agentbench_title: "AgentBench-TR",
    proj_agentbench_desc:
      "Karşılıklı Sıra Füzyonu ile hibrit BM25 ve ChromaDB erişimi kullanan 4-ajanlı LangGraph pipeline'ı. ValidatorAgent'ta iddia düzeyinde hallüsinasyon tespiti ve düşük güvenlikli yanıtlar için otomatik yeniden deneme döngüsü. FastAPI backend ve Plotly Dash panosu üzerinden izleme katmanı.",
    proj_aeroguard_title: "AeroGuard",
    proj_aeroguard_desc:
      "NASA CMAPSS veri setinde turbofan motorların Kalan Kullanım Ömrünü tahmin eden uçtan uca ML pipeline'ı. 5-20 döngülük pencereler üzerinde temporal özellik mühendisliği, beş model kıyaslaması, Random Forest ile RMSE 1.50. SHAP TreeExplainer ile yorumlanabilirlik ve üç kademeli erken uyarı sistemi.",
    proj1_title: "Derin RL ile Otonom Sürüş",
    proj1_desc:
      "Dört farklı simülasyon ortamında (Highway, Merge, Roundabout, Racetrack) DQN ve SAC algoritmaları ile otonom sürüş ajanları geliştirildi. Sıfır çarpışma politikası, yüksek hızda navigasyon ve stratejik birleşme için ödül fonksiyonları optimize edildi.",
    proj2_title: "Hastane Panel Sistemi",
    proj2_desc:
      "Gerçek zamanlı hastane iletişim platformu; tüm modüllerin tam teknik sahibi. React/Redux + FastAPI, Socket.IO, WebRTC, Gemini 2.5 AI asistan, AudioWorklet ile canlı konuşma metni (48→16 kHz + VAD), JWT kimlik doğrulama, AWS S3, şifreli PDF.",
    proj3_title: "Chovora",
    proj3_desc:
      "Çok disiplinli bir ekipte tam teknik sahiplik. JWT kimlik doğrulama, dinamik sepet, yönetici paneli. Render & Vercel'de yayına alındı, teknik olmayan ekip arkadaşlarıyla birlikte UX üzerinde iterasyon yapıldı.",
    proj4_title: "Android Sohbet Uygulaması",
    proj4_desc:
      "OpenAI API entegrasyonlu Android sohbet uygulaması. Tüm aktivite sınıfları kişisel olarak geliştirildi: MainActivity, User, UI ve mantık katmanları.",
    proj5_title: "Todo Web Uygulaması",
    proj5_desc:
      "Bağımsız geliştirilen full-stack görev yöneticisi: kimlik doğrulama, CRUD, görsel yükleme, tam responsive. React frontend, FastAPI backend, MySQL, JWT.",
    exp_label: "Deneyim",
    exp_title_html: "Nerede bulundum,<br><em>ne öğrendim.</em>",
    present: "Günümüz",
    upcoming: "Yakında",
    org_baykar: "Baykar Teknoloji",
    org_ministry: "Sanayi ve Teknoloji Bakanlığı",
    org_yapay_zeka: "Yapay Zeka ve Teknoloji Akademisi",
    org_cizgi: "Çizgi Teknoloji",
    org_kaan: "Kaan Makina",
    org_bau: "Bahçeşehir Üniversitesi",
    exp0_role: "Yapay Zeka Yazılım Geliştirici Stajyeri",
    exp0_desc:
      "Mezuniyetinden önce Baykar Teknoloji 2026 Yaz Staj Programı'na AI Software Developer olarak kabul edildi.",
    exp1_role: "Yapay Zeka Stajyeri — Milli Teknoloji Akademisi",
    exp1_desc:
      "8.000'den fazla aday arasından yoğun temel eğitim (Veri Yapıları, İşletim Sistemleri, VTYS) sonucunda seçilen 120 kişiden biri olarak AI Uzmanlık Programı'na kabul edildim. İleri Python, Bulut Sistemleri, GPU Hızlandırıcıları ve Paralel Programlama odaklı eğitim.",
    exp2_role: "Yapay Zeka Stajyeri",
    exp2_desc:
      "31.700 başvuru arasından 1.500 katılımcıdan biri olarak seçildim. Sanayi ve Teknoloji Bakanlığı, Google Türkiye ve T3 Vakfı destekli ulusal AI programı. Büyük ölçekli teknoloji entegrasyonuna odaklanan rekabetçi bir ekosistemde AI odaklı girişimlerde işbirliği yapılıyor.",
    exp3_role: "Yazılım Geliştirme Stajyeri",
    exp3_desc:
      "Kıdemli Ar-Ge mentorluğunda tam kapsamlı hastane iletişim paneli geliştirdim. React, FastAPI, WebRTC, Socket.IO ile gerçek zamanlı özellikler. Gemini 2.5 entegrasyonu ve AudioWorklet ile canlı ses transkripsiyonu.",
    exp4_role: "Veri Analisti Stajyeri",
    exp4_desc:
      "Daha hızlı veri işleme için Python/Django backend mantığı optimize edildi. Üretim verimliliğini izlemek amacıyla Pandas, NumPy ve Matplotlib ile görsel analiz panoları oluşturuldu. Dosya değişikliklerini izlemek için Watchdog kütüphanesi kullanıldı.",
    exp5_role: "Bilgisayar Mühendisliği + İşletme Mühendisliği (Çift Anadal)",
    exp5_desc:
      "Teknik derinlik: Bilgisayar Mühendisliği (GPA 3,14); sistem düşüncesi: İşletme Mühendisliği (GPA 3,43). Bitirme projesi: BERTurk + Whisper ile Türkçe diyalog NLP. BAU İşletme Mühendisliği Kulübü çekirdek ekibi.",
    tag_doublemajor: "Çift Anadal",
    tag_gpa: "GPA 3.14 / 3.43",
    tag_capstone: "Bitirme: NLP",
    tag_ai_engineering: "Yapay Zeka Mühendisliği",
    tag_cloud_systems: "Bulut Sistemleri",
    tag_gpu_parallel: "GPU / Paralel",
    tag_ai_spec: "AI Uzmanlığı",
    tag_data_analytics: "Veri Analitiği",
    contact_label: "İletişim",
    contact_title_html: "Birlikte bir şeyler<br><em>inşa edelim.</em>",
    contact_desc:
      "AI/ML Engineering rolleri, Veri Bilimi pozisyonları ve ilginç sohbetlere açığım. İstanbul merkezli, hibrit ve uzaktan çalışmaya açık.",
    contact_email_label: "E-posta",
    form_title: "Mesaj Gönder",
    form_name: "Ad Soyad",
    form_name_ph: "Adınız",
    form_email_label: "E-posta",
    form_email_ph: "ornek@email.com",
    form_message: "Mesaj",
    form_message_ph: "Ne düşünüyorsunuz?",
    form_submit: "Gönder",
    form_sending: "Gönderiliyor…",
    toast_success: "Mesaj iletildi. En kısa sürede geri döneceğim.",
    toast_error: "Bir sorun oluştu. Lütfen tekrar deneyin.",
    footer_copy: "© 2026 · burakegekaya.com",
  },
};

let currentLang = "en";

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (t[lang][key] !== undefined) el.textContent = t[lang][key];
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (t[lang][key] !== undefined) el.innerHTML = t[lang][key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (t[lang][key] !== undefined) el.placeholder = t[lang][key];
  });

  const visible = [...sections]
    .filter((s) => s.getBoundingClientRect().top <= window.innerHeight * 0.6)
    .at(-1);
  if (visible) {
    document.title = titles[lang][visible.id] || titles[lang].hero;
  }
}

const nav = document.getElementById("nav");
window.addEventListener(
  "scroll",
  () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  },
  { passive: true }
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
document
  .querySelectorAll("#hero .reveal")
  .forEach((el) => el.classList.add("visible"));

function showToast(type) {
  const toast = document.getElementById("toast");
  const msg = document.getElementById("toast-msg");
  const icon = document.getElementById("toast-icon");
  const key = type === "success" ? "toast_success" : "toast_error";
  msg.textContent = t[currentLang][key];
  icon.textContent = type === "success" ? "✓" : "✕";
  toast.className = `toast${type === "error" ? " error" : ""}`;
  requestAnimationFrame(() => toast.classList.add("visible"));
  setTimeout(() => toast.classList.remove("visible"), 4000);
}

const RATE_LIMIT = 3;
const RATE_WINDOW = 24 * 60 * 60 * 1000;
const LS_KEY = "portfolio_submissions";

function getSubmissions() {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (!raw) return [];
    return JSON.parse(raw).filter((ts) => Date.now() - ts < RATE_WINDOW);
  } catch {
    return [];
  }
}
function recordSubmission() {
  const list = getSubmissions();
  list.push(Date.now());
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(list));
  } catch {}
}
function isRateLimited() {
  return getSubmissions().length >= RATE_LIMIT;
}

const WEB3FORMS_KEY = "33c589ba-2ab5-4230-895d-26ab6bd1449c";
const FORMSPREE_URL = "https://api.web3forms.com/submit";

const form = document.getElementById("contact-form");
const submitBtn = document.getElementById("form-submit-btn");
const submitLabel = document.getElementById("submit-label");
const submitArrow = document.getElementById("submit-arrow");
const submitSpinner = document.getElementById("submit-spinner");

if (form && isRateLimited()) {
  submitBtn.disabled = true;
  submitLabel.textContent = "—";
  submitBtn.title = "Günlük limit aşıldı / Daily limit reached";
}

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const honey = form.querySelector('[name="_honey"]').value;
    if (honey) return;
    if (isRateLimited()) {
      showToast("error");
      return;
    }

    const name = document.getElementById("f-name").value.trim();
    const email = document.getElementById("f-email").value.trim();
    const message = document.getElementById("f-message").value.trim();
    if (!name || !email || !message) return;

    submitBtn.disabled = true;
    submitLabel.textContent = t[currentLang]["form_sending"];
    submitArrow.classList.add("hidden");
    submitSpinner.classList.remove("hidden");

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name,
          email,
          message,
          subject: "Portfolio Contact: " + name,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        recordSubmission();
        showToast("success");
        form.reset();
      } else {
        showToast("error");
        submitBtn.disabled = false;
      }
    } catch {
      showToast("error");
      submitBtn.disabled = false;
    } finally {
      submitLabel.textContent = t[currentLang]["form_submit"];
      submitArrow.classList.remove("hidden");
      submitSpinner.classList.add("hidden");
    }
  });
}

const sections = document.querySelectorAll("section[id]");
const titles = {
  en: {
    hero: "Burak Ege Kaya — AI/ML Engineer",
    about: "About — Burak Ege Kaya",
    projects: "Projects — Burak Ege Kaya",
    experience: "Experience — Burak Ege Kaya",
    contact: "Contact — Burak Ege Kaya",
  },
  tr: {
    hero: "Burak Ege Kaya — AI/ML Mühendisi",
    about: "Hakkımda — Burak Ege Kaya",
    projects: "Projeler — Burak Ege Kaya",
    experience: "Deneyim — Burak Ege Kaya",
    contact: "İletişim — Burak Ege Kaya",
  },
};

history.scrollRestoration = "manual";

window.addEventListener("load", () => {
  const loader = document.getElementById("page-loader");
  setTimeout(() => {
    loader.classList.add("fade-out");
    setTimeout(() => loader.remove(), 200);
  }, 100);
});

setLang(localStorage.getItem("lang") || "en");

const titleObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        document.title = titles[currentLang][id] || titles[currentLang].hero;
      }
    });
  },
  { threshold: 0.3 }
);
sections.forEach((s) => titleObserver.observe(s));
