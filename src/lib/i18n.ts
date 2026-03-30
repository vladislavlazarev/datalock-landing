export type Locale = "ru" | "en" | "uz";

export const translations = {
  nav: {
    features: { ru: "Возможности", en: "Features", uz: "Imkoniyatlar" },
    technology: { ru: "Технологии", en: "Technology", uz: "Texnologiyalar" },
    security: { ru: "Безопасность", en: "Security", uz: "Xavfsizlik" },
    about: { ru: "О нас", en: "About", uz: "Biz haqimizda" },
    requestDemo: { ru: "Запросить демо", en: "Request Demo", uz: "Demo so'rash" },
  },
  hero: {
    badge: {
      ru: "Контроль · Аналитика · Безопасность",
      en: "Control · Analytics · Security",
      uz: "Nazorat · Tahlil · Xavfsizlik",
    },
    headline1: { ru: "Полный контроль.", en: "Full control.", uz: "To'liq nazorat." },
    headline2: {
      ru: "Абсолютная прозрачность.",
      en: "Absolute transparency.",
      uz: "Mutlaq shaffoflik.",
    },
    subtitle: {
      ru: "Единая платформа для мониторинга сотрудников, защиты данных и\u00a0аналитики эффективности бизнеса в\u00a0реальном времени.",
      en: "A unified platform for employee monitoring, data protection, and real-time business performance analytics.",
      uz: "Xodimlarni monitoring qilish, ma'lumotlarni himoya qilish va biznes samaradorligini real vaqtda tahlil qilish uchun yagona platforma.",
    },
    learnMore: { ru: "Узнать больше", en: "Learn more", uz: "Batafsil" },
  },
  stats: {
    s1: {
      ru: "рабочего времени сотрудники тратят не на задачи",
      en: "of work time employees spend off-task",
      uz: "ish vaqtini xodimlar vazifalardan tashqari sarflaydi",
    },
    s2: {
      ru: "утечек данных происходят изнутри компании",
      en: "of data leaks originate from inside the company",
      uz: "ma'lumotlar oqishi kompaniya ichidan kelib chiqadi",
    },
    s3: {
      ru: "проектов реализовано нашей командой",
      en: "projects delivered by our team",
      uz: "loyiha jamoamiz tomonidan amalga oshirildi",
    },
  },
  problems: {
    overline: { ru: "Проблемы", en: "Problems", uz: "Muammolar" },
    headline1: {
      ru: "Бизнес теряет деньги каждый день.",
      en: "Your business loses money every day.",
      uz: "Biznesingiz har kuni pul yo'qotmoqda.",
    },
    headline2: { ru: "И вот почему.", en: "Here's why.", uz: "Sababi mana." },
    cards: [
      {
        title: { ru: "Потери продуктивности", en: "Productivity losses", uz: "Samaradorlik yo'qotishlari" },
        desc: {
          ru: "Сотрудники тратят до 45% рабочего времени на личные задачи, соцсети и отвлечения. Это напрямую снижает прибыль.",
          en: "Employees spend up to 45% of work time on personal tasks, social media, and distractions. This directly reduces profit.",
          uz: "Xodimlar ish vaqtining 45% gacha shaxsiy ishlar, ijtimoiy tarmoqlar va chalg'itishlarga sarflaydi. Bu foydani bevosita kamaytiradi.",
        },
      },
      {
        title: { ru: "Нет прозрачности", en: "No transparency", uz: "Shaffoflik yo'q" },
        desc: {
          ru: "Руководители не видят реальную загрузку и оценивают людей субъективно. Сильные недооценены, слабые незамечены.",
          en: "Managers can't see actual workloads and evaluate people subjectively. Strong performers are undervalued, weak ones go unnoticed.",
          uz: "Rahbarlar haqiqiy ish yukini ko'rmaydi va xodimlarni sub'ektiv baholaydi. Kuchlilar kam baholanadi, zaiflar sezilmaydi.",
        },
      },
      {
        title: { ru: "Внутренние утечки данных", en: "Internal data leaks", uz: "Ichki ma'lumot oqishlari" },
        desc: {
          ru: "Основной риск исходит не извне, а от самих сотрудников. Компании теряют деньги, клиентов и репутацию.",
          en: "The main risk comes not from outside, but from employees themselves. Companies lose money, clients, and reputation.",
          uz: "Asosiy xavf tashqaridan emas, balki xodimlarning o'zidan keladi. Kompaniyalar pul, mijozlar va obro'sini yo'qotadi.",
        },
      },
      {
        title: { ru: "Решения вслепую", en: "Blind decisions", uz: "Ko'r-ko'rona qarorlar" },
        desc: {
          ru: "Отсутствие точных данных приводит к ошибочным управленческим решениям. Это тормозит рост.",
          en: "Lack of accurate data leads to wrong management decisions. This slows down growth.",
          uz: "Aniq ma'lumotlarning yo'qligi noto'g'ri boshqaruv qarorlariga olib keladi. Bu o'sishni sekinlashtiradi.",
        },
      },
      {
        title: { ru: "Удалёнка без контроля", en: "Uncontrolled remote work", uz: "Nazorat qilinmagan masofaviy ish" },
        desc: {
          ru: "Компания не понимает, чем реально занят удалённый сотрудник в рабочее время.",
          en: "The company doesn't know what remote employees actually do during work hours.",
          uz: "Kompaniya masofaviy xodim ish vaqtida aslida nima bilan shug'ullanishini bilmaydi.",
        },
      },
      {
        title: { ru: "Инсайдерские угрозы", en: "Insider threats", uz: "Ichki tahdidlar" },
        desc: {
          ru: "Без систем контроля сложно выявить мошенничество и саботаж на ранней стадии.",
          en: "Without monitoring systems, it's hard to detect fraud and sabotage early on.",
          uz: "Nazorat tizimlarisiz firibgarlik va sabotajni erta bosqichda aniqlash qiyin.",
        },
      },
    ],
  },
  features: {
    overline: { ru: "Возможности", en: "Features", uz: "Imkoniyatlar" },
    headline1: {
      ru: "Всё, что нужно для контроля бизнеса.",
      en: "Everything you need to control your business.",
      uz: "Biznesingizni nazorat qilish uchun zarur hamma narsa.",
    },
    headline2: { ru: "В одной системе.", en: "In one system.", uz: "Bitta tizimda." },
    subtitle: {
      ru: "DataLock собирает данные о сотрудниках, процессах и рисках в одном месте.",
      en: "DataLock collects data about employees, processes, and risks in one place.",
      uz: "DataLock xodimlar, jarayonlar va xavflar haqidagi ma'lumotlarni bir joyda to'playdi.",
    },
    cards: [
      {
        title: {
          ru: "Контроль действий в реальном времени",
          en: "Real-time activity monitoring",
          uz: "Real vaqtda faoliyatni nazorat qilish",
        },
        desc: {
          ru: "Система фиксирует, чем занимается сотрудник: программы, сайты, операции с данными. Выявляет неэффективность автоматически.",
          en: "The system tracks what an employee does: apps, sites, data operations. It automatically detects inefficiency.",
          uz: "Tizim xodimning nima qilayotganini kuzatadi: dasturlar, saytlar, ma'lumotlar bilan operatsiyalar. Samarasizlikni avtomatik aniqlaydi.",
        },
      },
      {
        title: {
          ru: "Объективная оценка продуктивности",
          en: "Objective productivity assessment",
          uz: "Ob'ektiv samaradorlik bahosi",
        },
        desc: {
          ru: "Автоматическая оценка продуктивности сотрудников и отделов. Руководитель получает объективную картину — только данные.",
          en: "Automatic productivity assessment of employees and departments. Managers get an objective picture — data only.",
          uz: "Xodimlar va bo'limlar samaradorligini avtomatik baholash. Rahbar ob'ektiv rasmni oladi — faqat ma'lumotlar.",
        },
      },
      {
        title: {
          ru: "Предотвращение утечек данных",
          en: "Data leak prevention",
          uz: "Ma'lumot oqishining oldini olish",
        },
        desc: {
          ru: "Отслеживание подозрительных действий с файлами и информацией. Снижение риска утечек и защита от внутренних угроз.",
          en: "Tracking suspicious actions with files and data. Reducing leak risks and protecting against internal threats.",
          uz: "Fayllar va ma'lumotlar bilan shubhali harakatlarni kuzatish. Oqish xavfini kamaytirish va ichki tahdidlardan himoya.",
        },
      },
    ],
  },
  technology: {
    overline: { ru: "Технологии", en: "Technology", uz: "Texnologiyalar" },
    headline1: { ru: "От данных к решениям", en: "From data to decisions", uz: "Ma'lumotlardan qarorlarga" },
    headline2: { ru: "за\u00a0секунды.", en: "in seconds.", uz: "soniyalarda." },
    steps: [
      {
        title: { ru: "Сбор данных", en: "Data collection", uz: "Ma'lumot yig'ish" },
        desc: {
          ru: "Агент на устройстве фиксирует все действия сотрудника",
          en: "An agent on the device records all employee actions",
          uz: "Qurilmadagi agent xodimning barcha harakatlarini qayd etadi",
        },
      },
      {
        title: { ru: "Умная аналитика", en: "Smart analytics", uz: "Aqlli tahlil" },
        desc: {
          ru: "Алгоритмы находят отклонения и сигнализируют о рисках",
          en: "Algorithms detect deviations and flag risks",
          uz: "Algoritmlar og'ishlarni aniqlaydi va xavflarni bildiradi",
        },
      },
      {
        title: { ru: "Визуализация", en: "Visualization", uz: "Vizualizatsiya" },
        desc: {
          ru: "Понятные графики и дашборды в реальном времени",
          en: "Clear charts and dashboards in real time",
          uz: "Real vaqtda tushunarli grafiklar va dashboardlar",
        },
      },
      {
        title: { ru: "Действия", en: "Action", uz: "Harakat" },
        desc: {
          ru: "Руководитель принимает решения на основе данных",
          en: "Managers make data-driven decisions",
          uz: "Rahbar ma'lumotlarga asoslangan qarorlar qabul qiladi",
        },
      },
    ],
    bottomCards: [
      {
        title: { ru: "Интеграция с инфраструктурой", en: "Infrastructure integration", uz: "Infratuzilma bilan integratsiya" },
        desc: {
          ru: "Легко подключается к существующим системам без перестройки IT.",
          en: "Easily connects to existing systems without IT restructuring.",
          uz: "IT tizimini qayta qurishsiz mavjud tizimlarga osongina ulanadi.",
        },
      },
      {
        title: { ru: "Удалённый доступ", en: "Remote access", uz: "Masofaviy kirish" },
        desc: {
          ru: "Управление и мониторинг из любой точки мира.",
          en: "Management and monitoring from anywhere in the world.",
          uz: "Dunyoning istalgan nuqtasidan boshqarish va monitoring.",
        },
      },
    ],
  },
  metrics: {
    headline: {
      ru: "Результаты, которые говорят сами за себя.",
      en: "Results that speak for themselves.",
      uz: "O'zi gapiruvchi natijalar.",
    },
    items: [
      { value: { ru: "до 60%", en: "up to 60%", uz: "60% gacha" }, label: { ru: "снижение непродуктивного времени", en: "reduction in unproductive time", uz: "samarasiz vaqtni qisqartirish" } },
      { value: { ru: "до 95%", en: "up to 95%", uz: "95% gacha" }, label: { ru: "предотвращение внутренних утечек", en: "prevention of internal leaks", uz: "ichki oqishlarning oldini olish" } },
      { value: { ru: "100%", en: "100%", uz: "100%" }, label: { ru: "прозрачность по всем отделам", en: "transparency across all departments", uz: "barcha bo'limlar bo'yicha shaffoflik" } },
      { value: { ru: "3 мес.", en: "3 mo.", uz: "3 oy" }, label: { ru: "окупаемость системы", en: "system payback period", uz: "tizimning o'zini qoplash muddati" } },
    ],
  },
  security: {
    overline: { ru: "Безопасность", en: "Security", uz: "Xavfsizlik" },
    headline: {
      ru: "Ваши данные под надёжной защитой.",
      en: "Your data is securely protected.",
      uz: "Ma'lumotlaringiz ishonchli himoyada.",
    },
    subtitle: {
      ru: "DataLock обеспечивает полную безопасность собранных данных и соответствует современным стандартам информационной безопасности.",
      en: "DataLock ensures complete security of collected data and meets modern information security standards.",
      uz: "DataLock to'plangan ma'lumotlarning to'liq xavfsizligini ta'minlaydi va zamonaviy axborot xavfsizligi standartlariga javob beradi.",
    },
    cards: [
      {
        title: { ru: "Шифрование данных", en: "Data encryption", uz: "Ma'lumotlarni shifrlash" },
        desc: { ru: "Все данные шифруются при передаче и хранении.", en: "All data is encrypted in transit and at rest.", uz: "Barcha ma'lumotlar uzatish va saqlashda shifrlanadi." },
      },
      {
        title: { ru: "Контроль доступа", en: "Access control", uz: "Kirishni nazorat qilish" },
        desc: { ru: "Гибкая система прав и ролей для разных уровней.", en: "Flexible rights and roles system for different levels.", uz: "Turli darajalar uchun moslashuvchan huquq va rollar tizimi." },
      },
      {
        title: { ru: "Оценка рисков", en: "Risk assessment", uz: "Xavflarni baholash" },
        desc: { ru: "Автоматическое выявление опасного поведения до убытков.", en: "Automatic detection of dangerous behavior before losses occur.", uz: "Zarar yetkazilgunga qadar xavfli xatti-harakatlarni avtomatik aniqlash." },
      },
    ],
  },
  about: {
    overline: { ru: "О нас", en: "About us", uz: "Biz haqimizda" },
    headline: {
      ru: "Разработано командой Perfect System Solution.",
      en: "Developed by the Perfect System Solution team.",
      uz: "Perfect System Solution jamoasi tomonidan ishlab chiqilgan.",
    },
    subtitle: {
      ru: "Мы работаем на рынке с 2020 года и реализовали более 40 проектов. Команда из 15 специалистов гарантирует высокое качество и стабильную работу DataLock.",
      en: "We've been in the market since 2020 and have delivered over 40 projects. A team of 15 specialists guarantees high quality and stable DataLock performance.",
      uz: "Biz 2020 yildan beri bozorda ishlaymiz va 40 dan ortiq loyihani amalga oshirdik. 15 nafar mutaxassisdan iborat jamoa DataLockning yuqori sifati va barqaror ishlashini kafolatlaydi.",
    },
    stats: [
      { value: "2020", label: { ru: "на рынке с", en: "in market since", uz: "bozorda" } },
      { value: "40+", label: { ru: "проектов", en: "projects", uz: "loyihalar" } },
      { value: "15", label: { ru: "специалистов", en: "specialists", uz: "mutaxassislar" } },
    ],
  },
  cta: {
    headline1: { ru: "Возьмите бизнес", en: "Take your business", uz: "Biznesingizni" },
    headline2: { ru: "под\u00a0контроль.", en: "under control.", uz: "nazorat\u00a0qiling." },
    subtitle: {
      ru: "Запросите демонстрацию и узнайте, как DataLock поможет вашей компании.",
      en: "Request a demo and learn how DataLock can help your company.",
      uz: "Demo so'rang va DataLock kompaniyangizga qanday yordam berishini bilib oling.",
    },
    contact: { ru: "Связаться с нами", en: "Contact us", uz: "Biz bilan bog'lanish" },
  },
  footer: {
    description: {
      ru: "Единая система контроля и аналитики бизнеса",
      en: "Unified business control and analytics system",
      uz: "Yagona biznes nazorati va tahlil tizimi",
    },
    navigation: { ru: "Навигация", en: "Navigation", uz: "Navigatsiya" },
    contacts: { ru: "Контакты", en: "Contacts", uz: "Kontaktlar" },
    copyright: {
      ru: "DataLock by Perfect System Solution. Все права защищены.",
      en: "DataLock by Perfect System Solution. All rights reserved.",
      uz: "DataLock by Perfect System Solution. Barcha huquqlar himoyalangan.",
    },
  },
} as const;

export function detectLocale(): Locale {
  if (typeof navigator === "undefined") return "en";
  const lang = navigator.language?.toLowerCase() ?? "";
  if (lang.startsWith("ru")) return "ru";
  if (lang.startsWith("uz")) return "uz";
  return "en";
}
