'use client'
import { useState } from "react";
import { useForm } from "react-hook-form";

import InputRadio from "./components/InputRadio";
import { IoMdStar } from "react-icons/io";

export default function Home() {

  const [selectedOption, setSelectedOption] = useState()
  
      const handleChange = (event) => {
          setSelectedOption(event.target.value)
      }
     
  const {
    register,
    handleSubmit,
    setError,
    formState: {errors},
  } = useForm()
  
  const onSubmit = (data) => {
    if (!data.consent) {
      setError("consent", {
        type: "manual",
        message: "To submit this form, please consent to being contacted"
      })
    }
    return
  }

  return (
    <div className="flex bg-[#dff1e7] h-screen w-screen items-center justify-center font-karla md:h-full ">
      <div className="flex flex-col w-[1216px] items-center md:my-10">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8 bg-white rounded-xl p-5 ">
          <h1 className="text-2xl font-bold">Contact Us</h1>
          <div className="flex gap-5 justify-between md:flex-col">
            
            <div className="flex flex-col w-[300px] h-full gap-3 md:w-full">
              <div className="flex gap-1">
                  <label>First Name</label>
                  <IoMdStar className="text-[#2b4246] w-2"/>
              </div>
                <input {...register("firstName", {required: "This field is required"})} type="name" className={`border border-[#87a3a6] hover:border-[#0c7d69] rounded-md pl-2 h-12 focus:outline-none focus:ring-1 focus:ring-[#2b4246] ${errors.firstName ? "border-red-500" : "border-gray-300"}`}/>
                {errors.firstName && (
                  <p className="text-sm text-red-500 mt-1">{errors.firstName.message}</p>
                )}
            </div>

            <div className="flex flex-col w-[300px] h-full gap-3 md:w-full">
              <div className="flex gap-1">
                  <label>Last Name</label>
                  <IoMdStar className="text-[#2b4246] w-2"/>
              </div>
                <input {...register("lastName", {required: "This field is required"})} type="name" className={`border border-[#87a3a6] hover:border-[#0c7d69] rounded-md pl-2 h-12 focus:outline-none focus:ring-1 focus:ring-[#2b4246] ${errors.lastName ? "border-red-500" : "border-gray-300"}`}/>
                {errors.lastName && (
                  <p className="text-sm text-red-500 mt-1">{errors.lastName.message}</p>
                )}
            </div>

          </div>

          <div className="flex flex-col h-full gap-3">
            <div className="flex gap-1">
                <label>Email Address</label>
                <IoMdStar className="text-[#2b4246] w-2"/>
            </div>
            <input {...register("email", {required: "Please enter a valid email address"})} className={`border border-[#87a3a6] hover:border-[#0c7d69] rounded-md pl-2 h-12 focus:outline-none focus:ring-1 focus:ring-[#2b4246] ${errors.email ? "border-red-500" : "border-gray-300"}`} type="email"></input>
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex gap-1">
              <label>Query Type</label>
              <IoMdStar className="text-[#2b4246] w-2"/>
            </div>

            <div className="flex justify-between gap-10 md:flex-col">

                  <label className={`${selectedOption === "General" ? "bg-[#dff1e7] border-[#2b4246]" : ""}`}>
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
            <textarea {...register ("message", {required: "This field is required"})} className={`border border-[#87a3a6] hover:border-[#0c7d69] rounded-md h-[100px] p-3 resize-none focus:outline-none focus:ring-1 focus:ring-[#2b4246] ${errors.message ? "border-red-500" : "border-gray-300"}`}></textarea>
            {errors.message && (
              <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
            )}
          </div>

          <div className="flex gap-3">
            <input {...register("consent")} type="checkbox"/>
            <label>I consent to being contacted by the team</label>
          </div>
          {errors.consent && (
            <p className="text-sm text-red-500">{errors.consent.message}</p>
          )}

          <button className="bg-[#0c7d69] hover:bg-[#2b4246] h-12 rounded-md text-white">Submit</button>
        </form>
      </div>
    </div>
  )
}
