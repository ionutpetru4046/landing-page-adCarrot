import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className="bg-emerald-950 py-6 text-orange-50">
        <div className="container mx-auto flex flex-col items-center justify-center 
        space-y-4 md:space-y-0">
            <div className="mb-4 flex space-x-3">
                <a href="#">
                    <FaFacebookF size={20} />
                </a>
                <a href="#">
                    <FaXTwitter size={20} />
                </a>
                <a href="#">
                    <FaInstagram size={20} />
                </a>
                <a href="#">
                    <FaLinkedin size={20} />
                </a>
            </div>
            <div className="text-sm opacity-50">
             © {new Date().getFullYear()} AdCarrot. All Rights Reserved
            </div>
        </div>
    </footer>
  )
}

export default Footer
