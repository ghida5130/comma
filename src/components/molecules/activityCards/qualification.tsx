import FlexCard from "@/components/atoms/layout/flexCard";
import qualificationIcon from "@/public/icons/me/qualification.svg";
import Image from "next/image";

interface MajorDataProps {
    date: string;
    title: string;
}

export default function Qualification({ date, title }: MajorDataProps) {
    return (
        <FlexCard>
            <Image src={qualificationIcon} alt="prize icon" width={50} />
            <p className="text-sm mt-3">{date}</p>
            <p className="text-2xl mt-1">{title}</p>
        </FlexCard>
    );
}
