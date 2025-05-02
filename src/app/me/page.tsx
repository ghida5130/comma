import styles from "@/styles/me.module.scss";
import clsx from "clsx";
import Image from "next/image";
import tistoryLogo from "@/public/icons/me/tistory.svg";

export default function Me() {
    return (
        <div className={styles.wrap}>
            <section className={styles.infoArea}>
                <div className={styles.introduce}>
                    <p>안녕하세요.</p>
                    <p>프론트엔드</p>
                    <p>개발자</p>
                    <p>박성수</p>
                    <p>입니다.</p>
                </div>
                <p>
                    더 나은 사용자 경험을 고려하고 최신 기술을 빠르게 습득하여 지속적으로 성장하는 개발자가 되도록
                    노력하고 있습니다.
                </p>
                <a
                    href="https://cstelladev.tistory.com/"
                    className={styles.tistoryBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image src={tistoryLogo} alt="tistory button" width={15} />
                    Tistory
                    <div className={styles.arrow}>›</div>
                </a>
            </section>
            <section>스킬</section>
            <section>학력</section>
            <section>대외활동</section>
            <section>기타 (프로젝트 탭 이동 버튼)</section>
            <div style={{ background: "grey", height: "1000px" }}>test</div>
        </div>
    );
}
