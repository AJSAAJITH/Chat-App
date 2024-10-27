import React from 'react'
import GenderRadio from './GenderRadio'

function SignUp() {
  return (
    <div className='flex flex-col items-center justify-center mx-auto min-w-96'>
      <div className='w-full p-6 bg-gray-400 bg-opacity-0 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          SignUp
          <span className='text-blue-500'>ChatApp</span>
        </h1>

        <form>
          <div>
            <label className='label'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input
              type='text'
              placeholder='FullName'
              className='w-full h-10 input input-bordered'
            />
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input
              type='text'
              placeholder='Username'
              className='w-full h-10 input input-bordered'
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
            />
          </div>
          <div>
            <label className='label'>
              <span className='text-base label-text'>Comfirm Password</span>
            </label>
            <input
              type='password'
              placeholder='Comfirm Password'
              className='w-full h-10 input input-bordered'
            />
          </div>

          {/* GENDER Radio  */}
          <GenderRadio/>
          

          <div className='text-center'>
            <a href='#' className='inline-block mt-2 text-sm hover:underline hover:text-blue-800'>
              Already have an account?</a>
          </div>

          <div>
            <button className='h-10 mt-2 btn btn-block'>
              <span>SignUp</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}


// STARTER CODE FOR SIGNUP
// function SignUp() {
//   return (
//     <div className='flex flex-col items-center justify-center mx-auto min-w-96'>
//       <div className='w-full p-6 bg-gray-400 bg-opacity-0 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'>
//           SignUp
//           <span className='text-blue-500'>ChatApp</span>
//         </h1>

//         <form>
//           <div>
//             <label className='label'>
//               <span className='text-base label-text'>Full Name</span>
//             </label>
//             <input
//               type='text'
//               placeholder='FullName'
//               className='w-full h-10 input input-bordered'
//             />
//           </div>
//           <div>
//             <label className='label'>
//               <span className='text-base label-text'>Username</span>
//             </label>
//             <input
//               type='text'
//               placeholder='Username'
//               className='w-full h-10 input input-bordered'
//             />
//           </div>
//           <div>
//             <label className='label'>
//               <span className='text-base label-text'>Password</span>
//             </label>
//             <input
//               type='password'
//               placeholder='Password'
//               className='w-full h-10 input input-bordered'
//             />
//           </div>
//           <div>
//             <label className='label'>
//               <span className='text-base label-text'>Comfirm Password</span>
//             </label>
//             <input
//               type='password'
//               placeholder='Comfirm Password'
//               className='w-full h-10 input input-bordered'
//             />
//           </div>

//           {/* GENDER Radio  */}
//           <GenderRadio/>
          

//           <div className='text-center'>
//             <a href='#' className='inline-block mt-2 text-sm hover:underline hover:text-blue-800'>
//               Already have an account?</a>
//           </div>

//           <div>
//             <button className='h-10 mt-2 btn btn-block'>
//               <span>SignUp</span>
//             </button>
//           </div>

//         </form>
//       </div>
//     </div>
//   )
// }

export default SignUp