'use client';

import { useIsFetching, useIsMutating } from '@tanstack/react-query';
import { Loader } from './Loader';

export const GlobalLoader = () => {
    const isFetching = useIsFetching();
    const isMutating = useIsMutating();

    if (!isFetching && !isMutating) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-[9999]"
        >
            <Loader size={48} />
        </div>
    );
};
