/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-purple-500">
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-lg rounded-lg transform transition duration-500 hover:scale-105">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 animate-pulse">Sign In</h2>
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300"
            >
              Sign in
            </button>
          </div>
          <div>
            <button
              type="button"
              className="w-full px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 flex items-center justify-center transition duration-300"
            >
              <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#4285F4"
                  d="M24 9.5c3.9 0 6.8 1.7 8.4 3.2L37.2 7c-2.9-2.8-6.6-4.5-11.2-4.5C16.4 2.5 10 6.9 7.6 12.9l7.4 5.8C16.8 14 20.1 9.5 24 9.5z"
                />
                <path
                  fill="#34A853"
                  d="M12 24c0-1.5.3-2.9.8-4.2L5.4 13.9c-1.4 2.8-2.2 6-2.2 9.3 0 3.2.8 6.3 2.2 9.1l7.4-5.8c-.5-1.3-.8-2.7-.8-4.5z"
                />
                <path
                  fill="#FBBC05"
                  d="M24 38.5c-3.6 0-6.8-1.3-9.2-3.4L7.4 41.3c2.8 2.8 6.8 4.5 11.2 4.5 5.2 0 9.5-1.8 12.5-4.9l-7.4-5.8c-1.7 1.4-3.8 2.4-6.2 2.4z"
                />
                <path
                  fill="#EA4335"
                  d="M42.2 24c0-1.3-.1-2.5-.3-3.7H24v7.1h10.3c-.4 2-1.5 3.8-3 5.1l7.4 5.8c3-2.8 4.8-6.9 4.8-11.8z"
                />
              </svg>
              Sign in with Google
            </button>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <Link to="/register" className="text-indigo-600 hover:text-indigo-500">
                Register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
