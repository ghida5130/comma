"use client";

import styles from "@/styles/chrome.module.css";
import LinkBtn from "@/components/atoms/button/linkBtn";
import tistoryIcon from "@/public/icons/me/tistory.svg";
import githubIcon from "@/public/icons/me/github.svg";
import { useCategoryScroll } from "@/app/scrollContext";

export default function Overview() {
    const { scrollTo } = useCategoryScroll();
    return (
        <section className={styles.overview} aria-labelledby="overview-title">
            <h1 id="overview-title" className={styles.title}>
                <span className={styles.titlePhrase}><span className={styles.titleGreeting}>안녕하세요</span>{" "}개발자</span>{" "}
                <span className={styles.titlePhrase}><span className={styles.titleName}>박성수</span>입니다.</span>
            </h1>
            <p className={styles.summary}>
                {/* 더 나은 사용자 경험을 고민하며, 최신 기술을 빠르게 습득해 지속적으로 성장하고자 노력합니다. */}
                함께 개발하기 편하고 사용하기 쉬운 서비스를 만듭니다.
            </p>
            <div className={styles.actions}>
                <a
                    href="#projects"
                    className={styles.primaryLink}
                    onClick={(event) => {
                        event.preventDefault();
                        scrollTo(2);
                    }}
                >
                    프로젝트 보기
                </a>
                <LinkBtn url="https://cstelladev.tistory.com/" title="Tistory" logo={tistoryIcon} />
                <LinkBtn url="https://github.com/ghida5130" title="GitHub" logo={githubIcon} />
            </div>
        </section>
    );
}
