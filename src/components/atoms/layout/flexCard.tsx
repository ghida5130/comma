export default function FlexCard({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col items-center justify-around p-6 gap-1 rounded-2xl text-xl bg-secondary">
            {children}
        </div>
    );
}
