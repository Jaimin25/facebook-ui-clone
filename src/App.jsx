
import './App.css'

function App() {

  return (
    <div>
      <div className='container flex sm:flex-col md:flex-col lg:flex-row mx-auto mt-28 items-center justify-center'>
        <div className='left mx-14 w-4/5 mb-6'>
          <img className='w-60' src='./src/assets/fb.svg'></img>
          <p className='text-2xl mx-6'>Facebook helps you connect and share with the people in your life.</p>
        </div>
        <div className='right flex flex-col bg-white p-8 rounded-lg shadow-lg items-center w-[396px] mr-10 relative'>
          <input className='text-[17px] w-[364px] pt-[14px] pb-[14px] pr-4 pl-4 mt-3 border-[#dddfe2] border-2 rounded-md' type='email' placeholder='Email address or phone number'></input>
          <input className='text-[17px] w-[364px] pt-[14px] pb-[14px] pr-4 pl-4 mt-3 border-[#dddfe2] border-2 rounded-md' type='password' placeholder='Password'></input>
          <button className='text-xl bg-[#1877f2] rounded-md text-white w-[364px] leading-[48px] my-4 font-bold'>Log in</button>
          <span className='text-sm text-[#1877f2] font-medium mb-4'>Forgotten password?</span>
          <hr className='w-full'/>
          <button className='bg-[#42b72a] text-[17px] pr-4 pl-4 rounded-md text-white leading-[48px] my-5 font-bold'>Create new account</button>
          <span className='absolute -bottom-12 text-sm'><span className='font-bold hover:underline cursor-pointer'>Create a Page</span> for a celebrity, brand or business.</span>
        </div>
      </div>
    </div>
  )
}

export default App
