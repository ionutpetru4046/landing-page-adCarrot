import { useEffect, useState } from "react"
import logo from "../assets/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      if(isOpen) {
        document.body.style.overflow = "hidden";
      }else {
        document.body.style.overflow = "auto";
      }
    }, [isOpen])

    useEffect(() => {
      const handleScroll = (e) => {
        if (isOpen) {
          e.preventDefault();
        }
      }
      window.addEventListener("scroll", handleScroll)
        return () => {
          window.removeEventListener("scroll", handleScroll)
        }
    }, [isOpen])

    const handleLinkClick = (e, id) => {
      e.preventDefault();
      setIsOpen(false)
      const offset = -70
      const element = document.getElementById(id);
      const elementPosition = element.getBoundingClientRect().top + window.
      scrollY;
      const offsetPosition = elementPosition + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })

    }

  return (
    <>
    <nav className="fixed z-10 w-full border-b border-orange-50/10 bg-emerald-950">
        <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                    <a href="/">
                        <img src={logo} alt="AdCarrot" width={120} height={20} />
                    </a>
                </div>
            </div>
        </div>
    </nav>   
    </>
  )
}

export default Navbar
