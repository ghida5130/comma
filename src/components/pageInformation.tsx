import Link from "next/link";
import styles from "../styles/pageInformation.module.css";
import Image from "next/image";
import reactIcon from "@/public/icons/react.svg";
import nextIcon from "@/public/icons/next.png";
import githubIcon from "@/public/icons/github.svg";

import { StaticImageData } from "next/image";

export default function PageInformation({
    data,
}: {
    data: {
        title: string;
        description: string;
        link: string;
        githubLink: string;
        icons: StaticImageData[];
    };
}) {
    return (
        <div className={styles.pageInfo}>
            <Link className={styles.title} href={data.link}>
                {data.title} ›
            </Link>
            <p className={styles.description}>{data.description}</p>
            <div className={styles.iconArea}>
                {data.icons.map((src, idx) => {
                    if (idx === 1) {
                        return (
                            <>
                                <Divide />
                                <Image src={src} alt={`${data.title} icons`} height={30} />
                            </>
                        );
                    }
                    return <Image src={src} alt={`${data.title} icons`} height={30} />;
                })}
                <Divide />
                <Link href={data.githubLink}>
                    <Image className={styles.icon} src={githubIcon} alt={`${data.title} github icon`} height={30} />
                </Link>
            </div>
        </div>
    );
}

const Divide = () => {
    return <div className={styles.divideLine}></div>;
};
