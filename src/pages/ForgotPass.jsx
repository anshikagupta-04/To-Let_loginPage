import './border.css';
import { MdOutlineMail } from "react-icons/md";
import { FaSchool } from "react-icons/fa";

const ForgotPass = () => {
    return (
        <div className='flex justify-center items-center w-screen h-screen min-h-screen bg-black'>
            <div className='outer-div w-96 h-[450px] min-w-52 p-[5.5px] flex justify-center items-center'>
                <div className="w-full h-full p-10 flex flex-col justify-center items-center gap-4 bg-black z-10 rounded-tl-[50px] rounded-br-[50px]">
                    <form action="">
                        <h1 className='text-white text-3xl font-semibold text-center'>Forgot Password</h1>
                        <div className='flex gap-3 mt-10 justify-center items-center'>
                            <MdOutlineMail size={'20px'} className='text-white'/>
                            <input type="email" placeholder='Email' required className='w-60 bg-transparent border-b-gray-400 border-b px-1'/>
                        </div>
                        <div className='flex gap-3 mt-10 justify-center items-center'>
                            <FaSchool size={'20px'} className='text-white'/>
                            <input type="text" placeholder='Your First School' required className='w-60 bg-transparent border-b-gray-400 border-b px-1'/>
                        </div>
                        <button className='w-64 h-9 text-white mt-12 rounded-3xl border-[#c8a217] border hover:bg-[#c8a217]'>
                            Send Reset Link
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ForgotPass