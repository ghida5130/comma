"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { throttle } from "lodash";
import { StaticImageData } from "next/image";

// icons
import homeIcon from "@/public/icons/header/home.svg";
import aboutMeIcon from "@/public/icons/header/me.svg";
import projectIcon from "@/public/icons/header/project.svg";

// styles
import styles from "@/styles/header.module.scss";

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
        { name: "Home", icon: homeIcon, href: "/" },
        { name: "About Me", icon: aboutMeIcon, href: "/me" },
        { name: "Projects", icon: projectIcon, href: "/projects" },
    ];

    return (
        <header className={`${styles.header} ${isVisible ? styles.visible : styles.hidden}`}>
            <div className={styles.headerArea}>
                {buttonList.map((val) => (
                    <Button key={val.name} name={val.name} icon={val.icon} href={val.href} />
                ))}
            </div>
        </header>
    );
}

interface ButtonProps {
    name: string;
    icon: StaticImageData;
    href: string;
}

const Button = ({ name, icon, href }: ButtonProps) => {
    return (
        <Link href={href} className={styles.headerBtn}>
            <Image src={icon} alt={`${name} icon`} width={25} />
            <p>{name}</p>
        </Link>
    );
};
