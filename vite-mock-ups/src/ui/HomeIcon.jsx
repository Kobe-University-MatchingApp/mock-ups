import { Link } from 'react-router-dom'

function HomeIcon() {
    return (
        <Link to="/" className="fixed top-4 left-4 inline-block p-2 text-slate-600 hover:text-slate-700 transition-colors">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
        </Link>
    )
}

export default HomeIcon
