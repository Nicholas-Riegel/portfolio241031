import { useState } from 'react'
import logo from '../assets/logo.png'
import { NAVIGATION_LINKS } from '../constants/index'

function Navbar() {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const targetElement = document.getElementById(href);
        if (targetElement){
            const offset = -85;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY + offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
            setIsMobileMenuOpen(false);
        }
    }

  return (
    <div>
        <nav className='fixed left-0 right-0 top-4 z-50'>
            {/* Desktop Menu */}
            <div className="mx-auto hidden max-w-2xl items-center justify-center rounded-lg bg-black/20 py-3 backdrop-blur-lg lg:flex">
                <div className="flex justify-between gap-6">
                    <div>
                        <a href="#">
                            <img src={logo} alt="logo" width={90}/>
                        </a>
                    </div>
                    <div>
                        <ul className='flex items-center gap-4'>
                            {
                                NAVIGATION_LINKS.map((item, index) => (
                                        <li key={index}>
                                            <a 
                                                href={item.href} 
                                                className='text-sm hover:text-yellow-400'
                                                onClick={(e) => handleLinkClick(e, item.href)}
                                            >
                                                {item.label}
                                            </a>
                                        </li>
                                    )
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar