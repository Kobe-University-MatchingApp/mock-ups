import { Link } from 'react-router-dom';

function Profile() {
  const profile = {
    name: "田中 太郎",
    age: 24,
    university: "神戸大学",
    faculty: "工学部",
    bio: "プログラミングと旅行が好きです。新しい出会いを楽しみにしています！",
    interests: ["プログラミング", "旅行", "音楽", "カフェ巡り"],
    photos: [
      "https://via.placeholder.com/400x500/FF6B9D/FFFFFF?text=Photo+1",
      "https://via.placeholder.com/400x500/C44569/FFFFFF?text=Photo+2",
      "https://via.placeholder.com/400x500/9C27B0/FFFFFF?text=Photo+3"
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-800">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-32"></div>
          
          <div className="px-6 pb-6">
            <div className="flex flex-col md:flex-row items-start md:items-end -mt-16 mb-6">
              <img
                src="https://via.placeholder.com/150/FF6B9D/FFFFFF?text=Avatar"
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
              />
              <div className="mt-4 md:mt-0 md:ml-6 flex-1">
                <h1 className="text-3xl font-bold text-gray-800">{profile.name}</h1>
                <p className="text-gray-600 text-lg">{profile.age}歳 • {profile.university} {profile.faculty}</p>
              </div>
              <button className="mt-4 md:mt-0 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-2 rounded-lg shadow-lg transform transition hover:scale-105">
                Edit Profile
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">自己紹介</h2>
                <p className="text-gray-700 leading-relaxed">{profile.bio}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">興味・趣味</h2>
                <div className="flex flex-wrap gap-2">
                  {profile.interests.map((interest, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 rounded-full text-sm font-medium"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-3">写真</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {profile.photos.map((photo, index) => (
                    <div key={index} className="aspect-[4/5] rounded-lg overflow-hidden shadow-md">
                      <img
                        src={photo}
                        alt={`Photo ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Location
                  </h3>
                  <p className="text-gray-600">兵庫県神戸市</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Looking For
                  </h3>
                  <p className="text-gray-600">友達作り、恋人探し</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
