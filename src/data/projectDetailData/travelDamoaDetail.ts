import { DetailDataType } from "@/types/type";

export const travelDamoaDetail: DetailDataType = {
    title: "여행다모아",
    develop: "4인 팀 프로젝트 · 프론트엔드 개발 부분 70% 담당",
    description: "관광지 혼잡도 조회 웹 앱",
    skills: ["html", "css", "js"],
    motivation:
        "관광지를 선택할 때 혼잡도까지 비교할 수 있는 모바일 웹 서비스입니다. 프론트엔드 2명·백엔드 2명 팀에서 프론트엔드 개발 부분의 70%를 담당하고 데이터 구조 협의와 진행 상황 공유를 주도했습니다.",
    overview: [
        "관광지 정보 검색 및 혼잡도 정보 제공",
        "지도 핀의 색상으로 관광지별 혼잡도 구분",
        "관광 데이터 활용 공모전 장려상 수상",
    ],
    learned: [
        {
            title: "데이터 구조와 진행 상황을 공유하는 협업 운영",
            content: [
                "팀원의 진행 상황과 다음 작업을 공유하기 위한 **데일리 스탠드업 미팅을 주도**했습니다.",
                "백엔드와 **변수명·데이터 구조를 합의하는 싱크업 미팅**을 짧은 주기로 진행했습니다.",
            ],
        },
        {
            title: "Django 서버 렌더링 화면의 초기 이미지 최적화",
            content: [
                "Django 템플릿으로 서버 데이터를 표시하고, 초기 SSR 화면의 로딩을 개선하기 위해 **이미지 크기와 포맷을 최적화**했습니다.",
            ],
        },
        {
            title: "Kakao Maps API, Tour API를 이용한 지도 및 관광지 정보 표현",
            content: [
                "Kakao Maps API와 Tour API의 관광지 정보를 연결했습니다.",
                "관광지 **혼잡도에 따라 핀 색상을 구분**해 지도에서 비교하도록 구성했습니다.",
            ],
        },
    ],
    images: [
        {
            title: "여행다모아 - 소개 이미지 1",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/traveldamoa/traveldamoa_1.webp",
        },
        {
            title: "여행다모아 - 소개 이미지 2",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/traveldamoa/traveldamoa_2.webp",
        },
    ],
};
