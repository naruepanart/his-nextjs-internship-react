import React, { PureComponent } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
const Navbarmain = dynamic(() => import('../components/home/Navbarmain'), {
    ssr: false,
})
const TabsMain = dynamic(() => import('../components/home/TabsMain'), {
    ssr: false,
})
const Sendpatient = dynamic(() => import('../components/home/Sendpatient'), {
    ssr: false,
})


export default class sendpatient extends PureComponent {
    render() {
        return (
            <div>
                <Head>
                    <title>HIS - Sendpatient</title>
                    <link
                        rel="stylesheet"
                        href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="stylesheet"
                        href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
                        integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
                        crossOrigin="anonymous"
                    />
                </Head>
                <Navbarmain />
                <TabsMain />
                <Sendpatient />
            </div>
        )
    }
}

