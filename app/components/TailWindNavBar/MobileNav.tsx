 export function MobileNav({open, setOpen, bgColour, textColour}) {
    return (
        <div className={`md:hidden absolute top-0 left-0 h-screen w-screen + ${bgColour} transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className={`flex items-center justify-center filter drop-shadow-md + ${bgColour} h-20`}> {/*logo container*/}
                <a className={`text-xl font-semibold + ${textColour}`} href="/">LOGO</a>
            </div>
            <div className="flex flex-col ml-4">
                <a className="text-xl font-medium my-4 m-auto text-black" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    About
                </a>
                <a className="text-xl font-normal my-4 m-auto text-black" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Contact
                </a>
            </div>  
        </div>
    )
}