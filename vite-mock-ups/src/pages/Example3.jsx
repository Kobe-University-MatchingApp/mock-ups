import { HomeIcon, Navigation } from '../ui'

function Example3() {
    return (
        <div>
            <HomeIcon />

            <div className="p-8 text-center">
                <h1 className="text-3xl font-bold mb-4">Example 3</h1>
                <p className="text-lg">This is the third example page.</p>
            </div>

            <Navigation prevLink="/example2" nextLink="/example1" />
        </div>
    )
}

export default Example3
