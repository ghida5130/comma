export default function SectionTitle({ title }: { title: string }) {
    return (
        <div className="w-full">
            <p className="text-5xl font-bold">{title}</p>
            <div className="h-0.5 bg-[#777777] mt-2 mb-5" />
        </div>
    );
}
