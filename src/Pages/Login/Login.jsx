import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';

const Login = () => {
    const captchaRef = useRef(null);
    const [disable,setDisable] = useState(true);
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[]);

    const handleLogin = (e)=>{
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const pass = from.password.value;
        console.log(email,pass);
    }

    const handleValidateCaptcha = ()=>{
        const userCaptcha = captchaRef.current.value;
        if(validateCaptcha(userCaptcha)==true){
            setDisable(false)
        }else{
            setDisable(true)
        }
    }
  return (
    <div className="py-24">
      <div className="flex flex-col max-w-md m-auto p-6 rounded-md sm:p-10 dark:bg-gray-50 dark:text-gray-800">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm dark:text-gray-600">
            Sign in to access your account
          </p>
        </div>
        <form onSubmit={handleLogin} className="">
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="demo@gmail.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
            </div>
            <div>
                <label >
                    <LoadCanvasTemplate />
                </label>
              <input
                type="text"
                ref={captchaRef}
                name="captcha"
                placeholder="Enter Your Captcha"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
              />
              <button onClick={handleValidateCaptcha} className='btn btn-sm w-full my-2'>validate</button>
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <input
                className="w-full px-8 py-3 font-semibold rounded-md btn "
                disabled={disable}
                type="submit"
                value="Sign in"
              />
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-600">
              Don't have an account yet?
              <a
                rel="noopener noreferrer"
                href="#"
                className="hover:underline dark:text-violet-600"
              >
                Sign up
              </a>
              .
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
