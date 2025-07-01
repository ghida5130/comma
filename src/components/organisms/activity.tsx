import ActivityCard from "../molecules/activityCards/activityCard";
import clubIcon from "@/public/icons/me/club.svg";
import { prizeData } from "@/data/prizeData";
import Prize from "../molecules/activityCards/prize";
import Major from "../molecules/activityCards/major";
import Qualification from "../molecules/activityCards/qualification";

export default function Activity() {
    const impPrizeData = prizeData[0];
    return (
        <section className="w-full grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
            <Major title="전기공학전공" />
            <Major title="AI응용 복수전공" />
            <ActivityCard
                icon={clubIcon}
                title="소프트웨어 개발 동아리"
                detail="앱, 웹, 임베디드, AI 관련 개발 및 학습"
                award="A.I.S. 학술동아리"
            />
            <Prize title={impPrizeData.title} detail={impPrizeData.detail} award={impPrizeData.award} />
            <Qualification date="2025.06" title="정보처리기사" />
        </section>
    );
}
