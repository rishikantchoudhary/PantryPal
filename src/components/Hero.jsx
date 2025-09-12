import hero_image from '../assets/kitchen.jpg'

const Hero = () => {
  return (
    <div className="my-10 md:my-16 w-[90%] md:w-[80%] max-w-[1700px] m-auto flex flex-col md:flex-row items-start md:items-center justify-between ">
      <div className="md:flex-1">
        <h2 className='font-["Urbanist"] text-stone-950 font-semibold text-3xl md:text-5xl mb-2 md:mb-5 text-center md:text-start'>
          What's in your pantry?
        </h2>
        <h3 className=" w-[70%] m-auto md:m-0 text-stone-500 font-normal text-lg md:text-xl text-center md:text-start">
          Enter your available ingredients and discover delicious recipes you
          can make right now.
        </h3>
      </div>
      <div className="w-[100%] md:flex-1 md:flex md:justify-end">
        <img
          src={hero_image}
          alt="Kitchen Image"
          className="mx-auto my-14 md:m-0 w-[100%] md:w-[90%] rounded-xl max-w-[450px] md:max-w-[600px]"
        />
      </div>
    </div>
  )
}
export default Hero
