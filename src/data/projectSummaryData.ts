interface ProjectHighlight {
    text: string;
    emphasis: string;
    suffix?: string;
}

interface ProjectSummary {
    highlights: ProjectHighlight[];
}

export const featuredProjectKeys = ["bbangbeomdae", "onmaum", "elephantB2B", "meleti", "gordi", "milliulsan"];
export const projectOrder = [...featuredProjectKeys, "lumos", "millivie", "traveldamoa"];

export const projectSummaryData: Record<string, ProjectSummary> = {
    bbangbeomdae: {
        highlights: [
            { text: "독립 렌더링·폰트 최적화로 LCP ", emphasis: "2.8초 → 2.1초", suffix: ", 전송량 약 37% 감소" },
            { text: "동일 상세 페이지 Lighthouse 성능 점수 ", emphasis: "83 → 89점" },
            { text: "MSW로 정상·오류 응답을 제공해 ", emphasis: "백엔드와 독립적으로 개발" },
        ],
    },
    onmaum: {
        highlights: [
            { text: "고령층의 외출·귀가 조작을 ", emphasis: "버튼 한 번으로 단순화", suffix: ", 중복 요청 제한" },
            { text: "처리 중·완료 상태를 구분하고 ", emphasis: "서버 반영 결과를 확인한 뒤 안내" },
            { text: "30Hz → 1Hz 집계로 약 5.8TB를 ", emphasis: "36.60GB로 축소", suffix: " (약 99.4%)" },
        ],
    },
    elephantB2B: {
        highlights: [
            { text: "기업 담당자 피드백 기준 자료 정리·제안 제작 시간 ", emphasis: "약 90% 단축" },
            { text: "요구사항 조율과 ", emphasis: "자료 검색·조회 UI 개선 주도" },
            { text: "기업 내부 사용으로 이어진 프로젝트, ", emphasis: "최우수상 (전체 2위)" },
        ],
    },
    meleti: {
        highlights: [
            { text: "소유한 책과 비교하는 ", emphasis: "3D 도서 뷰어 구현" },
            { text: "도서 상세 SSR·랜딩 1시간 ISR로 ", emphasis: "페이지별 렌더링 전략 적용" },
            { text: "idle 프레임 제한과 객체 최적화로 ", emphasis: "불필요한 CPU·GPU 연산 감소" },
        ],
    },
    gordi: {
        highlights: [
            { text: "화면·레이아웃 차이로 어긋나는 ", emphasis: "협업 커서 위치 개선" },
            { text: "요소 식별과 내부 상대 위치로 ", emphasis: "커서 좌표 공유 방식 재설계" },
            { text: "서로 다른 UI에서도 ", emphasis: "같은 의상·순위를 가리키도록 동기화" },
        ],
    },
    milliulsan: {
        highlights: [
            { text: "공통 카드·그리드를 조합하는 ", emphasis: "재사용 가능한 모듈 구조 설계" },
            { text: "렌더링 제한으로 발생한 ", emphasis: "시계 초기화 누락 해결" },
            { text: "3시간 주기 BFF 캐싱으로 ", emphasis: "외부 API 반복 호출 감소" },
        ],
    },
    lumos: {
        highlights: [
            { text: "야간관광 특화도시의 ", emphasis: "여행지 정보·AI 코스 추천" },
            { text: "Vue.js·Pinia 기반 ", emphasis: "프론트엔드 개발 경험" },
            { text: "MSW를 적용해 ", emphasis: "백엔드 완료 전 API 코드 작성" },
        ],
    },
    millivie: {
        highlights: [
            { text: "이미지·폰트·문서 구조를 조정해 ", emphasis: "성능과 접근성 개선" },
            { text: "MongoDB 리뷰 저장 후 ", emphasis: "평점 자동 재계산" },
            { text: "최근 조회 기록과 ", emphasis: "무한스크롤로 영화 탐색 지원" },
        ],
    },
    traveldamoa: {
        highlights: [
            { text: "관광 데이터 활용 공모전 ", emphasis: "장려상 수상" },
            { text: "4인 팀에서 프론트엔드 ", emphasis: "개발 부분 70% 담당" },
            { text: "데이터 구조 협의·진행 공유를 위한 ", emphasis: "협업 미팅 주도" },
        ],
    },
};
