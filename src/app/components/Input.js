import { IoMdStar } from "react-icons/io";

export default function Input({label, type}) {
    return (
        <div className="flex flex-col w-[300px] h-full gap-3 md:w-full">
            <div className="flex gap-1">
                <label>{label}</label>
                <IoMdStar className="text-[#2b4246] w-2"/>
            </div>
            <input required className="border border-[#87a3a6] rounded-md pl-2 h-12  hover:border-[#0c7d69] focus:outline-none focus:ring-1 focus:ring-[#2b4246]" type={type}/>
        </div>
    )
}