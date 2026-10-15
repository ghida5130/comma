import { DetailDataType } from "@/types/type";

export const millivieDetail: DetailDataType = {
    title: "Millivie",
    develop: "(1인 개발)",
    description: "영화 정보 조회 홈페이지",
    skills: ["next", "js", "mongodb"],
    motivation:
        "영화 정보를 탐색하고 최근 본 영화와 리뷰를 이어서 확인하는 서비스입니다. 이미지·레이아웃·문서 구조를 조정하며 성능과 접근성을 개선하고, 영화별 리뷰와 평균 평점의 데이터 흐름을 구현했습니다.",
    overview: [
        "영화 정보 조회 및 검색 기능",
        "최근 조회한 영화, 즐겨찾기 추가 기능 제공",
        "사용자 평점 데이터 관리, 평균 평점 기능 제공",
        "깃허브, 카카오 로그인 및 자체 회원가입 기능 제공",
    ],
    learned: [
        {
            title: "최근 조회 기록과 무한스크롤로 영화 탐색 지원",
            content: [
                "**Session Storage**에 최근 조회한 영화를 기록해 이전 탐색을 이어갈 수 있도록 했습니다.",
                "IntersectionObserver와 DOM 요소 참조로 **무한스크롤**을 구현했습니다.",
            ],
            link: [
                {
                    title: "IntersectionObserver로 무한스크롤 구현하기",
                    url: "https://cstelladev.tistory.com/20",
                },
            ],
        },
        {
            title: "이미지·레이아웃과 문서 구조를 통한 성능·접근성 개선",
            content: [
                "이미지 최적화와 로컬 폰트 적용으로 **FCP·LCP를 개선**하고 레이아웃 이동을 일으키는 요소를 정리했습니다.",
                "문서 구조와 **aria-label·alt 속성**을 조정해 화면의 의미와 탐색 대상을 전달하도록 개선했습니다.",
            ],
            link: [{ title: "코어 웹 바이탈과 웹 접근성 개선하기", url: "https://cstelladev.tistory.com/75" }],
        },
        {
            title: "MongoDB를 활용한 평점 데이터 관리 및 평균 계산",
            content: [
                "로그인한 사용자의 리뷰를 영화별로 저장하고 **평균 평점을 재계산해 반영**했습니다.",
                "리뷰 저장을 마친 뒤 평점을 계산하도록 작업 순서를 나눴습니다.",
            ],
            link: [
                {
                    title: "리뷰 데이터가 추가될때 평점 평균 계산하기",
                    url: "https://cstelladev.tistory.com/41",
                },
            ],
        },
    ],
    images: [
        {
            title: "millivie - 메인페이지",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/millivie/millivie_1.webp",
        },
        {
            title: "millivie - 영화 상세 페이지",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/millivie/millivie_2.webp",
        },
        {
            title: "millivie - 로그인 페이지",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/millivie/millivie_3.webp",
        },
        {
            title: "millivie - 검색 결과 페이지",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/millivie/millivie_4.webp",
        },
    ],
};
