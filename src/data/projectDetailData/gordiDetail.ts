import { DetailDataType } from "@/types/type";

export const gordiDetail: DetailDataType = {
    title: "Gordi",
    develop: "팀 프로젝트 · 프론트엔드",
    description: "아바타로 의상을 비교하고 함께 순위를 정하는 패션 서비스",
    skills: ["react", "js", "tanstack", "zustand", "tailwind", "stomp", "livekit"],
    motivation:
        "체형에 맞는 아바타로 의상을 비교하고 티어메이킹으로 순위를 정해 보관하는 서비스입니다. 함께 순위를 정할 때 사용자마다 화면과 UI가 달라도 커서가 가리키는 대상을 정확히 전달할 수 있도록 동기화 방식을 개선했습니다.",
    overview: [
        "체형별 아바타를 활용한 가상 의상 비교",
        "티어메이킹으로 의상 순위 정리·보관",
        "서로 다른 UI에서도 가리키는 대상을 공유하는 협업 커서",
    ],
    learned: [
        {
            title: "화면 좌표 대신 요소를 기준으로 협업 커서 동기화",
            content: [
                "사용자마다 티어메이킹 영역의 크기가 다르고 여러 형태의 UI를 사용해, 영역 전체를 기준으로 커서를 공유하면 **상대 화면에서 다른 대상을 가리키는 문제**가 있었습니다.",
                "현재 커서가 **어떤 요소 위에 있는지와 해당 요소 내부의 상대 위치**를 공유하도록 변경했습니다. 수신 화면에서는 해당 요소를 기준으로 커서 위치를 표현했습니다.",
                "화면 크기나 레이아웃이 크게 달라도 **같은 의상과 순위를 가리키도록** 만들어 협업 중 사용자의 의도가 전달되게 했습니다.",
            ],
        },
    ],
    images: [
        {
            title: "Gordi - 대표 화면",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/gordi/gordi_main.webp",
        },
        {
            title: "Gordi - 서비스 소개",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/gordi/gordi_1.webp",
        },
        {
            title: "Gordi - 티어메이커 시작 및 방 참여",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/gordi/gordi_2.webp",
        },
        {
            title: "Gordi - AI 의상 추천 결과",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/gordi/gordi_3.webp",
        },
        {
            title: "Gordi - 티어메이커 대기실",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/gordi/gordi_4.webp",
        },
        {
            title: "Gordi - 시스템 아키텍처",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/gordi/gordi_5.webp",
        },
    ],
    materialsPending: ["서로 다른 화면 크기에서의 커서 공유 영상", "공개 가능한 Demo·GitHub 링크", "개발 기간과 팀 구성·담당 범위"],
};
