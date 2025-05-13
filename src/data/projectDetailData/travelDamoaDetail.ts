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
        "HTML, CSS, JavaScript를 활용한 첫 프론트엔드 개발 경험",
        "외부 API 학습 및 적용 경험",
        "관광 데이터 활용 공모전 장려상 수상",
    ],
    learned: [
        {
            title: "HTML, CSS, JS : 최초 프론트엔드 개발 학습",
            content:
                "모바일앱 개발 공모전에 참여하며 프론트엔드를 담당해 처음으로 관련개발을 학습하게 되었습니다. HTML의 시맨틱 태그나 CSS의 flex 같은 프론트엔드 개발의 기초를 학습했으며 JavaScript와 jquery를 이용한 DOM 접근 및 조작법에대해 학습할 수 있었습니다.",
        },
        {
            title: "Kakao API, Tour API를 이용한 지도 및 관광지 정보 표현",
            content:
                "Kakao의 지도 API와 한국관광공사 Tour API의 관광지 데이터를 활용했습니다. Tour API에서 제공받은 관광지들의 위치와 혼잡도 데이터를 활용해 지도에 핀을 표시하고 혼잡도에 따라 색상을 다르게 표시했습니다.",
        },
        {
            title: "이미지 사이즈 및 포맷 최적화",
            content:
                "용량과 사이즈가 큰 이미지를 다수 활용하면서 페이지 로딩속도가 늦어지는 문제가 있었습니다. 이미지 크기를 알맞게 조절하고 압축 효율이 좋거나 벡터 기반의 이미지파일로 변경하면서 성능을 개선할 수 있었습니다.",
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
