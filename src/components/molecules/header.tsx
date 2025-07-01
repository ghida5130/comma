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

export default function Header() {
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
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const buttonList = [
        { name: "소개", icon: aboutMeIcon, href: "/me" },
        { name: "역량", icon: capabilityIcon, href: "/me" },
        { name: "기술", icon: skillIcon, href: "/me" },
        { name: "주요 활동", icon: activityIcon, href: "/me" },
        { name: "프로젝트", icon: projectIcon, href: "/projects" },
    ];

    return (
        <header
            className={clsx(
                "fixed flex w-full h-24 justify-center items-center z-[9999] transition-transform duration-300 ease-in-out",
                isVisible ? "translate-y-0" : "-translate-y-[120px]"
            )}
        >
            <div className="flex px-6 justify-center items-center h-20 bg-black mt-2 rounded-full">
                {buttonList.map((val, idx) => (
                    <HeaderBtn key={val.name} name={val.name} icon={val.icon} href={val.href} idx={idx} />
                ))}
            </div>
        </header>
    );
}
