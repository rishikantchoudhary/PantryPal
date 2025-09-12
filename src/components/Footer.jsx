import x from '../assets/x.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import gemini from '../assets/gemini.png'

const Footer = () => {
  return (
    <div className="w=[100%] bg-[#D1FEC0]">
      <div className="mx-auto pt-8 max-w-[1150px] flex flex-col md:flex-row">
        <div className="mx-auto mb-6 md:m-0 w-[70%] max-w-[420px] md:flex-3 flex items-center justify-around">
          <a href="#">
            <img src={github} alt="Github" className="h-8 md:h-12" />
          </a>
          <a href="#">
            <img src={linkedin} alt="Linkedin" className="h-8 md:h-12" />
          </a>
          <a href="#">
            <img src={x} alt="X" className="h-7 md:h-10" />
          </a>
        </div>
        <span className="flex-1 text-center text-6xl text-[#52863B] font-extralight hidden md:inline">
          |
        </span>
        <div className="mx-auto w-[70%] max-w-[420px] md:flex-3 flex items-center justify-around">
          <button className="py-1 px-3 md:py-2 md:px-6 text-xs md:text-lg rounded-full text-[#D1FEC0] bg-[#52863B] hover:bg-[#426e2f] ">
            Contact Me
          </button>
          <button className="py-1 px-3 md:py-2 md:px-6 text-xs md:text-lg rounded-full text-[#D1FEC0] bg-[#52863B] hover:bg-[#426e2f] ">
            GitHub Repo
          </button>
        </div>
      </div>
      <div className="py-8 text-center text-stone-800  leading-[2]">
        © 2024 PantryPal. Made with ❤️ for home cooks. Powered by
        <span className="ml-2 pb-2 pt-1 px-5 rounded-full bg-stone-800">
          <img src={gemini} alt="Gemini AI" className="h-5 inline" />
        </span>
      </div>
    </div>
  )
}
export default Footer
