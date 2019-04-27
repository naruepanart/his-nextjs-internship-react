import React from 'react'
import Head from 'next/head';
import dynamic from 'next/dynamic';
const Navbarmain = dynamic(() => import('../components/Navbarmain'), { ssr: false });
const TabsMain = dynamic(() => import('../components/TabsMain'), { ssr: false });

const Index = () => {
    return (
        <React.Fragment>
            <Head>
                <title>HIS - Homepage</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"></link>
            </Head>
            <Navbarmain></Navbarmain>
            <TabsMain></TabsMain>
            <h1><center>Homepage</center></h1>
        </React.Fragment>
    )
}

export default Index
