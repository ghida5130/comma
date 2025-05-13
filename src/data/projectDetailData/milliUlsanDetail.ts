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
        "React와 TypeScript를 이용하여 개발",
        "Atomic Design을 참고하여 컴포넌트 재사용성 향상, CSS Grid를 통한 반응형 및 모듈식 UI",
        "Recoil을 통한 사용자 입력정보 및 테마 관리, debounce, 메모이제이션 최적화",
        "테마기능 및 UI 애니메이션 구현",
        "Express와 EC2를 통한 서버 개발",
    ],
    learned: [
        {
            title: "CSS Grid : 반응형 디자인과 조립형 UI",
            content:
                "메인화면에서 사용자가 원하는 것만 볼 수 있도록 모듈식으로 UI를 구성하였습니다. CSS의 Grid를 통해 모듈구조에서 스타일을 통일시킬 수 있었고 반응형 디자인도 함께 적용할 수 있었습니다.",
        },
        {
            title: "Atomic Design을 참고하여 컴포넌트 재사용성, 유지보수성 향상",
            content:
                "페이지의 부분들을 Atomic Design과 유사한 구조로 분해하여 컴포넌트를 세분화하였습니다. UI를 구성하는 메인 요소인 모듈(컴포넌트)들은 가로세로 비율을 입력받아 동일한 스타일을 유지하며 재사용할 수 있도록 했으며 새로운 데이터가 추가될때 빠르게 적용이 가능합니다.",
        },
        {
            title: "Memoization과 debounce : 실시간 검색 및 UI 렌더링 최적화",
            content:
                "수십~수백개의 정보가 표시되는 병원탭에서 지역명으로 검색할때 사용자가 입력하는 매 글자마다 검색 로직이 실행되어 속도가 느려지는 문제가 있었습니다. debounce를 사용해 입력이 일정 시간 멈췄을때만 검색 로직이 실행되도록 하고 메모이제이션을 통해 불필요한 필터링 연산이 발생하지 않도록 했습니다.",
        },
        {
            title: "Recoil : 사용자 지역 정보 관리",
            content:
                "사용자가 입력한 간단한 지역정보(남구, 중구 등)는 여러 탭에서 활용될 수 있습니다. 값이 필요한 컴포넌트에서 값을 매번 불러올 필요가 없게 만들고 선택한 지역에 따라 UI를 즉각갱신하도록 하기 위해 localStorage가 아닌 Recoil을 선택했습니다.",
        },
        {
            title: "Styled-Components : 테마와 스타일 통합 관리",
            content:
                "테마에서 사용하는 색상에 대한 객체를 따로 관리하고 Styled-Components에서 제공하는 ThemeProvider를 통해 라이트/다크 모드를 빠르게 구현할 수 있었습니다. CSS-in-JS 형태로 동적 스타일링이 편리해 props를 통한 컴포넌트 재사용성을 높일 수 있었습니다.",
        },
        {
            title: "Framer-Motion : 조립형 UI의 애니메이션 구현",
            content:
                "React의 key를 이용한 diff 알고리즘을 적극 활용한 라이브러리 입니다. 리액트의 컴포넌트 비교원리를 학습할 수 있었고 모듈식의 UI를 구현하면서 필요한 UI 변화시의 자연스러운 애니메이션을 쉽고 빠르게 구현할 수 있었습니다.",
        },
        {
            title: "Express : node.js를 통한 간단한 서버 구현",
            content:
                "API 요청 코드와 데이터 전처리를 위한 서버를 구현했습니다. Request 받은 날짜나 지역 정보에 따라 여러가지 API를 요청하도록 했으며 외부 API의 응답코드를 처리하고 필요한 데이터만 프론트엔드 측으로 넘겨주도록 했습니다. 아마존의 EC2와 Route53을 이용해 도메인을 연결하여 서버를 작동시키고 있습니다.",
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
