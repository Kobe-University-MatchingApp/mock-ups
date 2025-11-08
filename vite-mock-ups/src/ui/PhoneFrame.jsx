function PhoneFrame({ children }) {
    return (
        <div className="flex items-center justify-center p-8" style={{ height: '80%' }}>
            <div className="border-4 border-gray-300 rounded-lg shadow-lg bg-white h-full overflow-hidden"
                style={{ aspectRatio: '9/16', maxWidth: '100%' }}>
                {children}
            </div>
        </div>
    )
}

export default PhoneFrame
