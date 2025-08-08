import { DetailDataType } from "@/types/type";

export const meletiDetail: DetailDataType = {
    title: "Meλeti",
    develop: "(1인 개발, 제작중)",
    description: "모바일 독서 기록 사이트",
    skills: ["next", "ts", "scss", "firebase", "tanstack", "redux", "three"],
    motivation:
        // "책에서 본 인상깊은 표현이나 문구를 잊어버려 아쉬울때가 많았습니다. 기억하고 싶은 표현이나 문구를 저장하고 공유하며 독서기록까지 가능한 플랫폼을 PC와 모바일에서 접속할 수 있도록 웹페이지로 제작해보고 싶었습니다.",
        "온라인으로 도서를 구매할 때 책의 크기나 두께를 직관적으로 알기 어려운 점이 아쉬웠고 읽었던 책 속의 인상 깊은 표현이나 문구를 잊어버릴 때도 많았습니다. 그래서 이미 가지고 있는 책을 기준으로 구매하려는 책의 크기를 비교해보고, 이미 읽은 책의 기억하고 싶은 문장이나 표현을 저장하고 공유하며 독서 기록까지 남길 수 있는 서비스를 PC와 모바일에서 모두 이용할 수 있도록 웹페이지 형태로 만들어보고 싶었습니다.",
    overview: [
        "3D로 도서 미리보기 및 도서 별 사이즈 비교",
        "베스트셀러 등의 도서 정보 조회 및 검색 기능",
        "개인 독서 기록 및 단어/문구 공유 커뮤니티 (구현중)",
        "구글, 깃허브 소셜 로그인",
    ],
    learned: [
        {
            title: "3D 도서 구현 및 성능 최적화",
            content: [
                "Three.js로 **3D 도서 구현**",
                "비교할 두 도서를 선택해 크기 및 기본정보 비교 기능 제공",
                "canvas에서 frameloop 및 invalidate 전략 적용으로 **애니메이션 idle 상태에서 CPU 및 GPU의 불필요한 연산 제거**",
            ],
            link: [
                { title: "Three.js로 3D 도서 구현하기", url: "https://cstelladev.tistory.com/66" },
                {
                    title: "Three.js 성능 개선하기",
                    url: "https://cstelladev.tistory.com/76",
                },
            ],
        },
        {
            title: "유틸 함수, 커스텀 훅 분리를 통한 가독성 향상 및 효율 증대",
            content: [
                "accessToken 기반의 API 요청 로직을 Custom Hook으로 분리하여 빠르게 사용",
                "팝업 토스트, 사용자 정보 관련 상태를 Redux로 전역 관리 및 커스텀 훅 분리",
            ],
        },
        {
            title: "메인 페이지 접속시간 최적화",
            content: [
                "메인 페이지에 ISR을 적용해 **초기 페이지 접속시간 73% 감소 (1.5s -> 0.4s)**",
                "이미지 priority 적용",
            ],
            link: [{ title: "Next.js ISR 정리", url: "https://cstelladev.tistory.com/84" }],
        },
        {
            title: "사용자 데이터 및 회원 관리",
            content: [
                "Firebase **Firestore**를 통한 **유저 개인 데이터 관리**",
                "Firebase Authentication을 통한 **oAuth**",
                "Next.js의 **Route Handler로 jwt를 발급**하여 자체 회원 관리 및 로그인 기능 구현",
                "**accessToken, refreshToken**을 각각 Redux, cookie로 관리",
                "accessTokenInitializer를 layout에 적용해 새로고침시 초기화되는 Redux의 accessToken 자동 재발급",
            ],
        },
        {
            title: "서버사이드 컴포넌트를 활용한 SEO 관리",
            content: [
                "시맨틱태그를 통한 **구조화된 데이터 학습 및 적용**",
                "**JSON-LD, 메타데이터** 적용",
                "**Open Graph** 적용으로 공유링크 미리보기 최적화 및 역링크 유도",
            ],
        },
        {
            title: "Vercel과 Github Actions를 활용한 CI/CD 구축",
            content: [
                "Github main 브랜치에 대해 **Vercel 자동 배포**",
                "**Github Actions**로 테스트 코드 자동화(CI) 도입",
                "**Lighthouse CI**를 Github Actions 워크플로우에 통합",
            ],
        },
    ],
    images: [
        {
            title: "meleti - 메인 페이지",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/meleti/meleti_1.webp",
        },
        {
            title: "meleti - 도서 상세 페이지",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/meleti/meleti_2.webp",
        },
        {
            title: "meleti - 마이페이지",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/meleti/meleti_3.webp",
        },
        {
            title: "meleti - 도서 상세 페이지 : 3D로 책 둘러보기 (모바일)",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/meleti/meleti_4.webp",
        },
        {
            title: "meleti - 도서 상세 페이지 : 3D로 책 비교하기",
            content:
                "https://raw.githubusercontent.com/ghida5130/image-assets/refs/heads/main/comma/projects/meleti/meleti_5.webp",
        },
    ],
};
