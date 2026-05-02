import Link from "next/link";

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="text-center space-y-5">
                <h1 className="text-8xl font-bold text-gray-900">4<span className="text-blue-500">0</span>4</h1>
                <p className="text-gray-600 text-xl font-semibold font-serif">Oops! Page Not Found</p>
                <p className="text-gray-600 mt-2 max-w-md">
                    Sorry, the page you are looking for doesn't exist or has been moved.
                    Let’s get you back to building something amazing!
                </p>
                <Link
                    href="/"
                    className="inline-block px-6 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
                >
                    Back Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;