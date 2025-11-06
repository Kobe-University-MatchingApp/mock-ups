import { Link } from 'react-router-dom';
import { useState } from 'react';

function Matching() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const profiles = [
    {
      id: 1,
      name: "山田 花子",
      age: 22,
      university: "神戸大学",
      faculty: "文学部",
      bio: "カフェ巡りと読書が好きです。素敵な出会いを探しています！",
      interests: ["読書", "カフェ", "映画", "アート"],
      photo: "https://via.placeholder.com/400x500/FF6B9D/FFFFFF?text=Hanako"
    },
    {
      id: 2,
      name: "佐藤 美咲",
      age: 23,
      university: "神戸大学",
      faculty: "経済学部",
      bio: "旅行とスポーツが大好きです。一緒に楽しい時間を過ごしましょう！",
      interests: ["旅行", "テニス", "料理", "音楽"],
      photo: "https://via.placeholder.com/400x500/9C27B0/FFFFFF?text=Misaki"
    },
    {
      id: 3,
      name: "鈴木 愛",
      age: 21,
      university: "神戸大学",
      faculty: "国際文化学部",
      bio: "語学と文化交流に興味があります。いろんな話をしたいです！",
      interests: ["語学", "文化交流", "ダンス", "写真"],
      photo: "https://via.placeholder.com/400x500/E91E63/FFFFFF?text=Ai"
    }
  ];

  const currentProfile = profiles[currentIndex];

  const handleLike = () => {
    alert(`${currentProfile.name}にいいね！を送りました`);
    nextProfile();
  };

  const handlePass = () => {
    nextProfile();
  };

  const nextProfile = () => {
    if (currentIndex < profiles.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert('すべてのプロフィールを確認しました！');
      setCurrentIndex(0);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 p-4">
      <div className="max-w-lg mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-800">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
          <div className="text-sm text-gray-600">
            {currentIndex + 1} / {profiles.length}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="relative">
            <img
              src={currentProfile.photo}
              alt={currentProfile.name}
              className="w-full h-96 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
              <h2 className="text-3xl font-bold">{currentProfile.name}, {currentProfile.age}</h2>
              <p className="text-sm opacity-90">{currentProfile.university} {currentProfile.faculty}</p>
            </div>
          </div>

          <div className="p-6 space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">自己紹介</h3>
              <p className="text-gray-700">{currentProfile.bio}</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">興味・趣味</h3>
              <div className="flex flex-wrap gap-2">
                {currentProfile.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 pt-0 flex gap-4">
            <button
              onClick={handlePass}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 rounded-xl shadow-lg transform transition hover:scale-105 flex items-center justify-center"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={handleLike}
              className="flex-1 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-semibold py-4 rounded-xl shadow-lg transform transition hover:scale-105 flex items-center justify-center"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-600">
          <p>左にスワイプでパス、右にスワイプでいいね！</p>
        </div>
      </div>
    </div>
  );
}

export default Matching;
