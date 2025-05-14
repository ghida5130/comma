import Image from "next/image";
import ActivityCard from "../atoms/layout/activityCard";
import Major from "../molecules/activityCards/major";

export default function Activity() {
    return (
        <section className="flex flex-wrap gap-3">
            <Major title="전기공학전공" />
            <Major title="AI응용 복수전공" />
        </section>
    );
}
