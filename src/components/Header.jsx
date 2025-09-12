import logo from '../assets/Full_logo-bg.png'

const Header = () => {
  return (
    <div className="w-screen bg-[#D1FEC0]">
      <div className="w-[90%] md:w-[80%] max-w-[1700px] m-auto py-4 flex flex-col md:flex-row items-start md:items-center justify-between">
        <img
          src={logo}
          alt="PantryPal"
          className="mb-2 md:mb-0 h-14 md:h-[4.5rem]"
        />
        <h2 className="text-xl">Your smart kitchen companion</h2>
      </div>
    </div>
  )
}
export default Header
