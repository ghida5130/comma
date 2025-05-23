import ActivityCard from "../molecules/activityCards/activityCard";
import clubIcon from "@/public/icons/me/club.svg";
import { prizeData } from "@/data/prizeData";
import Prize from "../molecules/activityCards/prize";
import Major from "../molecules/activityCards/major";

export default function Activity() {
    return (
        <section className="flex flex-wrap gap-3">
            <Major title="전기공학전공" />
            <Major title="AI응용 복수전공" />
            <ActivityCard
                icon={clubIcon}
                title="소프트웨어 개발 동아리"
                detail="앱, 웹, 임베디드 및 AI 관련 개발 및 학습"
                award="A.I.S. 학술동아리"
            />
            {prizeData.map((data) => (
                <Prize key={data.title} title={data.title} detail={data.detail} award={data.award} />
            ))}
        </section>
    );
}
