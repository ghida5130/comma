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
        "React, Next.js와 JavaScript의 학습 및 적용",
        "auth.js의 oAuth와 credential provider를 활용한 회원 관리",
    ],
    learned: [
        {
            title: "React, Next.js와 JavaScript ",
            content:
                "이전에는 HTML, CSS, JavaScript만을 활용한 개발경험밖에 없고 자바스크립트의 학습도 부족했었습니다. 1인 개발로 간단한 DB를 관리하고 서버 기능을 활용하기 위해서는 사용자가 많은 풀스택 프레임워크인 Next.js가 유리하다고 생각했습니다. 이에 기반이 되는 React를 함께 학습하며 홈페이지를 제작했습니다.",
        },
        {
            title: "MongoDB 회원 정보 및 즐겨찾기 관리",
            content:
                "auth.js와 엮어 oAuth로 로그인한 유저 데이터를 관리하고 Credential Provider로 간단한 회원가입 기능을 구현했습니다. NoSQL 데이터베이스인 MongoDB의 JSON과 유사한 구조로 빠르게 사용법을 익히고 DB기능을 만들 수 있었습니다.",
        },
        {
            title: "Session Storage를 통한 최근 조회한 영화 기능",
            content:
                "클라이언트측에 저장되는 저장소에 대해 학습하고 세션간 유지되는 Session Storage를 이용해 최근 조회한 영화기능을 구현했습니다.",
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
