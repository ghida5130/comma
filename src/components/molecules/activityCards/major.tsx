import FlexCard from "@/components/atoms/layout/flexCard";
import graduationIcon from "@/public/icons/me/graduation2.svg";
import Image from "next/image";
import styles from "@/styles/content.module.css";

export default function Major({ title }: { title: string }) {
    return (
        <FlexCard>
            <div className={styles.activityCategory}>
                <Image src={graduationIcon} alt="" width={24} height={24} className={styles.activityIcon} />
                <p className={styles.activityLabel}>학력</p>
            </div>
            <h3 className={styles.activityHeading}>대구대학교</h3>
            <p className={styles.activityDetail}>{title}</p>
            <p className={styles.activityDate}>2020.03 ~ 2024.02</p>
        </FlexCard>
    );
}
