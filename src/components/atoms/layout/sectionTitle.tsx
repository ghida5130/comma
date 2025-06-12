export default function SectionTitle({ title }: { title: string }) {
    return (
        <div className="w-full">
            <h2 className="text-4xl font-semibold">{title}</h2>
            <div className="h-0.5 bg-[#777777] mt-2 mb-5" />
        </div>
    );
}
