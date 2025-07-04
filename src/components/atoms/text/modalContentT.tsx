export default function ModalContentT({ data }: { data: string }) {
    const parts = data.split(/(\*\*.*?\*\*)/);

    return (
        <p className="text-lg ml-3 mb-1">
            ▸{" "}
            {parts.map((part, i) => {
                if (part.startsWith("**") && part.endsWith("**")) {
                    return (
                        <span key={i} className="font-semibold text-[#000075]">
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
