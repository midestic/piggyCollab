import Logo from '../assets/images/Blog/blog_logo.svg'
import BlogNav from '../components/BlogNav'
import Frame from '../assets/images/Blog/imgi_17_Frame-1000001336-1.png'
import Mainimg from '../assets/images/Blog/Blog-featured-images.jpg'
import Card from '../components/reusable/BlogProps'
import  Blogbtn from '../components/reusable/PiggyBtn'


const blog = () => {
  return (
    <div className=' '>
      <BlogNav />
      <div className='position: relative'>
        <img src={Frame} alt="" />
        <div className='position: absolute bottom-7 left-120 text-center'>
        <h2 className=''>Which PiggyVest Feature are you?</h2>
    <a href="http://" className='text-blue-800 underline '>Click to take quiz</a>
      </div>
      </div>
      <div className='my-[50px] h- w-[100%]'>
        <img src={Mainimg} alt="" className='w-[100%]' />
      </div>
      <div className='max-w-[1200px] mx-auto flex justify-between items-start gap-10 p-6'>
        <div className=' w-[600px] my-6' >
          <h1 className='text-[42px] font-[400] w-[450px]'>Introducing: Piggyvest Wellness Checks</h1>
          <p>Ifeoluwa Adekoya</p>
          <button className='self-start bg-blue-700 text-white py-[8px] px-[22px] rounded-[20px] my-7'>Annoucements</button>
        </div>
        <div className='flex flex-col gap-5 w-[600px] items-start'> '
          <h3 className='text-[21px] font-[500] text-blue-700'>Most popular</h3>
          <div className='flex justify-between items-center gap-5 border-b-2 border-gray-100'>
             <h4 className='text-[18px] font-[400] w-[350px]'>Building Wealth in Your 20s: Practical Money-Saving Strategies for Young Nigerians</h4>
          <button className='self-end bg-blue-700 text-white py-[8px] px-[18px] rounded-[20px] my-7'>Money Tips</button>
          </div>
          <div className='flex justify-between items-center gap-5 border-b-2 border-gray-100'>
             <h1 className='text-[18px] font-[400] w-[350px]'>My Money Mistake: My Family Lost Over ₦10 Million To A Ponzi Scheme</h1>
          <button className='self-end bg-pink-500 text-white py-[8px] px-[14px] rounded-[20px] my-7'>My Money Mistake</button>
          </div>
          <div className='flex justify-between items-center gap-5'>
             <h1 className='text-[18px] font-[400] w-[350px]'>Women & Money: Ore Eni-Ibukun Is Prioritising Work-Rest Balance</h1>
          <button className='self-end bg-green-700 text-white py-[8px] px-[18px] rounded-[20px] my-7'>Women & money</button>
          </div>
        </div>
      </div>

      <div className='max-w-[1200px] mx-auto p-6'>
        <div className='flex  items-center w-full gap-5'>
          <h1 className='text-[40px] font-[600] mr-[30px]'>Most Recent</h1>
          <hr className='w-150 border-t-2 border-gray-200'/>
          <button className='border-1 border-gray-200 py-[13px] px-[80px] '>View all</button>
        </div>

        <div className=''>
          <div className='w-[370px] rounded overflow-hidden shadow-lg bg-white flex flex-col items-center bg-white rounded-lg pb-[20px]'>
            <Card
                imageUrl='https://blog.piggyvest.com/wp-content/uploads/elementor/thumbs/Untitled-design-42-r5ctc1jwbfjpezdsihqo927uxzhz0rvntl51t4t21s.jpg'
                title='Building Wealth in Your 20s: Practical Money-Saving Strategies for Young Nigerians'
                description='Building Wealth in Your 20s: Practical Money-Saving Strategies for Young Nigerians'
                Text='Money Tips'
                />
                
            
      </div>
</div>
</div>
    </div>
  )
}

export default blog