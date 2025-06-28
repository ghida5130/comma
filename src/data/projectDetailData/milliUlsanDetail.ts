import { DetailDataType } from "@/types/type";

export const milliUlsanDetail: DetailDataType = {
    title: "MilliUlsan",
    develop: "(1인 개발, 반응형)",
    description: "울산광역시 정보 조회 홈페이지",
    skills: ["react", "ts", "styledComponents", "express", "recoil", "aws", "tanstack"],
    motivation:
        "울산에 거주하면서 여러가지 정보를 찾을때 파편화된 정보가 한곳에 모여있으면 좋겠다는 생각을 한적이 많습니다. 일기예보나 미세먼지, 영화관, 병원, 축제 정보 등등 여러가지 정보를 한곳에 모으고 달력이나 시계같은 기본적인 기능도 함께 제공해서 한번의 접속으로 많은 정보를 알 수 있도록 제작했습니다.",
    overview: [
        "울산광역시의 다양한 정보 조회",
        "CSS Grid 반응형 및 조립식 UI",
        "사용자 지역 및 검색어에 따른 병원시설 정보 제공",
        "실시간 날씨, 대기, 지역축제 등 정보 제공",
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
            title: "컴포넌트 재사용성 향상과 반응형 웹, 조립식 UI",
            content: [
                "CSS Grid와 모듈식 컴포넌트를 통해 **조립식으로 사용하는 UX 및 DX** 제공",
                "CSS Grid와 Styled-Components를 활용해 **동적 컴포넌트로 반응형 웹** 구현",
            ],
            link: [
                {
                    title: "Grid 가로폭 고정하여 반응형 웹 구현",
                    url: "https://cstelladev.tistory.com/44",
                },
            ],
        },
        {
            title: "병원 정보 페이지 대규모 데이터 처리",
            content: [
                "메모이제이션을 통한 **불필요한 필터링 연산 방지**",
                "debounce를 활용해 사용자 입력 종료 후 필터링 연산 처리 **(입력 시 과도한 연산 방지)**",
                "controlled input과 필터링 연산의 state를 분리하여 **사용자 입력 지연 제거**",
                "대용량 데이터 필터링 연산을 **웹워커**로 분리",
                "react-intersection-observer의 useInView를 적용해 보이지 않는 영역의 렌더링을 제한하여 **프레임 드랍 제거**",
            ],
            link: [
                {
                    title: "React의 Memoization",
                    url: "https://cstelladev.tistory.com/63",
                },
                {
                    title: "debounce를 통한 최적화",
                    url: "https://cstelladev.tistory.com/65",
                },
                {
                    title: "웹워커와 controlled input",
                    url: "https://cstelladev.tistory.com/78",
                },
                {
                    title: "useInView로 레이아웃 연산 감소 시키기",
                    url: "https://cstelladev.tistory.com/79",
                },
            ],
        },
        {
            title: "BFF 서버 및 공공데이터 API 활용",
            content: [
                "BFF 서버를 이용해 대기오염 데이터를 **프론트엔드에서 사용하기 편리**하도록 가공하여 제공",
                "주기적으로 업데이트되는 날씨예보 데이터 **cron**을 이용한 주기적 **캐싱 및 가공**",
                "Express.js, AWS EC2, Route53 활용",
            ],
            link: [
                { title: "대기오염 데이터 가공하기", url: "https://cstelladev.tistory.com/57" },
                {
                    title: "날씨예보 데이터 외부 API 업데이트 주기에 맞춰 캐싱하기",
                    url: "https://cstelladev.tistory.com/60",
                },
            ],
        },
        {
            title: "기타 프론트엔드 개발 학습",
            content: [
                "**Atomic Design**을 참고하여 구조화된 컴포넌트 설계 및 재사용성 증가",
                "**Recoil**을 활용해 사용자 입력 지역 정보 및 테마 관리",
                "**Framer-motion**을 활용해 UI 애니메이션 간편하게 구현",
                "공공데이터포털, OpenWeatherMap API 사용",
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
