import FlexCard from "@/components/atoms/layout/flexCard";
import graduationIcon from "@/public/icons/me/graduation2.svg";
import Image from "next/image";

export default function Major({ title }: { title: string }) {
    return (
        <FlexCard>
            <Image src={graduationIcon} alt="major icon" width={60} className="" />
            <p className="text-base">대구대학교</p>
            <p className="text-sm">2020.03 ~ 2024.02</p>
            <p className="text-2xl">{title}</p>
        </FlexCard>
    );
}
