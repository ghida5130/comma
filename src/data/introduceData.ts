import { IntroduceDataType } from "@/types/type";

const introduceData: IntroduceDataType[] = [
    {
        title: "팀워크 및 리더십",
        detail: "대학 소프트웨어 동아리 참여 및 운영",
        content: [
            "대학 소프트웨어 동아리 운영",
            "다양한 프로젝트의 팀장 역할 수행 및 수상 경험 다수",
            "동아리원 대상으로 C언어 및 개발 세미나를 정기적 진행하여 개발 언어 및 프로젝트 이해도 향상에 기여",
            "Trello, Discord, Google Calendar 등을 통한 동아리 내 소통 체계 활용",
        ],
    },
    {
        title: "웹 개발 기술 학습",
        detail: "팀, 개인 프로젝트를 통한 기술 학습",
        content: [
            "팀 프로젝트를 통해 JavaScript, API 활용, 협업 등의 기초 학습",
            "개인 프로젝트 : 프론트엔드 및 웹 개발 기술 전반 학습",
        ],
    },
    {
        title: "웹 바이탈, 렌더링, API 활용 최적화",
        detail: "프로젝트 최적화 경험",
        content: [
            "Django SSR 페이지 렌더링 속도 향상을 위한 **이미지 리사이즈 및 포맷 최적화**",
            "Core Web Vitals 개선을 통해 **lighthouse 평균 점수 21점 향상**",
            "**BFF 서버, cron**을 통한 데이터 캐싱 및 가공",
            "**Memoization, debounce**를 통한 실시간 필터링 기능 및 렌더링 최적화",
            "canvas frameloop와 invalidate를 통한 Three.js 3D 객체 표현 최적화로 **CPU 및 GPU 부하 평균 47% 감소**",
        ],
    },
];

export default introduceData;
