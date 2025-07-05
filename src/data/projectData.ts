import { ProjectDataType } from "@/types/type";

type MyProjectDataType = Record<string, ProjectDataType>;

const myProjectData: MyProjectDataType = {
    comma: {
        title: "comma",
        develop: "(1인 개발, 반응형)",
        description: "개인 포트폴리오 웹사이트",
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
        develop: "(1인 개발, 개발 중)",
        description: "모바일 독서 기록 웹사이트",
        link: "https://meleti-sigma.vercel.app/",
        github: "https://github.com/ghida5130/meleti",
        skills: ["next", "ts", "scss", "firebase", "tanstack", "redux", "three"],
        introduce: [
            "베스트셀러 등의 도서 정보 조회 및 검색 기능",
            "개인 독서 기록 및 단어/문구 공유 커뮤니티 (구현중)",
            "시맨틱태그, JSON-LD, 메타데이터 및 OpenGraph를 통한 SEO",
            "Three.js 애니메이션 idle 상태의 CPU 및 GPU 불필요한 연산 제거",
            "메인페이지 ISR 적용으로 초기 페이지 접속시간 73% 감소 (1.5s -> 0.4s)",
        ],
    },
    milliulsan: {
        title: "MilliUlsan",
        develop: "(1인 개발, 반응형)",
        description: "울산광역시 정보 조회 웹사이트",
        link: "https://milli-ulsan.vercel.app/",
        github: "https://github.com/ghida5130/milliUlsan",
        serverGithub: "https://github.com/ghida5130/milliUlsanServer",
        skills: ["react", "ts", "styledComponents", "express", "recoil", "aws", "tanstack"],
        introduce: [
            "CSS Grid, Atomic Design를 활용한 반응형 디자인 및 UX,DX 향상",
            "사용자 입력 이벤트를 debounce 처리하여 렌더링 및 연산량 최소 80% 감소",
            "메모이제이션, 웹워커를 활용한 대용량 데이터 필터링 최적화",
            "useInView로 비가시영역 렌더링을 제한하여 대규모 데이터 렌더링 시 프레임 드랍 제거",
            "BFF 서버와 cron 캐싱으로 데이터 응답속도 평균 50% 이상 개선",
        ],
    },
    millivie: {
        title: "Millivie",
        develop: "(1인 개발)",
        description: "영화 정보 조회 웹사이트",
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
        develop: "(4인 팀 개발, 프론트엔드 개발 부분 70% 담당)",
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
