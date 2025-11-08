import { Link } from 'react-router-dom'

function Button({ to, children, variant = 'default', className = '' }) {
    const baseClasses = 'text-white no-underline transition-colors'

    const variantClasses = {
        default: 'px-4 py-2 bg-slate-600 hover:bg-slate-700 rounded',
        large: 'p-4 bg-slate-600 hover:bg-slate-700 rounded-lg text-lg'
    }

    const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`

    return (
        <Link to={to} className={combinedClasses}>
            {children}
        </Link>
    )
}

export default Button
