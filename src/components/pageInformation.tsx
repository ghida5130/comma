import Link from "next/link";
import styles from "../styles/pageInformation.module.scss";
import Image from "next/image";
import githubIcon from "@/public/icons/github.svg";

import { StaticImageData } from "next/image";
import { Fragment } from "react";

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
                {data.icons.map((src, idx) => (
                    <Fragment key={idx}>
                        {idx === 1 && <Divide />}
                        <Image src={src} alt={`${data.title} icons`} height={25} />
                    </Fragment>
                ))}
                <Divide />
                <a href={data.githubLink}>
                    <Image className={styles.icon} src={githubIcon} alt={`${data.title} github icon`} height={25} />
                </a>
            </div>
        </div>
    );
}

const Divide = () => {
    return <div className={styles.divideLine}></div>;
};
