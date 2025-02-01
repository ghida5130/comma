import Link from "next/link";
import styles from "../styles/pageInformation.module.css";
import Image from "next/image";
import reactIcon from "@/public/icons/react.png";
import nextIcon from "@/public/icons/next.png";
import githubIcon from "@/public/icons/github.png";

export default function PageInformation({
    data,
}: {
    data: { title: string; framework: string; description: string; link: string; githubLink: string };
}) {
    let icon = data.framework === "React" ? reactIcon : nextIcon;
    return (
        <div className={styles.pageInfo}>
            <Link className={styles.title} href={data.link}>
                {data.title} ›
            </Link>
            <p className={styles.description}>{data.description}</p>
            <div className={styles.iconArea}>
                <Image className={styles.icon} src={icon} alt={`${data.title} ${data.framework} icon`} height={30} />
                <Link href={data.githubLink}>
                    <Image className={styles.icon} src={githubIcon} alt={`${data.title} github icon`} height={30} />
                </Link>
            </div>
        </div>
    );
}
