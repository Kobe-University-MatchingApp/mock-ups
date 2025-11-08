import { HomeIcon, Navigation } from '../ui'

function Example1() {
    return (
        <div>
            <HomeIcon />

            <div className="p-8 text-center">
                <h1 className="text-3xl font-bold mb-4">Example 1</h1>
                <p className="text-lg">This is the first example page.</p>
            </div>

            <Navigation prevLink="/example3" nextLink="/example2" />
        </div>
    )
}

export default Example1
