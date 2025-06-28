import { DetailDataType } from "@/types/type";

export const travelDamoaDetail: DetailDataType = {
    title: "여행다모아",
    develop: "(4인 팀 개발)",
    description: "관광지 혼잡도 조회 웹 앱",
    skills: ["html", "css", "js"],
    motivation:
        "대학 동아리원들과 팀을 이뤄 하나의 웹페이지를 직접 완성해보고 싶었습니다. 마침 ‘관광 데이터 공모전’이라는 좋은 기회가 생겨, 지역별 유명 관광지와 혼잡도 정보를 편리하게 조회할 수 있는 모바일 웹페이지를 만들어보자는 아이디어로 프로젝트를 시작하게 되었습니다.",
    overview: [
        "관광지 정보 검색 및 혼잡도 정보 제공",
        "HTML, CSS, JavaScript 및 외부 API 활용 학습",
        "관광 데이터 활용 공모전 장려상 수상",
    ],
    learned: [
        {
            title: "프론트엔드 담당으로 팀 프로젝트 참여",
            content: [
                "팀원의 진행상황과 작업 계획을 공유하기 위해 **데일리 스탠드업 미팅 주도**",
                "HTML, CSS, JavaScript 및 외부 API 활용 능력 학습",
                "프론트엔드 개발에 대한 흥미를 느낄 수 있었던 계기",
            ],
        },
        {
            title: "Django 백엔드 팀원과 협업 개발",
            content: [
                "**Django 템플릿 문법**을 활용해 서버 데이터를 **동적으로 렌더링**",
                "**변수명 및 데이터 구조 협의**를 위해 **싱크업 미팅**을 짧은 주기로 주도하며 협업",
                "**초기 SSR 렌더링 성능 개선**을 위해 **이미지 리사이징 및 포맷 최적화** 수행",
            ],
        },
        {
            title: "Kakao Maps API, Tour API를 이용한 지도 및 관광지 정보 표현",
            content: [
                "Kakao Maps API를 통해 관광지 정보 표시용 지도 활용",
                "Tour API의 관광지 상세 정보 및 혼잡도 데이터를 활용",
                "관광지 **혼잡도에 따라 다른 색을 가지는 핀**으로 관광지를 표시하는 기능 제공",
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
