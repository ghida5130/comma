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
        "Redux를 활용한 Modal 관리",
    ],
    // learned: [
    //     {
    //         title: "TailwindCSS : Utility-First CSS",
    //         content:
    //             "Tailwind는 처음엔 적응에 시간이 많이 필요할 거라 생각했지만, CSS에 익숙한 사람이라면 금방 익숙해질 수 있고, 익숙해진 뒤에는 개발 효율이 크게 올라간다는 걸 알 수 있었습니다. 특히 클래스명으로 빠르게 스타일을 적용하고 확인할 수 있으며, 간단한 반응형 디자인과 자유로운 커스터마이징도 큰 강점으로 느껴졌습니다.",
    //     },
    //     {
    //         title: "Redux : 모달 창 상태 관리",
    //         content:
    //             "Redux로 모달창 열림 상태와 내용물을 관리했습니다. 초반 설정은 다른 상태 관리 라이브러리보다 복잡했지만 구현을 완료하고 커스텀 훅으로 가져다 쓰다 보니 전역 상태의 중앙집중 관리가 편리한것을 알 수 있었습니다.",
    //     },
    // ],
    learned: [
        {
            title: "TailwindCSS",
            content: [
                "유지보수성, 빠른 개발을 위해 Tailwind CSS 도입",
                "반복 사용되는 컴포넌트의 빠른 작성과 재사용성 증가",
            ],
        },
        {
            title: "Redux를 활용한 프로젝트 및 이미지 모달 관리",
            content: [
                "모달창 UI, 데이터, 상태 분리 및 **props drilling 최소화**",
                "Redux 관련 커스텀 훅을 통해 **상태 관리 코드 간소화**",
            ],
        },
    ],
    images: [
        {
            title: "comma 메인 페이지",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/comma/comma_1.webp",
        },
        {
            title: "comma 메인 페이지 - 프로젝트",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/comma/comma_2.webp",
        },
        {
            title: "comma 프로젝트 모달",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/comma/comma_3.webp",
        },
        {
            title: "comma 메인 페이지 (모바일)",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/comma/comma_4.webp",
        },
    ],
};
