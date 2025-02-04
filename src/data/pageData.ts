import reactIcon from "@/public/icons/react.png";
import nextIcon from "@/public/icons/next.png";
import pcIcon from "@/public/icons/pc.svg";
import mobileIcon from "@/public/icons/mobile.svg";

const pageData = [
    {
        title: "Millivie",
        description: "영화 정보 조회 홈페이지",
        link: "https://millivie.vercel.app/",
        githubLink: "https://github.com/ghida5130/millivie",
        icons: [nextIcon, pcIcon],
    },
    {
        title: "MilliUlsan",
        description: "울산광역시 정보 조회 홈페이지",
        link: "https://milli-ulsan.vercel.app/",
        githubLink: "https://github.com/ghida5130/milliUlsan",
        icons: [reactIcon, pcIcon, mobileIcon],
    },
    {
        title: "Meλeti",
        description: "독서기록 모바일 서재",
        link: "https://meleti-sigma.vercel.app/",
        githubLink: "https://github.com/ghida5130/meleti",
        icons: [nextIcon, mobileIcon],
    },
];

export { pageData };
