import { useState } from 'react';
import signin from '../images/signin.jpg';
import { auth } from '../firebase/setup';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

const Signin = () => {

const [phone, setPhone] = useState('');
const [user, setUser]=useState(null);
const [otp, setOpt]=useState("");

const getOtp = async () =>{
 try {
  const recaptcha = new RecaptchaVerifier(auth,"recaptcha",{})
  const confirmation = await signInWithPhoneNumber(auth,phone,recaptcha)
  setUser(confirmation)
 } catch (error) {
  console.error(error);
 }
}

const verify =async() =>{
 try {
 const data = await user.confirm(otp)
  console.log(data)
 } catch (error) {
  console.error(error);
 }
}


  return (
    <div className='ml-30 grid grid-cols-2 h-screen bg-black'>
        <div style={{backgroundImage:`linear-gradient(to left,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(${signin})`}}>

        </div>
        <div className='ml-36'>
        <h1 className='text-white text-xl font-semibold mt-24 mb-4 '>Log in or sign up to continue</h1>
        <PhoneInput inputStyle={{backgroundColor:'black', color:'white'}} 
        country={'in'}  placeholder='Enter Mobile Number' value={phone} onChange={phone =>setPhone("+" + phone)}/>
        <p className='text-gray-500 text-xs mt-3'>By proceeding you confirm that you are above 18 years of age and agree to the
             <br/>Privacy Policy & Terms of Use.</p>
             {phone && <button onClick={getOtp} className="mt-35 w-80 h-12  bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get OTP </button>}
              <div id ='recaptcha' className='mt-2'>
                

              </div>
              {phone && <input onClick={(e)=> setOpt(e.target.value) } type="text" id="example-input" name="example-input" className="mt-3 p-2 block w-80 border rounded-md shadow-sm
               focus:ring-blue-500 focus:border-blue-500 sm:text-sm" placeholder="Enter your OTP"/>}

              {otp && <button onClick={verify} className="mt-10 w-80 h-12  bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Verify 
               </button>}

              <h3 className='mt-24 ml-2 text-gray-500'>Having trouble logging in? <span className='text-blue-500'>Get help</span></h3>
        </div>

    </div>
    
  )
}

export default Signin;