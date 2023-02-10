import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import NoOrders from 'components/NoOrders'
import ProfileOrders from 'components/ProfileOrders'
import React from 'react'

const index = () => {
  return (
    <div>
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