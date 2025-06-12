import { ProjectDataType } from "@/types/type";

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
            "TailwindCSS를 통한 스타일링",
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
            "베스트셀러 등의 도서 정보 조회 및 검색 기능",
            "개인 독서 기록 및 단어/문구 공유 커뮤니티 (구현중)",
            "Three.js로 3D 도서 구현 및 성능 최적화",
            "React-Query, Firebase를 통한 사용자 관리 및 도서 API 호출",
            "시맨틱태그, JSON-LD, 메타데이터 및 OpenGraph를 통한 SEO 적용",
        ],
    },
    milliulsan: {
        title: "MilliUlsan",
        develop: "(1인 개발, 반응형)",
        description: "울산광역시 정보 조회 홈페이지",
        link: "https://milli-ulsan.vercel.app/",
        github: "https://github.com/ghida5130/milliUlsan",
        serverGithub: "https://github.com/ghida5130/milliUlsanServer",
        skills: ["react", "ts", "styledComponents", "express", "recoil", "aws", "tanstack"],
        introduce: [
            "CSS Grid를 통한 반응형 디자인 및 UX,DX 향상",
            "Atomic Design 기반 컴포넌트 설계",
            "메모이제이션, debounce를 통한 실시간 검색기능 최적화",
            "BFF, cron을 통한 데이터 가공, 공공데이터 API 활용 및 캐싱",
            "사용자 지역 정보 Recoil로 관리",
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
            "MongoDB를 활용한 평점 데이터 관리 및 평균 계산",
            "Core Web Vitals 및 웹 접근성 개선",
            "Session Storage를 통한 최근 조회한 영화 기능 구현",
            "auth.js로 credential provider 및 oAuth 로그인 구현",
            "jwt, API 통신 등 프론트엔드 개발 핵심 기초 학습",
            "TMDB 영화 데이터 API 활용",
        ],
    },
    traveldamoa: {
        title: "여행다모아",
        develop: "(4인 팀 개발, 프론트엔드 담당)",
        description: "관광지 혼잡도 조회 웹 앱",
        link: null,
        github: "https://github.com/TravelDamoa/damoa_main",
        skills: ["html", "css", "js"],
        introduce: [
            "프론트엔드 2인, 백엔드 2인 구성으로 학습 및 개발 협업",
            "Django 템플릿 문법 활용",
            "Django SSR 초기 페이지 렌더링 속도 향상을 위한 이미지 사이즈 조정, 포맷 최적화",
            "데이터 구조 협업과 팀원별 진행도 공유를 위한 스탠드업,싱크업 미팅 주도",
            "관광 데이터 활용 공모전 장려상 수상",
        ],
    },
};

export { myProjectData };
