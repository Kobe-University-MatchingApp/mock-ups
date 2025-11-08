import { HomeIcon, Navigation } from '../ui'

function Example2() {
    return (
        <div>
            <HomeIcon />

            <div className="p-8 text-center">
                <h1 className="text-3xl font-bold mb-4">Example 2</h1>
                <p className="text-lg">This is the second example page.</p>
            </div>

            <Navigation prevLink="/example1" nextLink="/example3" />
        </div>
    )
}

export default Example2
