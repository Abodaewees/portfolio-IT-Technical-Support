import { FormEvent, useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleDot,
  Cloud,
  Code2,
  Download,
  ExternalLink,
  FileCode2,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Moon,
  Network,
  Send,
  Server,
  ShieldCheck,
  Sparkles,
  Sun,
  Terminal,
  Wrench,
  X,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const publicBase = import.meta.env.BASE_URL;
const portraitImage = `${publicBase}images/abdelrahman-owais.jpeg`;
// استبدل الرقم التالي برقم التواصل النهائي عند تزويده.
const contactPhone = "01008156682";

const copy = {
  en: {
    nav: ["Home", "About", "Education", "Certificates", "Skills", "Experience", "Projects", "Services", "Achievements", "Testimonials", "Contact"],
    available: "Available for freelance work",
    heroKicker: "IT Engineer · System & Networks · DevOps in progress",
    heroGreeting: "Hello, I'm",
    heroTitle: "Abdelrahman\nOwais",
    heroBody:
      "I’m Abdelrahman Owais — an IT Technical Support Engineer with hands-on experience across networks, smart home systems, surveillance, and day-to-day IT operations. Dedicated to maintaining system uptime, troubleshooting hardware and network issues, and providing efficient technical support for businesses and clients..",
    heroCta: "Let’s work together",
    secondaryCta: "View my work",
    scroll: "Scroll to explore",
    trusted: "A practical path from infrastructure to automation",
    aboutEyebrow: "01 · About me",
    aboutTitle: "The person behind\nthe fix.",
    aboutBody:
      "I graduated in Computer Science with a Good overall grade and an Excellent graduation project. Over the last five years, I’ve worked close to the infrastructure that keeps businesses moving — supporting users, troubleshooting networks, and connecting the pieces across smart home, surveillance, and IT environments.",
    aboutBody2:
      "My approach is simple: understand the real problem, communicate clearly, and leave the system more stable than I found it. Today, I’m extending that foundation through DEPI’s DevOps Engineering track, studying AWS, Terraform, Docker, English, and soft skills.",
    uspLabel: "My positioning",
    usp: "I help small businesses and growing teams keep their IT environments reliable through hands-on support, structured troubleshooting, and a growing DevOps mindset.",
    uspAr: "أساعد الشركات الصغيرة والفرق النامية على الحفاظ على بيئات IT مستقرة من خلال الدعم العملي، واستكشاف الأعطال بشكل منظم، وعقلية DevOps تتطور باستمرار.",
    learnMore: "More about my path",
    stats: [
      ["05", "years around IT operations"],
      ["04", "years building network depth"],
      ["CCNA", "Networking Fundamentals & Practice", "Cisco Systems"],
      ["MCSA", "Operating Systems & Server Management", "Microsoft Systems"],
      ["HCIA", "Huawei training & certification"],
    ],
    quickInfo: [["Role", "IT Technical Support"], ["Focus", "Networks · Infrastructure · DevOps"], ["Availability", "Freelance & collaborations"]],
    achievementsTitle: "Proof points, not promises.",
    achievementsBody: "A practical foundation built through study, training, and five years close to real IT environments.",
    achievementItems: [
  ["CCNA & MCSA", "Networking & System Admin", "Cisco · Microsoft"],
  ["HCIA", "Huawei Training & Certification", "Networking Fundamentals"],
  ["5+ Years", "Field Experience & Infrastructure Setup", "Cabling & Punch Down · Racks & Switches · NVR & Servers"],
  ["DEPI", "DevOps Engineering Scholarship", "AWS · Terraform · Docker"],
  ["Excellent", "Graduation Project Grade", "Computer Science Degree"]
],
    testimonialsTitle: "A real voice from my training journey.",
    testimonialsBody: "Feedback from Eng. Menna Omar after the personal skills training program.",
    testimonialsCta: "Request a collaboration reference",
    skillsEyebrow: "02 · My skills",
    skillsTitle: "Wide enough to see\nthe whole system.",
    skillsBody:
      "I bring a support-first mindset to every layer — from the physical network and endpoint to security fundamentals and the cloud tools I’m currently adding to my toolkit.",
    skillGroups: [
      { title: "Infrastructure & support", icon: Wrench, items: ["IT technical support", "Network troubleshooting", "Smart home systems", "CCTV & surveillance", "Hardware & software setup"] },
      { title: "Networking & security", icon: ShieldCheck, items: ["CCNA foundations", "MCSA foundations", "Linux fundamentals", "Cybersecurity track", "OWASP Top 10 awareness"] },
      { title: "Cloud & DevOps learning", icon: Code2, items: ["AWS foundations", "Terraform / Infrastructure as Code", "Docker & containerization", "CI/CD concepts", "Linux & automation foundations"] },
      { title: "Soft skills", icon: Sparkles, items: ["Clear communication", "Problem solving", "Teamwork", "Receiving and applying feedback", "Continuous learning"] },
    ],
    learning: "Currently learning",
    learningBody: "DEPI · DevOps Engineering track · AWS · Terraform · Docker · CI/CD",
    expEyebrow: "03 · Experience",
    expTitle: "Close to the work.\nClose to the people.",
    expBody:
      "My experience was built in real environments where technical issues have a direct effect on people, devices, and operations. That taught me to stay calm, ask better questions, and solve what is actually blocking the work.",
    expRole: "IT Technical Support",
    expCompany: "User support · Hardware & software · Networks · Smart home · CCTV",
    expDate: "5 years of practical experience",
    expChallenge: "The challenge",
    expChallengeText: "Helping users stay productive when a device, application, account, connection, or on-site system is not working as expected.",
    expAction: "The approach",
    expActionText: "Receive the issue, ask focused questions, reproduce and isolate the fault, check hardware/software/network basics, apply the appropriate fix or escalation, and document the outcome.",
    expResult: "The value",
    expResultText: "Clear user communication, faster troubleshooting, reliable follow-up, and a more stable IT environment without overstating the role as software engineering or cloud production work.",
    education: "Education & certificates",
    educationItems: [
      ["B.Sc. Computer Science", "Computer Science graduate · Overall grade: Good", "Graduation project: Excellent"],
      ["Huawei HCIA", "Huawei training and certification", "Networking-focused learning"],
      ["DEPI DevOps Engineering", "Digital Egypt Pioneers Initiative training track", "DevOps engineering · technical and professional development"],
    ],
    servicesEyebrow: "05 · My services",
    servicesTitle: "Practical help for\nreal-world systems.",
    servicesBody: "If your environment is getting in the way of your work, I can help you make the problem visible, manageable, and easier to prevent next time.",
    services: [
      { icon: Network, number: "01", title: "Network troubleshooting", body: "Check connectivity, cables, Wi-Fi/LAN behavior, device reachability, and the basic causes behind everyday network incidents.", tags: ["Connectivity", "Diagnostics"] },
      { icon: Server, number: "02", title: "IT technical support", body: "Help users with hardware, software, peripherals, setup, access issues, and clear step-by-step troubleshooting.", tags: ["End-user", "Hardware & software"] },
      { icon: ShieldCheck, number: "03", title: "Security foundations", body: "A practical first layer of security awareness grounded in Linux, OWASP Top 10, and responsible habits.", tags: ["Baseline", "Awareness"] },
      { icon: Cloud, number: "04", title: "DevOps support path", body: "Growing capability across AWS, Docker, and Terraform — built on top of a hands-on infrastructure foundation.", tags: ["AWS", "Automation"] },
    ],
    projectsEyebrow: "04 · Featured projects",
    projectsTitle: "Real work,\naccurately told.",
    projectsBody: "I’m documenting my project archive now. Instead of filling this page with inflated case studies, here is the honest starting point — one real academic milestone and two clearly labeled practice directions.",
    projectRealBadge: "Real project",
    projectRealTitle: "Computer Science Graduation Project",
    projectRealSubtitle: "Capstone work · Awarded Excellent",
    projectRealBody: "A graduation project completed as part of my Computer Science degree. The full case study is currently being documented so the challenge, role, tools, and result can be shared accurately — not guessed.",
    projectRealItems: [["Challenge", "Details being documented"], ["Role", "Graduation Project Team Lead"], ["Result", "Project rated Excellent"]],
    projectRealLink: "Ask me about the project",
    projectConceptBadge: "Real project",
    conceptTitle: "Networking project",
    conceptBody: "A practical networking project covering infrastructure planning, cabling, racks, switches, device connectivity, testing, and troubleshooting.",
    conceptTags: ["Networking", "Infrastructure", "Switches"],
    conceptLink: "Project details",
    conceptTwoTitle: "Container-ready service setup",
    conceptTwoBody: "A current learning direction built around Docker, AWS, and Terraform — presented as a study brief, not as shipped client work.",
    conceptTwoTags: ["Docker", "AWS", "Terraform"],
    honest: "No invented client claims. Just a clear view of where I am and how I work.",
    contactEyebrow: "08 · Get in touch",
    contactTitle: "Have a system\nthat needs clarity?",
    contactBody: "Tell me what is getting in the way. I’ll get back to you with a clear next step — whether that is a quick answer, a support conversation, or a project worth scoping.",
    contactDirect: "Prefer a direct message?",
    sendEmail: "Email Abdelrahman",
    formName: "Your name",
    formEmail: "Your email",
    formSubject: "What do you need help with?",
    formMessage: "A little context about your system or project",
    send: "Send message",
    formHint: "This opens your email client with the message prepared.",
    footerLine: "IT support with an infrastructure mindset.",
    footerNote: "Built with honesty, curiosity, and a bias toward useful systems.",
    toggleArabic: "العربية",
    toggleTheme: "Toggle color theme",
    menu: "Menu",
  },
  ar: {
    nav: ["الرئيسية", "نبذة", "التعليم", "الشهادات", "المهارات", "الخبرة", "المشاريع", "الخدمات", "إنجازات", "آراء", "تواصل"],
    available: "متاح للعمل الحر",
    heroKicker: "  · مهندس IT · شبكات و  DevOps (قيد الدراسة) ",
    heroGreeting: "مرحبًا، أنا",
    heroTitle: "عبدالرحمن\nعويس",
    heroBody: "انا عبدالرحمن عويس مهندس IT متخصص تشغيل وتأمين البنية التحتية تصميم وتجهيز وإدارة الشبكات، أنظمة المراقبة (IP/NVR)، السيرفرات، والأجهزة بفاعلية  وضمان أعلى مستويات الاستمرارية بدون انقطاع حل المشاكل والدعم حل أعطال النظام والأجهزة للموظفين والعملاء بسرعة كفاءة",
    heroCta: "لنعمل معًا",
    secondaryCta: "شاهد أعمالي",
    scroll: "اكتشف المزيد",
    trusted: "مسار عملي من البنية التحتية إلى الأتمتة",
    aboutEyebrow: "01 · نبذة عني",
    aboutTitle: "الشخص الذي\nيقف خلف الحل.",
    aboutBody: "تخرجت في علوم الحاسب بتقدير جيد، وحصل مشروع تخرجي على امتياز. خلال آخر خمس سنوات عملت بالقرب من البنية التحتية التي تحافظ على استمرارية العمل — من دعم المستخدمين واستكشاف أعطال الشبكات إلى أنظمة السمارت هوم والمراقبة وبيئات الـIT.",
    aboutBody2: "طريقتي بسيطة: أفهم المشكلة الحقيقية، أشرحها بوضوح، وأترك النظام أكثر استقرارًا مما وجدته. حاليًا أوسع هذه القاعدة من خلال منحة DEPI لمسار DevOps Engineering، وأدرس AWS وTerraform وDocker واللغة الإنجليزية والمهارات الناعمة.",
    uspLabel: "تموضعي المهني",
    usp: "أساعد الشركات الصغيرة والفرق النامية على الحفاظ على بيئات IT مستقرة من خلال الدعم العملي، واستكشاف الأعطال بشكل منظم، وعقلية DevOps تتطور باستمرار.",
    uspAr: "I help small businesses and growing teams keep their IT environments reliable through hands-on support, structured troubleshooting, and a growing DevOps mindset.",
    learnMore: "اعرف المزيد عن مساري",
    stats: [["05", "سنوات حول عمليات الـIT"], ["04", "سنوات في بناء خبرة الشبكات"],["CCNA","دراسة الشبكات وممارستها"],["MCSA","دراسة انظمة التشغيل وانظمة السيرفرات "], ["HCIA", "تدريب وشهادة من هواوي"]],
    quickInfo: [["الدور", "دعم فني للـIT"], ["التركيز", "شبكات · بنية تحتية · DevOps"], ["التوافر", "عمل حر وتعاونات"]],
    achievementsTitle: "إثباتات، لا وعود.",
    achievementsBody: "قاعدة عملية مبنية على الدراسة والتدريب وخمس سنوات بالقرب من بيئات IT حقيقية.",
    achievementItems: [["CCNA & MCSA", "دراسة شبكات وإدارة نظم", "Cisco · Microsoft"],["HCIA", "تدريب وشهادة من هواوي", "أساس في الشبكات"],["5+ سنوات", "خبرة ميدانية وتجهيز بنية تحتية", "تأريج وتدبيس · راكات وسويتشات · NVR وسيرفرات"],["DEPI", "منحة DevOps Engineering", "AWS · Terraform · Docker"],["امتياز", "تقييم مشروع التخرج", "درجة علوم الحاسب"]],
    testimonialsTitle: "رأي حقيقي من رحلة التدريب.",
    testimonialsBody: "رأي المهندسة منة عمر بعد برنامج المهارات الشخصية.",
    testimonialsCta: "اطلب مرجع تعاون",
    skillsEyebrow: "02 · مهاراتي",
    skillsTitle: "خبرة واسعة بما يكفي\nلرؤية النظام كاملًا.",
    skillsBody: "أتعامل مع كل طبقة بعقلية الدعم أولًا — من الشبكة والأجهزة إلى أساسيات الأمن وأدوات السحابة التي أضيفها حاليًا إلى أدواتي.",
    skillGroups: [
      { title: "البنية التحتية والدعم", icon: Wrench, items: ["دعم فني للـIT", "استكشاف أعطال الشبكات", "أنظمة السمارت هوم", "كاميرات المراقبة", "تجهيز الأجهزة والبرمجيات"] },
      { title: "الشبكات والأمن", icon: ShieldCheck, items: ["أساسيات CCNA", "أساسيات MCSA", "أساسيات Linux", "مسار Cybersecurity", "التوعية بأهم ثغرات OWASP Top 10"] },
      { title: "السحابة وDevOps قيد التعلم", icon: Code2, items: ["أساسيات AWS", "Terraform / Infrastructure as Code", "Docker والحاويات", "مفاهيم CI/CD", "أساسيات Linux والأتمتة"] },
      { title: "المهارات الشخصية", icon: Sparkles, items: ["التواصل الواضح", "حل المشكلات", "العمل ضمن فريق", "تقبل وتطبيق الملاحظات", "التعلم المستمر"] },
    ],
    learning: "أتعلم حاليًا",
    learningBody: "DEPI · مسار DevOps Engineering · AWS · Terraform · Docker · CI/CD",
    expEyebrow: "03 · الخبرة",
    expTitle: "قريب من العمل.\nوقريب من الناس.",
    expBody: "بنيت خبرتي في بيئات حقيقية تؤثر فيها الأعطال التقنية مباشرة على الأشخاص والأجهزة وسير العمل. علّمني ذلك الهدوء، وطرح أسئلة أفضل، وحل ما يوقف العمل فعلًا.",
    expRole: "دعم فني للـIT",
    expCompany: "دعم المستخدمين · أجهزة وبرامج · شبكات · سمارت هوم · كاميرات مراقبة",
    expDate: "5 سنوات من الخبرة العملية",
    expChallenge: "التحدي",
    expChallengeText: "مساعدة المستخدمين على مواصلة العمل عندما يتعطل جهاز أو برنامج أو حساب أو اتصال أو نظام ميداني.",
    expAction: "الطريقة",
    expActionText: "استقبال المشكلة، طرح أسئلة محددة، إعادة ظهور العطل وتحديد سببه، فحص أساسيات الأجهزة والبرامج والشبكة، تنفيذ الحل أو التصعيد المناسب، ثم توثيق النتيجة.",
    expResult: "القيمة",
    expResultText: "تواصل واضح مع المستخدم، استكشاف أعطال أسرع، متابعة موثوقة، وبيئة IT أكثر استقرارًا دون تقديم الدور على أنه هندسة برمجيات أو تشغيل سحابي فعلي.",
    education: "التعليم والشهادات",
    educationItems: [["بكالوريوس علوم الحاسب", "خريج علوم حاسب · التقدير العام: جيد", "مشروع التخرج: امتياز"], ["Huawei HCIA", "تدريب وشهادة من هواوي", "تعلم يركز على الشبكات"], ["DEPI DevOps Engineering", "منحة قيد الدراسة", "AWS · Terraform · Docker · إنجليزي · Soft Skills"]],
    servicesEyebrow: "05 · خدماتي",
    servicesTitle: "مساعدة عملية\nلأنظمة حقيقية.",
    servicesBody: "إذا كانت بيئتك تعيق العمل، أساعدك على جعل المشكلة واضحة وأسهل في الإدارة، وأقل احتمالًا للتكرار.",
    services: [{ icon: Network, number: "01", title: "استكشاف أعطال الشبكات", body: "فحص الاتصال والكابلات وسلوك Wi-Fi/LAN وإمكانية الوصول للأجهزة والأسباب الأساسية لمشاكل الشبكات اليومية.", tags: ["اتصال", "تشخيص"] }, { icon: Server, number: "02", title: "الدعم الفني للـIT", body: "مساعدة المستخدمين في الأجهزة والبرامج والملحقات والتجهيز ومشاكل الوصول من خلال خطوات واضحة ومنظمة.", tags: ["مستخدمون", "أجهزة وبرامج"] }, { icon: ShieldCheck, number: "03", title: "أساسيات الأمن", body: "طبقة أولى عملية من الوعي الأمني مبنية على Linux وOWASP Top 10 والعادات المسؤولة.", tags: ["Baseline", "توعية"] }, { icon: Cloud, number: "04", title: "مسار دعم DevOps", body: "قدرات تتطور في AWS وDocker وTerraform مبنية على أساس عملي في البنية التحتية.", tags: ["AWS", "أتمتة"] }],
    projectsEyebrow: "04 · مشاريع مختارة",
    projectsTitle: "عمل حقيقي،\nوحكاية دقيقة.",
    projectsBody: "أعمل حاليًا على توثيق أرشيف مشاريعي. بدل ملء الصفحة بدراسات حالة مبالغ فيها، هذه هي البداية الصادقة — مشروع تخرج حقيقي واتجاهان تدريبيان موضحان بوضوح.",
    projectRealBadge: "مشروع حقيقي",
    projectRealTitle: "مشروع تخرج علوم الحاسب",
    projectRealSubtitle: "مشروع تخرج · حصل على امتياز",
    projectRealBody: "مشروع تخرج أنجزته ضمن درجة علوم الحاسب. يتم توثيق دراسة الحالة حاليًا حتى أشارك التحدي والدور والأدوات والنتيجة بدقة — دون تخمين.",
    projectRealItems: [["التحدي", "التفاصيل قيد التوثيق"], ["الدور", "قائد الفريق في مشروع التخرج"], ["النتيجة", "حصل المشروع على امتياز"]],
    projectRealLink: "اسألني عن المشروع",
    projectConceptBadge: "Brief تدريبي · Concept",
    conceptTitle: "مشروع الشبكات",
    conceptBody: "مشروع عملي يشمل تخطيط وتجهيز البنية التحتية، الكابلات والراكات والسويتشات، ربط الأجهزة، اختبار الاتصال واستكشاف الأعطال.",
    conceptTags: ["شبكات", "بنية تحتية", "Switches"],
    conceptLink: "تحميل ملف المشروع",
    conceptTwoTitle: "إعداد خدمة جاهزة للحاويات",
    conceptTwoBody: "اتجاه تعلم حالي مبني على Docker وAWS وTerraform — معروض كـStudy Brief وليس كعمل عميل منشور.",
    conceptTwoTags: ["Docker", "AWS", "Terraform"],
    honest: "لا توجد ادعاءات مختلقة. فقط صورة واضحة عن مكاني وطريقة عملي.",
    contactEyebrow: "06 · تواصل معي",
    contactTitle: "لديك نظام\nيحتاج للوضوح؟",
    contactBody: "احكِ لي ما الذي يعطل العمل. سأعود إليك بخطوة واضحة — إجابة سريعة أو نقاش دعم أو مشروع يستحق تحديد نطاقه.",
    contactDirect: "تفضل رسالة مباشرة أو مكالمة؟",
    sendEmail: "راسل عبدالرحمن",
    formName: "اسمك",
    formEmail: "بريدك الإلكتروني",
    formSubject: "بماذا تحتاج المساعدة؟",
    formMessage: "نبذة عن نظامك أو مشروعك",
    send: "إرسال الرسالة",
    formHint: "سيتم فتح برنامج البريد مع تجهيز الرسالة. إذا لم يفتح تلقائيًا استخدم البريد أو الهاتف بالأعلى.",
    footerLine: "دعم فني بعقلية بنية تحتية.",
    footerNote: "مبني على الصراحة والفضول والانحياز للأنظمة المفيدة.",
    toggleArabic: "English",
    toggleTheme: "تغيير نمط الألوان",
    menu: "القائمة",
  },
} as const;

type Locale = keyof typeof copy;

function SectionHeading({ eyebrow, title, body, id }: { eyebrow: string; title: string; body?: string; id?: string }) {
  return (
    <div className="section-heading" id={id}>
      <div className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</div>
      <h2>{title.split("\n").map((line, index) => <span key={line + index}>{line}{index < title.split("\n").length - 1 && <br />}</span>)}</h2>
      {body && <p>{body}</p>}
    </div>
  );
}

function IconButton({ label, href, children }: { label: string; href: string; children: React.ReactNode }) {
  return <a className="icon-button" href={href} aria-label={label} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{children}</a>;
}

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [locale, setLocale] = useState<Locale>("en");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const t = copy[locale];
  const isArabic = locale === "ar";
  const navIds = ["home", "about", "education", "certificates", "skills", "experience", "projects", "services", "achievements", "testimonials", "contact"];

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [locale, isArabic]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const sections = ["home", ...navIds].map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible?.target.id) setActiveSection(visible.target.id);
    }, { rootMargin: "-18% 0px -58% 0px", threshold: [0.1, 0.25, 0.5] });
    sections.forEach(section => observer.observe(section));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  const jump = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = String(data.get("subject") || "Portfolio inquiry");
    const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`;
    window.location.href = `mailto:bodyahmedewees@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <main className={isArabic ? "site-shell is-arabic" : "site-shell"}>
      <header className={scrolled ? "site-nav is-scrolled" : "site-nav"}>
        <div className="nav-inner">
          <button className="brand" onClick={() => jump("home")} aria-label="Back to home">
            <span className="brand-mark"><span>AO</span></span>
            <span className="brand-name">Abdelrahman <b>Owais</b></span>
          </button>
          <nav className={mobileOpen ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
            {t.nav.map((label, index) => <button className={activeSection === navIds[index] ? "active" : ""} key={label} onClick={() => jump(navIds[index])}>{label}</button>)}
          </nav>
          <div className="nav-actions">
            <button className="language-button" onClick={() => setLocale(isArabic ? "en" : "ar")} aria-label="Switch language">{t.toggleArabic}</button>
            <button className="theme-button" onClick={toggleTheme} aria-label={t.toggleTheme}>{theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}</button>
            <button className="menu-button" onClick={() => setMobileOpen(!mobileOpen)} aria-label={t.menu}>{mobileOpen ? <X size={20} /> : <Menu size={20} />}</button>
            <button className="nav-contact" onClick={() => jump("contact")}>{isArabic ? "تواصل معي" : "Connect"}<ArrowUpRight size={15} /></button>
          </div>
        </div>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-grid" />
        <div className="hero-inner container">
          <div className="hero-copy reveal-up">
            <div className="availability"><span className="status-dot" />{t.available}</div>
            <p className="hero-greeting">{t.heroGreeting}</p>
            <p className="hero-kicker">{t.heroKicker}</p>
            <h1>{t.heroTitle.split("\n").map((line, index) => <span key={line}>{line}{index < 2 && <br />}</span>)}</h1>
            <p className="hero-body">{t.heroBody}</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => jump("contact")}>{t.heroCta}<ArrowUpRight size={17} /></button>
              <button className="button button-ghost" onClick={() => jump("projects")}>{t.secondaryCta}<ChevronRight size={17} /></button>
            </div>
            <div className="hero-footnote"><span>{t.trusted}</span><span className="footnote-line" /></div>
          </div>
          <div className="hero-side reveal-up delay-2">
            <div className="hero-portrait"><img src={portraitImage} alt="Abdelrahman Owais" /><div className="hero-portrait-caption"><span>AO</span><span>IT SUPPORT<br />NETWORKS</span></div></div>
            <div className="hero-side-caption"><span>01</span><span>Infrastructure<br />with intention</span></div>
          </div>
        </div>
        <button className="scroll-cue" onClick={() => jump("about")}><ArrowDown size={17} /><span>{t.scroll}</span></button>
      </section>

      <section className="about-section section-pad" id="about">
          <div className="container about-layout">
          <div className="about-aside reveal-up"><div className="about-portrait"><img src={portraitImage} alt="Abdelrahman Owais" /><span>AO / IT SUPPORT</span></div><div className="number-stamp">01<span>/06</span></div><div className="vertical-rule" /><p>{isArabic ? "من الدعم اليومي إلى طريقة تفكير أكثر قابلية للتوسع." : "From daily support to a more scalable way of thinking."}</p></div>
          <div className="about-main"><SectionHeading eyebrow={t.aboutEyebrow} title={t.aboutTitle} body={t.aboutBody} /><p className="about-body-2">{t.aboutBody2}</p><div className="usp-panel"><div className="usp-top"><span>{t.uspLabel}</span><Sparkles size={16} /></div><p>{t.usp}</p>{isArabic && <div className="usp-ar">{t.uspAr}</div>}</div><button className="text-link" onClick={() => jump("experience")}>{t.learnMore}<ArrowUpRight size={15} /></button><div className="stat-row">{t.stats.map(([value, label]) => <div className="stat" key={value}><strong>{value}</strong><span>{label}</span></div>)}</div><div className="quick-info"><span className="mini-label">{isArabic ? "معلومات سريعة" : "Quick info"}</span><div className="quick-info-grid">{t.quickInfo.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></div></div>
        </div>
      </section>

      <section className="education-section section-pad" id="education">
        <div className="container education-block"><div><span className="mini-label">{t.education}</span><GraduationCap size={22} /></div><div className="education-list">{t.educationItems.map(([title, line, detail]) => <div className="education-item" key={title}><strong>{title}</strong><span>{line}</span><small>{detail}</small></div>)}</div></div>
        <span id="certificates" className="anchor-offset" />
      </section>

      <section className="skills-section section-pad" id="skills">
        <div className="container"><SectionHeading eyebrow={t.skillsEyebrow} title={t.skillsTitle} body={t.skillsBody} /><div className="skills-grid">{t.skillGroups.map((group, index) => { const Icon = group.icon; return <article className={`skill-card reveal-up delay-${index + 1}`} key={group.title}><div className="card-topline"><span className="card-index">0{index + 1}</span><Icon size={22} /></div><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}><Check size={14} />{item}</li>)}</ul></article>; })}</div><div className="learning-strip"><div className="learning-icon"><Terminal size={18} /></div><div><span>{t.learning}</span><strong>{t.learningBody}</strong></div><div className="learning-tags"><span>AWS</span><span>Terraform</span><span>Docker</span></div></div></div>
      </section>

      <section className="experience-section section-pad" id="experience">
        <div className="container"><SectionHeading eyebrow={t.expEyebrow} title={t.expTitle} body={t.expBody} /><div className="experience-card"><div className="experience-meta"><div className="timeline-dot"><CircleDot size={15} /></div><span className="experience-date">{t.expDate}</span><h3>{t.expRole}</h3><p>{t.expCompany}</p><div className="experience-tags"><span>IT Support</span><span>Networks</span><span>Smart Home</span><span>CCTV</span></div></div><div className="experience-story"><div className="story-row"><span>{t.expChallenge}</span><p>{t.expChallengeText}</p></div><div className="story-row"><span>{t.expAction}</span><p>{t.expActionText}</p></div><div className="story-row"><span>{t.expResult}</span><p>{t.expResultText}</p></div></div></div></div>
      </section>

      <section className="projects-section section-pad" id="projects">
        <div className="container"><SectionHeading eyebrow={t.projectsEyebrow} title={t.projectsTitle} body={t.projectsBody} /><div className="projects-grid"><article className="project-feature"><div className="project-visual"><div className="visual-grid" /><div className="project-code"><span className="code-line code-muted">// graduation-project</span><span><b>const</b> status = <em>“excellent”</em>;</span><span><b>const</b> details = <em>“documenting”</em>;</span><span className="code-cursor">▌</span></div><span className="project-badge">{t.projectRealBadge}</span></div><div className="project-info"><div className="project-title-row"><div><h3>{t.projectRealTitle}</h3><span>{t.projectRealSubtitle}</span></div><FileCode2 size={22} /></div><p>{t.projectRealBody}</p><div className="project-facts">{t.projectRealItems.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div><a className="project-link" href="mailto:bodyahmedewees@gmail.com?subject=Graduation%20project%20details">{t.projectRealLink}<ArrowUpRight size={15} /></a><a className="project-link project-download" href={`${publicBase}projects/SONProjectpresentation.pptx`} download><Download size={15} />{isArabic ? "تحميل العرض التقديمي" : "Download presentation"}</a></div></article><div className="concept-stack"><article className="concept-card"><div className="concept-mark"><Network size={19} /></div><span className="concept-badge">{t.projectConceptBadge}</span><h3>{t.conceptTitle}</h3><p>{t.conceptBody}</p><div className="concept-footer"><div>{t.conceptTags.map(tag => <span key={tag}>{tag}</span>)}</div><a href={`${publicBase}projects/SimulatorDesign.pkt`} download>{t.conceptLink}</a></div></article><article className="concept-card concept-card-alt"><div className="concept-mark"><Layers3 size={19} /></div><span className="concept-badge">{t.projectConceptBadge}</span><h3>{t.conceptTwoTitle}</h3><p>{t.conceptTwoBody}</p><div className="concept-footer"><div>{t.conceptTwoTags.map(tag => <span key={tag}>{tag}</span>)}</div><a href={`${publicBase}projects/SimulatorDesign.pkt`} download>{t.conceptLink}</a></div></article></div></div><div className="honesty-note"><CircleDot size={15} />{t.honest}</div></div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="container"><SectionHeading eyebrow={t.servicesEyebrow} title={t.servicesTitle} body={t.servicesBody} /><div className="services-grid">{t.services.map((service, index) => { const Icon = service.icon; return <article className="service-card" key={service.title}><div className="service-number">{service.number}</div><div className="service-icon"><Icon size={22} /></div><h3>{service.title}</h3><p>{service.body}</p><div className="service-tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="service-arrow"><ArrowUpRight size={16} /></div></article>; })}</div></div>
      </section>

      <section className="proof-section section-pad" id="achievements">
        <div className="container"><SectionHeading eyebrow={isArabic ? "06 · إنجازات" : "06 · Achievements"} title={t.achievementsTitle} body={t.achievementsBody} /><div className="proof-grid">{t.achievementItems.map(([label, title, detail]) => <article className="proof-card" key={label}><span>{label}</span><h3>{title}</h3><p>{detail}</p><Check size={16} /></article>)}</div></div>
      </section>

      <section className="testimonials-section section-pad" id="testimonials">
        <div className="container testimonials-card"><div><SectionHeading eyebrow={isArabic ? "07 · رأي" : "07 · Testimonial"} title={t.testimonialsTitle} body={t.testimonialsBody} /><blockquote className="testimonial-quote">{isArabic ? "كان من دواعي سروري تدريب عبدالرحمن عويس خلال برنامج المهارات الشخصية، وكان بالفعل من الطلاب المتميزين. ما أعجبني حقًا في عبدالرحمن أنه كان دائمًا يحاول تطبيق ما تعلمه وكان منفتحًا على التغذية الراجعة. كان ملتزمًا بتطوير نفسه وأظهر دائمًا موقفًا إيجابيًا خلال الجلسات." : "It was my pleasure to train Abdelrahman Owais during the Personal Skills program. He was one of the distinguished students, always trying to apply what he learned and open to feedback. He was committed to developing himself and consistently showed a positive attitude during the sessions."}<cite>— {isArabic ? "المهندسة منة عمر" : "Eng. Menna Omar"}</cite></blockquote></div><a className="button button-ghost" href="mailto:bodyahmedewees@gmail.com?subject=Collaboration%20reference">{t.testimonialsCta}<ArrowUpRight size={16} /></a></div>
      </section>

      <section className="contact-section section-pad" id="contact">
        <div className="container contact-layout"><div className="contact-copy"><SectionHeading eyebrow={t.contactEyebrow} title={t.contactTitle} body={t.contactBody} /><div className="contact-direct"><span>{t.contactDirect}</span><a href="mailto:bodyahmedewees@gmail.com">{t.sendEmail}<ArrowUpRight size={15} /></a><a className="phone-link" href={`tel:${contactPhone}`}>☎ {contactPhone}</a></div><div className="social-links"><IconButton label="LinkedIn" href="https://www.linkedin.com/in/abdelrahman-owais"><Linkedin size={18} /></IconButton><IconButton label="GitHub" href="https://github.com/Abodaewees/"><Github size={18} /></IconButton><IconButton label="Email" href="mailto:bodyahmedewees@gmail.com"><Mail size={22} /></IconButton><IconButton label="Phone" href={`tel:${contactPhone}`}><Phone size={22} /></IconButton></div></div><form className="contact-form" onSubmit={submitForm}><div className="form-row"><label><span>{t.formName}</span><input required name="name" type="text" placeholder={isArabic ? "عبدالرحمن" : "Your name"} /></label><label><span>{t.formEmail}</span><input required name="email" type="email" placeholder="you@example.com" /></label></div><label><span>{t.formSubject}</span><input required name="subject" type="text" placeholder={isArabic ? "دعم شبكة / مشروع DevOps..." : "Network support / DevOps project..."} /></label><label><span>{t.formMessage}</span><textarea required name="message" rows={5} placeholder={isArabic ? "ما الذي تحاول إنجازه؟" : "What are you trying to make work?"} /></label><button className="button button-primary form-submit" type="submit">{sent ? <><Check size={17} />{isArabic ? "تم تجهيز رسالتك" : "Message prepared"}</> : <>{t.send}<Send size={16} /></>}</button><small>{t.formHint}</small></form></div>
      </section>

      <footer className="site-footer"><div className="container footer-inner"><div className="footer-brand"><span className="brand-mark"><span>AO</span></span><div><strong>Abdelrahman Owais</strong><span>{t.footerLine}</span></div></div><div className="footer-links"><a href="mailto:bodyahmedewees@gmail.com">bodyahmedewees@gmail.com</a><a href="https://www.linkedin.com/in/abdelrahman-owais" target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={13} /></a><a href="https://github.com/Abodaewees/" target="_blank" rel="noreferrer">GitHub <ExternalLink size={13} /></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Abdelrahman Owais</span><span>{t.footerNote}</span><button onClick={() => jump("home")} aria-label="Back to top"><ArrowUpRight size={15} /></button></div></div></footer>
    </main>
  );
}
