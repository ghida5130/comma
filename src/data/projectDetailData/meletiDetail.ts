import { DetailDataType } from "@/types/type";

export const meletiDetail: DetailDataType = {
    title: "Meλeti",
    develop: "(1인 개발, 개발 중)",
    description: "책의 크기를 3D로 비교하고 독서 현황을 기록하는 서비스",
    skills: ["next", "ts", "tailwind", "scss", "firebase", "tanstack", "redux", "three", "recharts"],
    motivation:
        // "책에서 본 인상깊은 표현이나 문구를 잊어버려 아쉬울때가 많았습니다. 기억하고 싶은 표현이나 문구를 저장하고 공유하며 독서기록까지 가능한 플랫폼을 PC와 모바일에서 접속할 수 있도록 웹페이지로 제작해보고 싶었습니다.",
        "온라인 도서 서비스에서는 크기와 두께를 수치로 가늠해야 했습니다. 책을 읽고 책장에 보관하는 과정까지 고려해 소유한 책과 크기를 비교하는 3D 뷰어를 만들고, 도서 탐색과 독서 기록을 함께 제공했습니다.",
    overview: [
        "3D 도서 미리보기와 소유 도서 기준 크기 비교",
        "베스트셀러·신간 정보 조회와 도서 검색",
        "사용자별 독서 현황 기록",
    ],
    learned: [
        {
            title: "책의 크기를 직관적으로 비교하는 3D 뷰어",
            content: [
                "수치 정보만으로 크기와 두께를 유추해야 하는 문제를 **Three.js 3D 뷰어와 두 도서의 크기 비교**로 해결했습니다.",
                "저사양 모바일에서 발생한 프레임 드랍과 CPU·GPU 부하를 줄이기 위해 **frameloop·invalidate로 idle 상태의 프레임 생성을 제한**했습니다.",
                "객체의 해상도·동작·그림자 설정을 조정해 불필요한 자원 사용을 줄였습니다.",
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
            title: "도서 정보와 사용자 상호작용에 맞춘 렌더링 전략",
            content: [
                "검색엔진이 도서 본문을 파악하도록 **도서 상세 데이터 조회와 본문은 Server Component에서 서버 렌더링**했습니다.",
                "사용자별로 달라지지 않는 랜딩 페이지의 베스트셀러·신간은 **1시간 주기 ISR**을 적용해 캐시된 결과를 재사용했습니다.",
                "3D 뷰어와 검색·기록 입력은 **Client Component로 분리**했습니다. 외부 API와 인증 서버 기능까지 같은 프로젝트에서 구현하기 위해 Next.js를 선택했습니다.",
            ],
            link: [{ title: "Next.js ISR 정리", url: "https://cstelladev.tistory.com/84" }],
        },
        {
            title: "검색과 링크 공유에 필요한 도서 정보 제공",
            content: [
                "도서별 **동적 메타데이터·JSON-LD 구조화 데이터**를 제공하고 시맨틱 문서 구조를 적용해 검색엔진이 콘텐츠를 이해하도록 구성했습니다.",
                "**Open Graph**로 공유 링크에 도서 정보 미리보기를 제공했습니다.",
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
