import Button from './Button'

function Navigation({ prevLink, nextLink }) {
    return (
        <div className="fixed left-1/2 -translate-x-1/2 flex gap-4">
            <Button to={prevLink}>
                ← Prev
            </Button>
            <Button to={nextLink}>
                Next →
            </Button>
        </div>
    )
}

export default Navigation
