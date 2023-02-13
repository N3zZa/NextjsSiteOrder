import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import ProfileOrders from 'components/ProfileOrders'
import Head from 'next/head'
import React from 'react'

const index = () => {
  return (
    <div>
      <Head>
        <title>Профиль, заказы</title>
        <meta name="description" content="Orders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoimg.svg" />
      </Head>

      <Header />
      <div className="max-w-[1400px] mx-auto mt-[150px]">
        <ProfileOrders />
        {/* <NoOrders /> */}
        <Footer />
      </div>
    </div>
  );
}

export default index