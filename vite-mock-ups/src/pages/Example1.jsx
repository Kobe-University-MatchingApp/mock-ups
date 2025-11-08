import { HomeIcon, Navigation } from '../ui'

function Example1() {
    return (
        <div className="w-full h-[90vh] overflow-hidden flex flex-col">
            {/* Header with HomeIcon and Title - Fixed at top 10% */}
            <div className="flex items-center justify-between p-4">
                <HomeIcon />
                <div className="flex-1 ml-8">
                    <h1 className="text-3xl font-bold mb-1">Example 1</h1>
                    <p className="text-lg text-gray-600">This is the first example page.</p>
                </div>
            </div>

            {/* Main Content Area - Phone-like Frame (uses remaining space) */}
            <div className="flex items-center justify-center p-8" style={{ height: '80%' }}>
                <div className="border-4 border-gray-300 rounded-lg shadow-lg bg-white h-full"
                    style={{ aspectRatio: '9/16', maxWidth: '100%' }}>
                    {/* Content goes here */}
                    <div className="p-4 h-full flex items-center justify-center text-gray-400">
                        <p>Content Area</p>
                    </div>
                </div>
            </div>

            {/* Navigation at Bottom - Fixed at bottom 10% */}
            <div className="flex items-center p-4" style={{ height: '10%' }}>
                <Navigation prevLink="/example3" nextLink="/example2" />
            </div>
        </div>
    )
}

export default Example1
