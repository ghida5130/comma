import { ProjectDataType } from "@/types/type";

type MyProjectDataType = Record<string, ProjectDataType>;

const myProjectData: MyProjectDataType = {
  // comma: {
  //     title: "comma",
  //     develop: "(1인 개발, 반응형)",
  //     description: "개인 포트폴리오 웹사이트",
  //     link: "https://comma-bice.vercel.app/",
  //     github: "https://github.com/ghida5130/comma",
  //     skills: ["next", "ts", "tailwind", "redux"],

  //     introduce: ["간단소개, 프로젝트를 담은 포트폴리오 사이트", "Redux를 활용한 Modal 관리"],
  // },
  onmaum: {
    title: "On마음",
    develop: "팀 프로젝트 · 프론트엔드 / 데이터 처리",
    description: "전력 사용 패턴으로 1인 가구의 이상 징후를 확인하는 돌봄 서비스",
    link: null,
    github: null,
    skills: ["react", "ts", "tanstack", "tailwind", "sse", "webPush", "pwa", "pyarrow", "spark", "hdfs", "tailscale"],
    introduce: [
      "고령층의 외출·귀가 조작을 한 번의 버튼 입력으로 단순화하고, 처리 중 상태와 완료 결과를 구분",
      "요청 완료 후 서버 상태를 다시 조회하고 결과를 안내해 실제 반영 전 완료로 오해하는 상황 방지",
      "30Hz 전력 데이터를 1Hz로 집계하는 스트리밍 파이프라인으로 약 5.8TB를 36.60GB로 축소",
    ],
    materialsPending: ["외출·귀가 동작 영상", "공개 가능한 Demo·GitHub 링크", "개발 기간과 팀 구성·담당 범위", "데이터 변환·검증 결과 자료"],
  },
  bbangbeomdae: {
    title: "빵범대",
    develop: "5인 팀 프로젝트 · 프론트엔드 2명 중 1명",
    description: "영수증 리뷰와 수집품 미션을 결합한 대전 빵집 투어 서비스",
    link: null,
    github: null,
    skills: ["react", "ts", "tanstack", "redux", "tailwind", "msw", "kakaoMaps"],
    introduce: [
      "API 응답별 독립 렌더링으로 하나의 느린 요청이 상세 페이지 전체 표시를 막는 문제 개선",
      "폰트 서브셋팅과 이미지 지연 로딩으로 전체 전송량 약 37% 감소, LCP 2.8초 → 2.1초",
      "MSW로 정상·인증·서버 오류 응답을 제공해 백엔드 개발과 독립적으로 화면 및 오류 처리 구현",
    ],
    materialsPending: ["영수증 인증 화면", "공개 가능한 Demo·GitHub 링크", "개발 기간과 담당 화면 범위", "Lighthouse·네트워크 전송량 비교 자료"],
  },
  gordi: {
    title: "Gordi",
    develop: "팀 프로젝트 · 프론트엔드",
    description: "아바타로 의상을 비교하고 함께 순위를 정하는 패션 서비스",
    link: null,
    github: null,
    skills: ["react", "js", "tanstack", "zustand", "tailwind", "stomp", "livekit"],
    introduce: [
      "화면 크기와 레이아웃 차이로 협업 커서가 서로 다른 위치에 표시되는 문제 해결",
      "영역 전체 좌표 대신 커서가 가리키는 요소와 요소 내부의 상대 위치를 공유",
      "다른 UI에서도 같은 의상과 순위를 가리킬 수 있도록 커서 동기화 방식 개선",
    ],
    materialsPending: ["서로 다른 화면 크기에서의 커서 공유 영상", "공개 가능한 Demo·GitHub 링크", "개발 기간과 팀 구성·담당 범위"],
  },
  meleti: {
    title: "Meλeti",
    develop: "(1인 개발, 개발 중)",
    description: "책의 크기를 3D로 비교하고 독서 현황을 기록하는 서비스",
    link: "https://meleti-sigma.vercel.app/",
    github: "https://github.com/ghida5130/meleti",
    skills: ["next", "ts", "tailwind", "scss", "firebase", "tanstack", "redux", "three", "recharts"],
    introduce: [
      "수치만으로 가늠하기 어려운 책의 크기를 3D 뷰어와 소유 도서 비교로 시각화",
      "도서 상세는 서버 렌더링, 랜딩은 1시간 ISR, 3D·입력 영역은 Client Component로 분리",
      "idle 상태의 프레임 생성을 제한하고 객체·그림자 설정을 조정해 모바일 자원 낭비 감소",
    ],
  },
  elephantB2B: {
    title: "코끼리공장 B2B 대시보드",
    develop: "로컬 AI 메이커스랩 · 프론트엔드 / UI 개선",
    description: "분산된 기업 자료를 정리하고 ESG·CSR 협업 제안에 활용하는 서비스",
    link: null,
    github: null,
    skills: ["gas", "sheets", "gemini"],
    introduce: [
      "직원별로 흩어진 자료를 AI로 분류·요약하고 Google Sheets에서 관리하는 팀 서비스 개발",
      "기업 담당자와 요구사항을 조율하고 정리된 자료를 빠르게 검색·확인하는 인터페이스 구현",
      "기업 담당자 피드백 기준 자료 정리·B2B 제안 자료 제작 시간 약 90% 단축, 종료 후 내부 사용 및 최우수상 수상",
    ],
    materialsPending: ["공개 가능한 화면 또는 자료 흐름도", "개발 기간과 팀 구성·담당 화면 범위", "기업 피드백과 수상 근거 자료"],
  },
  milliulsan: {
    title: "MilliUlsan",
    develop: "(1인 개발, 반응형)",
    description: "필요한 지역 정보를 골라 구성하는 울산 생활 정보 대시보드",
    link: "https://milli-ulsan.vercel.app/",
    github: "https://github.com/ghida5130/milliUlsan",
    serverGithub: "https://github.com/ghida5130/milliUlsanServer",
    skills: ["react", "ts", "styledComponents", "express", "recoil", "aws", "tanstack"],
    introduce: [
      "공통 카드·그리드를 재사용하는 모듈 구조로 사용자 맞춤 화면과 기능 확장 지원",
      "화면 밖 콘텐츠 렌더링을 제한하면서 발생한 시계 초기화 누락을 컴포넌트 분리로 해결",
      "3시간 주기 BFF 캐싱으로 사용자 요청과 외부 날씨 API 호출을 분리",
    ],
  },
  lumos: {
    title: "Lumos",
    develop: "SSAFY 관통 프로젝트 · 프론트엔드",
    description: "야간관광 특화도시의 여행지를 찾고 AI 여행 코스를 추천받는 서비스",
    link: null,
    github: null,
    skills: ["vue", "pinia", "tanstack", "msw", "googleMaps"],
    introduce: [
      "야간관광 특화도시의 여행지 조회와 개인 맞춤 여행 코스 추천 기능 제공",
      "Vue.js·Pinia를 활용해 기존 React 프로젝트와 다른 환경에서 화면 개발",
      "MSW로 API 응답을 모의해 백엔드 개발 완료 전 프론트엔드 API 코드 작성",
    ],
    materialsPending: ["공개 가능한 Demo·GitHub 링크", "개발 기간과 팀 구성·담당 범위"],
  },
  millivie: {
    title: "Millivie",
    develop: "(1인 개발)",
    description: "영화 정보 조회 웹사이트",
    link: "https://millivie.vercel.app/",
    github: "https://github.com/ghida5130/millivie",
    skills: ["next", "js", "mongodb"],
    introduce: [
      "이미지·폰트·레이아웃 조정으로 Core Web Vitals와 접근성 개선",
      "영화별 리뷰 저장 후 평균 평점을 재계산하는 데이터 흐름 구현",
      "사용자가 이어서 탐색할 수 있도록 최근 조회한 영화와 무한스크롤 제공",
    ],
  },
  traveldamoa: {
    title: "여행다모아",
    develop: "(4인 팀 개발, 프론트엔드 개발 부분 70% 담당)",
    description: "관광지 혼잡도 조회 웹 앱",
    link: null,
    github: "https://github.com/TravelDamoa/damoa_main",
    skills: ["html", "css", "js"],
    introduce: [
      "관광지별 혼잡도를 지도 핀의 색상으로 구분해 빠른 비교 지원",
      "백엔드 팀과 데이터 구조를 협의하고 스탠드업·싱크업 미팅 주도",
      "Django SSR 이미지 크기·포맷 최적화 및 관광 데이터 활용 공모전 장려상 수상",
    ],
  },
};

export { myProjectData };
