export function NavLink({to, textColour, children}) {
    return <a href={to} className={`mx-4 + ${textColour}`}>
        {children}
    </a>
}