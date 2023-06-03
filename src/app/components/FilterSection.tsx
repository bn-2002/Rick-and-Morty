import { useState } from "react"
import FilterButtonComp from "./FilterButtonComp"

const FilterSection = () => {
    return (
        <div className="flex gap-2 font-Dongle text-[1.8rem] text-white z-50 relative">
            <FilterButtonComp name="alive" type="status" />
            <FilterButtonComp name="dead" type="status" />
            <FilterButtonComp name="unknown status" value="unknown" type="status"/>
            <div className="h-[42px] w-[2px] rounded-sm mx-2 bg-gray-400"></div>
            <FilterButtonComp name="male" type="gender" />
            <FilterButtonComp name="female" type="gender" />
            <FilterButtonComp name="genderless" type="gender"/>
            <FilterButtonComp name="unknown species" value="unknown" type="gender"/>
        </div>
    )
}

export default FilterSection