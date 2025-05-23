export default function FlexCard({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-[300px] max-sm:w-full flex flex-col items-center justify-around p-6 gap-1 rounded-2xl text-xl bg-secondary">
            {children}
        </div>
    );
}
