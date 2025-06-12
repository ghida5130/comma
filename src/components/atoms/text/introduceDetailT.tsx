export default function IntroduceDetailT({ data }: { data: string }) {
    const parts = data.split(/(\*\*.*?\*\*)/);

    return (
        <p className="text-lg">
            ▸{" "}
            {parts.map((part, i) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                    return (
                        <span key={i} className="font-semibold text-[#d3f8ff]">
                            {part.slice(2, -2)}
                        </span>
                    );
                }
                return <span key={i}>{part}</span>;
            })}
        </p>
    );

    // return <p className="text-lg ml-3 mb-1">▸ {data}</p>;
}
