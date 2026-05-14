"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Check, ArrowRight, Trophy, RotateCcw } from "lucide-react";
import Link from "next/link";
import { PSYCH_TESTS, calculateTestResult } from "@/lib/tests-data";
import { useAppContext } from "@/context/AppContext";
import type { PsychTest } from "@/lib/tests-data";

// ─── صفحه لیست تست‌ها ────────────────────────────────────────
function TestListView({ onSelectTest }: { onSelectTest: (test: PsychTest) => void }) {
  const { state } = useAppContext();
  const completedTestIds = state.testResults.map(t => t.testId);

  const categories = [...new Set(PSYCH_TESTS.map(t => t.category))];

  return (
    <div className="min-h-screen bg-slate-50 p-6 font-sans pb-32">
      <div className="max-w-4xl mx-auto">
        {/* هدر */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/dashboard" className="text-slate-400 hover:text-slate-600 flex items-center gap-1">
            <ChevronRight className="inline" /> بازگشت
          </Link>
          <h1 className="text-xl font-bold text-slate-800">تست‌های روانشناسی</h1>
          <div className="w-24" />
        </div>

        {/* آمار */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-500">تست‌های انجام شده</p>
              <p className="text-3xl font-black text-slate-900">
                {completedTestIds.length} <span className="text-lg text-slate-400">/ {PSYCH_TESTS.length}</span>
              </p>
            </div>
            <div className="w-16 h-16 rounded-full border-4 border-orange-500 flex items-center justify-center">
              <span className="text-lg font-bold text-orange-600">
                {Math.round((completedTestIds.length / PSYCH_TESTS.length) * 100)}%
              </span>
            </div>
          </div>
          <div className="mt-3 h-2 bg-slate-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500 rounded-full transition-all duration-500"
              style={{ width: `${(completedTestIds.length / PSYCH_TESTS.length) * 100}%` }}
            />
          </div>
        </div>

        {/* لیست تست‌ها بر اساس دسته‌بندی */}
        {categories.map(cat => (
          <div key={cat} className="mb-8">
            <h2 className="text-lg font-bold text-slate-800 mb-4">{cat}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {PSYCH_TESTS.filter(t => t.category === cat).map(test => {
                const isDone = completedTestIds.includes(test.id);
                return (
                  <button
                    key={test.id}
                    onClick={() => onSelectTest(test)}
                    className={`text-right bg-white rounded-2xl border p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all ${
                      isDone ? "border-green-200 bg-green-50/30" : "border-slate-100"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-3xl">{test.icon}</span>
                      {isDone && (
                        <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-1 rounded-full">
                          انجام شده
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-slate-900 mb-1">{test.title}</h3>
                    <p className="text-xs text-slate-500 mb-3 line-clamp-2">{test.description}</p>
                    <div className="flex items-center gap-3 text-[10px] text-slate-400">
                      <span>{test.questionCount} سوال</span>
                      <span>•</span>
                      <span>{test.duration}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── صفحه انجام تست ─────────────────────────────────────────
function TestTakingView({
  test,
  onFinish,
  onBack,
}: {
  test: PsychTest;
  onFinish: (answers: Record<number, number>) => void;
  onBack: () => void;
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const q = test.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / test.questions.length) * 100;

  const handleNext = () => {
    if (selectedOption === null) return;

    const newAnswers = { ...answers, [q.id]: selectedOption };
    setAnswers(newAnswers);

    if (currentQuestion < test.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedOption(answers[test.questions[currentQuestion + 1]?.id] ?? null);
    } else {
      onFinish(newAnswers);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setSelectedOption(answers[test.questions[currentQuestion - 1]?.id] ?? null);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans">
      <div className="w-full max-w-3xl">
        {/* هدر */}
        <div className="flex items-center justify-between mb-8">
          <button onClick={onBack} className="text-slate-400 hover:text-slate-600 flex items-center gap-1">
            <ChevronRight className="inline" /> بازگشت
          </button>
          <h1 className="text-xl font-bold text-slate-800">{test.title}</h1>
          <div className="w-24" />
        </div>

        {/* نوار پیشرفت */}
        <div className="mb-8">
          <div className="flex justify-between text-sm font-medium text-slate-500 mb-2">
            <span>سوال {currentQuestion + 1} از {test.questions.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
            <div
              className="bg-orange-500 h-2.5 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* کارت سوال */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8 md:p-12">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-8 leading-relaxed">
            {q.text}
          </h2>

          <div className="space-y-3">
            {q.options.map((option, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedOption(idx)}
                className={`relative p-4 md:p-5 rounded-xl border-2 cursor-pointer transition-all duration-200 flex items-center justify-between group
                  ${selectedOption === idx
                    ? "border-orange-500 bg-orange-50"
                    : "border-slate-200 hover:border-orange-300 hover:bg-slate-50"
                  }`}
              >
                <span className={`text-base md:text-lg ${selectedOption === idx ? "text-slate-900 font-semibold" : "text-slate-600"}`}>
                  {option.text}
                </span>
                {selectedOption === idx && (
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center text-white flex-shrink-0 mr-2">
                    <Check size={16} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* دکمه‌ها */}
        <div className="mt-8 flex justify-between items-center">
          <button
            onClick={handleBack}
            disabled={currentQuestion === 0}
            className="px-6 py-3 text-slate-500 font-medium hover:text-slate-800 disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <ChevronRight size={20} /> قبلی
          </button>

          <button
            onClick={handleNext}
            disabled={selectedOption === null}
            className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/30 disabled:opacity-50 disabled:shadow-none transition-all flex items-center gap-2"
          >
            {currentQuestion === test.questions.length - 1 ? "پایان و مشاهده نتیجه" : "بعدی"}
            <ChevronLeft size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── صفحه نتیجه تست ─────────────────────────────────────────
function TestResultView({
  test,
  answers,
  onBack,
  onRetake,
}: {
  test: PsychTest;
  answers: Record<number, number>;
  onBack: () => void;
  onRetake: () => void;
}) {
  const { dispatch } = useAppContext();
  const result = calculateTestResult(test, answers);
  const resultInfo = test.scoringKey[result.level];

  // ذخیره نتیجه تست در context
  useState(() => {
    const tags = [...test.tags];
    if (result.level === "low") {
      tags.push(...test.tags.map(t => `نیاز_${t}`));
    }

    const scores: Record<string, number> = {};
    for (const q of test.questions) {
      const selectedIdx = answers[q.id];
      if (selectedIdx !== undefined && q.options[selectedIdx]) {
        const scoreKey = q.options[selectedIdx].score;
        scores[scoreKey] = (scores[scoreKey] || 0) + q.options[selectedIdx].value;
      }
    }

    // نرمال‌سازی امتیازات به مقیاس ۰-۱۰۰
    const normalizedScores: Record<string, number> = {};
    for (const [key, val] of Object.entries(scores)) {
      const maxPossible = test.questions.filter(q => q.options.some(o => o.score === key)).length * 5;
      normalizedScores[key] = Math.round((val / maxPossible) * 100);
    }

    dispatch({
      type: "SAVE_TEST_RESULT",
      payload: {
        testId: test.id,
        testName: test.title,
        answers: Object.fromEntries(Object.entries(answers).map(([k, v]) => [k, String(v)])),
        scores: normalizedScores,
        tags,
        completedAt: new Date().toISOString(),
      },
    });

    dispatch({ type: "TAKE_TEST" });
  });

  const getColorByLevel = (level: string) => {
    if (level === "high") return { bg: "bg-green-50", border: "border-green-200", text: "text-green-700", bar: "bg-green-500" };
    if (level === "medium") return { bg: "bg-yellow-50", border: "border-yellow-200", text: "text-yellow-700", bar: "bg-yellow-500" };
    return { bg: "bg-red-50", border: "border-red-200", text: "text-red-700", bar: "bg-red-500" };
  };

  const colors = getColorByLevel(result.level);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 font-sans">
      <div className="w-full max-w-xl">
        {/* کارت نتیجه */}
        <div className={`${colors.bg} rounded-3xl border ${colors.border} p-8 text-center mb-6`}>
          <div className="text-5xl mb-4"><Trophy /></div>
          <h2 className="text-2xl font-black text-slate-900 mb-2">{resultInfo.label}</h2>
          <p className="text-slate-600 mb-6">{resultInfo.description}</p>

          {/* نوار امتیاز */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-500">امتیاز شما</span>
              <span className={`font-bold ${colors.text}`}>{result.percentage}%</span>
            </div>
            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${colors.bar} rounded-full transition-all duration-1000`}
                style={{ width: `${result.percentage}%` }}
              />
            </div>
            <p className="text-xs text-slate-400 mt-2">
              {result.totalScore} از {result.maxScore} امتیاز
            </p>
          </div>
        </div>

        {/* دکمه‌ها */}
        <div className="flex gap-3">
          <button
            onClick={onRetake}
            className="flex-1 py-3.5 bg-white border border-slate-200 text-slate-700 rounded-xl font-bold hover:bg-slate-50 transition flex items-center justify-center gap-2"
          >
            <RotateCcw size={18} /> تست دوباره
          </button>
          <button
            onClick={onBack}
            className="flex-1 py-3.5 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition flex items-center justify-center gap-2"
          >
            <ArrowRight size={18} /> تست‌های دیگر
          </button>
        </div>

        <Link
          href="/events"
          className="block mt-4 text-center py-3.5 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-700 transition"
        >
          مشاهده رویدادهای پیشنهادی
        </Link>
      </div>
    </div>
  );
}

// ─── صفحه اصلی تست ──────────────────────────────────────────
export default function TestPage() {
  const [view, setView] = useState<"list" | "taking" | "result">("list");
  const [selectedTest, setSelectedTest] = useState<PsychTest | null>(null);
  const [testAnswers, setTestAnswers] = useState<Record<number, number>>({});

  const handleSelectTest = (test: PsychTest) => {
    setSelectedTest(test);
    setTestAnswers({});
    setView("taking");
  };

  const handleFinishTest = (answers: Record<number, number>) => {
    setTestAnswers(answers);
    setView("result");
  };

  const handleRetake = () => {
    setTestAnswers({});
    setView("taking");
  };

  const handleBackToList = () => {
    setSelectedTest(null);
    setTestAnswers({});
    setView("list");
  };

  if (view === "taking" && selectedTest) {
    return (
      <TestTakingView
        test={selectedTest}
        onFinish={handleFinishTest}
        onBack={handleBackToList}
      />
    );
  }

  if (view === "result" && selectedTest) {
    return (
      <TestResultView
        test={selectedTest}
        answers={testAnswers}
        onBack={handleBackToList}
        onRetake={handleRetake}
      />
    );
  }

  return <TestListView onSelectTest={handleSelectTest} />;
}
