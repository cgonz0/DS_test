import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50 dark:from-gray-900 dark:via-gray-900 dark:to-violet-950 flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-600 bg-clip-text text-transparent">
          404
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">Page not found</p>
        <a
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
