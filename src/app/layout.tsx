import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "راوی - پلتفرم هوشمند رویداد",
  description: "پلتفرم راوی با استفاده از الگوریتم‌های هوش مصنوعی و تست‌های روان‌شناسی، افراد را با بهترین هم‌نشین‌های خود متصل می‌کند.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.className} antialiased`}>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
