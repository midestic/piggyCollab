import React from 'react'
import { BsArrowReturnRight } from "react-icons/bs";

const Security = () => {
  return (
    <>
       <div className='bg-[#F2F7F8]'>
         <div className=' max-w-[1280px] mx-auto flex py-[120px] px-[50px] gap-5 max-tablet:flex max-tablet:flex-col max-tablet:items-center max-tablet:text-center max-tablet:max-w-[600px] max-tablet:mb-6'>
            <section className='flex items-center' >
                <img src="/images/securitylock.svg" alt=""/>
            </section>
            <section className='flex flex-col gap-[20px]'>
                <h3 className='text-[#122231] text-2xl font-bold leading-8'>Your security is our priority</h3>
                <p className='text-[#3D4F60] text-[15.9px] leading-5 w-[58%]'>PiggyVest uses the highest level of Internet Security and it is secured by 256 bits SSL security encryption to ensure that your information is comepletely protected from fraud.</p>
                <a href="#">
                    <main class="flex gap-2">
                    <p className='text-[#122231] flex items-start'><BsArrowReturnRight size={25}/></p>
                        <p className='text-[#122231] font-semibold pt-[6px] hover:border-b-4'>More on our security measures</p>
                    </main>
                </a>
            </section>
        </div>
       </div>

    </>
  )
}

export default Security