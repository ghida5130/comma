import FlexCard from "@/components/atoms/layout/flexCard";
import prizeIcon from "@/public/icons/me/prize.svg";
import Image from "next/image";
import styles from "@/styles/content.module.css";

interface MajorDataProps {
    title: string;
    detail: string;
    award: string;
}

export default function Prize({ title, detail, award }: MajorDataProps) {
    return (
        <FlexCard>
            <div className={styles.activityCategory}>
                <Image src={prizeIcon} alt="" width={24} height={24} className={styles.activityIcon} />
                <p className={styles.activityLabel}>수상</p>
            </div>
            <h3 className={styles.activityHeading}>{title}</h3>
            <p className={styles.activityValue}>{award}</p>
            <p className={styles.activityDetail}>{detail}</p>
        </FlexCard>
    );
}
