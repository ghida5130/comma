import ActivityCard from "@/components/atoms/layout/activityCard";
import graduationIcon from "@/public/icons/me/graduation2.svg";
import Image from "next/image";

export default function Major({ title }: { title: string }) {
    return (
        <ActivityCard>
            <Image src={graduationIcon} alt="" width={60} />
            <p className="text-sm">2020.03 ~ 2024.02</p>
            <p>대구대학교</p>
            <p>{title}</p>
        </ActivityCard>
    );
}
