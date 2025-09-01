import { Github,  Linkedin, Twitter } from "lucide-react"
import { FaDiscord } from "react-icons/fa"
export default function Socials() {
  return (
    <div className="flex space-x-6 justify-center items-center">
      {/* GitHub */}
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-[#176199] transition"
      >
        <Github size={28} />
      </a>

      {/* Discord */}
      <a
        href="https://discord.gg/yourserver"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-[#176199] transition"
      >
      <FaDiscord size={28} className="text-black hover:text-[#176199] transition" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-[#176199] transition"
      >
        <Linkedin size={28} />
      </a>

      {/* Twitter */}
      <a
        href="https://twitter.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black hover:text-[#176199] transition"
      >
        <Twitter size={28} />
      </a>
    </div>
  )
}
