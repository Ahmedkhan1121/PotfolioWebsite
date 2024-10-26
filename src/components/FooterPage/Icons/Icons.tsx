import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export default function Icons(){
    return(
        <>
         <div className="flex gap-3"><FaFacebookF />
                <FaInstagram />
                <FaTwitter />
                <FaLinkedin />
            </div>
        </>
    )
}