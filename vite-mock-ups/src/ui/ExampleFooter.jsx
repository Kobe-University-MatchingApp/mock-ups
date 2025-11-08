import { Navigation } from './index'

function ExampleFooter({ prevLink, nextLink }) {
    return (
        <div className="flex items-center p-4" style={{ height: '10%' }}>
            <Navigation prevLink={prevLink} nextLink={nextLink} />
        </div>
    )
}

export default ExampleFooter
