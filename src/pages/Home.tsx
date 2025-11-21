import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-12 space-y-8 text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
        Master Wubi Input Method
      </h1>
      <p className="max-w-2xl text-xl text-gray-500">
        A simple, efficient way to learn and practice Wubi (86 version). 
        Memorize radicals, understand the logic, and build muscle memory.
      </p>
      
      <div className="flex gap-4 mt-8">
        <Link
          to="/tutorial"
          className="px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 md:text-lg"
        >
          Start Tutorial
        </Link>
        <Link
          to="/practice"
          className="px-8 py-3 text-base font-medium text-blue-600 bg-white border border-blue-600 rounded-md shadow-sm hover:bg-blue-50 md:text-lg"
        >
          Practice Now
        </Link>
      </div>
      
      <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-3 text-left">
        <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-2">1. Memorize Roots</h3>
          <p className="text-gray-600">Learn the 5 regions and the radicals associated with each key.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-2">2. Understand Logic</h3>
          <p className="text-gray-600">Learn how characters are decomposed into roots (Left-Right, Top-Bottom, etc.).</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-lg font-bold text-gray-900 mb-2">3. Practice Typing</h3>
          <p className="text-gray-600">Type real characters and phrases to reinforce your memory and speed.</p>
        </div>
      </div>
    </div>
  );
}
