'use client';

export default function GlobalError({ error, reset }) {
    const isChunkError =
        error?.message?.includes('ChunkLoadError') ||
        error?.message?.includes('loading chunk') ||
        error?.message?.includes('dynamically imported module');

    const handleClick = () => {
        if (isChunkError) {
            window.location.reload();
        } else {
            reset();
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 text-center px-4">
            <p className="text-sm text-gray-500">{isChunkError ? 'E001' : 'E002'}</p>
            <h2 className="text-lg font-semibold mb-4">
                {isChunkError
                    ? 'Update detected. Please refresh the page.'
                    : 'Something went wrong. Try again.'}
            </h2>
            <button
                onClick={handleClick}
                className="px-4 py-2 rounded-md bg-[#2A2742] text-white"
            >
                {isChunkError ? 'Refresh' : 'Retry'}
            </button>
        </div>
    );
}
