import { StaticImageData } from "next/image";

export interface DetailDataType {
    title: string;
    develop: string;
    description: string;
    skills: string[];
    motivation: string;
    overview: string[];
    learned: {
        title: string;
        content: string;
    }[];
    images: {
        title: string;
        content: string;
    }[];
}

export type MySkillDataType = {
    title: string;
    skills: string[];
}[];

export interface ProjectDataType {
    title: string;
    develop: string;
    description: string;
    link: string | null;
    github: string | null;
    skills: string[];
    introduce: string[];
    serverGithub?: string;
}

export interface SkillIconDataType {
    [key: string]: {
        title: string;
        icon: StaticImageData;
        color: string;
    };
}

export type PrizeDataType = {
    title: string;
    detail: string;
    award: string;
}[];
