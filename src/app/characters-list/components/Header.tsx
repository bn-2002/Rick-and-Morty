import './Header.css'

const Header = () => {
  return (
<div className="container bg-gray-800">
    <div className="shape-blob bg-gray-900"></div>
    <div className="shape-blob one bg-gray-900"></div>
    <div className="shape-blob two bg-gray-900"></div>
    <h1 className='text-white font-sans text-[90px] z-10 font-extrabold title '>Rick and Morty</h1>
</div>
  )
};

export default Header;