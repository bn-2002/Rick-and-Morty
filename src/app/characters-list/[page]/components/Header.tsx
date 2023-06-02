const Header = () => {
  return (
<div className="bg-gray-800 p-[40px] md:p-[60px] flex flex-col gap-4 items-center justify-center">
    <h1 className='text-white font-sans text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] z-10 font-extrabold title '>Rick and Morty</h1>
    <input type="search" className="border-none outline-none px-4 py-2 rounded-sm w-[50%]" placeholder="search character name..."/>
</div>
  )
};

export default Header;
