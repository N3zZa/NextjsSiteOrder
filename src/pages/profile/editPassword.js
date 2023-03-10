import EditPasswordComponent from 'components/EditPasswordComponent';
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import ProfileMenu from 'components/ProfileMenu';
import Head from 'next/head';

import React from 'react'

const editPassword = () => {

  
  return (
    <div className="font-nunito px-5">
      <Head>
        <title>Профиль, сменить пароль</title>
        <meta name="description" content="Orders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logoimg.svg" />
      </Head>

      <Header />
      <div className="max-w-[1400px] mx-auto mt-[150px] space-y-10">
        <ProfileMenu />
        <EditPasswordComponent />
        <Footer />
      </div>
    </div>
  );
}

export default editPassword