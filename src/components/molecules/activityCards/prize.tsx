import FlexCard from "@/components/atoms/layout/flexCard";
import prizeIcon from "@/public/icons/me/prize.svg";
import Image from "next/image";

interface MajorDataProps {
    title: string;
    detail: string;
    award: string;
}

export default function Prize({ title, detail, award }: MajorDataProps) {
    return (
        <FlexCard>
            <Image src={prizeIcon} alt="prize icon" width={50} />
            <p className="text-base">{title}</p>
            <p className="text-sm">{detail}</p>
            <p className="text-2xl">{award}</p>
        </FlexCard>
    );
}
