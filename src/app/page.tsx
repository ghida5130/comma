export default function Home() {
    return (
        <div className="w-[100vw] h-[calc(100vh-96px)] flex justify-center items-center">
            <div className="w-1/2 h-1/2 grid grid-cols-4 gap-10">
                <div className="bg-black col-span-2 row-span-2">
                    <p>안녕하세요</p>
                    <p>프론트엔드 개발자</p>
                    <p>박성수 입니다</p>
                </div>
                <div className="bg-black">Tistory 블로그</div>
                <div className="bg-black">소개</div>
                <div className="bg-black">프로젝트</div>
            </div>
        </div>
    );
}
