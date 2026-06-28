"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

// Error boundaries must be Client Components in Next.js.
export default function ErrorBoundary({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    const router = useRouter();

    const reload = () => {
        startTransition(() => {
            router.refresh();
            reset();
        });
    };

    return (
        <div>
            <p>{error.message}</p>

            <button onClick={reload}>Try Again</button>
        </div>
    );
}
