import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center gap-6 h-screen max-sm:px-5">
            <h1 className="text-4xl md:text-6xl font-semibold text-gray-800">404</h1>
            <p className="text-lg md:text-xl text-gray-600 text-center">Sorry, we couldn't find the page you're looking for.</p>
            <Link href="/" className="text-white bg-[#2A2742] px-6 py-[10px] rounded-md">
                Go back home
            </Link>
        </div>
    );
}
