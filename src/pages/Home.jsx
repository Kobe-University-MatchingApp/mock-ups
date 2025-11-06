import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h1 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-4">
            Matching App Mock-ups
          </h1>
          <p className="text-center text-gray-600 mb-8 text-sm">
            神戸大学 マッチングアプリのモックアップ集
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <Link
              to="/login"
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-xl p-6 shadow-lg transform transition hover:scale-105 flex flex-col items-center justify-center"
            >
              <svg className="w-8 h-8 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              <span className="text-lg font-semibold">Login</span>
              <span className="text-xs mt-1 opacity-90">ログイン画面</span>
            </Link>

            <Link
              to="/profile"
              className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white rounded-xl p-6 shadow-lg transform transition hover:scale-105 flex flex-col items-center justify-center"
            >
              <svg className="w-8 h-8 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-lg font-semibold">Profile</span>
              <span className="text-xs mt-1 opacity-90">プロフィール画面</span>
            </Link>

            <Link
              to="/matching"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl p-6 shadow-lg transform transition hover:scale-105 flex flex-col items-center justify-center"
            >
              <svg className="w-8 h-8 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-lg font-semibold">Matching</span>
              <span className="text-xs mt-1 opacity-90">マッチング画面</span>
            </Link>

            <Link
              to="/chat"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl p-6 shadow-lg transform transition hover:scale-105 flex flex-col items-center justify-center"
            >
              <svg className="w-8 h-8 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-lg font-semibold">Chat</span>
              <span className="text-xs mt-1 opacity-90">チャット画面</span>
            </Link>
          </div>

          <div className="mt-12 text-center text-sm text-gray-500">
            <p>Backend: Node.js | Frontend: React + TailwindCSS | Database: MySQL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
