import React from 'react'
import dynamic from 'next/dynamic';
const Login = dynamic(() => import('../components/Login'), { ssr: false });


const login = () => {
  return (
    <div>
      <React.Fragment>
        <Login></Login>
      </React.Fragment>
    </div>
  )
}

export default login

