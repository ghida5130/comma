import { DetailDataType } from "@/types/type";

export const milliUlsanDetail: DetailDataType = {
    title: "MilliUlsan",
    develop: "(1인 개발, 반응형)",
    description: "필요한 지역 정보를 골라 구성하는 울산 생활 정보 대시보드",
    skills: ["react", "ts", "styledComponents", "express", "recoil", "aws", "tanstack"],
    motivation:
        "날씨·미세먼지·병원·축제 등 흩어진 울산 생활 정보를 한곳에서 확인하고, 사용자가 필요한 모듈만 골라 구성할 수 있는 대시보드입니다. 모듈이 늘어날 때의 렌더링 부하와 반복적인 UI 구현을 줄이는 구조에 집중했습니다.",
    overview: [
        "날씨·대기·병원·지역축제 정보 조회",
        "원하는 모듈을 골라 구성하는 반응형 대시보드",
        "사용자 지역·검색어에 따른 병원 시설 탐색",
    ],
    // learned: [
    //     {
    //         title: "CSS Grid : 반응형 디자인과 조립형 UI",
    //         content:
    //             "메인화면에서 사용자가 원하는 것만 볼 수 있도록 모듈식으로 UI를 구성하였습니다. CSS의 Grid를 통해 모듈구조에서 스타일을 통일시킬 수 있었고 반응형 디자인도 함께 적용할 수 있었습니다.",
    //     },
    //     {
    //         title: "Atomic Design을 참고하여 컴포넌트 재사용성, 유지보수성 향상",
    //         content:
    //             "페이지의 부분들을 Atomic Design과 유사한 구조로 분해하여 컴포넌트를 세분화하였습니다. UI를 구성하는 메인 요소인 모듈(컴포넌트)들은 가로세로 비율을 입력받아 동일한 스타일을 유지하며 재사용할 수 있도록 했으며 새로운 데이터가 추가될때 빠르게 적용이 가능합니다.",
    //     },
    //     {
    //         title: "Memoization과 debounce : 실시간 검색 및 UI 렌더링 최적화",
    //         content:
    //             "수십~수백개의 정보가 표시되는 병원탭에서 지역명으로 검색할때 사용자가 입력하는 매 글자마다 검색 로직이 실행되어 속도가 느려지는 문제가 있었습니다. debounce를 사용해 입력이 일정 시간 멈췄을때만 검색 로직이 실행되도록 하고 메모이제이션을 통해 불필요한 필터링 연산이 발생하지 않도록 했습니다.",
    //     },
    //     {
    //         title: "Recoil : 사용자 지역 정보 관리",
    //         content:
    //             "사용자가 입력한 간단한 지역정보(남구, 중구 등)는 여러 탭에서 활용될 수 있습니다. 값이 필요한 컴포넌트에서 값을 매번 불러올 필요가 없게 만들고 선택한 지역에 따라 UI를 즉각갱신하도록 하기 위해 localStorage가 아닌 Recoil을 선택했습니다.",
    //     },
    //     {
    //         title: "Styled-Components : 테마와 스타일 통합 관리",
    //         content:
    //             "테마에서 사용하는 색상에 대한 객체를 따로 관리하고 Styled-Components에서 제공하는 ThemeProvider를 통해 라이트/다크 모드를 빠르게 구현할 수 있었습니다. CSS-in-JS 형태로 동적 스타일링이 편리해 props를 통한 컴포넌트 재사용성을 높일 수 있었습니다.",
    //     },
    //     {
    //         title: "Framer-Motion : 조립형 UI의 애니메이션 구현",
    //         content:
    //             "React의 key를 이용한 diff 알고리즘을 적극 활용한 라이브러리 입니다. 리액트의 컴포넌트 비교원리를 학습할 수 있었고 모듈식의 UI를 구현하면서 필요한 UI 변화시의 자연스러운 애니메이션을 쉽고 빠르게 구현할 수 있었습니다.",
    //     },
    //     {
    //         title: "Express : node.js를 통한 간단한 서버 구현",
    //         content:
    //             "API 요청 코드와 데이터 전처리를 위한 서버를 구현했습니다. Request 받은 날짜나 지역 정보에 따라 여러가지 API를 요청하도록 했으며 외부 API의 응답코드를 처리하고 필요한 데이터만 프론트엔드 측으로 넘겨주도록 했습니다. 아마존의 EC2와 Route53을 이용해 도메인을 연결하여 서버를 작동시키고 있습니다.",
    //     },
    // ],
    learned: [
        {
            title: "공통 UI를 재사용하는 모듈 구조로 기능 확장",
            content: [
                "Atomic Design을 참고해 공통 UI와 기능 컴포넌트를 분리하고, 이를 조합하는 **모듈식 구조**를 설계했습니다.",
                "새 모듈을 추가할 때 **카드·그리드·스타일을 재사용**할 수 있게 해 반복 구현을 줄이고 기능 개발에 집중하도록 구성했습니다.",
                "사용자가 필요한 모듈만 배치할 수 있도록 CSS Grid 기반 반응형 화면을 제공했습니다.",
            ],
            link: [
                {
                    title: "Grid 가로폭 고정하여 반응형 웹 구현",
                    url: "https://cstelladev.tistory.com/44",
                },
            ],
        },
        {
            title: "렌더링 최적화 이후의 시계 초기화 누락 해결",
            content: [
                "IntersectionObserver 기반 useInView로 **화면 밖 모듈의 내부 콘텐츠 생성을 제한**했습니다. 이후 시계 모듈에 처음 진입하거나 재진입할 때 바늘이 12시 방향에서 시작하는 문제를 발견했습니다.",
                "초기화 실행 시점에는 내부 DOM이 없고, 화면 진입 후 DOM이 생성돼도 초기화가 다시 실행되지 않는 것이 원인이었습니다.",
                "시계 DOM과 초기화 로직을 하위 컴포넌트로 분리하고 **마운트 시 useLayoutEffect와 ref로 현재 시각을 적용**했습니다. 기존 렌더링 최적화를 유지하면서 초기화 누락을 해결했습니다.",
            ],
            link: [
                {
                    title: "useInView로 레이아웃 연산 감소 시키기",
                    url: "https://cstelladev.tistory.com/79",
                },
            ],
        },
        {
            title: "3시간 주기 BFF 캐싱으로 외부 API 호출 분리",
            content: [
                "갱신 주기가 정해진 날씨예보를 사용자 요청마다 외부 API에서 가져오는 비효율을 줄이기 위해 **BFF 서버에 파일 캐싱**을 적용했습니다.",
                "**cron으로 3시간마다 수집·가공한 데이터를 JSON으로 저장**하고 프론트엔드 요청에는 저장된 결과를 제공했습니다.",
                "외부 API 호출을 사용자 요청 수와 분리하고, 외부 응답을 기다리지 않고 데이터를 제공하는 구조를 마련했습니다.",
            ],
            link: [
                { title: "대기오염 데이터 가공하기", url: "https://cstelladev.tistory.com/57" },
                {
                    title: "날씨예보 데이터 외부 API 업데이트 주기에 맞춰 캐싱하기",
                    url: "https://cstelladev.tistory.com/60",
                },
            ],
        },
    ],
    images: [
        {
            title: "milliUlsan - 메인 페이지",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/milliulsan/milliulsan_1.webp",
        },
        {
            title: "milliUlsan - 메인 페이지 (다크모드)",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/milliulsan/milliulsan_2.webp",
        },
        {
            title: "milliUlsan - 병원시설 페이지",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/milliulsan/milliulsan_3.webp",
        },
        {
            title: "milliUlsan - 메인 페이지 및 컴포넌트 커스텀 화면 (모바일)",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/milliulsan/milliulsan_4.webp",
        },
    ],
};
