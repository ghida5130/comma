import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { myFont } from "./fonts";

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
            <body>{children}</body>
        </html>
    );
}
