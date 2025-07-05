export default function IntroduceDetailT({ data }: { data: string }) {
    // 먼저 줄바꿈 단위로 나누고, 각 줄마다 '**' 감싼 부분 처리
    const lines = data.split("\n");

    return (
        <p className="text-lg">
            ▸{" "}
            {lines.map((line, lineIndex) => {
                const parts = line.split(/(\*\*.*?\*\*)/);

                return (
                    <span key={lineIndex}>
                        {parts.map((part, i) => {
                            if (part.startsWith("**") && part.endsWith("**")) {
                                return (
                                    <span key={i} className="font-medium text-[#8aaaff]">
                                        {part.slice(2, -2)}
                                    </span>
                                );
                            }
                            return <span key={i}>{part}</span>;
                        })}
                        {/* 줄 마지막이 아니면 줄바꿈 */}
                        {lineIndex !== lines.length - 1 && <br />}
                    </span>
                );
            })}
        </p>
    );
}

// export default function IntroduceDetailT({ data }: { data: string }) {
//     const parts = data.split(/(\*\*.*?\*\*)/);

//     return (
//         <p className="text-lg">
//             ▸{" "}
//             {parts.map((part, i) => {
//                 if (part.startsWith("**") && part.endsWith("**")) {
//                     return (
//                         <span key={i} className="font-semibold text-[#d3f8ff]">
//                             {part.slice(2, -2)}
//                         </span>
//                     );
//                 }
//                 return <span key={i}>{part}</span>;
//             })}
//         </p>
//     );
// }
