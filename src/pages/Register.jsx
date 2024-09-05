import './border.css';
import { MdOutlineMail } from "react-icons/md";
import { FaLock } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { BiSolidUserDetail } from "react-icons/bi";
import { FaSchool } from "react-icons/fa";

const Register = () => {
    return (
        <div className='flex justify-center items-center w-screen h-screen min-h-screen bg-black'>
            <div className='outer-div w-96 h-[600px] min-w-52 p-[5.5px] flex justify-center items-center'>
                <div className="w-full h-full p-10 flex flex-col justify-center items-center gap-4 bg-black z-10 rounded-tl-[50px] rounded-br-[50px]">
                    <form action="">
                        <h1 className='text-white font-semibold text-3xl text-center'>Register</h1>
                        <div className='flex gap-2 mt-10 justify-center items-center'>
                            <FaUser size={'18px'} className='text-white' />
                            <input type="text" placeholder='Username' required className='w-60 bg-transparent border-b-gray-400 border-b px-1 text-white' />
                        </div>
                        <div className='flex gap-2 mt-10 justify-center items-center'>
                            <MdOutlineMail size={'18px'} className='text-white' />
                            <input type="email" placeholder='Email' required className='w-60 bg-transparent border-b-gray-400 border-b px-1 text-white' />
                        </div>
                        <div className='flex gap-2 mt-10 justify-center items-center'>
                            <FaLock size={'20px'} className='text-white' />
                            <input type="password" placeholder='Password' required className='w-60 bg-transparent border-b-gray-400 border-b px-1 text-white' />
                        </div>
                        <div className='flex gap-2 mt-10 justify-center items-center'>
                            <FaPhone size={'18px'} className='text-white' />
                            <input type="tel" placeholder='Phone Number' required className='w-60 bg-transparent border-b-gray-400 border-b px-1 text-white' />
                        </div>
                        <div className='flex gap-2 mt-10 justify-center items-center'>
                            <BiSolidUserDetail size={'20px'} className='text-white' />
                            <select className='w-60 bg-transparent border-b-gray-400 border-b px-1 text-white' >
                                <option value="volvo">Select Role</option>
                                <option value="saab">Buyer</option>
                                <option value="fiat">Tenant</option>
                                <option value="audi">Owner</option>
                                <option value="audi">User</option>
                                <option value="audi">Content Creater</option>
                                <option value="audi">Admin</option>
                            </select>
                        </div>
                        <div className='flex gap-2 mt-10 justify-center items-center'>
                            <FaSchool size={'18px'} className='text-white' />
                            <input type="text" placeholder='Your First School' required className='w-60 bg-transparent border-b-gray-400 border-b px-1 text-white' />
                        </div>
                        <button className='w-64 h-9 text-white mt-12 rounded-3xl border-[#c8a217] border hover:bg-[#c8a217]'>
                            Register
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register