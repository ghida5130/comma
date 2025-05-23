import FlexCard from "@/components/atoms/layout/flexCard";
import Image, { StaticImageData } from "next/image";

interface MajorDataProps {
    icon: StaticImageData;
    title: string;
    detail: string;
    award: string;
}

export default function ActivityCard({ icon, title, detail, award }: MajorDataProps) {
    return (
        <FlexCard>
            <Image src={icon} alt="activity icon" width={50} />
            <p className="text-base">{title}</p>
            <p className="text-sm">{detail}</p>
            <p className="text-2xl">{award}</p>
        </FlexCard>
    );
}
