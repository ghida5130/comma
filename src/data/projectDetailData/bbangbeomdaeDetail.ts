import { DetailDataType } from "@/types/type";

export const bbangbeomdaeDetail: DetailDataType = {
    title: "빵범대",
    develop: "5인 팀 프로젝트 · 프론트엔드 2명 중 1명",
    description: "영수증 리뷰와 수집품 미션을 결합한 대전 빵집 투어 서비스",
    skills: ["react", "ts", "tanstack", "redux", "tailwind", "msw", "kakaoMaps"],
    motivation:
        "대전의 빵집을 탐색하고 영수증으로 인증한 리뷰를 확인하는 서비스입니다. 방문·리뷰 미션을 수집품 뽑기와 연결해 탐방을 이어가도록 구성했습니다. 백엔드 3명·프론트엔드 2명 팀에서 프론트엔드를 맡아 상세 페이지 성능과 API 개발 환경을 개선했습니다.",
    overview: [
        "대전 빵집 정보 검색과 지도 조회",
        "영수증 인증을 거친 리뷰 작성",
        "꿈돌이·꿈씨패밀리 수집품과 방문·리뷰 미션",
    ],
    learned: [
        {
            title: "느린 API 하나가 상세 페이지 전체를 지연시키는 문제 개선",
            content: [
                "상세 페이지가 **세 API의 데이터가 모두 준비된 뒤 렌더링**돼, 하나의 응답이 늦으면 모든 콘텐츠 표시가 지연됐습니다.",
                "병렬 요청의 응답에 따라 **컴포넌트별 스켈레톤과 독립 렌더링**을 적용했습니다. 대표 이미지는 우선 표시하고, 리뷰·추천 이미지에는 lazy loading을 적용했습니다.",
                "사용자가 먼저 준비된 콘텐츠부터 확인할 수 있게 하면서 불필요한 초기 이미지 전송을 줄였습니다.",
            ],
        },
        {
            title: "폰트 전송량을 줄이고 동일 상세 페이지에서 성능 비교",
            content: [
                "폰트가 전체 네트워크 전송량의 **약 55.7%**를 차지하는 것을 확인하고 유니코드 범위별 서브셋팅을 적용했습니다.",
                "폰트 전송량은 **약 68% 감소**했고 전체 전송량 대비 비중은 **28.4%**로 낮아졌습니다. 렌더링·이미지 개선과 함께 전체 전송량은 **약 37% 감소**했습니다.",
                "동일 상세 페이지의 Lighthouse 측정에서 **LCP 2.8초 → 2.1초**, Speed Index 1.3초 → 1.1초, 성능 점수 **83점 → 89점**을 확인했습니다.",
            ],
        },
        {
            title: "MSW로 백엔드 개발과 오류 상황 점검을 분리",
            content: [
                "Mock Service Worker로 API 응답을 제공해 **백엔드 개발 속도와 독립적으로 프론트엔드 화면·요청 로직을 구현**했습니다.",
                "정상 응답뿐 아니라 **토큰 인증 오류·서버 오류·요청 오류**를 모의해 오류별 화면과 분기 처리를 점검할 수 있도록 구성했습니다.",
                "개발 중 MSW를 켜고 끌 수 있게 해 문제가 **프론트엔드 요청 로직인지 서버 응답인지 빠르게 구분**하도록 했습니다.",
            ],
        },
    ],
    images: [
        {
            title: "빵범대 - 대표 화면",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/bbd/bbd_main.webp",
        },
        {
            title: "빵범대 - 빵집 상세 및 AI 리뷰 요약",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/bbd/bbd_1.webp",
        },
        {
            title: "빵범대 - 수집품 도감",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/bbd/bbd_2.webp",
        },
        {
            title: "빵범대 - 사용자 대시보드",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/bbd/bbd_3.webp",
        },
    ],
    materialsPending: ["영수증 인증 화면", "공개 가능한 Demo·GitHub 링크", "개발 기간과 담당 화면 범위", "Lighthouse·네트워크 전송량 비교 자료"],
};
