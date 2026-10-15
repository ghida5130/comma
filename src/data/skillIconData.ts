import { StaticImageData } from "next/image";

// svg
import jsIcon from "@/public/icons/skills/js.svg";
import tsIcon from "@/public/icons/skills/ts.svg";
import javaIcon from "@/public/icons/skills/java.svg";
import pythonIcon from "@/public/icons/skills/python.svg";
import cIcon from "@/public/icons/skills/c.svg";
import reactIcon from "@/public/icons/skills/react.svg";
import nextIcon from "@/public/icons/skills/next.svg";
import vueIcon from "@/public/icons/skills/vue.svg";
import zustandIcon from "@/public/icons/skills/zustand.svg";
import piniaIcon from "@/public/icons/skills/pinia.svg";
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
import mswIcon from "@/public/icons/skills/msw.svg";
import jiraIcon from "@/public/icons/skills/Jira.svg";
import gitIcon from "@/public/icons/skills/git.svg";
import sparkIcon from "@/public/icons/skills/spark.svg";
import hdfsIcon from "@/public/icons/skills/hdfs.svg";
import googleAppsScriptIcon from "@/public/icons/skills/gapps.svg";
import googleSheetsIcon from "@/public/icons/skills/gsheets.svg";
import geminiIcon from "@/public/icons/skills/gemini.svg";
import livekitIcon from "@/public/icons/skills/livekit.svg";
import pwaIcon from "@/public/icons/skills/pwa.svg";
import tailscaleIcon from "@/public/icons/skills/tailscale.svg";
import websocketIcon from "@/public/icons/skills/websocket.svg";

import { SkillIconDataType } from "@/types/type";

const skillIconData: SkillIconDataType = {
    js: { title: "JavaScript", icon: jsIcon, color: "#ffd600" },
    ts: { title: "TypeScript", icon: tsIcon, color: "#1976d2" },
    java: { title: "Java", icon: javaIcon, color: "#0074BD" },
    python: { title: "Python", icon: pythonIcon, color: "#0277BD" },
    c: { title: "C", icon: cIcon, color: "#3940a4" },
    react: { title: "React", icon: reactIcon, color: "#61dafb" },
    next: { title: "Next.js", icon: nextIcon, color: "#969696" },
    vue: { title: "Vue.js", icon: vueIcon, color: "#41B883" },
    zustand: { title: "Zustand", icon: zustandIcon, color: "#8B5E3C" },
    pinia: { title: "Pinia", icon: piniaIcon, color: "#FFC63A" },
    recoil: { title: "Recoil", icon: recoilIcon, color: "#007af4" },
    tanstack: { title: "TanStack Query", icon: reactQueryIcon, color: "#FF4154" },
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
    msw: { title: "MSW", icon: mswIcon, color: "#ED7344" },
    jira: { title: "Jira", icon: jiraIcon, color: "#2684FF" },
    git: { title: "Git", icon: gitIcon, color: "#F05133" },
    spark: { title: "Spark", icon: sparkIcon, color: "#E25A1C" },
    hdfs: { title: "HDFS", icon: hdfsIcon, color: "#EDD749" },
    gas: { title: "Google Apps Script", icon: googleAppsScriptIcon, color: "#4285F4" },
    sheets: { title: "Google Sheets", icon: googleSheetsIcon, color: "#0F9D58" },
    gemini: { title: "Gemini API", icon: geminiIcon, color: "#4893FC" },
    livekit: { title: "LiveKit", icon: livekitIcon, color: "#1FD5F9" },
    pwa: { title: "PWA", icon: pwaIcon, color: "#5A0FC8" },
    tailscale: { title: "Tailscale", icon: tailscaleIcon, color: "#F0F0F0" },
    stomp: { title: "WebSocket · STOMP", icon: websocketIcon, color: "#3C790A" },
};

export default skillIconData;
