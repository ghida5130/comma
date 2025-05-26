import { DetailDataType } from "@/types/type";

export const commaDetail: DetailDataType = {
    title: "comma",
    develop: "(1인 개발, 반응형, 제작중)",
    description: "개인 포트폴리오 사이트",
    skills: ["next", "ts", "tailwind", "redux"],
    motivation:
        "현재 보고 계신 이 포트폴리오 사이트는 그동안 진행했던 프로젝트들을 정리하고 간단한 자기 소개를 담기위해 제작했습니다. 기존 프로젝트에서 배운 기술들을 복습하고 학습하지 못했던 기술들을 새롭게 익혀보기 위한 목적도 함께 담고 있습니다.",
    overview: [
        "진행한 프로젝트와 간단 소개가 정리된 포트폴리오 사이트",
        "TailwindCSS를 통한 스타일링",
        "Redux를 활용한 Modal창 관리",
    ],
    learned: [
        {
            title: "TailwindCSS : Utility-First CSS",
            content: "개발 중",
        },
        {
            title: "Redux : 모달 창 상태 관리",
            content:
                "Redux로 모달창 열림 상태와 내용물을 관리했습니다. 초반 설정은 다른 상태 관리 라이브러리보다 복잡했지만 구현을 완료하고 커스텀 훅으로 가져다 쓰다 보니 전역 상태의 중앙집중 관리가 편리한것을 알 수 있었습니다.",
        },
    ],
    images: [
        {
            title: "comma 소개 페이지",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/comma/comma_1.webp",
        },
        {
            title: "comma 프로젝트 페이지",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/comma/comma_2.webp",
        },
        {
            title: "comma 프로젝트 페이지 (모바일)",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/comma/comma_3.webp",
        },
    ],
};
