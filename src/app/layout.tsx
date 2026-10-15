import type { Metadata } from "next";
import "./globals.css";
import { myFont } from "./fonts";
import Header from "@/components/molecules/header";
import StoreProvider from "./storeProvider";
import UniverseBackground from "@/components/atoms/layout/universeBackground";
import { ScrollProvider } from "./scrollContext";
import Footer from "@/components/atoms/layout/footer";
import ScrollToTopBtn from "@/components/atoms/button/scrollToTopBtn";
import { Agentation } from "agentation";

export const metadata: Metadata = {
  title: "박성수 | 개발자 포트폴리오",
  description: "팀 개발 환경과 사용자 경험을 함께 개선하는 개발자 박성수의 프로젝트와 이력입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={myFont.variable}>
      <body>
        <a href="#main-content" className="skip-link">
          본문 바로가기
        </a>
        <ScrollProvider>
          <Header />
          <StoreProvider>
            <UniverseBackground />
            <main id="main-content" tabIndex={-1}>
              {children}
            </main>
          </StoreProvider>
          <Footer />
          <ScrollToTopBtn />
        </ScrollProvider>
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
