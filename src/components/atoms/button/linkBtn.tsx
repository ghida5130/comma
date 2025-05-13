import Image, { StaticImageData } from "next/image";
import styles from "@/styles/me.module.scss";
import React from "react";
import Link from "next/link";

interface LinkBtnTypes {
    url: string;
    title: string;
    logo: StaticImageData;
}

export default function LinkBtn({ url, title, logo }: LinkBtnTypes) {
    const isExternal = url.startsWith("http");

    // 외부 링크일경우 a 태그로 처리
    if (isExternal) {
        return (
            <a
                href={url}
                className={`${styles.linkBtn} w-[150px] h-[40px] flex items-center justify-start gap-[10px] relative bg-neutral-700 hover:bg-neutral-600 rounded-md font-medium px-[15px] duration-200`}
                target="_blank"
                rel="noopener noreferrer"
            >
                <Image src={logo} alt="tistory button" width={15} />
                {title}
                <div
                    className={`${styles.arrow} absolute right-0 w-[30px] height-full text-2xl flex items-center justify-center`}
                >
                    ›
                </div>
            </a>
        );
    }

    // 내부 링크일경우 Link 컴포넌트로 처리
    return (
        <Link
            href={url}
            className={`${styles.linkBtn} w-[150px] h-[40px] flex items-center justify-start gap-[10px] relative bg-neutral-700 hover:bg-neutral-600 rounded-md font-medium px-[15px] duration-200`}
        >
            <Image src={logo} alt="tistory button" width={15} />
            {title}
            <div
                className={`${styles.arrow} absolute right-0 w-[30px] height-full text-2xl flex items-center justify-center`}
            >
                ›
            </div>
        </Link>
    );
}
