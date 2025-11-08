import { ExampleHeader, PhoneFrame, ExampleFooter } from '../../ui'
import PhoneContent from './PhoneContent'

function Example3() {
    return (
        <div className="w-full h-[90vh] overflow-hidden flex flex-col">
            <ExampleHeader
                title="Example 3"
                description="This is the third example page."
            />

            <PhoneFrame>
                <PhoneContent />
            </PhoneFrame>

            <ExampleFooter
                prevLink="/example2"
                nextLink="/example1"
            />
        </div>
    )
}

export default Example3
