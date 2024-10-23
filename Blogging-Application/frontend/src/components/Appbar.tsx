import { Link } from 'react-router-dom'; 
import { Avatar } from "./BlogCard";

export const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-4 py-2 sm:px-10 sm:py-4 items-center">
      <div className="flex items-center">
        <Link to={`/blogs`}>
          <div className="font-bold text-lg flex items-center cursor-pointer">
            Medium
          </div>
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Link to={`/signin`}>
          <button
            onClick={() => localStorage.removeItem('token')}
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center dark:bg-red-600"
          >
            Log out
          </button>
        </Link>
        <Link to={`/publish`}>
          <button
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5"
          >
            New Blog
          </button>
        </Link>
        <Avatar size={2} name="Nimit" />
      </div>
    </div>
  );
};
