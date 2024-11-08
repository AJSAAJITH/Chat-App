import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const {loading, login} = useLogin();

    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(username, password);
        login({username, password});

    }

    return (
        <div className='flex flex-col items-center justify-center mx-auto min-w-96'>
            <div className='w-full p-6 bg-gray-400 bg-opacity-0 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
                    <span className='text-blue-500'>ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit} className='flex flex-col gap-2 mt-3'>
                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input
                            type='text'
                            placeholder='Username'
                            className='w-full h-10 input input-bordered'
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className='label'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input
                            type='password'
                            placeholder='Password'
                            className='w-full h-10 input input-bordered'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className='text-center'>
                        <Link to='/signup' className='inline-block mt-2 text-sm hover:underline hover:text-blue-800'>
                            Don't have an account?</Link>
                    </div>

                    <div>
                        <button type='submit' className='h-10 mt-2 btn btn-block' disabled={loading}>
                            <span>{loading ? 'Loading...': 'Login'}</span>
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login


//// STARTER CODE FOR THE LOGIN

// function Login() {
//     return (
//         <div className='flex flex-col items-center justify-center mx-auto min-w-96'>
//             <div className='w-full p-6 bg-gray-400 bg-opacity-0 rounded-lg bg-clip-padding backdrop-filter // backdrop-blur-lg'>
//                 <h1 className='text-3xl font-semibold text-center text-gray-300'>Login
//                     <span className='text-blue-500'>ChatApp</span>
//                 </h1>

//                 <form className='flex flex-col gap-2 mt-3'>
//                     <div>
//                         <label className="flex items-center gap-2 input">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 viewBox="0 0 16 16"
//                                 fill="currentColor"
//                                 className="w-4 h-4 opacity-70">
//                                 <path
//                                     d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
//                             </svg>
//                             <input type="text" className="grow" placeholder="Username" />
//                         </label>

//                     </div>

//                     <div>
//                     <label className="flex items-center gap-2 input input-bordered">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 viewBox="0 0 16 16"
//                                 fill="currentColor"
//                                 className="w-4 h-4 opacity-70">
//                                 <path
//                                     fillRule="evenodd"
//                                     d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
//                                     clipRule="evenodd" />
//                             </svg>
//                             <input type="password" className="grow" placeholder="Password"/>
//                         </label>
//                     </div>

//                     <div className='text-center'>
//                         <a href='#' className='inline-block mt-2 text-sm hover:underline hover:text-blue-800'>
//                         Don't have an account?</a>
//                     </div>

//                     <div>
//                         <button className='mt-2 btn btn-block'>
//                             <span>Login</span>
//                         </button>
//                     </div>
//                 </form>

//             </div>
//         </div>
//     )
// }

// export default Login