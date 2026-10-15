"use client";

import { useEffect, useRef, useState } from "react";
import { throttle } from "lodash";

// icons
import aboutMeIcon from "@/public/icons/header/me.svg";
import projectIcon from "@/public/icons/header/project.svg";
import skillIcon from "@/public/icons/header/skill.svg";
import activityIcon from "@/public/icons/header/activity.svg";
import capabilityIcon from "@/public/icons/header/capability.svg";

// styles
import clsx from "clsx";
import HeaderBtn from "../atoms/button/headerBtn";
import styles from "@/styles/chrome.module.css";
import { useCategoryScroll } from "@/app/scrollContext";

export default function Header() {
    const { scrollTo } = useCategoryScroll();
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);
    const SCROLL_THRESHOLD = 100; // 스크롤 임계값

    useEffect(() => {
        const handleScroll = throttle(() => {
            const currentScrollY = window.scrollY;
            const documentHeight = document.documentElement.scrollHeight;
            const windowHeight = window.innerHeight;

            if (currentScrollY <= 0) {
                setIsVisible(true);
                lastScrollY.current = 0;
                return;
            }

            // 오버스크롤 구간에서는 아무 처리 안 함 (애플기기)
            if (currentScrollY + windowHeight >= documentHeight) {
                return;
            }

            if (Math.abs(currentScrollY - lastScrollY.current) > SCROLL_THRESHOLD) {
                if (currentScrollY > lastScrollY.current) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
                lastScrollY.current = currentScrollY;
            }
        }, 200); // 200ms마다 실행

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            handleScroll.cancel();
        };
    }, []);

    const buttonList = [
        { name: "소개", icon: aboutMeIcon, href: "#about" },
        { name: "프로젝트", icon: projectIcon, href: "#projects" },
        { name: "역량", icon: capabilityIcon, href: "#capability" },
        { name: "이력", icon: activityIcon, href: "#activity" },
        { name: "기술", icon: skillIcon, href: "#skills" },
    ];

    return (
        <header
            className={clsx(
                styles.header,
                !isVisible && styles.headerHidden
            )}
        >
            <div className={styles.headerInner}>
                <a href="#home" className={styles.brand} aria-label="박성수 포트폴리오, 처음으로" onClick={(event) => {
                    event.preventDefault();
                    scrollTo(0);
                }}>
                    박성수 포트폴리오
                </a>
                <nav className={styles.navigation} aria-label="페이지 섹션">
                    {buttonList.map((val, idx) => (
                        <HeaderBtn key={val.name} name={val.name} icon={val.icon} href={val.href} idx={idx} />
                    ))}
                </nav>
            </div>
        </header>
    );
}
