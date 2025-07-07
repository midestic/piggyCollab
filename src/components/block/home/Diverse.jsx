import React from 'react'

const Diverse = () => {
  return (
    <>
     <div className='max-w-[1280px] bg-white mx-auto '>
        <div  className='mb-[100px] max-tablet:flex-col max-tablet:items-center'>
            <section className=' text-center my-[90px] '>
                <p className='text-[51px] font-extrabold leading-16 mb-5 text-[#122231]'>Diverse ways to Invest</p>
                <p className='text-[24px]  leading-8 text-[rgb(61,79,96)] '>Grow your money and invest for your future confidently.</p>
            </section>
                <div className='mx-auto'>
                    <section className=' rounded-[30px] flex relative mx-[40px] py-16 px-12 flex-col gap-10 bg-[#7913E5] h-[500px] w-auto text-[white]'>
                <h1 className='text-4xl leading-[50px] font-bold'>Earn Up to 35% returns</h1>
                <p className='text-xl w-[25%] text-[rgb(254,214,241)] leading-7'>Invest securely and confidently on the go. Grow your money confidently by investing in pre-vetted investment <br/>opportunities.</p>
                <a href="#">
                    <main className="flex gap-1 absolute bottom-[10%]">
                        <img src="/images/arrowrightwhite.svg" alt=""/>
                        <p className='text-xl leading-7 '>Learn about investment</p>
                    </main>
                </a>    
                <main className="flex justify-end absolute bottom-0 right-0 mr-11 h-[436px] w-auto">
                    <img src="/images/myinvest.avif" alt=""/>
                </main>
            </section>
                </div>
        </div>
     </div>
    </>
  )
}

export default Diverse