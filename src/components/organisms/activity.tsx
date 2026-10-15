import ActivityCard from "../molecules/activityCards/activityCard";
import clubIcon from "@/public/icons/me/club.svg";
import educationIcon from "@/public/icons/me/graduation.svg";
import { prizeData } from "@/data/prizeData";
import Prize from "../molecules/activityCards/prize";
import Major from "../molecules/activityCards/major";
import Qualification from "../molecules/activityCards/qualification";
import styles from "@/styles/content.module.css";

export default function Activity() {
    const localAiPrize = prizeData.find((data) => data.title === "로컬 AI 메이커스랩")!;
    const tourismPrize = prizeData[0];
    return (
        <section>
            <div className={styles.activityGrid}>
                <Major title="전기공학 전공 · AI응용 복수전공" />
                <ActivityCard
                    icon={educationIcon}
                    category="교육"
                    title="삼성전자"
                    award="삼성 청년 SW·AI 아카데미"
                    date="2026.01 ~ 2026.12"
                />
                <Qualification date="2025.06" title="정보처리기사" />
                <Qualification date="2026.03" title="SQLD" />
                <ActivityCard
                    icon={clubIcon}
                    title="소프트웨어 동아리 운영"
                    detail="정기 기술 세미나·프로젝트 단계별 공유·회고 운영"
                    award="AIS 학술동아리"
                />
                <Prize
                    title={localAiPrize.title}
                    detail={localAiPrize.detail}
                    award={localAiPrize.award}
                />
                <Prize
                    title={tourismPrize.title}
                    detail={tourismPrize.detail}
                    award={tourismPrize.award}
                />
                <ActivityCard
                    icon={educationIcon}
                    category="교육"
                    title="코멘토"
                    detail="스크린리더 실습을 통한 보조기술·사용 환경을 고려한 UI 설계 학습"
                    award="웹 표준·접근성 멘토링"
                />
                <ActivityCard
                    icon={clubIcon}
                    category="교육봉사"
                    title="네이버"
                    detail="초등학생 대상 코딩·로봇 실습 지도와 눈높이에 맞춘 기술 설명"
                    award="소프트웨어 교육봉사"
                />
            </div>
            <details className={`${styles.moreDetails} ${styles.activityDetails}`}>
                <summary>
                    <span>전체 수상 내역</span>
                    <span className={styles.activityToggleLabel}>
                        <span className={styles.showWhenClosed}>펼치기</span>
                        <span className={styles.showWhenOpen}>접기</span>
                    </span>
                </summary>
                <div className={`${styles.activityGrid} ${styles.prizeGrid}`}>
                    {prizeData.map((data) => (
                        <Prize key={data.title} title={data.title} detail={data.detail} award={data.award} />
                    ))}
                </div>
            </details>
        </section>
    );
}
