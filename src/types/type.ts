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
