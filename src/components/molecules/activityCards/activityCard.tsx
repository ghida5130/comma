import FlexCard from "@/components/atoms/layout/flexCard";
import Image, { StaticImageData } from "next/image";
import styles from "@/styles/content.module.css";

interface MajorDataProps {
    icon: StaticImageData;
    title: string;
    detail?: string;
    award: string;
    category?: string;
    date?: string;
}

export default function ActivityCard({ icon, title, detail, award, category = "동아리", date }: MajorDataProps) {
    return (
        <FlexCard>
            <div className={styles.activityCategory}>
                <Image src={icon} alt="" width={24} height={24} className={styles.activityIcon} />
                <p className={styles.activityLabel}>{category}</p>
            </div>
            <h3 className={styles.activityHeading}>{award}</h3>
            <p className={styles.activityValue}>{title}</p>
            {detail ? <p className={styles.activityDetail}>{detail}</p> : null}
            {date ? <p className={styles.activityDate}>{date}</p> : null}
        </FlexCard>
    );
}
