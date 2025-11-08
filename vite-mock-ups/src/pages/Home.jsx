import { Button } from '../ui'

function Home() {
    return (
        <div className="p-8 text-center">
            <h1 className="text-3xl font-bold mb-4">Welcome to Mock-ups</h1>
            <p className="text-lg mb-8">Choose an example to view:</p>

            <div className="flex flex-col gap-4 max-w-xs mx-auto">
                <Button to="/example1" variant="large">
                    Example 1
                </Button>
                <Button to="/example2" variant="large">
                    Example 2
                </Button>
                <Button to="/example3" variant="large">
                    Example 3
                </Button>
            </div>
        </div>
    )
}

export default Home