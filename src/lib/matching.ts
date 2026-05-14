import type { EventData } from "./events-data";
import type { TestResultEntry } from "@/context/AppContext";

// ─── تایپ پروفایل شخصیتی کاربر ────────────────────────────────
export type PersonalityProfile = {
  city: string | null;
  extroversion: number; // 0-100
  stressTolerance: number; // 0-100
  socialSkills: number; // 0-100
  emotionalAwareness: number; // 0-100
  interests: string[];
  issues: string[];
  tags: string[];
};

// ─── تایپ روانشناس ────────────────────────────────────────────
export type Psychologist = {
  id: string;
  name: string;
  avatar: string;
  specialty: string;
  specialtyTags: string[];
  city: string;
  rating: number;
  experience: string;
  description: string;
  price: number;
};

// ─── داده‌های نمونه روانشناسان ────────────────────────────────
export const PSYCHOLOGISTS: Psychologist[] = [
  {
    id: "psy-1",
    name: "دکتر سارا محمدی",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
    specialty: "روانشناس بالینی - تخصص اضطراب و افسردگی",
    specialtyTags: ["اضطراب", "افسردگی", "استرس", "خلق"],
    city: "تهران",
    rating: 4.9,
    experience: "۱۲ سال",
    description: "متخصص در درمان اختلالات اضطرابی و افسردگی با رویکرد CBT",
    price: 350000,
  },
  {
    id: "psy-2",
    name: "دکتر امیر رضایی",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    specialty: "روانشناس ارتباطات و خانواده",
    specialtyTags: ["ارتباطات", "خانواده", "روابط", "اجتماعی", "درون‌گرایی"],
    city: "تهران",
    rating: 4.8,
    experience: "۸ سال",
    description: "متخصص در مشاوره ارتباطات بین‌فردی و مشکلات زوجین",
    price: 300000,
  },
  {
    id: "psy-3",
    name: "دکتر مریم کریمی",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
    specialty: "روانشناس تحصیلی و شغلی",
    specialtyTags: ["شغلی", "تحصیلی", "انگیزه", "خودشناسی", "تصمیم‌گیری"],
    city: "اصفهان",
    rating: 4.7,
    experience: "۱۰ سال",
    description: "متخصص مشاوره شغلی، تحصیلی و کشف استعداد",
    price: 280000,
  },
  {
    id: "psy-4",
    name: "دکتر علی نوروزی",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    specialty: "روانشناس بالینی - اعتماد به نفس",
    specialtyTags: ["اعتماد به نفس", "عزت نفس", "خودباوری", "درون‌گرایی"],
    city: "مشهد",
    rating: 4.9,
    experience: "۱۵ سال",
    description: "متخصص در تقویت اعتماد به نفس و عزت نفس",
    price: 320000,
  },
  {
    id: "psy-5",
    name: "دکتر نسرین احمدی",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    specialty: "روانشناس کودک و نوجوان",
    specialtyTags: ["کودک", "نوجوان", "رفتاری", "تربیتی"],
    city: "شیراز",
    rating: 4.6,
    experience: "۷ سال",
    description: "متخصص مشاوره کودک و نوجوان و مشکلات رفتاری",
    price: 250000,
  },
  {
    id: "psy-6",
    name: "دکتر محمد حسینی",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    specialty: "روانشناس بالینی - استرس و فرسودگی",
    specialtyTags: ["استرس", "فرسودگی شغلی", "خواب", "آرامش"],
    city: "تبریز",
    rating: 4.8,
    experience: "۱۱ سال",
    description: "متخصص مدیریت استرس و درمان فرسودگی شغلی",
    price: 290000,
  },
  {
    id: "psy-7",
    name: "دکتر فاطمه زارع",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    specialty: "روانشناس مثبت‌نگر",
    specialtyTags: ["مثبت‌اندیشی", "شادی", "انگیزه", "هدف‌گذاری"],
    city: "تهران",
    rating: 4.7,
    experience: "۹ سال",
    description: "متخصص روانشناسی مثبت‌نگر و ارتقای کیفیت زندگی",
    price: 310000,
  },
  {
    id: "psy-8",
    name: "دکتر رضا کاظمی",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    specialty: "روانپزشک - اختلالات خلقی",
    specialtyTags: ["افسردگی", "دوقطبی", "خلق", "دارودرمانی"],
    city: "کرج",
    rating: 4.9,
    experience: "۱۸ سال",
    description: "روانپزشک با تجربه در درمان اختلالات خلقی و دوقطبی",
    price: 400000,
  },
  {
    id: "psy-9",
    name: "دکتر لیلا شریفی",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    specialty: "روانشناس وسواس و اضطراب",
    specialtyTags: ["وسواس", "اضطراب", "فوبیا", "ترس"],
    city: "اصفهان",
    rating: 4.8,
    experience: "۱۳ سال",
    description: "متخصص درمان OCD و اختلالات اضطرابی با رویکرد ERP",
    price: 330000,
  },
  {
    id: "psy-10",
    name: "دکتر حسین تقوی",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    specialty: "روانشناس ورزشی و انگیزشی",
    specialtyTags: ["ورزشی", "انگیزه", "عملکرد", "ذهن‌آگاهی"],
    city: "تهران",
    rating: 4.6,
    experience: "۶ سال",
    description: "متخصص روانشناسی ورزشی و بهینه‌سازی عملکرد ذهنی",
    price: 270000,
  },
];

// ─── ساخت پروفایل شخصیتی از نتایج تست ────────────────────────
export function buildPersonalityProfile(
  testResults: TestResultEntry[],
  userCity: string | null,
  userInterests: string[],
  userIssues: string[],
): PersonalityProfile {
  let extroversion = 50;
  let stressTolerance = 50;
  let socialSkills = 50;
  let emotionalAwareness = 50;
  const allTags: string[] = [];

  for (const result of testResults) {
    if (result.scores.extroversion !== undefined) {
      extroversion = result.scores.extroversion;
    }
    if (result.scores.stressTolerance !== undefined) {
      stressTolerance = result.scores.stressTolerance;
    }
    if (result.scores.socialSkills !== undefined) {
      socialSkills = result.scores.socialSkills;
    }
    if (result.scores.emotionalAwareness !== undefined) {
      emotionalAwareness = result.scores.emotionalAwareness;
    }
    allTags.push(...result.tags);
  }

  return {
    city: userCity,
    extroversion,
    stressTolerance,
    socialSkills,
    emotionalAwareness,
    interests: userInterests,
    issues: userIssues,
    tags: [...new Set(allTags)],
  };
}

// ─── محاسبه امتیاز تطابق رویداد ────────────────────────────────
export function calcEventMatchScore(
  profile: PersonalityProfile,
  event: EventData,
): number {
  let score = 50;

  // ۱. تطابق شهر
  if (event.city && profile.city) {
    if (event.city === profile.city) score += 30;
    else score -= 15;
  }

  // ۲. تطابق کتگوری با علایق
  const category = event.category.toLowerCase();
  for (const interest of profile.interests) {
    if (category.includes(interest.toLowerCase()) || event.title.includes(interest)) {
      score += 10;
    }
  }

  // ۳. تطابق با شخصیت
  if (category.includes("اجتماعی") || category.includes("شبکه‌سازی")) {
    if (profile.extroversion >= 60) score += 10;
    if (profile.socialSkills >= 60) score += 5;
  }

  if (category.includes("آموزشی") || category.includes("کارگاه")) {
    if (profile.emotionalAwareness >= 50) score += 8;
  }

  if (category.includes("ورزشی") || category.includes("طبیعت")) {
    if (profile.stressTolerance >= 50) score += 8;
    if (profile.extroversion >= 40) score += 5;
  }

  if (category.includes("فرهنگی") || category.includes("هنری")) {
    if (profile.emotionalAwareness >= 60) score += 10;
  }

  // ۴. تطابق تگ‌ها
  const eventKeywords = [event.title, event.subtitle, event.category].join(" ").toLowerCase();
  for (const tag of profile.tags) {
    if (eventKeywords.includes(tag.toLowerCase())) {
      score += 5;
    }
  }

  return Math.max(0, Math.min(100, score));
}

// ─── محاسبه امتیاز تطابق روانشناس ─────────────────────────────
export function calcPsychologistMatchScore(
  profile: PersonalityProfile,
  psychologist: Psychologist,
): number {
  let score = 40;

  // ۱. تطابق شهر
  if (psychologist.city && profile.city) {
    if (psychologist.city === profile.city) score += 25;
  }

  // ۲. تطابق مشکلات کاربر با تخصص روانشناس
  for (const issue of profile.issues) {
    for (const tag of psychologist.specialtyTags) {
      if (issue.includes(tag) || tag.includes(issue)) {
        score += 15;
      }
    }
  }

  // ۳. تطابق تگ‌های تست
  for (const tag of profile.tags) {
    for (const specTag of psychologist.specialtyTags) {
      if (tag.includes(specTag) || specTag.includes(tag)) {
        score += 8;
      }
    }
  }

  // ۴. امتیاز بر اساس شخصیت
  if (profile.extroversion < 40) {
    if (psychologist.specialtyTags.some(t => t.includes("درون‌گرایی") || t.includes("ارتباطات"))) {
      score += 10;
    }
  }
  if (profile.stressTolerance < 40) {
    if (psychologist.specialtyTags.some(t => t.includes("استرس") || t.includes("اضطراب"))) {
      score += 12;
    }
  }
  if (profile.emotionalAwareness < 40) {
    if (psychologist.specialtyTags.some(t => t.includes("خودشناسی") || t.includes("هدف‌گذاری"))) {
      score += 10;
    }
  }

  // ۵. رتبه‌بندی
  score += psychologist.rating * 2;

  return Math.max(0, Math.min(100, score));
}

// ─── دریافت رویدادهای پیشنهادی ─────────────────────────────────
export function getRecommendedEvents(
  events: EventData[],
  profile: PersonalityProfile,
): (EventData & { matchScore: number })[] {
  return events
    .map(event => ({
      ...event,
      matchScore: calcEventMatchScore(profile, event),
    }))
    .sort((a, b) => b.matchScore - a.matchScore);
}

// ─── دریافت روانشناسان پیشنهادی ─────────────────────────────────
export function getRecommendedPsychologists(
  profile: PersonalityProfile,
): (Psychologist & { matchScore: number })[] {
  return PSYCHOLOGISTS
    .map(psy => ({
      ...psy,
      matchScore: calcPsychologistMatchScore(profile, psy),
    }))
    .sort((a, b) => b.matchScore - a.matchScore);
}
