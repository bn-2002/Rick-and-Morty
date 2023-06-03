import FilterSection from "@/app/components/FilterSection";
import SearchComp from "@/app/components/SearchComp";
import RickAndMortyTitle from "@/app/icons/Rick&Morty";

const Header = () => {
  return (
          <div className="bg-gray-800 p-[40px] md:p-[60px] flex flex-col gap-5 items-center justify-center">
              <RickAndMortyTitle/>
              <SearchComp/>
              <FilterSection/>
          </div>
  )
};

export default Header;
