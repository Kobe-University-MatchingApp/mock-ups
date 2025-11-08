import { ExampleHeader, PhoneFrame, ExampleFooter } from '../../ui'
import PhoneContent from './PhoneContent'

function Example2() {
    return (
        <div className="w-full h-[90vh] overflow-hidden flex flex-col">
            <ExampleHeader
                title="Example 2"
                description="This is the second example page."
            />

            <PhoneFrame>
                <PhoneContent />
            </PhoneFrame>

            <ExampleFooter
                prevLink="/example1"
                nextLink="/example3"
            />
        </div>
    )
}

export default Example2
