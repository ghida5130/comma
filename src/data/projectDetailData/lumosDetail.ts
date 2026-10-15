import { DetailDataType } from "@/types/type";

export const lumosDetail: DetailDataType = {
    title: "Lumos",
    develop: "SSAFY 관통 프로젝트 · 프론트엔드",
    description: "야간관광 특화도시의 여행지를 찾고 AI 여행 코스를 추천받는 서비스",
    skills: ["vue", "pinia", "tanstack", "msw", "googleMaps"],
    motivation:
        "문화체육관광부가 지정한 야간관광 특화도시의 여행지 정보를 제공하고 개인 맞춤형 야간 여행 코스를 AI로 추천하는 서비스입니다. Vue.js 환경에서 화면을 개발하고 API 모의 응답을 활용해 백엔드 개발 전에도 작업을 진행했습니다.",
    overview: [
        "야간관광 특화도시의 상세 여행지 정보 조회",
        "Google Maps API 기반 여행지 표시",
        "개인 맞춤형 AI 야간 여행 코스 추천",
    ],
    learned: [
        {
            title: "백엔드 개발 전 MSW로 프론트엔드 API 코드 작성",
            content: [
                "기존 React 프로젝트와 달리 **Vue.js·Pinia 환경에서 프론트엔드를 개발**했습니다.",
                "간이 MSW 응답을 적용해 실제 서버 응답이 준비되기 전에도 데이터를 사용하는 화면과 요청 흐름을 작성했습니다.",
                "이를 통해 **백엔드 개발 완료 전 프론트엔드 API 코드 작성을 마쳤습니다.**",
            ],
        },
    ],
    images: [
        {
            title: "Lumos - 대표 화면",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/lumos/lumos_main.webp",
        },
        {
            title: "Lumos - 여행지 조회 화면",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/lumos/lumos_1.webp",
        },
        {
            title: "Lumos - AI 여행 코스 추천 화면",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/lumos/lumos_2.webp",
        },
    ],
    materialsPending: ["공개 가능한 Demo·GitHub 링크", "개발 기간과 팀 구성·담당 범위"],
};
