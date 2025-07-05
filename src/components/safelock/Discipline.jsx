import React from 'react'

const Discipline = () => {
  return (
    <div  className='px-[50px]  pb-[100px] bg-[#F2F7F8]'>

      <section className='text-center py-[100px]'>
<h1 className='font-bold text-[55px] text-[#122231]'>Stay disciplined and avoid temptation</h1>
<p className='text-[#3D4F60]'>Lock funds to avoid temptations. Earn your interest upfront and paid instantly.</p>
      </section>



<section className='flex gap-[50px] '>
 <main className='flex flex-col justify-between items-center w-[400px] pt-[30px]  px-[30px]  bg-white rounded-[15px]'>
    <div>
  <h1 className='text-[#2295F2] font-bold text-[36px] leading-10 pb-5'>You're in control</h1>
    <p>You can lock for as little as 10 days or as much as 365 days.</p>

    </div>
  

    <div>
        <img src="../../../public/IMG-1.png" alt=""  className='max-w-[290px] h-[280px]'/>
    </div>
 </main>




 <main className='flex flex-col justify-between bg-white w-[400px] pt-[30px]  px-[30px]  rounded-[15px]' >
<div>
 <h1 className='text-[#2295F2] font-bold text-[36px] leading-10 pb-5'>Manage your money</h1>
 <p>Set aside funds for a fixed period of time without having access to it until maturity.</p>

</div>


 <div>
<img src="../../../public/frame-2.png" alt="" className='max-w-[290px] h-[225px]' />
 </div>
 </main>



 <main className='flex flex-col justify-between gap-2.5 bg-white  w-[400px] pt-[30px]  px-[30px]  rounded-[15px]'>

<div>
<h1 className='text-[#2295F2] font-bold text-[36px] leading-10 pb-5'>Earn interest upfront</h1>
<p className='text-[#3D4F60] pb-3'>Up to 20% interest per annum, paid upfront.</p>

</div>


<div>
    <img src="../../../public/frame 3.png" alt=""  className='max-w-[300px] h-[450px]'/>
</div>

 </main>

</section>

    </div>
  )
}

export default Discipline
