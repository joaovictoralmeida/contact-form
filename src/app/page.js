'use client'
import { useState } from "react";

import Input from "./components/Input";
import InputRadio from "./components/InputRadio";
import { IoMdStar } from "react-icons/io";
import InputMail from "./components/InputMail";

export default function Home() {

  const [selectedOption, setSelectedOption] = useState()
  
      const handleChange = (event) => {
          setSelectedOption(event.target.value)
      }

  return (
    <div className="flex bg-[#dff1e7] h-screen w-screen items-center justify-center font-karla md:h-full ">
      <div className="flex flex-col w-[1216px] items-center md:my-10">
        <form className="flex flex-col gap-8 bg-white rounded-xl p-5 ">
          <h1 className="text-2xl font-bold">Contact Us</h1>
          <div className="flex gap-5 justify-between md:flex-col">
            <Input
            label="First Name"
            type="name"
            />
        
            <Input
            label="Last Name"
            type="name"
            />

          </div>

          <InputMail
          type="email"
          label="Email Address"
          />

          <div className="flex flex-col gap-3">
            <div className="flex gap-1">
              <label>Query Type</label>
              <IoMdStar className="text-[#2b4246] w-2"/>
            </div>

            <div className="flex justify-between gap-10 md:flex-col">

                  <label className={`${selectedOption === "General" ? "bg-[#dff1e7] border-[#2b4246]" : ""} cursor-pointer`}>
                    <InputRadio
                    type="radio"
                    label="General Enquiry"
                    name="choice"
                    value="General"
                    checked={selectedOption === 'General'}
                    onChange={handleChange}
                    />
                  </label>

                  <label className={`${selectedOption === "Support" ? "bg-[#dff1e7] border-[#2b4246]" : ""}`}>
                    <InputRadio
                    type="radio"
                    label="Support Request"
                    name="choice"
                    value="Support"
                    checked={selectedOption === 'Support'}
                    onChange={handleChange}
                    />
                    
                  </label>
                
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-1">
              <label>Message</label>
              <IoMdStar className="text-[#2b4246] w-2"/>
            </div>
            <textarea required className="border border-[#87a3a6] hover:border-[#0c7d69] rounded-md h-[100px] p-3 resize-none focus:outline-none focus:ring-1 focus:ring-[#2b4246]"></textarea>
          </div>

          <label className="flex gap-3">
            <input required type="checkbox"/>I consent to being contacted by the team
          </label>

          <button className="bg-[#0c7d69] hover:bg-[#2b4246] h-12 rounded-md text-white">Submit</button>
        </form>
      </div>
    </div>
  )
}
