// ─── ۲۵ تست روانشناسی کامل با سوالات ────────────────────────────

export type TestOption = {
  text: string;
  score: string;
  value: number;
};

export type TestQuestion = {
  id: number;
  text: string;
  options: TestOption[];
};

export type PsychTest = {
  id: string;
  title: string;
  description: string;
  category: string;
  icon: string;
  duration: string;
  questionCount: number;
  tags: string[];
  questions: TestQuestion[];
  scoringKey: Record<string, { label: string; description: string }>;
};

export const PSYCH_TESTS: PsychTest[] = [
  // ─── ۱. تست برون‌گرایی / درون‌گرایی ─────────────────────────
  {
    id: "extroversion",
    title: "تست برون‌گرایی و درون‌گرایی",
    description: "میزان تمایل شما به تعاملات اجتماعی و انرژی‌گرفتن از جمع یا تنهایی",
    category: "شخصیت",
    icon: "🧠",
    duration: "۵ دقیقه",
    questionCount: 5,
    tags: ["برون‌گرایی", "درون‌گرایی", "اجتماعی"],
    questions: [
      {
        id: 1,
        text: "در یک مهمانی بزرگ چه احساسی دارید؟",
        options: [
          { text: "عالیه! عاشق آشنایی با آدم‌های جدیدم", score: "extroversion", value: 5 },
          { text: "خوبه ولی بعد از مدتی خسته میشم", score: "extroversion", value: 3 },
          { text: "ترجیح میدم جمع‌های کوچیک‌تر باشه", score: "extroversion", value: 2 },
          { text: "اصلا راحت نیستم و سعی میکنم زود برم", score: "extroversion", value: 1 },
        ],
      },
      {
        id: 2,
        text: "آخر هفته ایده‌آل شما چطوریه؟",
        options: [
          { text: "بیرون رفتن با دوستان و فعالیت گروهی", score: "extroversion", value: 5 },
          { text: "ترکیبی از فعالیت اجتماعی و استراحت", score: "extroversion", value: 3 },
          { text: "خوندن کتاب یا فیلم دیدن در خونه", score: "extroversion", value: 2 },
          { text: "کاملاً تنها و دور از همه", score: "extroversion", value: 1 },
        ],
      },
      {
        id: 3,
        text: "وقتی مشکلی دارید، اول چیکار میکنید؟",
        options: [
          { text: "با چند نفر صحبت میکنم و نظر میخوام", score: "extroversion", value: 5 },
          { text: "با یک دوست صمیمی مشورت میکنم", score: "extroversion", value: 3 },
          { text: "خودم فکر میکنم و بعد شاید با کسی حرف بزنم", score: "extroversion", value: 2 },
          { text: "ترجیح میدم خودم حلش کنم", score: "extroversion", value: 1 },
        ],
      },
      {
        id: 4,
        text: "در محیط کار ترجیح میدید چطور کار کنید؟",
        options: [
          { text: "کار تیمی و جلسات گروهی زیاد", score: "extroversion", value: 5 },
          { text: "ترکیبی از کار تیمی و فردی", score: "extroversion", value: 3 },
          { text: "بیشتر فردی با جلسات محدود", score: "extroversion", value: 2 },
          { text: "کاملاً فردی و مستقل", score: "extroversion", value: 1 },
        ],
      },
      {
        id: 5,
        text: "بعد از یک روز شلوغ اجتماعی چه حسی دارید؟",
        options: [
          { text: "پر انرژی و سرحال", score: "extroversion", value: 5 },
          { text: "خوب ولی نیاز به یکم استراحت", score: "extroversion", value: 3 },
          { text: "خسته و نیاز به تنهایی", score: "extroversion", value: 2 },
          { text: "کاملاً تخلیه شدم", score: "extroversion", value: 1 },
        ],
      },
    ],
    scoringKey: {
      high: { label: "برون‌گرا", description: "شما از تعاملات اجتماعی انرژی می‌گیرید" },
      medium: { label: "میانه‌رو", description: "شما تعادل خوبی بین اجتماعی بودن و تنهایی دارید" },
      low: { label: "درون‌گرا", description: "شما از تنهایی و تأمل انرژی می‌گیرید" },
    },
  },

  // ─── ۲. تست مدیریت استرس ──────────────────────────────────
  {
    id: "stress-management",
    title: "تست مدیریت استرس",
    description: "بررسی توانایی شما در مقابله با فشارهای روزمره و استرس",
    category: "سلامت روان",
    icon: "😰",
    duration: "۵ دقیقه",
    questionCount: 5,
    tags: ["استرس", "آرامش", "مقابله"],
    questions: [
      {
        id: 1,
        text: "وقتی با یک مشکل غیرمنتظره مواجه میشید، واکنش اولتون چیه؟",
        options: [
          { text: "آرام می‌مونم و راه‌حل پیدا میکنم", score: "stressTolerance", value: 5 },
          { text: "کمی نگران میشم ولی کنترل میکنم", score: "stressTolerance", value: 4 },
          { text: "استرس میگیرم و تمرکزم بهم میریزه", score: "stressTolerance", value: 2 },
          { text: "خیلی عصبانی یا ناراحت میشم", score: "stressTolerance", value: 1 },
        ],
      },
      {
        id: 2,
        text: "شب‌ها قبل از خواب معمولاً ذهنتون چطوره؟",
        options: [
          { text: "آرام و بدون نگرانی خاصی", score: "stressTolerance", value: 5 },
          { text: "گاهی فکرهایی میاد ولی کنترل میکنم", score: "stressTolerance", value: 3 },
          { text: "معمولاً درگیر فکرهای مختلفم", score: "stressTolerance", value: 2 },
          { text: "نمیتونم بخوابم از بس فکر میکنم", score: "stressTolerance", value: 1 },
        ],
      },
      {
        id: 3,
        text: "وقتی چند کار همزمان دارید، چطور مدیریت میکنید؟",
        options: [
          { text: "اولویت‌بندی میکنم و آرام انجام میدم", score: "stressTolerance", value: 5 },
          { text: "لیست میکنم ولی گاهی فشار میاد", score: "stressTolerance", value: 3 },
          { text: "سعی میکنم همه رو با هم انجام بدم و استرس میگیرم", score: "stressTolerance", value: 2 },
          { text: "حس میکنم داره همه چیز از کنترلم خارج میشه", score: "stressTolerance", value: 1 },
        ],
      },
      {
        id: 4,
        text: "آیا روش خاصی برای آرام کردن خودتون دارید؟",
        options: [
          { text: "بله، مدیتیشن یا ورزش منظم دارم", score: "stressTolerance", value: 5 },
          { text: "گاهی پیاده‌روی یا موسیقی گوش میدم", score: "stressTolerance", value: 3 },
          { text: "نه خیلی، فقط سعی میکنم حواسمو پرت کنم", score: "stressTolerance", value: 2 },
          { text: "نه، معمولاً نمیدونم چیکار کنم", score: "stressTolerance", value: 1 },
        ],
      },
      {
        id: 5,
        text: "وقتی کسی از شما انتقاد میکنه، واکنشتون چیه؟",
        options: [
          { text: "گوش میدم و ازش یاد میگیرم", score: "stressTolerance", value: 5 },
          { text: "اولش ناراحت میشم ولی بعداً فکر میکنم", score: "stressTolerance", value: 3 },
          { text: "خیلی ناراحت میشم و کلی بهش فکر میکنم", score: "stressTolerance", value: 2 },
          { text: "عصبانی میشم یا حالت تدافعی میگیرم", score: "stressTolerance", value: 1 },
        ],
      },
    ],
    scoringKey: {
      high: { label: "مدیریت عالی", description: "شما توانایی بالایی در مدیریت استرس دارید" },
      medium: { label: "متوسط", description: "گاهی استرس بر شما غلبه می‌کند" },
      low: { label: "نیاز به کمک", description: "مدیریت استرس برای شما چالش‌برانگیز است" },
    },
  },

  // ─── ۳. تست مهارت‌های ارتباطی ────────────────────────────────
  {
    id: "social-skills",
    title: "تست مهارت‌های ارتباطی",
    description: "سنجش توانایی شما در برقراری و حفظ ارتباطات سالم",
    category: "ارتباطات",
    icon: "🤝",
    duration: "۵ دقیقه",
    questionCount: 5,
    tags: ["ارتباطات", "اجتماعی", "همدلی"],
    questions: [
      {
        id: 1,
        text: "وقتی با دیگران نظر متفاوتی دارید، چطور بیانش میکنید؟",
        options: [
          { text: "با آرامش نظرم رو میگم و نظر طرف مقابل رو هم میشنوم", score: "socialSkills", value: 5 },
          { text: "نظرم رو میگم ولی سعی میکنم بحث نشه", score: "socialSkills", value: 4 },
          { text: "معمولاً سکوت میکنم تا بحث نشه", score: "socialSkills", value: 2 },
          { text: "محکم روی نظرم میمونم حتی اگه بحث بشه", score: "socialSkills", value: 1 },
        ],
      },
      {
        id: 2,
        text: "وقتی دوستتون ناراحته، چیکار میکنید؟",
        options: [
          { text: "گوش میدم، همدلی میکنم و کمکش میکنم", score: "socialSkills", value: 5 },
          { text: "سعی میکنم حالشو عوض کنم و بخندونمش", score: "socialSkills", value: 3 },
          { text: "بهش میگم نگران نباشه و درست میشه", score: "socialSkills", value: 2 },
          { text: "نمیدونم چی بگم و معمولاً کاری نمیکنم", score: "socialSkills", value: 1 },
        ],
      },
      {
        id: 3,
        text: "در یک جمع جدید چقدر راحت ارتباط برقرار میکنید؟",
        options: [
          { text: "خیلی راحت با همه صحبت میکنم", score: "socialSkills", value: 5 },
          { text: "اگه کسی شروع کنه من ادامه میدم", score: "socialSkills", value: 3 },
          { text: "خیلی کم حرف میزنم تا راحت بشم", score: "socialSkills", value: 2 },
          { text: "تقریباً با کسی حرف نمیزنم", score: "socialSkills", value: 1 },
        ],
      },
      {
        id: 4,
        text: "وقتی اشتباهی کردید، چطور عذرخواهی میکنید؟",
        options: [
          { text: "صادقانه اشتباهمو قبول میکنم و عذرخواهی میکنم", score: "socialSkills", value: 5 },
          { text: "عذرخواهی میکنم ولی توضیح هم میدم", score: "socialSkills", value: 4 },
          { text: "سخته ولی بالاخره عذرخواهی میکنم", score: "socialSkills", value: 2 },
          { text: "معمولاً عذرخواهی نمیکنم", score: "socialSkills", value: 1 },
        ],
      },
      {
        id: 5,
        text: "چقدر به زبان بدن و حالات صورت دیگران توجه میکنید؟",
        options: [
          { text: "خیلی! معمولاً حس افراد رو از قیافه‌شون میفهمم", score: "socialSkills", value: 5 },
          { text: "تا حدی توجه میکنم", score: "socialSkills", value: 3 },
          { text: "کم توجه میکنم", score: "socialSkills", value: 2 },
          { text: "اصلاً توجه نمیکنم", score: "socialSkills", value: 1 },
        ],
      },
    ],
    scoringKey: {
      high: { label: "مهارت بالا", description: "شما مهارت‌های ارتباطی قوی‌ای دارید" },
      medium: { label: "متوسط", description: "مهارت‌های ارتباطی شما قابل تقویت است" },
      low: { label: "نیاز به تقویت", description: "تقویت مهارت‌های ارتباطی برای شما مفید خواهد بود" },
    },
  },

  // ─── ۴. تست هوش هیجانی ──────────────────────────────────────
  {
    id: "emotional-intelligence",
    title: "تست هوش هیجانی",
    description: "سنجش توانایی شناسایی و مدیریت احساسات خود و دیگران",
    category: "شخصیت",
    icon: "💖",
    duration: "۵ دقیقه",
    questionCount: 5,
    tags: ["هوش هیجانی", "خودآگاهی", "احساسات"],
    questions: [
      {
        id: 1,
        text: "چقدر احساسات خودتون رو میشناسید و میتونید نامشون ببرید؟",
        options: [
          { text: "دقیقاً میدونم چه حسی دارم و چرا", score: "emotionalAwareness", value: 5 },
          { text: "تا حدی میفهمم ولی گاهی گیج میشم", score: "emotionalAwareness", value: 3 },
          { text: "بیشتر وقت‌ها نمیدونم دقیقاً چه حسی دارم", score: "emotionalAwareness", value: 2 },
          { text: "اصلاً توجهی به احساساتم نمیکنم", score: "emotionalAwareness", value: 1 },
        ],
      },
      {
        id: 2,
        text: "وقتی عصبانی میشید، چطور واکنش نشون میدید؟",
        options: [
          { text: "نفس عمیق میکشم و بعد با آرامش صحبت میکنم", score: "emotionalAwareness", value: 5 },
          { text: "سعی میکنم کنترل کنم ولی گاهی سخته", score: "emotionalAwareness", value: 3 },
          { text: "معمولاً داد میزنم یا قهر میکنم", score: "emotionalAwareness", value: 2 },
          { text: "از کوره در میرم و بعداً پشیمون میشم", score: "emotionalAwareness", value: 1 },
        ],
      },
      {
        id: 3,
        text: "آیا میتونید خودتون رو جای دیگران بذارید و حسشون رو درک کنید؟",
        options: [
          { text: "بله، خیلی راحت حس دیگران رو میفهمم", score: "emotionalAwareness", value: 5 },
          { text: "اگه تلاش کنم بله", score: "emotionalAwareness", value: 3 },
          { text: "گاهی سخته برام", score: "emotionalAwareness", value: 2 },
          { text: "نه، معمولاً نمیتونم", score: "emotionalAwareness", value: 1 },
        ],
      },
      {
        id: 4,
        text: "در شرایط سخت، چقدر میتونید امیدوار و مثبت بمونید؟",
        options: [
          { text: "همیشه سعی میکنم نکته مثبت رو ببینم", score: "emotionalAwareness", value: 5 },
          { text: "بعد از مدتی ناامیدی، دوباره امیدوار میشم", score: "emotionalAwareness", value: 3 },
          { text: "بیشتر وقت‌ها ناامید میشم", score: "emotionalAwareness", value: 2 },
          { text: "خیلی سخته برام امیدوار بمونم", score: "emotionalAwareness", value: 1 },
        ],
      },
      {
        id: 5,
        text: "چقدر از بیان احساساتتون راحتید؟",
        options: [
          { text: "راحت احساساتم رو بیان میکنم", score: "emotionalAwareness", value: 5 },
          { text: "با نزدیکانم بله ولی با بقیه نه", score: "emotionalAwareness", value: 3 },
          { text: "بیشتر وقت‌ها احساساتم رو پنهان میکنم", score: "emotionalAwareness", value: 2 },
          { text: "هیچوقت احساساتم رو نشون نمیدم", score: "emotionalAwareness", value: 1 },
        ],
      },
    ],
    scoringKey: {
      high: { label: "هوش هیجانی بالا", description: "شما در شناخت و مدیریت احساسات مهارت دارید" },
      medium: { label: "متوسط", description: "هوش هیجانی شما قابل رشد است" },
      low: { label: "نیاز به رشد", description: "تقویت هوش هیجانی می‌تواند به شما کمک زیادی کند" },
    },
  },

  // ─── ۵. تست اعتماد به نفس ──────────────────────────────────
  {
    id: "self-confidence",
    title: "تست اعتماد به نفس",
    description: "سنجش میزان اعتماد به نفس و خودباوری شما",
    category: "خودشناسی",
    icon: "💪",
    duration: "۵ دقیقه",
    questionCount: 5,
    tags: ["اعتماد به نفس", "خودباوری", "عزت نفس"],
    questions: [
      {
        id: 1,
        text: "وقتی قراره یک کار جدید انجام بدید، اولین فکرتون چیه؟",
        options: [
          { text: "حتماً از پسش برمیام!", score: "selfConfidence", value: 5 },
          { text: "سعیمو میکنم، شاید بشه", score: "selfConfidence", value: 3 },
          { text: "نگرانم که نتونم", score: "selfConfidence", value: 2 },
          { text: "مطمئنم شکست میخورم", score: "selfConfidence", value: 1 },
        ],
      },
      {
        id: 2,
        text: "نظرتون درباره ظاهرتون چیه؟",
        options: [
          { text: "از ظاهرم راضیم و خودم رو دوست دارم", score: "selfConfidence", value: 5 },
          { text: "بیشتر وقت‌ها راضیم", score: "selfConfidence", value: 3 },
          { text: "گاهی از ظاهرم ناراضیم", score: "selfConfidence", value: 2 },
          { text: "اصلاً از ظاهرم خوشم نمیاد", score: "selfConfidence", value: 1 },
        ],
      },
      {
        id: 3,
        text: "در جمع وقتی ازتون نظر میخوان چیکار میکنید؟",
        options: [
          { text: "با اعتماد به نفس نظرم رو میگم", score: "selfConfidence", value: 5 },
          { text: "نظرم رو میگم ولی کمی مردد هستم", score: "selfConfidence", value: 3 },
          { text: "ترجیح میدم نظری ندم", score: "selfConfidence", value: 2 },
          { text: "میترسم نظرم اشتباه باشه و سکوت میکنم", score: "selfConfidence", value: 1 },
        ],
      },
      {
        id: 4,
        text: "وقتی مقایسه میکنید خودتون رو با دیگران، چه حسی دارید؟",
        options: [
          { text: "هر کسی ویژگی‌های خاص خودش رو داره", score: "selfConfidence", value: 5 },
          { text: "گاهی حس میکنم دیگران بهترن ولی خودمو هم قبول دارم", score: "selfConfidence", value: 3 },
          { text: "معمولاً حس میکنم از بقیه کمترم", score: "selfConfidence", value: 2 },
          { text: "همیشه فکر میکنم همه از من بهترن", score: "selfConfidence", value: 1 },
        ],
      },
      {
        id: 5,
        text: "چقدر میتونید «نه» بگید؟",
        options: [
          { text: "راحت نه میگم وقتی لازمه", score: "selfConfidence", value: 5 },
          { text: "بعضی وقت‌ها سخته ولی میگم", score: "selfConfidence", value: 3 },
          { text: "بیشتر وقت‌ها نمیتونم نه بگم", score: "selfConfidence", value: 2 },
          { text: "هیچوقت نمیتونم نه بگم", score: "selfConfidence", value: 1 },
        ],
      },
    ],
    scoringKey: {
      high: { label: "اعتماد به نفس بالا", description: "شما خودباوری قوی‌ای دارید" },
      medium: { label: "متوسط", description: "اعتماد به نفس شما قابل تقویت است" },
      low: { label: "نیاز به تقویت", description: "تقویت اعتماد به نفس اولویت مهمی برای شماست" },
    },
  },

  // ─── ۶. تست سبک دلبستگی ──────────────────────────────────
  {
    id: "attachment-style",
    title: "تست سبک دلبستگی",
    description: "شناخت الگوی ارتباطی شما در روابط نزدیک",
    category: "روابط",
    icon: "❤️",
    duration: "۵ دقیقه",
    questionCount: 5,
    tags: ["دلبستگی", "روابط", "عاطفی"],
    questions: [
      {
        id: 1,
        text: "در روابط نزدیک، چقدر به طرف مقابل اعتماد میکنید؟",
        options: [
          { text: "کاملاً اعتماد میکنم", score: "attachment", value: 5 },
          { text: "اعتماد میکنم ولی زمان میبره", score: "attachment", value: 3 },
          { text: "سخته برام اعتماد کنم", score: "attachment", value: 2 },
          { text: "به کسی اعتماد نمیکنم", score: "attachment", value: 1 },
        ],
      },
      {
        id: 2,
        text: "وقتی پارتنرتون به پیامتون دیر جواب میده، چه حسی دارید؟",
        options: [
          { text: "مشکلی نیست، حتماً سرش شلوغه", score: "attachment", value: 5 },
          { text: "کمی نگران میشم ولی صبر میکنم", score: "attachment", value: 3 },
          { text: "خیلی نگران میشم و پیام‌های متعدد میفرستم", score: "attachment", value: 2 },
          { text: "عصبانی میشم و فکر میکنم اهمیت نمیده", score: "attachment", value: 1 },
        ],
      },
      {
        id: 3,
        text: "چقدر از صمیمیت و نزدیکی عاطفی راحتید؟",
        options: [
          { text: "عاشق نزدیکی و صمیمیتم", score: "attachment", value: 5 },
          { text: "خوبه ولی حد و مرزهامو هم دارم", score: "attachment", value: 4 },
          { text: "گاهی حس میکنم نزدیکی زیاد خفه‌ام میکنه", score: "attachment", value: 2 },
          { text: "از نزدیکی عاطفی فرار میکنم", score: "attachment", value: 1 },
        ],
      },
      {
        id: 4,
        text: "وقتی رابطه‌ای تموم میشه، چه واکنشی نشون میدید؟",
        options: [
          { text: "ناراحت میشم ولی میپذیرم و جلو میرم", score: "attachment", value: 5 },
          { text: "مدتی ناراحتم ولی بالاخره کنار میام", score: "attachment", value: 3 },
          { text: "خیلی سخته و مدت زیادی درگیرم", score: "attachment", value: 2 },
          { text: "انگار دنیام خراب شده", score: "attachment", value: 1 },
        ],
      },
      {
        id: 5,
        text: "آیا در رابطه نیاز دائمی به تأیید شدن دارید؟",
        options: [
          { text: "نه، خودم ارزش خودمو میدونم", score: "attachment", value: 5 },
          { text: "گاهی خوبه ولی ضروری نیست", score: "attachment", value: 3 },
          { text: "بله، زیاد نیاز دارم تأییدم کنن", score: "attachment", value: 2 },
          { text: "بدون تأیید مداوم نمیتونم ادامه بدم", score: "attachment", value: 1 },
        ],
      },
    ],
    scoringKey: {
      high: { label: "دلبستگی ایمن", description: "شما الگوی ارتباطی سالم و امنی دارید" },
      medium: { label: "نیمه‌ایمن", description: "الگوی ارتباطی شما قابل بهبود است" },
      low: { label: "ناایمن", description: "ممکن است در روابط نزدیک چالش‌هایی داشته باشید" },
    },
  },

  // ─── ۷. تست تصمیم‌گیری ────────────────────────────────────
  {
    id: "decision-making",
    title: "تست سبک تصمیم‌گیری",
    description: "بررسی نحوه تصمیم‌گیری شما در شرایط مختلف",
    category: "مهارت‌های زندگی",
    icon: "🎯",
    duration: "۴ دقیقه",
    questionCount: 5,
    tags: ["تصمیم‌گیری", "منطق", "شهود"],
    questions: [
      {
        id: 1,
        text: "وقتی باید تصمیم مهمی بگیرید، معمولاً چیکار میکنید؟",
        options: [
          { text: "تحقیق میکنم، لیست مزایا و معایب مینویسم", score: "decisionMaking", value: 5 },
          { text: "با چند نفر مشورت میکنم", score: "decisionMaking", value: 4 },
          { text: "به شهودم اعتماد میکنم", score: "decisionMaking", value: 3 },
          { text: "تصمیم‌گیری رو به تعویق میندازم", score: "decisionMaking", value: 1 },
        ],
      },
      {
        id: 2,
        text: "بعد از تصمیم‌گیری چقدر پشیمون میشید؟",
        options: [
          { text: "به ندرت - به تصمیمم پایبندم", score: "decisionMaking", value: 5 },
          { text: "گاهی شک میکنم ولی ادامه میدم", score: "decisionMaking", value: 3 },
          { text: "زیاد پشیمون میشم", score: "decisionMaking", value: 2 },
          { text: "تقریباً همیشه فکر میکنم اشتباه تصمیم گرفتم", score: "decisionMaking", value: 1 },
        ],
      },
      {
        id: 3,
        text: "در انتخاب غذا در رستوران چقدر وقت میذارید؟",
        options: [
          { text: "سریع انتخاب میکنم", score: "decisionMaking", value: 5 },
          { text: "کمی فکر میکنم و انتخاب میکنم", score: "decisionMaking", value: 4 },
          { text: "خیلی مردد میشم", score: "decisionMaking", value: 2 },
          { text: "از بقیه میخوام برام انتخاب کنن", score: "decisionMaking", value: 1 },
        ],
      },
      {
        id: 4,
        text: "وقتی دو گزینه خوب دارید، چطور انتخاب میکنید؟",
        options: [
          { text: "مقایسه سریع و انتخاب قاطع", score: "decisionMaking", value: 5 },
          { text: "کمی فکر میکنم و بهترین رو انتخاب میکنم", score: "decisionMaking", value: 4 },
          { text: "خیلی سخته و زمان زیادی میبره", score: "decisionMaking", value: 2 },
          { text: "نمیتونم انتخاب کنم و منصرف میشم", score: "decisionMaking", value: 1 },
        ],
      },
      {
        id: 5,
        text: "آیا ریسک‌پذیر هستید؟",
        options: [
          { text: "بله، ریسک‌های حساب‌شده رو قبول میکنم", score: "decisionMaking", value: 5 },
          { text: "گاهی ریسک میکنم", score: "decisionMaking", value: 3 },
          { text: "ترجیح میدم امن بازی کنم", score: "decisionMaking", value: 2 },
          { text: "اصلاً ریسک نمیکنم", score: "decisionMaking", value: 1 },
        ],
      },
    ],
    scoringKey: {
      high: { label: "تصمیم‌گیر قاطع", description: "شما در تصمیم‌گیری سریع و مؤثر مهارت دارید" },
      medium: { label: "متعادل", description: "شما با تأمل تصمیم می‌گیرید" },
      low: { label: "مردد", description: "تصمیم‌گیری قاطع می‌تواند مهارتی قابل تقویت باشد" },
    },
  },

  // ─── ۸. تست خلاقیت ──────────────────────────────────────
  {
    id: "creativity",
    title: "تست خلاقیت و نوآوری",
    description: "سنجش میزان خلاقیت و تفکر خلاق شما",
    category: "شخصیت",
    icon: "🎨",
    duration: "۴ دقیقه",
    questionCount: 5,
    tags: ["خلاقیت", "نوآوری", "تفکر"],
    questions: [
      {
        id: 1,
        text: "وقتی با مشکلی مواجه میشید، معمولاً راه‌حل‌های متعددی به ذهنتون میرسه؟",
        options: [
          { text: "بله، همیشه چند راه‌حل خلاقانه پیدا میکنم", score: "creativity", value: 5 },
          { text: "معمولاً دو-سه تا راه‌حل به ذهنم میرسه", score: "creativity", value: 3 },
          { text: "فقط یک راه‌حل واضح میبینم", score: "creativity", value: 2 },
          { text: "معمولاً گیر میکنم و راه‌حلی نمیبینم", score: "creativity", value: 1 },
        ],
      },
      {
        id: 2,
        text: "چقدر از فعالیت‌های هنری لذت می‌برید؟",
        options: [
          { text: "خیلی! نقاشی، موسیقی، نوشتن یا...", score: "creativity", value: 5 },
          { text: "گاهی از کارهای هنری لذت میبرم", score: "creativity", value: 3 },
          { text: "زیاد اهل هنر نیستم", score: "creativity", value: 2 },
          { text: "اصلاً علاقه‌ای ندارم", score: "creativity", value: 1 },
        ],
      },
      {
        id: 3,
        text: "آیا ایده‌های عجیب و غریب زیاد به ذهنتون میرسه؟",
        options: [
          { text: "بله، ذهنم همیشه پر از ایده‌های جدیده", score: "creativity", value: 5 },
          { text: "گاهی ایده‌های جالبی دارم", score: "creativity", value: 3 },
          { text: "زیاد ایده نو ندارم", score: "creativity", value: 2 },
          { text: "ترجیح میدم از روش‌های ثابت‌شده استفاده کنم", score: "creativity", value: 1 },
        ],
      },
      {
        id: 4,
        text: "وقتی خسته‌اید، کدوم فعالیت شما رو سرحال میکنه؟",
        options: [
          { text: "کار خلاقانه مثل نقاشی، موسیقی یا نوشتن", score: "creativity", value: 5 },
          { text: "تماشای فیلم یا مطالعه", score: "creativity", value: 3 },
          { text: "گشتن در شبکه‌های اجتماعی", score: "creativity", value: 2 },
          { text: "فقط خوابیدن", score: "creativity", value: 1 },
        ],
      },
      {
        id: 5,
        text: "چقدر از تغییر و تنوع استقبال میکنید؟",
        options: [
          { text: "عاشق تغییر و تجربه‌های جدیدم", score: "creativity", value: 5 },
          { text: "تغییرات معقول رو قبول میکنم", score: "creativity", value: 3 },
          { text: "ترجیح میدم روتین داشته باشم", score: "creativity", value: 2 },
          { text: "از تغییر متنفرم", score: "creativity", value: 1 },
        ],
      },
    ],
    scoringKey: {
      high: { label: "بسیار خلاق", description: "شما ذهن خلاق و نوآورانه‌ای دارید" },
      medium: { label: "خلاقیت متوسط", description: "خلاقیت شما قابل رشد است" },
      low: { label: "عمل‌گرا", description: "شما بیشتر به روش‌های عملی و ثابت‌شده تمایل دارید" },
    },
  },

  // ─── ۹. تست سلامت روان ──────────────────────────────────
  {
    id: "mental-health",
    title: "تست سلامت روان عمومی",
    description: "بررسی وضعیت کلی سلامت روان و بهزیستی روانی شما",
    category: "سلامت روان",
    icon: "🧘",
    duration: "۵ دقیقه",
    questionCount: 5,
    tags: ["سلامت روان", "افسردگی", "اضطراب"],
    questions: [
      {
        id: 1,
        text: "در دو هفته اخیر، چقدر از زندگی لذت بردید؟",
        options: [
          { text: "خیلی زیاد - زندگیم خوب و لذت‌بخشه", score: "mentalHealth", value: 5 },
          { text: "نسبتاً خوب بوده", score: "mentalHealth", value: 3 },
          { text: "کم - بیشتر روزها حوصله‌ام سر رفته", score: "mentalHealth", value: 2 },
          { text: "اصلاً لذت نبردم", score: "mentalHealth", value: 1 },
        ],
      },
      {
        id: 2,
        text: "خوابتون چطوره؟",
        options: [
          { text: "عالی! ۷-۸ ساعت خواب منظم و باکیفیت", score: "mentalHealth", value: 5 },
          { text: "بد نیست ولی گاهی مشکل دارم", score: "mentalHealth", value: 3 },
          { text: "خوابم بی‌نظمه و کیفیت پایینی داره", score: "mentalHealth", value: 2 },
          { text: "مشکل جدی خواب دارم (بی‌خوابی یا خواب زیاد)", score: "mentalHealth", value: 1 },
        ],
      },
      {
        id: 3,
        text: "چقدر انرژی برای انجام کارهای روزمره دارید؟",
        options: [
          { text: "پر انرژی و فعالم", score: "mentalHealth", value: 5 },
          { text: "انرژی کافی دارم", score: "mentalHealth", value: 3 },
          { text: "خسته‌ام و انرژی کمی دارم", score: "mentalHealth", value: 2 },
          { text: "اصلاً انرژی ندارم", score: "mentalHealth", value: 1 },
        ],
      },
      {
        id: 4,
        text: "آیا احساس تنهایی میکنید؟",
        options: [
          { text: "نه، شبکه اجتماعی خوبی دارم", score: "mentalHealth", value: 5 },
          { text: "گاهی اوقات", score: "mentalHealth", value: 3 },
          { text: "اکثر اوقات احساس تنهایی میکنم", score: "mentalHealth", value: 2 },
          { text: "همیشه تنهام", score: "mentalHealth", value: 1 },
        ],
      },
      {
        id: 5,
        text: "نسبت به آینده چه حسی دارید؟",
        options: [
          { text: "امیدوار و هیجان‌زده", score: "mentalHealth", value: 5 },
          { text: "نسبتاً خوشبین", score: "mentalHealth", value: 3 },
          { text: "نگرانم", score: "mentalHealth", value: 2 },
          { text: "ناامید و بی‌انگیزه", score: "mentalHealth", value: 1 },
        ],
      },
    ],
    scoringKey: {
      high: { label: "سلامت روان خوب", description: "وضعیت سلامت روان شما مطلوب است" },
      medium: { label: "نیاز به توجه", description: "بهتر است به سلامت روان خود بیشتر توجه کنید" },
      low: { label: "نیاز به کمک حرفه‌ای", description: "پیشنهاد می‌شود با یک متخصص صحبت کنید" },
    },
  },

  // ─── ۱۰. تست انگیزه و هدف ──────────────────────────────
  {
    id: "motivation",
    title: "تست انگیزه و هدف‌گذاری",
    description: "بررسی سطح انگیزه و توانایی تعیین اهداف",
    category: "خودشناسی",
    icon: "🚀",
    duration: "۴ دقیقه",
    questionCount: 5,
    tags: ["انگیزه", "هدف‌گذاری", "موفقیت"],
    questions: [
      {
        id: 1,
        text: "آیا اهداف مشخصی در زندگی دارید؟",
        options: [
          { text: "بله، اهداف کوتاه‌مدت و بلندمدت مشخصی دارم", score: "motivation", value: 5 },
          { text: "یه سری اهداف کلی دارم", score: "motivation", value: 3 },
          { text: "نه خیلی مشخص نیست", score: "motivation", value: 2 },
          { text: "اصلاً هدفی ندارم", score: "motivation", value: 1 },
        ],
      },
      {
        id: 2,
        text: "صبح‌ها با چه حسی از خواب بیدار میشید؟",
        options: [
          { text: "هیجان‌زده برای شروع روز جدید", score: "motivation", value: 5 },
          { text: "عادی - یه روز دیگه", score: "motivation", value: 3 },
          { text: "بی‌حوصله و بی‌انگیزه", score: "motivation", value: 2 },
          { text: "دلم نمیخواد از تخت بلند بشم", score: "motivation", value: 1 },
        ],
      },
      {
        id: 3,
        text: "وقتی به موفقیت دیگران نگاه میکنید چه حسی دارید؟",
        options: [
          { text: "الهام میگیرم و انگیزه‌ام بیشتر میشه", score: "motivation", value: 5 },
          { text: "خوشحال میشم براشون", score: "motivation", value: 4 },
          { text: "حسرت میخورم", score: "motivation", value: 2 },
          { text: "حسودیم میشه و ناراحت میشم", score: "motivation", value: 1 },
        ],
      },
      {
        id: 4,
        text: "وقتی شکست میخورید چیکار میکنید؟",
        options: [
          { text: "ازش یاد میگیرم و دوباره تلاش میکنم", score: "motivation", value: 5 },
          { text: "مدتی ناراحتم ولی دوباره شروع میکنم", score: "motivation", value: 3 },
          { text: "خیلی ناامید میشم و سخته دوباره شروع کنم", score: "motivation", value: 2 },
          { text: "بیخیال میشم و ادامه نمیدم", score: "motivation", value: 1 },
        ],
      },
      {
        id: 5,
        text: "چقدر در حال یادگیری و رشد هستید؟",
        options: [
          { text: "همیشه در حال یادگیری چیز جدیدم", score: "motivation", value: 5 },
          { text: "گاهی کتاب یا دوره‌ای میبینم", score: "motivation", value: 3 },
          { text: "خیلی کم", score: "motivation", value: 2 },
          { text: "اصلاً چیز جدیدی یاد نمیگیرم", score: "motivation", value: 1 },
        ],
      },
    ],
    scoringKey: {
      high: { label: "انگیزه بالا", description: "شما فرد بسیار با انگیزه و هدفمندی هستید" },
      medium: { label: "انگیزه متوسط", description: "انگیزه شما قابل ارتقاست" },
      low: { label: "نیاز به انگیزه", description: "ممکن است به کمک نیاز داشته باشید برای یافتن انگیزه" },
    },
  },

  // ─── ۱۱. تست مدیریت خشم ────────────────────────────────
  {
    id: "anger-management",
    title: "تست مدیریت خشم",
    description: "بررسی نحوه برخورد شما با عصبانیت و خشم",
    category: "سلامت روان",
    icon: "🔥",
    duration: "۴ دقیقه",
    questionCount: 5,
    tags: ["خشم", "کنترل", "هیجانات"],
    questions: [
      {
        id: 1,
        text: "وقتی کسی توی ترافیک جلوتون میزنه، واکنشتون چیه؟",
        options: [
          { text: "بیخیال میشم، مهم نیست", score: "angerManagement", value: 5 },
          { text: "کمی عصبانی میشم ولی زود فراموش میکنم", score: "angerManagement", value: 3 },
          { text: "بوق میزنم و فحش میدم", score: "angerManagement", value: 2 },
          { text: "خیلی عصبانی میشم و تا مدتی حالم بده", score: "angerManagement", value: 1 },
        ],
      },
      {
        id: 2,
        text: "وقتی بچه یا همکارتون مرتب اشتباه میکنه، چیکار میکنید؟",
        options: [
          { text: "با صبر و حوصله توضیح میدم", score: "angerManagement", value: 5 },
          { text: "سعی میکنم آروم باشم ولی گاهی سخته", score: "angerManagement", value: 3 },
          { text: "تذکر تند میدم", score: "angerManagement", value: 2 },
          { text: "عصبانی میشم و سرش داد میزنم", score: "angerManagement", value: 1 },
        ],
      },
      {
        id: 3,
        text: "آخرین بار کی از شدت عصبانیت چیزی رو شکستید یا پرت کردید؟",
        options: [
          { text: "هیچوقت اینکار رو نمیکنم", score: "angerManagement", value: 5 },
          { text: "خیلی وقت پیش و فقط یک بار", score: "angerManagement", value: 3 },
          { text: "چند ماه پیش", score: "angerManagement", value: 2 },
          { text: "اخیراً اتفاق افتاده", score: "angerManagement", value: 1 },
        ],
      },
      {
        id: 4,
        text: "بعد از عصبانیت شدید، چقدر طول میکشه تا آروم بشید؟",
        options: [
          { text: "چند دقیقه", score: "angerManagement", value: 5 },
          { text: "نیم ساعت تا یک ساعت", score: "angerManagement", value: 3 },
          { text: "چند ساعت", score: "angerManagement", value: 2 },
          { text: "تا چند روز عصبانی میمونم", score: "angerManagement", value: 1 },
        ],
      },
      {
        id: 5,
        text: "آیا بعد از عصبانیت از رفتارتون پشیمون میشید؟",
        options: [
          { text: "معمولاً رفتار نامناسبی نشون نمیدم", score: "angerManagement", value: 5 },
          { text: "گاهی اوقات بله", score: "angerManagement", value: 3 },
          { text: "اکثراً بله و خیلی ناراحت میشم", score: "angerManagement", value: 2 },
          { text: "همیشه پشیمونم ولی نمیتونم کنترل کنم", score: "angerManagement", value: 1 },
        ],
      },
    ],
    scoringKey: {
      high: { label: "کنترل عالی", description: "شما خشم خود را به خوبی مدیریت می‌کنید" },
      medium: { label: "متوسط", description: "گاهی خشم بر شما غلبه می‌کند" },
      low: { label: "نیاز به کار", description: "مدیریت خشم حوزه‌ای مهم برای رشد شماست" },
    },
  },

  // ─── ۱۲. تست رضایت شغلی ────────────────────────────────
  {
    id: "job-satisfaction",
    title: "تست رضایت شغلی",
    description: "بررسی میزان رضایت شما از شغل و محیط کاری",
    category: "شغلی",
    icon: "💼",
    duration: "۴ دقیقه",
    questionCount: 5,
    tags: ["شغلی", "رضایت", "فرسودگی شغلی"],
    questions: [
      {
        id: 1, text: "چقدر از کارتون لذت میبرید؟",
        options: [
          { text: "عاشق کارمم!", score: "jobSatisfaction", value: 5 },
          { text: "بیشتر وقت‌ها خوبه", score: "jobSatisfaction", value: 3 },
          { text: "فقط برای درآمد کار میکنم", score: "jobSatisfaction", value: 2 },
          { text: "از کارم متنفرم", score: "jobSatisfaction", value: 1 },
        ],
      },
      {
        id: 2, text: "رابطه‌تون با همکارانتون چطوره؟",
        options: [
          { text: "عالی! دوستای خوبی دارم", score: "jobSatisfaction", value: 5 },
          { text: "خوبه، حرفه‌ای برخورد میکنیم", score: "jobSatisfaction", value: 3 },
          { text: "بد نیست ولی صمیمی نیستیم", score: "jobSatisfaction", value: 2 },
          { text: "مشکل‌دارم و تنش‌زاست", score: "jobSatisfaction", value: 1 },
        ],
      },
      {
        id: 3, text: "آیا حس میکنید در کارتون رشد میکنید؟",
        options: [
          { text: "بله، مدام در حال یادگیری و پیشرفتم", score: "jobSatisfaction", value: 5 },
          { text: "تا حدی بله", score: "jobSatisfaction", value: 3 },
          { text: "نه خیلی، کارم تکراری شده", score: "jobSatisfaction", value: 2 },
          { text: "اصلاً حس رشد ندارم", score: "jobSatisfaction", value: 1 },
        ],
      },
      {
        id: 4, text: "تعادل کار و زندگیتون چطوره؟",
        options: [
          { text: "عالی! وقت کافی برای خودم و خانواده دارم", score: "jobSatisfaction", value: 5 },
          { text: "خوبه ولی گاهی فشار کاری زیاد میشه", score: "jobSatisfaction", value: 3 },
          { text: "کار زیاد وقتم رو میگیره", score: "jobSatisfaction", value: 2 },
          { text: "اصلاً تعادل ندارم", score: "jobSatisfaction", value: 1 },
        ],
      },
      {
        id: 5, text: "آیا حس میکنید کارتون معنادار و ارزشمنده؟",
        options: [
          { text: "بله، کارم تأثیر مثبت داره", score: "jobSatisfaction", value: 5 },
          { text: "تا حدی", score: "jobSatisfaction", value: 3 },
          { text: "نه خیلی", score: "jobSatisfaction", value: 2 },
          { text: "اصلاً ارزشی نداره", score: "jobSatisfaction", value: 1 },
        ],
      },
    ],
    scoringKey: {
      high: { label: "رضایت بالا", description: "شما از شغلتان راضی هستید" },
      medium: { label: "رضایت متوسط", description: "جای بهبود در رضایت شغلی شما وجود دارد" },
      low: { label: "ناراضی", description: "ممکن است نیاز به تغییر شغلی یا مشاوره داشته باشید" },
    },
  },

  // ─── ۱۳. تست سبک یادگیری ────────────────────────────────
  {
    id: "learning-style",
    title: "تست سبک یادگیری",
    description: "شناسایی بهترین روش یادگیری برای شما",
    category: "خودشناسی",
    icon: "📚",
    duration: "۴ دقیقه",
    questionCount: 5,
    tags: ["یادگیری", "آموزش", "مهارت"],
    questions: [
      {
        id: 1, text: "وقتی میخواید چیز جدیدی یاد بگیرید، ترجیح میدید...",
        options: [
          { text: "ویدیو ببینم و بصری یاد بگیرم", score: "learningStyle", value: 4 },
          { text: "توضیح شفاهی بشنوم", score: "learningStyle", value: 3 },
          { text: "خودم عملی انجام بدم", score: "learningStyle", value: 5 },
          { text: "متن بخونم و یادداشت کنم", score: "learningStyle", value: 3 },
        ],
      },
      {
        id: 2, text: "در کلاس درس بهتر یاد میگیرید وقتی...",
        options: [
          { text: "استاد نمودار و تصویر استفاده کنه", score: "learningStyle", value: 4 },
          { text: "استاد توضیح بده و بحث کنیم", score: "learningStyle", value: 3 },
          { text: "تمرین عملی و پروژه داشته باشیم", score: "learningStyle", value: 5 },
          { text: "جزوه خوب داشته باشم", score: "learningStyle", value: 3 },
        ],
      },
      {
        id: 3, text: "وقتی مسیر جدیدی رو یاد میگیرید...",
        options: [
          { text: "نقشه نگاه میکنم و حفظ میکنم", score: "learningStyle", value: 4 },
          { text: "از کسی میخوام توضیح بده", score: "learningStyle", value: 3 },
          { text: "یک بار میرم و مسیر رو حفظ میکنم", score: "learningStyle", value: 5 },
          { text: "آدرس رو مینویسم", score: "learningStyle", value: 3 },
        ],
      },
      {
        id: 4, text: "بهترین خاطراتتون معمولاً شامل...",
        options: [
          { text: "تصاویر و مناظر زیبا", score: "learningStyle", value: 4 },
          { text: "صداها و مکالمات", score: "learningStyle", value: 3 },
          { text: "احساسات و تجربه‌های فیزیکی", score: "learningStyle", value: 5 },
          { text: "ترکیبی از همه", score: "learningStyle", value: 4 },
        ],
      },
      {
        id: 5, text: "وقتی یه دستگاه جدید میخرید...",
        options: [
          { text: "دفترچه راهنما رو نگاه میکنم", score: "learningStyle", value: 3 },
          { text: "از کسی میخوام نشونم بده", score: "learningStyle", value: 3 },
          { text: "خودم باهاش ور میرم تا یاد بگیرم", score: "learningStyle", value: 5 },
          { text: "ویدیو آموزشی میبینم", score: "learningStyle", value: 4 },
        ],
      },
    ],
    scoringKey: {
      high: { label: "یادگیرنده فعال", description: "شما با تجربه عملی بهتر یاد می‌گیرید" },
      medium: { label: "یادگیرنده ترکیبی", description: "شما از روش‌های مختلف یادگیری بهره می‌برید" },
      low: { label: "یادگیرنده تئوری", description: "شما با مطالعه و تحلیل بهتر یاد می‌گیرید" },
    },
  },

  // ─── ۱۴. تست کمال‌گرایی ────────────────────────────────
  {
    id: "perfectionism",
    title: "تست کمال‌گرایی",
    description: "آیا کمال‌گرایی شما سالم است یا آسیب‌رسان؟",
    category: "شخصیت",
    icon: "✨",
    duration: "۴ دقیقه",
    questionCount: 5,
    tags: ["کمال‌گرایی", "وسواس", "استاندارد"],
    questions: [
      {
        id: 1, text: "وقتی کاری رو تموم میکنید، معمولاً...",
        options: [
          { text: "راضیم و به کار بعدی میرم", score: "perfectionism", value: 5 },
          { text: "یه بار دیگه چک میکنم", score: "perfectionism", value: 4 },
          { text: "چند بار بررسی و اصلاح میکنم", score: "perfectionism", value: 2 },
          { text: "هیچوقت از نتیجه راضی نیستم", score: "perfectionism", value: 1 },
        ],
      },
      {
        id: 2, text: "اگه نمره ۱۸ از ۲۰ بگیرید چه حسی دارید؟",
        options: [
          { text: "عالیه! خوشحالم", score: "perfectionism", value: 5 },
          { text: "خوبه ولی میتونست ۲۰ باشه", score: "perfectionism", value: 3 },
          { text: "ناراحتم که چرا ۲۰ نشد", score: "perfectionism", value: 2 },
          { text: "خودم رو سرزنش میکنم", score: "perfectionism", value: 1 },
        ],
      },
      {
        id: 3, text: "وقتی نمیتونید کاری رو عالی انجام بدید...",
        options: [
          { text: "بهترین تلاشم کافیه", score: "perfectionism", value: 5 },
          { text: "سعی میکنم بهتر بشم", score: "perfectionism", value: 4 },
          { text: "خیلی ناراحت میشم", score: "perfectionism", value: 2 },
          { text: "ترجیح میدم اصلاً انجامش ندم", score: "perfectionism", value: 1 },
        ],
      },
      {
        id: 4, text: "آیا از اشتباهات خودتون میتونید بگذرید؟",
        options: [
          { text: "بله، همه اشتباه میکنن", score: "perfectionism", value: 5 },
          { text: "بعد از مدتی بله", score: "perfectionism", value: 3 },
          { text: "خیلی سخته و مدت زیادی بهش فکر میکنم", score: "perfectionism", value: 2 },
          { text: "نه، همیشه خودم رو بابتش سرزنش میکنم", score: "perfectionism", value: 1 },
        ],
      },
      {
        id: 5, text: "آیا استانداردهای خیلی بالایی برای خودتون تعیین میکنید؟",
        options: [
          { text: "استانداردهای واقع‌بینانه دارم", score: "perfectionism", value: 5 },
          { text: "بالا هست ولی قابل دسترسی", score: "perfectionism", value: 4 },
          { text: "خیلی بالاست و همیشه ناامید میشم", score: "perfectionism", value: 2 },
          { text: "غیرممکن هست ولی نمیتونم پایین بیارم", score: "perfectionism", value: 1 },
        ],
      },
    ],
    scoringKey: {
      high: { label: "کمال‌گرایی سالم", description: "شما استانداردهای بالا ولی واقع‌بینانه‌ای دارید" },
      medium: { label: "کمال‌گرایی متوسط", description: "گاهی استانداردهایتان فشار ایجاد می‌کند" },
      low: { label: "کمال‌گرایی آسیب‌رسان", description: "کمال‌گرایی شما ممکن است به سلامت روانتان آسیب بزند" },
    },
  },

  // ─── ۱۵. تست مرزبندی ───────────────────────────────────
  {
    id: "boundaries",
    title: "تست مرزبندی شخصی",
    description: "چقدر در تعیین مرزهای سالم در روابط موفق هستید؟",
    category: "روابط",
    icon: "🛡️",
    duration: "۴ دقیقه",
    questionCount: 5,
    tags: ["مرزبندی", "روابط", "سلامت روان"],
    questions: [
      {
        id: 1, text: "وقتی کسی از شما درخواست نامعقولی داره...",
        options: [
          { text: "راحت و مؤدبانه نه میگم", score: "boundaries", value: 5 },
          { text: "سخته ولی نه میگم", score: "boundaries", value: 3 },
          { text: "معمولاً قبول میکنم تا ناراحت نشن", score: "boundaries", value: 2 },
          { text: "همیشه قبول میکنم", score: "boundaries", value: 1 },
        ],
      },
      {
        id: 2, text: "آیا اجازه میدید دیگران تصمیمات شما رو تغییر بدن؟",
        options: [
          { text: "نه، تصمیماتم رو خودم میگیرم", score: "boundaries", value: 5 },
          { text: "نظرشون رو میشنوم ولی خودم تصمیم میگیرم", score: "boundaries", value: 4 },
          { text: "معمولاً تحت تأثیر قرار میگیرم", score: "boundaries", value: 2 },
          { text: "بله، دیگران برام تصمیم میگیرن", score: "boundaries", value: 1 },
        ],
      },
      {
        id: 3, text: "وقتی کسی از حریم خصوصیتون رد میشه...",
        options: [
          { text: "فوراً و مؤدبانه تذکر میدم", score: "boundaries", value: 5 },
          { text: "ناراحت میشم ولی بعداً میگم", score: "boundaries", value: 3 },
          { text: "ناراحت میشم ولی چیزی نمیگم", score: "boundaries", value: 2 },
          { text: "حتی متوجه نمیشم", score: "boundaries", value: 1 },
        ],
      },
      {
        id: 4, text: "آیا وقت و انرژی خودتون رو به خوبی مدیریت میکنید؟",
        options: [
          { text: "بله، اول خودم و بعد دیگران", score: "boundaries", value: 5 },
          { text: "سعی میکنم ولی گاهی خودم رو فدا میکنم", score: "boundaries", value: 3 },
          { text: "بیشتر وقتم صرف دیگران میشه", score: "boundaries", value: 2 },
          { text: "همه چیزم رو فدای دیگران میکنم", score: "boundaries", value: 1 },
        ],
      },
      {
        id: 5, text: "وقتی احساس ناعدالتی میکنید...",
        options: [
          { text: "با آرامش حقم رو مطالبه میکنم", score: "boundaries", value: 5 },
          { text: "سعی میکنم اعتراض کنم", score: "boundaries", value: 3 },
          { text: "ناراحتم ولی ساکتم", score: "boundaries", value: 2 },
          { text: "میپذیرم و هیچی نمیگم", score: "boundaries", value: 1 },
        ],
      },
    ],
    scoringKey: {
      high: { label: "مرزبندی قوی", description: "شما در تعیین مرزهای سالم مهارت دارید" },
      medium: { label: "نیاز به تقویت", description: "مرزبندی شما قابل بهبود است" },
      low: { label: "مرزبندی ضعیف", description: "تقویت مهارت مرزبندی اولویت مهمی برای شماست" },
    },
  },

  // ─── ۱۶. تست ذهن‌آگاهی ──────────────────────────────────
  {
    id: "mindfulness",
    title: "تست ذهن‌آگاهی",
    description: "چقدر در لحظه حاضر هستید و از تجربه‌هایتان آگاهید؟",
    category: "سلامت روان",
    icon: "🧘‍♀️",
    duration: "۴ دقیقه",
    questionCount: 5,
    tags: ["ذهن‌آگاهی", "مدیتیشن", "حضور"],
    questions: [
      {
        id: 1, text: "چقدر در لحظه حال زندگی میکنید؟",
        options: [
          { text: "بیشتر وقت‌ها حواسم به لحظه حاله", score: "mindfulness", value: 5 },
          { text: "گاهی در لحظه حالم و گاهی ذهنم میره", score: "mindfulness", value: 3 },
          { text: "بیشتر به گذشته یا آینده فکر میکنم", score: "mindfulness", value: 2 },
          { text: "تقریباً هیچوقت در لحظه حال نیستم", score: "mindfulness", value: 1 },
        ],
      },
      {
        id: 2, text: "وقتی غذا میخورید، حواستون به طعمش هست؟",
        options: [
          { text: "بله، از هر لقمه لذت میبرم", score: "mindfulness", value: 5 },
          { text: "گاهی توجه میکنم", score: "mindfulness", value: 3 },
          { text: "معمولاً همزمان کار دیگه‌ای میکنم", score: "mindfulness", value: 2 },
          { text: "فقط سریع میخورم بره", score: "mindfulness", value: 1 },
        ],
      },
      {
        id: 3, text: "آیا متوجه تنش‌های جسمی بدنتون میشید؟",
        options: [
          { text: "بله، سریع متوجه میشم و رفعش میکنم", score: "mindfulness", value: 5 },
          { text: "گاهی متوجه میشم", score: "mindfulness", value: 3 },
          { text: "وقتی خیلی شدید بشه متوجه میشم", score: "mindfulness", value: 2 },
          { text: "تقریباً هیچوقت", score: "mindfulness", value: 1 },
        ],
      },
      {
        id: 4, text: "آیا مدیتیشن یا تمرین ذهن‌آگاهی انجام میدید؟",
        options: [
          { text: "بله، به طور منظم", score: "mindfulness", value: 5 },
          { text: "گاهی تلاش میکنم", score: "mindfulness", value: 3 },
          { text: "خیلی کم", score: "mindfulness", value: 2 },
          { text: "هیچوقت", score: "mindfulness", value: 1 },
        ],
      },
      {
        id: 5, text: "وقتی پیاده‌روی میکنید، حواستون کجاست؟",
        options: [
          { text: "به محیط اطرافم و احساساتم", score: "mindfulness", value: 5 },
          { text: "نصف‌نصف - هم محیط هم فکر", score: "mindfulness", value: 3 },
          { text: "بیشتر توی فکرم", score: "mindfulness", value: 2 },
          { text: "کاملاً غرق فکرم و چیزی نمیبینم", score: "mindfulness", value: 1 },
        ],
      },
    ],
    scoringKey: {
      high: { label: "ذهن‌آگاه", description: "شما مهارت خوبی در حضور ذهن دارید" },
      medium: { label: "نیاز به تمرین", description: "ذهن‌آگاهی شما قابل ارتقاست" },
      low: { label: "خودکار", description: "شما بیشتر در حالت خودکار زندگی می‌کنید" },
    },
  },

  // ─── ۱۷. تست تاب‌آوری ──────────────────────────────────
  {
    id: "resilience",
    title: "تست تاب‌آوری",
    description: "چقدر در برابر سختی‌ها و چالش‌ها مقاومید؟",
    category: "مهارت‌های زندگی",
    icon: "🌱",
    duration: "۴ دقیقه",
    questionCount: 5,
    tags: ["تاب‌آوری", "مقاومت", "رشد"],
    questions: [
      {
        id: 1, text: "بعد از یک شکست بزرگ، چقدر طول میکشه تا دوباره سرپا بشید؟",
        options: [
          { text: "سریع! درس میگیرم و ادامه میدم", score: "resilience", value: 5 },
          { text: "مدتی ناراحتم ولی بالاخره برمیگردم", score: "resilience", value: 3 },
          { text: "خیلی طول میکشه", score: "resilience", value: 2 },
          { text: "تقریباً نمیتونم برگردم", score: "resilience", value: 1 },
        ],
      },
      {
        id: 2, text: "در شرایط بحرانی چطور عمل میکنید؟",
        options: [
          { text: "آرام میمونم و قدم به قدم عمل میکنم", score: "resilience", value: 5 },
          { text: "استرس دارم ولی مدیریت میکنم", score: "resilience", value: 3 },
          { text: "پانیک میکنم ولی بالاخره یه کاری میکنم", score: "resilience", value: 2 },
          { text: "فلج میشم و نمیتونم کاری کنم", score: "resilience", value: 1 },
        ],
      },
      {
        id: 3, text: "آیا از تجربه‌های سخت درس میگیرید؟",
        options: [
          { text: "بله، هر سختی‌ای رو فرصت رشد میبینم", score: "resilience", value: 5 },
          { text: "بعضی وقت‌ها بله", score: "resilience", value: 3 },
          { text: "کمتر", score: "resilience", value: 2 },
          { text: "نه، فقط آسیب میبینم", score: "resilience", value: 1 },
        ],
      },
      {
        id: 4, text: "وقتی برنامه‌هاتون بهم میریزه، واکنشتون چیه؟",
        options: [
          { text: "برنامه جایگزین دارم یا سریع تنظیم میکنم", score: "resilience", value: 5 },
          { text: "ناراحت میشم ولی سازگار میشم", score: "resilience", value: 3 },
          { text: "خیلی عصبانی و ناراحت میشم", score: "resilience", value: 2 },
          { text: "حس میکنم دنیا داره علیه من کار میکنه", score: "resilience", value: 1 },
        ],
      },
      {
        id: 5, text: "آیا از خودتون مراقبت میکنید (ورزش، تغذیه، خواب)؟",
        options: [
          { text: "بله، برنامه مشخصی دارم", score: "resilience", value: 5 },
          { text: "سعی میکنم ولی همیشه نمیشه", score: "resilience", value: 3 },
          { text: "خیلی کم", score: "resilience", value: 2 },
          { text: "اصلاً مراقبت نمیکنم", score: "resilience", value: 1 },
        ],
      },
    ],
    scoringKey: {
      high: { label: "تاب‌آوری بالا", description: "شما در برابر سختی‌ها بسیار مقاوم هستید" },
      medium: { label: "متوسط", description: "تاب‌آوری شما قابل تقویت است" },
      low: { label: "آسیب‌پذیر", description: "تقویت تاب‌آوری می‌تواند به شما کمک زیادی کند" },
    },
  },

  // ─── ۱۸. تست هوش اجتماعی ────────────────────────────────
  {
    id: "social-intelligence",
    title: "تست هوش اجتماعی",
    description: "توانایی شما در درک پویایی‌های اجتماعی و رفتار دیگران",
    category: "ارتباطات",
    icon: "🎭",
    duration: "۴ دقیقه",
    questionCount: 5,
    tags: ["هوش اجتماعی", "ارتباطات", "درک"],
    questions: [
      {
        id: 1, text: "آیا میتونید فضای یک جمع رو سریع بخونید؟",
        options: [
          { text: "بله، به محض ورود متوجه فضا میشم", score: "socialIntelligence", value: 5 },
          { text: "بعد از مدتی بله", score: "socialIntelligence", value: 3 },
          { text: "نه خیلی", score: "socialIntelligence", value: 2 },
          { text: "اصلاً", score: "socialIntelligence", value: 1 },
        ],
      },
      {
        id: 2, text: "آیا میتونید دروغ دیگران رو تشخیص بدید؟",
        options: [
          { text: "معمولاً بله", score: "socialIntelligence", value: 5 },
          { text: "گاهی اوقات", score: "socialIntelligence", value: 3 },
          { text: "خیلی کم", score: "socialIntelligence", value: 2 },
          { text: "نه، معمولاً همه رو باور میکنم", score: "socialIntelligence", value: 1 },
        ],
      },
      {
        id: 3, text: "در مذاکره و متقاعد کردن دیگران چقدر موفقید؟",
        options: [
          { text: "خیلی خوب! میتونم دیگران رو متقاعد کنم", score: "socialIntelligence", value: 5 },
          { text: "نسبتاً خوب", score: "socialIntelligence", value: 3 },
          { text: "ضعیف", score: "socialIntelligence", value: 2 },
          { text: "اصلاً نمیتونم", score: "socialIntelligence", value: 1 },
        ],
      },
      {
        id: 4, text: "آیا میتونید با آدم‌های مختلف ارتباط برقرار کنید؟",
        options: [
          { text: "بله، با هر تیپ شخصیتی", score: "socialIntelligence", value: 5 },
          { text: "با بیشتر آدم‌ها بله", score: "socialIntelligence", value: 3 },
          { text: "فقط با افراد مشابه خودم", score: "socialIntelligence", value: 2 },
          { text: "برقراری ارتباط برام سخته", score: "socialIntelligence", value: 1 },
        ],
      },
      {
        id: 5, text: "آیا میتونید در موقعیت‌های اجتماعی رهبری کنید؟",
        options: [
          { text: "بله، طبیعتاً رهبر گروه میشم", score: "socialIntelligence", value: 5 },
          { text: "اگه لازم باشه بله", score: "socialIntelligence", value: 3 },
          { text: "ترجیح میدم دنبال‌کننده باشم", score: "socialIntelligence", value: 2 },
          { text: "اصلاً نمیتونم رهبری کنم", score: "socialIntelligence", value: 1 },
        ],
      },
    ],
    scoringKey: {
      high: { label: "هوش اجتماعی بالا", description: "شما در درک و مدیریت روابط اجتماعی مهارت دارید" },
      medium: { label: "متوسط", description: "هوش اجتماعی شما قابل ارتقاست" },
      low: { label: "نیاز به رشد", description: "تقویت مهارت‌های اجتماعی می‌تواند به شما کمک کند" },
    },
  },

  // ─── ۱۹. تست وابستگی عاطفی ─────────────────────────────
  {
    id: "emotional-dependency",
    title: "تست وابستگی عاطفی",
    description: "آیا در روابط وابستگی ناسالم دارید؟",
    category: "روابط",
    icon: "🔗",
    duration: "۴ دقیقه",
    questionCount: 5,
    tags: ["وابستگی", "روابط", "استقلال"],
    questions: [
      {
        id: 1, text: "آیا بدون پارتنر/دوست صمیمی احساس ناقص بودن میکنید؟",
        options: [
          { text: "نه، زندگی من کامله", score: "emotionalDependency", value: 5 },
          { text: "گاهی دلم تنگ میشه ولی خوبم", score: "emotionalDependency", value: 3 },
          { text: "بله، بدون اون حس خوبی ندارم", score: "emotionalDependency", value: 2 },
          { text: "بدون اون نمیتونم زندگی کنم", score: "emotionalDependency", value: 1 },
        ],
      },
      {
        id: 2, text: "آیا برای حس خوب داشتن به تأیید دیگران نیاز دارید؟",
        options: [
          { text: "نه، خودم ارزشم رو میدونم", score: "emotionalDependency", value: 5 },
          { text: "گاهی خوبه ولی ضروری نیست", score: "emotionalDependency", value: 3 },
          { text: "بله، زیاد نیاز دارم", score: "emotionalDependency", value: 2 },
          { text: "بدون تأیید دیگران حس بدی دارم", score: "emotionalDependency", value: 1 },
        ],
      },
      {
        id: 3, text: "آیا از تنها بودن میترسید؟",
        options: [
          { text: "نه، از تنهایی لذت میبرم", score: "emotionalDependency", value: 5 },
          { text: "کمی ناراحت میشم ولی مشکلی نیست", score: "emotionalDependency", value: 3 },
          { text: "بله، از تنهایی فرار میکنم", score: "emotionalDependency", value: 2 },
          { text: "وحشت دارم از تنها بودن", score: "emotionalDependency", value: 1 },
        ],
      },
      {
        id: 4, text: "آیا خودتون رو فدای رابطه میکنید؟",
        options: [
          { text: "نه، هم خودم هم رابطه مهمه", score: "emotionalDependency", value: 5 },
          { text: "گاهی کوتاه میام ولی حد دارم", score: "emotionalDependency", value: 3 },
          { text: "زیاد از خودم میگذرم", score: "emotionalDependency", value: 2 },
          { text: "همه چیزم رو فدا میکنم", score: "emotionalDependency", value: 1 },
        ],
      },
      {
        id: 5, text: "آیا میتونید بدون مشورت با دیگران تصمیم بگیرید؟",
        options: [
          { text: "بله، به خودم اعتماد دارم", score: "emotionalDependency", value: 5 },
          { text: "بله ولی دوست دارم نظر بشنوم", score: "emotionalDependency", value: 4 },
          { text: "سخته و معمولاً نیاز دارم کسی تأیید کنه", score: "emotionalDependency", value: 2 },
          { text: "بدون تأیید دیگران نمیتونم", score: "emotionalDependency", value: 1 },
        ],
      },
    ],
    scoringKey: {
      high: { label: "مستقل", description: "شما در روابط استقلال سالمی دارید" },
      medium: { label: "نیمه‌مستقل", description: "گاهی وابستگی عاطفی در شما دیده می‌شود" },
      low: { label: "وابسته", description: "وابستگی عاطفی ممکن است به روابطتان آسیب بزند" },
    },
  },

  // ─── ۲۰. تست سازگاری ──────────────────────────────────
  {
    id: "adaptability",
    title: "تست سازگاری و انعطاف‌پذیری",
    description: "چقدر در برابر تغییرات انعطاف‌پذیر هستید؟",
    category: "شخصیت",
    icon: "🌊",
    duration: "۴ دقیقه",
    questionCount: 5,
    tags: ["سازگاری", "انعطاف", "تغییر"],
    questions: [
      {
        id: 1, text: "وقتی برنامه‌هاتون ناگهانی عوض میشه...",
        options: [
          { text: "سریع سازگار میشم", score: "adaptability", value: 5 },
          { text: "کمی وقت میبره ولی عادت میکنم", score: "adaptability", value: 3 },
          { text: "خیلی ناراحت میشم", score: "adaptability", value: 2 },
          { text: "نمیتونم بپذیرم", score: "adaptability", value: 1 },
        ],
      },
      {
        id: 2, text: "اگه مجبور بشید به شهر جدیدی نقل مکان کنید...",
        options: [
          { text: "هیجان‌انگیزه! تجربه جدید", score: "adaptability", value: 5 },
          { text: "سخته ولی سعی میکنم سازگار بشم", score: "adaptability", value: 3 },
          { text: "خیلی نگرانم", score: "adaptability", value: 2 },
          { text: "غیرممکنه! نمیتونم", score: "adaptability", value: 1 },
        ],
      },
      {
        id: 3, text: "وقتی در محل کار روش جدیدی معرفی میشه...",
        options: [
          { text: "استقبال میکنم و یاد میگیرم", score: "adaptability", value: 5 },
          { text: "قبول میکنم و تلاش میکنم", score: "adaptability", value: 3 },
          { text: "مقاومت میکنم", score: "adaptability", value: 2 },
          { text: "روش قبلی بهتر بود، قبول نمیکنم", score: "adaptability", value: 1 },
        ],
      },
      {
        id: 4, text: "وقتی غذای جدیدی بهتون پیشنهاد میشه...",
        options: [
          { text: "با کمال میل امتحان میکنم", score: "adaptability", value: 5 },
          { text: "اگه ظاهرش خوب باشه امتحان میکنم", score: "adaptability", value: 3 },
          { text: "معمولاً ردش میکنم", score: "adaptability", value: 2 },
          { text: "هیچوقت چیز جدید امتحان نمیکنم", score: "adaptability", value: 1 },
        ],
      },
      {
        id: 5, text: "نظرتون درباره تغییرات تکنولوژی چیه؟",
        options: [
          { text: "عاشق یادگیری تکنولوژی جدیدم", score: "adaptability", value: 5 },
          { text: "سعی میکنم همراه باشم", score: "adaptability", value: 3 },
          { text: "سخته برام", score: "adaptability", value: 2 },
          { text: "از تکنولوژی فرار میکنم", score: "adaptability", value: 1 },
        ],
      },
    ],
    scoringKey: {
      high: { label: "بسیار سازگار", description: "شما در سازگاری با تغییرات مهارت بالایی دارید" },
      medium: { label: "نسبتاً سازگار", description: "سازگاری شما قابل بهبود است" },
      low: { label: "مقاوم به تغییر", description: "تغییرات برای شما چالش‌برانگیز هستند" },
    },
  },

  // ─── ۲۱. تست مدیریت زمان ────────────────────────────────
  {
    id: "time-management",
    title: "تست مدیریت زمان",
    description: "چقدر در مدیریت زمان و بهره‌وری موفق هستید؟",
    category: "مهارت‌های زندگی",
    icon: "⏰",
    duration: "۴ دقیقه",
    questionCount: 5,
    tags: ["مدیریت زمان", "بهره‌وری", "برنامه‌ریزی"],
    questions: [
      {
        id: 1, text: "آیا برای هر روز برنامه‌ریزی میکنید؟",
        options: [
          { text: "بله، لیست کارها و تایم‌بندی دارم", score: "timeManagement", value: 5 },
          { text: "تا حدی - کارهای مهم رو یادداشت میکنم", score: "timeManagement", value: 3 },
          { text: "نه، بیشتر خودبه‌خود پیش میره", score: "timeManagement", value: 2 },
          { text: "اصلاً برنامه‌ریزی نمیکنم", score: "timeManagement", value: 1 },
        ],
      },
      {
        id: 2, text: "معمولاً ددلاین‌ها رو رعایت میکنید؟",
        options: [
          { text: "همیشه! حتی زودتر تموم میکنم", score: "timeManagement", value: 5 },
          { text: "بیشتر وقت‌ها بله", score: "timeManagement", value: 3 },
          { text: "گاهی دیر میشه", score: "timeManagement", value: 2 },
          { text: "تقریباً همیشه از ددلاین عقبم", score: "timeManagement", value: 1 },
        ],
      },
      {
        id: 3, text: "چقدر وقتتون رو صرف کارهای بی‌فایده میکنید؟",
        options: [
          { text: "خیلی کم - وقتم رو هدر نمیدم", score: "timeManagement", value: 5 },
          { text: "مقداری ولی کنترل میکنم", score: "timeManagement", value: 3 },
          { text: "زیاد - مخصوصاً شبکه‌های اجتماعی", score: "timeManagement", value: 2 },
          { text: "خیلی زیاد و نمیتونم کنترل کنم", score: "timeManagement", value: 1 },
        ],
      },
      {
        id: 4, text: "آیا بین کار، استراحت و تفریح تعادل دارید؟",
        options: [
          { text: "بله، برنامه متعادلی دارم", score: "timeManagement", value: 5 },
          { text: "سعی میکنم ولی همیشه نمیشه", score: "timeManagement", value: 3 },
          { text: "نه، یکی همیشه فدای دیگری میشه", score: "timeManagement", value: 2 },
          { text: "اصلاً تعادل ندارم", score: "timeManagement", value: 1 },
        ],
      },
      {
        id: 5, text: "وقتی کار زیاد دارید، آیا اولویت‌بندی میکنید؟",
        options: [
          { text: "بله، مهم‌ترین‌ها رو اول انجام میدم", score: "timeManagement", value: 5 },
          { text: "سعی میکنم", score: "timeManagement", value: 3 },
          { text: "معمولاً آسون‌ترین‌ها رو اول انجام میدم", score: "timeManagement", value: 2 },
          { text: "نه، تصادفی انجام میدم", score: "timeManagement", value: 1 },
        ],
      },
    ],
    scoringKey: {
      high: { label: "مدیریت عالی", description: "شما در مدیریت زمان بسیار موفق هستید" },
      medium: { label: "قابل بهبود", description: "مدیریت زمان شما جای رشد دارد" },
      low: { label: "نیاز به بهبود", description: "مدیریت زمان یک حوزه مهم برای بهبود شماست" },
    },
  },

  // ─── ۲۲. تست شناخت ارزش‌ها ─────────────────────────────
  {
    id: "values",
    title: "تست شناخت ارزش‌های زندگی",
    description: "چه چیزهایی در زندگی برای شما مهم‌ترین هستند؟",
    category: "خودشناسی",
    icon: "💎",
    duration: "۴ دقیقه",
    questionCount: 5,
    tags: ["ارزش‌ها", "خودشناسی", "معنا"],
    questions: [
      {
        id: 1, text: "اگه فقط یک چیز رو در زندگی انتخاب میکردید...",
        options: [
          { text: "آرامش و سلامت روان", score: "values", value: 4 },
          { text: "موفقیت و ثروت", score: "values", value: 3 },
          { text: "عشق و خانواده", score: "values", value: 5 },
          { text: "آزادی و استقلال", score: "values", value: 4 },
        ],
      },
      {
        id: 2, text: "کدوم جمله بیشتر با شما هماهنگه؟",
        options: [
          { text: "زندگی یعنی تجربه کردن و رشد", score: "values", value: 5 },
          { text: "زندگی یعنی امنیت و ثبات", score: "values", value: 3 },
          { text: "زندگی یعنی لذت و شادی", score: "values", value: 4 },
          { text: "زندگی یعنی خدمت و کمک به دیگران", score: "values", value: 5 },
        ],
      },
      {
        id: 3, text: "در انتخاب شغل، کدوم مهم‌تره؟",
        options: [
          { text: "علاقه و رضایت درونی", score: "values", value: 5 },
          { text: "درآمد بالا", score: "values", value: 3 },
          { text: "تأثیرگذاری اجتماعی", score: "values", value: 4 },
          { text: "امنیت شغلی", score: "values", value: 3 },
        ],
      },
      {
        id: 4, text: "وقت آزادتون رو ترجیح میدید چطور بگذرونید؟",
        options: [
          { text: "یادگیری و رشد شخصی", score: "values", value: 5 },
          { text: "با خانواده و دوستان", score: "values", value: 5 },
          { text: "استراحت و تفریح", score: "values", value: 3 },
          { text: "کار داوطلبانه و کمک به دیگران", score: "values", value: 4 },
        ],
      },
      {
        id: 5, text: "موفقیت برای شما یعنی چی؟",
        options: [
          { text: "رسیدن به آرامش و خشنودی درونی", score: "values", value: 5 },
          { text: "ثروتمند و مشهور شدن", score: "values", value: 2 },
          { text: "تأثیر مثبت بر دیگران", score: "values", value: 4 },
          { text: "داشتن خانواده خوشبخت", score: "values", value: 5 },
        ],
      },
    ],
    scoringKey: {
      high: { label: "ارزش‌محور", description: "شما درک خوبی از ارزش‌های زندگیتان دارید" },
      medium: { label: "در حال کشف", description: "شما در مسیر شناخت ارزش‌هایتان هستید" },
      low: { label: "نیاز به تأمل", description: "تأمل بیشتر در ارزش‌های زندگی می‌تواند مفید باشد" },
    },
  },

  // ─── ۲۳. تست مهارت حل مسئله ──────────────────────────
  {
    id: "problem-solving",
    title: "تست مهارت حل مسئله",
    description: "بررسی توانایی شما در حل مسائل و چالش‌های زندگی",
    category: "مهارت‌های زندگی",
    icon: "🧩",
    duration: "۴ دقیقه",
    questionCount: 5,
    tags: ["حل مسئله", "تفکر", "تحلیل"],
    questions: [
      {
        id: 1, text: "وقتی با مشکل پیچیده‌ای مواجه میشید...",
        options: [
          { text: "به بخش‌های کوچک‌تر تقسیمش میکنم", score: "problemSolving", value: 5 },
          { text: "از زوایای مختلف نگاه میکنم", score: "problemSolving", value: 4 },
          { text: "از کسی کمک میخوام", score: "problemSolving", value: 3 },
          { text: "دست و پامو گم میکنم", score: "problemSolving", value: 1 },
        ],
      },
      {
        id: 2, text: "آیا قبل از عمل، فکر میکنید؟",
        options: [
          { text: "بله، همیشه تحلیل میکنم و بعد عمل میکنم", score: "problemSolving", value: 5 },
          { text: "بیشتر وقت‌ها بله", score: "problemSolving", value: 3 },
          { text: "گاهی عجولانه عمل میکنم", score: "problemSolving", value: 2 },
          { text: "معمولاً بدون فکر عمل میکنم", score: "problemSolving", value: 1 },
        ],
      },
      {
        id: 3, text: "وقتی راه‌حل اولتون جواب نمیده...",
        options: [
          { text: "راه‌حل‌های دیگه رو امتحان میکنم", score: "problemSolving", value: 5 },
          { text: "کمی فکر میکنم و دوباره تلاش میکنم", score: "problemSolving", value: 3 },
          { text: "ناامید میشم ولی ادامه میدم", score: "problemSolving", value: 2 },
          { text: "منصرف میشم", score: "problemSolving", value: 1 },
        ],
      },
      {
        id: 4, text: "آیا از اشتباهات گذشته درس میگیرید؟",
        options: [
          { text: "بله، تحلیل میکنم و تکرار نمیکنم", score: "problemSolving", value: 5 },
          { text: "سعی میکنم ولی گاهی تکرار میشه", score: "problemSolving", value: 3 },
          { text: "گاهی همون اشتباه رو تکرار میکنم", score: "problemSolving", value: 2 },
          { text: "مدام همون اشتباهات رو تکرار میکنم", score: "problemSolving", value: 1 },
        ],
      },
      {
        id: 5, text: "چقدر به تفکر منطقی و تحلیلی تمایل دارید؟",
        options: [
          { text: "خیلی! عاشق تحلیل و منطقم", score: "problemSolving", value: 5 },
          { text: "ترکیبی از منطق و شهود", score: "problemSolving", value: 4 },
          { text: "بیشتر شهودی تصمیم میگیرم", score: "problemSolving", value: 3 },
          { text: "اصلاً تحلیلی فکر نمیکنم", score: "problemSolving", value: 1 },
        ],
      },
    ],
    scoringKey: {
      high: { label: "حلال مسئله", description: "شما مهارت بالایی در حل مسائل دارید" },
      medium: { label: "متوسط", description: "مهارت حل مسئله شما قابل تقویت است" },
      low: { label: "نیاز به رشد", description: "تقویت مهارت حل مسئله می‌تواند به شما کمک کند" },
    },
  },

  // ─── ۲۴. تست رهبری ────────────────────────────────────
  {
    id: "leadership",
    title: "تست پتانسیل رهبری",
    description: "آیا ویژگی‌های یک رهبر خوب را دارید؟",
    category: "شخصیت",
    icon: "👑",
    duration: "۴ دقیقه",
    questionCount: 5,
    tags: ["رهبری", "مدیریت", "تیمی"],
    questions: [
      {
        id: 1, text: "در پروژه تیمی، نقش ترجیحی شما چیست؟",
        options: [
          { text: "رهبری و هدایت تیم", score: "leadership", value: 5 },
          { text: "هماهنگ‌کننده و پل ارتباطی", score: "leadership", value: 4 },
          { text: "اجرای دقیق وظایف", score: "leadership", value: 2 },
          { text: "فرق نمیکنه، هرچی بگن انجام میدم", score: "leadership", value: 1 },
        ],
      },
      {
        id: 2, text: "آیا در تصمیم‌گیری‌های گروهی پیش‌قدم هستید؟",
        options: [
          { text: "بله، معمولاً من شروع‌کننده‌ام", score: "leadership", value: 5 },
          { text: "گاهی بله", score: "leadership", value: 3 },
          { text: "ترجیح میدم دیگران شروع کنن", score: "leadership", value: 2 },
          { text: "هیچوقت پیشقدم نمیشم", score: "leadership", value: 1 },
        ],
      },
      {
        id: 3, text: "آیا میتونید دیگران رو انگیزه بدید؟",
        options: [
          { text: "بله، توانایی الهام‌بخشی دارم", score: "leadership", value: 5 },
          { text: "تا حدی", score: "leadership", value: 3 },
          { text: "نه خیلی", score: "leadership", value: 2 },
          { text: "اصلاً", score: "leadership", value: 1 },
        ],
      },
      {
        id: 4, text: "وقتی اعضای تیم مشکل دارن...",
        options: [
          { text: "کمکشون میکنم و راهنمایی میکنم", score: "leadership", value: 5 },
          { text: "اگه بخوان کمک میکنم", score: "leadership", value: 3 },
          { text: "کار خودشونه", score: "leadership", value: 2 },
          { text: "توجه نمیکنم", score: "leadership", value: 1 },
        ],
      },
      {
        id: 5, text: "آیا مسئولیت‌پذیر هستید؟",
        options: [
          { text: "بله، مسئولیت کامل اعمالم رو قبول میکنم", score: "leadership", value: 5 },
          { text: "بیشتر وقت‌ها بله", score: "leadership", value: 3 },
          { text: "گاهی از مسئولیت فرار میکنم", score: "leadership", value: 2 },
          { text: "معمولاً تقصیر رو گردن دیگران میندازم", score: "leadership", value: 1 },
        ],
      },
    ],
    scoringKey: {
      high: { label: "رهبر ذاتی", description: "شما پتانسیل بالای رهبری دارید" },
      medium: { label: "رهبر بالقوه", description: "مهارت‌های رهبری شما قابل رشد است" },
      low: { label: "دنبال‌کننده", description: "شما در نقش اجرایی بهتر عمل می‌کنید" },
    },
  },

  // ─── ۲۵. تست سبک زندگی ──────────────────────────────
  {
    id: "lifestyle",
    title: "تست سبک زندگی سالم",
    description: "بررسی کلی سبک زندگی و عادات سلامت شما",
    category: "سلامت روان",
    icon: "🌟",
    duration: "۴ دقیقه",
    questionCount: 5,
    tags: ["سبک زندگی", "سلامت", "عادات"],
    questions: [
      {
        id: 1, text: "چقدر ورزش میکنید؟",
        options: [
          { text: "حداقل ۳ بار در هفته", score: "lifestyle", value: 5 },
          { text: "۱-۲ بار در هفته", score: "lifestyle", value: 3 },
          { text: "خیلی کم و نامنظم", score: "lifestyle", value: 2 },
          { text: "اصلاً ورزش نمیکنم", score: "lifestyle", value: 1 },
        ],
      },
      {
        id: 2, text: "تغذیه‌تون چطوره؟",
        options: [
          { text: "سالم و متعادل - میوه، سبزی، پروتئین", score: "lifestyle", value: 5 },
          { text: "نسبتاً خوب", score: "lifestyle", value: 3 },
          { text: "بی‌نظم و فست‌فود زیاد", score: "lifestyle", value: 2 },
          { text: "اصلاً به تغذیه اهمیت نمیدم", score: "lifestyle", value: 1 },
        ],
      },
      {
        id: 3, text: "چقدر با طبیعت در ارتباطید؟",
        options: [
          { text: "هر هفته پارک، کوه یا طبیعت میرم", score: "lifestyle", value: 5 },
          { text: "گاهی اوقات", score: "lifestyle", value: 3 },
          { text: "خیلی کم", score: "lifestyle", value: 2 },
          { text: "تقریباً هیچوقت", score: "lifestyle", value: 1 },
        ],
      },
      {
        id: 4, text: "چقدر از گوشی و صفحه نمایش استفاده میکنید؟",
        options: [
          { text: "محدود و هدفمند", score: "lifestyle", value: 5 },
          { text: "زیاد ولی سعی میکنم کنترل کنم", score: "lifestyle", value: 3 },
          { text: "خیلی زیاد", score: "lifestyle", value: 2 },
          { text: "تمام وقت آزادم با گوشیه", score: "lifestyle", value: 1 },
        ],
      },
      {
        id: 5, text: "آیا سرگرمی یا هابی خاصی دارید؟",
        options: [
          { text: "بله، چند سرگرمی فعال دارم", score: "lifestyle", value: 5 },
          { text: "یکی-دوتا ولی زیاد وقت نمیذارم", score: "lifestyle", value: 3 },
          { text: "خیلی کم", score: "lifestyle", value: 2 },
          { text: "نه، فقط گوشی و تلویزیون", score: "lifestyle", value: 1 },
        ],
      },
    ],
    scoringKey: {
      high: { label: "سبک زندگی سالم", description: "شما سبک زندگی سالم و متعادلی دارید" },
      medium: { label: "قابل بهبود", description: "سبک زندگی شما جای بهبود دارد" },
      low: { label: "نیاز به تغییر", description: "تغییر سبک زندگی می‌تواند تأثیر بزرگی بر سلامت شما داشته باشد" },
    },
  },
];

// ─── تابع محاسبه نتیجه تست ────────────────────────────────────
export function calculateTestResult(
  test: PsychTest,
  answers: Record<number, number>,
): { level: "high" | "medium" | "low"; totalScore: number; maxScore: number; percentage: number } {
  let totalScore = 0;
  const maxScore = test.questions.length * 5;

  for (const q of test.questions) {
    const selectedIdx = answers[q.id];
    if (selectedIdx !== undefined && q.options[selectedIdx]) {
      totalScore += q.options[selectedIdx].value;
    }
  }

  const percentage = Math.round((totalScore / maxScore) * 100);

  let level: "high" | "medium" | "low";
  if (percentage >= 70) level = "high";
  else if (percentage >= 40) level = "medium";
  else level = "low";

  return { level, totalScore, maxScore, percentage };
}
