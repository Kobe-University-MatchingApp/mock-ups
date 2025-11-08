import { HomeIcon } from './index'

function ExampleHeader({ title, description }) {
    return (
        <div className="flex items-center justify-between p-4">
            <HomeIcon />
            <div className="flex-1 ml-8">
                <h1 className="text-3xl font-bold mb-1">{title}</h1>
                <p className="text-lg text-gray-600">{description}</p>
            </div>
        </div>
    )
}

export default ExampleHeader
