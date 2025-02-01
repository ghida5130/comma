import Link from "next/link";
import styles from "../styles/pageInformation.module.css";
import Image from "next/image";
import reactIcon from "@/public/icons/react2.png";
import nextIcon from "@/public/icons/next3.png";

export default function PageInformation({
    data,
}: {
    data: { title: string; framework: string; description: string; link: string };
}) {
    let icon = data.framework === "React" ? reactIcon : nextIcon;
    return (
        <div className={styles.pageInfo}>
            <Link className={styles.title} href={data.link}>
                {data.title} ›
            </Link>
            <p className={styles.description}>{data.description}</p>
            <Image className={styles.icon} src={icon} alt={`${data.framework} icon`} height={30} />
        </div>
    );
}
