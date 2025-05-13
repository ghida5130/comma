type Data = {
    title: string;
    skills: string[];
};

type MySkillDataType = Data[];

const mySkillData: MySkillDataType = [
    {
        title: "Language",
        skills: ["js", "ts", "python", "c"],
    },
    {
        title: "Front-End",
        skills: ["react", "next", "recoil", "tanstack", "three", "redux"],
    },
    {
        title: "Styles",
        skills: ["scss", "tailwind", "styledComponents", "framer"],
    },
    {
        title: "Back-End",
        skills: ["express", "firebase", "mongodb", "vercel", "aws"],
    },
];

export default mySkillData;
