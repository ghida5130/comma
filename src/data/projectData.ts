export interface ProjectDataType {
    title: string;
    develop: string;
    description: string;
    link: string | null;
    github: string | null;
    skills: string[];
    introduce: string[];
}

type MyProjectDataType = Record<string, ProjectDataType>;

const myProjectData: MyProjectDataType = {
    comma: {
        title: "comma",
        develop: "(1인 개발, 반응형)",
        description: "개인 포트폴리오 사이트",
        link: "https://comma-bice.vercel.app/",
        github: "https://github.com/ghida5130/comma",
        skills: ["next", "ts", "tailwind", "redux"],

        introduce: [
            "간단소개, 프로젝트를 담은 포트폴리오 사이트",
            "TailwindCSS를 통한 Utility-First CSS",
            "Redux를 활용한 Modal 관리",
        ],
    },
    meleti: {
        title: "Meλeti",
        develop: "(1인 개발)",
        description: "모바일 독서 기록 사이트",
        link: "https://meleti-sigma.vercel.app/",
        github: "https://github.com/ghida5130/meleti",
        skills: ["next", "ts", "scss", "firebase", "tanstack", "three"],
        introduce: [
            "도서 상세페이지 SSR로 SEO 개선",
            "Three.js로 도서 3D 구현",
            "Firebase를 통한 유저 DB 및 로그인 정보 관리",
            "Tanstack-Query의 캐싱 전략을 통한 데이터 요청 최적화",
            "Aladin 도서 정보 및 검색 API 활용",
        ],
    },
    milliulsan: {
        title: "MilliUlsan",
        develop: "(1인 개발, 반응형)",
        description: "울산광역시 정보 조회 홈페이지",
        link: "https://milli-ulsan.vercel.app/",
        github: "https://github.com/ghida5130/milliUlsan",
        skills: ["react", "ts", "styledComponents", "express", "recoil", "aws", "tanstack"],
        introduce: [
            "CSS Grid를 통한 반응형 디자인 및 컴포넌트 조립/재배치 최적화",
            "Atomic Design을 참고하여 컴포넌트 재사용성, 유지보수성 향상",
            "React 메모이제이션을 통한 검색 실시간 필터링 및 렌더링 최적화",
            "사용자 지역 정보 Recoil로 관리",
            "공공데이터포털, OpenWeatherMap의 API 활용",
        ],
    },
    millivie: {
        title: "Millivie",
        develop: "(1인 개발)",
        description: "영화 정보 조회 홈페이지",
        link: "https://millivie.vercel.app/",
        github: "https://github.com/ghida5130/millivie",
        skills: ["next", "js", "mongodb"],
        introduce: [
            "MongoDB를 통한 유저 DB 및 로그인 정보 관리",
            "Session Storage를 통한 최근 조회한 영화 기능 구현",
            "auth.js로 credential provider 및 oAuth 로그인 구현",
            "jwt, API 통신 등 프론트엔드 개발 핵심 기초 학습",
            "TMDB 영화 데이터 API 활용",
        ],
    },
    traveldamoa: {
        title: "여행다모아",
        develop: "(4인 팀 개발)",
        description: "관광지 혼잡도 조회 웹 앱",
        link: null,
        github: "https://github.com/TravelDamoa/damoa_main",
        skills: ["html", "css", "js"],
        introduce: [
            "HTML, CSS, JS로 개발",
            "이미지 포맷, 크기 조정을 통한 렌더링 속도 향상",
            "관광 데이터 활용 공모전 장려상 수상",
            "프론트엔드를 처음으로 접한 개발",
            "Tour API, Kakao API 활용",
        ],
    },
};

export { myProjectData };
