"use client";

import { useAppContext } from "@/context/AppContext";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function PostPaymentPage() {
  const { dispatch } = useAppContext();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const status = searchParams.get("status");
    if (status === "success") {
      // 🔴 خط 17 مشکل دارد - باید یا حذف شود یا context به‌روزرسانی شود
      // dispatch({ type: "SET_PAYMENT_SUCCESS", payload: true }); // حذف یا اصلاح
      
      // ✅ بهتر است ابتدا context را چک کنید یا مستقیماً هدایت کنید
      setTimeout(() => {
        router.push("/payment-success");
      }, 1000);
    } else {
      router.push("/payment-failed");
    }
  }, [searchParams, router, dispatch]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">
          در حال پردازش پرداخت...
        </h1>
        <p className="text-slate-600">لطفاً چند لحظه صبر کنید.</p>
      </div>
    </div>
  );
}
