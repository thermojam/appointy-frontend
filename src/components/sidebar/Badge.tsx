export function Badge({ number }: { number: number }) {
    return (
        <div className="bg-neutral-900 text-neutral-50 rounded-sm p-1 flex items-center justify-center aspect-square h-6 text-xs">
            {number}
        </div>
    );
}
