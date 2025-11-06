import { Link } from 'react-router-dom';
import { useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, text: "こんにちは！", sender: "other", time: "10:30" },
    { id: 2, text: "マッチありがとうございます！", sender: "other", time: "10:31" },
    { id: 3, text: "こんにちは！こちらこそありがとうございます😊", sender: "me", time: "10:32" },
    { id: 4, text: "プロフィール見ました。カフェ巡りが好きなんですね！", sender: "other", time: "10:33" },
    { id: 5, text: "はい！新しいカフェを見つけるのが趣味です☕", sender: "me", time: "10:34" },
    { id: 6, text: "いいですね！今度一緒に行きませんか？", sender: "other", time: "10:35" },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const now = new Date();
      const time = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
      setMessages([...messages, { 
        id: messages.length + 1, 
        text: newMessage, 
        sender: "me", 
        time 
      }]);
      setNewMessage('');
    }
  };

  const matches = [
    { id: 1, name: "山田 花子", photo: "https://via.placeholder.com/100/FF6B9D/FFFFFF?text=H", lastMessage: "いいですね！今度一緒に...", time: "10:35", unread: 1 },
    { id: 2, name: "佐藤 美咲", photo: "https://via.placeholder.com/100/9C27B0/FFFFFF?text=M", lastMessage: "ありがとうございます！", time: "昨日", unread: 0 },
    { id: 3, name: "鈴木 愛", photo: "https://via.placeholder.com/100/E91E63/FFFFFF?text=A", lastMessage: "よろしくお願いします", time: "2日前", unread: 0 },
  ];

  const [activeChat, setActiveChat] = useState(matches[0]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-gray-600 hover:text-gray-800">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden" style={{ height: '600px' }}>
          <div className="flex h-full">
            {/* Matches List */}
            <div className="w-full md:w-1/3 border-r border-gray-200 flex flex-col">
              <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-pink-500 to-purple-500 text-white">
                <h2 className="text-xl font-bold">マッチ</h2>
                <p className="text-sm opacity-90">{matches.length}人とマッチ中</p>
              </div>
              
              <div className="flex-1 overflow-y-auto">
                {matches.map((match) => (
                  <div
                    key={match.id}
                    onClick={() => setActiveChat(match)}
                    className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition ${
                      activeChat.id === match.id ? 'bg-pink-50' : ''
                    }`}
                  >
                    <div className="flex items-center">
                      <img
                        src={match.photo}
                        alt={match.name}
                        className="w-12 h-12 rounded-full mr-3"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="font-semibold text-gray-800 truncate">{match.name}</h3>
                          <span className="text-xs text-gray-500 ml-2">{match.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 truncate">{match.lastMessage}</p>
                      </div>
                      {match.unread > 0 && (
                        <div className="ml-2 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                          {match.unread}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chat Area */}
            <div className="flex-1 flex flex-col">
              {/* Chat Header */}
              <div className="p-4 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center">
                  <img
                    src={activeChat.photo}
                    alt={activeChat.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{activeChat.name}</h3>
                    <p className="text-xs text-green-500">オンライン</p>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                        message.sender === 'me'
                          ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white'
                          : 'bg-white text-gray-800 shadow'
                      }`}
                    >
                      <p>{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'me' ? 'text-pink-100' : 'text-gray-500'
                      }`}>
                        {message.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <form onSubmit={handleSend} className="p-4 border-t border-gray-200 bg-white">
                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    className="p-2 text-gray-400 hover:text-gray-600 transition"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                  <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="メッセージを入力..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white p-2 rounded-full shadow-lg transform transition hover:scale-105"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
