import { DetailDataType } from "@/types/type";

export const millivieDetail: DetailDataType = {
    title: "Millivie",
    develop: "(1인 개발)",
    description: "영화 정보 조회 홈페이지",
    skills: ["next", "js", "mongodb"],
    motivation:
        "프론트엔드 개발을 위한 React 및 Next.js를 학습하고 영화 정보를 빠르게 찾아볼 수 있는 홈페이지를 만들고 싶었습니다. ",
    overview: [
        "영화 정보 조회 및 검색 기능",
        "최근 조회한 영화, 즐겨찾기 추가 기능 제공",
        "사용자 평점 데이터 관리, 평균 평점 기능 제공",
        "깃허브, 카카오 로그인 및 자체 회원가입 기능 제공",
    ],
    learned: [
        {
            title: "웹 개발 기초 학습",
            content: [
                "Next.js의 파일 시스템 컨벤션, Route Handler, 기본제공 고성능 컴포넌트 등 학습",
                "Web Storage API의 **Session Storage**를 통해 **최근 조회한 영화 기능** 구현",
                "oAuth, Credential Provider를 활용한 로그인 기능과 사용자 데이터 관리",
                "TMDB API를 활용을 통해 외부 API 활용 학습",
                "IntersectionObserver와 DOM 요소 참조를 통해 **무한스크롤 기능 구현**",
            ],
            link: [
                {
                    title: "IntersectionObserver로 무한스크롤 구현하기",
                    url: "https://cstelladev.tistory.com/20",
                },
            ],
        },
        {
            title: "Core Web Vitals, 웹 접근성 개선 경험",
            content: [
                "이미지 최적화와 로컬 폰트 활용을 통해 **FCP, LCP 개선**",
                "Layout Shift 요소를 정리하여 **CLS 개선**",
                "문서 구조, aria-label 속성, alt 속성 조정으로 **Accessibility와 SEO 개선**",
                "Lighthouse 평균 점수 **21점 향상**",
            ],
            link: [{ title: "코어 웹 바이탈과 웹 접근성 개선하기", url: "https://cstelladev.tistory.com/75" }],
        },
        {
            title: "MongoDB를 활용한 평점 데이터 관리 및 평균 계산",
            content: [
                "로그인한 사용자의 리뷰 데이터를 영화별로 저장",
                "리뷰가 저장될 때 **평점을 재계산하여 반영**하도록 구현",
                "**리뷰 작성 로직 완료 후 평점 재계산**을 수행하여 **작성 완료 대기시간 최소화**",
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
