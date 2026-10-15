import FlexCard from "@/components/atoms/layout/flexCard";
import qualificationIcon from "@/public/icons/me/qualification.svg";
import Image from "next/image";
import styles from "@/styles/content.module.css";

interface MajorDataProps {
    date?: string;
    title: string;
}

export default function Qualification({ date, title }: MajorDataProps) {
    return (
        <FlexCard>
            <div className={styles.activityCategory}>
                <Image src={qualificationIcon} alt="" width={24} height={24} className={styles.activityIcon} />
                <p className={styles.activityLabel}>자격</p>
            </div>
            <h3 className={styles.activityHeading}>{title}</h3>
            {date ? <p className={styles.activityDate}>{date}</p> : null}
        </FlexCard>
    );
}
