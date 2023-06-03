import './Blobs.scss'

const Blobs = () => {
    return <>
            <div className="blob blob-1 h-[350px] w-[400px] md:h-[400px] md:w-[450px] lg:h-[400px] lg:w-[500px] xl:h-[600px] xl:w-[700px] left-[-200px] top-[-200px] rotate-[-180deg] opacity-10 fixed bg-[#404e5c]"></div>
            <div className="hidden lg:block blob blob-2 h-[400px] w-[450px] right-[-30px] top-[-30px] rotate-[-180deg] opacity-10 fixed bg-[#404e5c]"></div>
           </>
}

export default Blobs

