import type { Metadata } from "next";
import "./globals.css";
import { myFont } from "./fonts";
import Header from "@/components/molecules/header";
import StoreProvider from "./storeProvider";
import UniverseBackground from "@/components/atoms/layout/universeBackground";
import { ScrollProvider } from "./scrollContext";

export const metadata: Metadata = {
    title: "Comma - 박성수 포트폴리오",
    description: "박성수 프론트엔드 포트폴리오",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko" className={myFont.variable}>
            <body>
                <ScrollProvider>
                    <Header />
                    <StoreProvider>
                        <UniverseBackground />
                        <main>{children}</main>
                    </StoreProvider>
                </ScrollProvider>
            </body>
        </html>
    );
}
