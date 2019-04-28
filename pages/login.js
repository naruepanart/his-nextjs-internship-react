import React from 'react'
import dynamic from 'next/dynamic';
import Head from 'next/head';
const Login = dynamic(() => import('../components/Login'), { ssr: false });


const login = () => {
  return (
    <div>
      <React.Fragment>
      <Head>
          <title>HIS - Login</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"></link>
        </Head>
        <Login></Login>
      </React.Fragment>
    </div>
  )
}

export default login

