import { ExampleHeader, PhoneFrame, ExampleFooter } from '../../ui'
import PhoneContent from './PhoneContent'

function Example1() {
    return (
        <div className="w-full h-[90vh] overflow-hidden flex flex-col">
            <ExampleHeader
                title="Example 1"
                description="This is the first example page."
            />

            <PhoneFrame>
                <PhoneContent />
            </PhoneFrame>

            <ExampleFooter
                prevLink="/example3"
                nextLink="/example2"
            />
        </div>
    )
}

export default Example1
