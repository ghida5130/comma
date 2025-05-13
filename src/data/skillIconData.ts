import { StaticImageData } from "next/image";

// svg
import jsIcon from "@/public/icons/skills/js.svg";
import tsIcon from "@/public/icons/skills/ts.svg";
import pythonIcon from "@/public/icons/skills/python.svg";
import cIcon from "@/public/icons/skills/c.svg";
import reactIcon from "@/public/icons/skills/react.svg";
import nextIcon from "@/public/icons/skills/next.svg";
import recoilIcon from "@/public/icons/skills/recoil.svg";
import reactQueryIcon from "@/public/icons/skills/react_query.svg";
import threeJsIcon from "@/public/icons/skills/three.svg";
import scssIcon from "@/public/icons/skills/scss.svg";
import tailwindIcon from "@/public/icons/skills/tailwind.svg";
import styledComponentsIcon from "@/public/icons/skills/styled_components.svg";
import framerMotionIcon from "@/public/icons/skills/framer.svg";
import expressIcon from "@/public/icons/skills/express.svg";
import firebaseIcon from "@/public/icons/skills/firebase.svg";
import mongoIcon from "@/public/icons/skills/mongodb.svg";
import vercelIcon from "@/public/icons/skills/vercel.svg";
import awsIcon from "@/public/icons/skills/ec2.svg";
import htmlIcon from "@/public/icons/skills/html.svg";
import cssIcon from "@/public/icons/skills/css.svg";
import reduxIcon from "@/public/icons/skills/redux.svg";

export interface SkillItemType {
    title: string;
    icon: StaticImageData;
    color: string;
}

export type SkillIconDataType = Record<string, SkillItemType>;

const skillIconData: SkillIconDataType = {
    js: { title: "JavaScript", icon: jsIcon, color: "#ffd600" },
    ts: { title: "TypeScript", icon: tsIcon, color: "#1976d2" },
    python: { title: "Python", icon: pythonIcon, color: "#0277BD" },
    c: { title: "C", icon: cIcon, color: "#3940a4" },
    react: { title: "React", icon: reactIcon, color: "#61dafb" },
    next: { title: "Next.js", icon: nextIcon, color: "#969696" },
    recoil: { title: "Recoil", icon: recoilIcon, color: "#007af4" },
    tanstack: { title: "Tanstack-Query", icon: reactQueryIcon, color: "#FF4154" },
    three: { title: "Three.js", icon: threeJsIcon, color: "#585858" },
    scss: { title: "SCSS", icon: scssIcon, color: "#cd6799" },
    tailwind: { title: "TailwindCSS", icon: tailwindIcon, color: "#44a8b3" },
    styledComponents: { title: "Styled-Components", icon: styledComponentsIcon, color: "#ff6196" },
    framer: { title: "Framer-motion", icon: framerMotionIcon, color: "#59529d" },
    express: { title: "Express.js", icon: expressIcon, color: "#585858" },
    firebase: { title: "Firebase", icon: firebaseIcon, color: "#FDE068" },
    mongodb: { title: "MongoDB", icon: mongoIcon, color: "#599636" },
    vercel: { title: "Vercel", icon: vercelIcon, color: "#585858" },
    aws: { title: "AWS", icon: awsIcon, color: "#F58536" },
    html: { title: "HTML", icon: htmlIcon, color: "#e44d26" },
    css: { title: "CSS", icon: cssIcon, color: "#2196F3" },
    redux: { title: "Redux", icon: reduxIcon, color: "#764ABC" },
};

export default skillIconData;
