import { Link, Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600 font-bold border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-500';
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-gray-800">五笔 Wubi</span>
              </Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link to="/" className={`px-3 py-2 text-sm font-medium ${isActive('/')}`}>
                Home
              </Link>
              <Link to="/learn" className={`px-3 py-2 text-sm font-medium ${isActive('/learn')}`}>
                Learn
              </Link>
              <Link to="/practice" className={`px-3 py-2 text-sm font-medium ${isActive('/practice')}`}>
                Practice
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow max-w-5xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-gray-200 mt-auto">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-gray-500 text-sm">
          Wubi Input Method Learning Assistant
        </div>
      </footer>
    </div>
  );
}
