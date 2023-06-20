import React from 'react';
import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet, useNavigation } from 'react-router-dom';
import Loader from './Loader.jsx';

export default function AppLayout() {
    const navigation = useNavigation ();
    const isLoading = navigation.state === 'loading';

  return (
    <div className=' grid h-screen grid-row-[auto_1fr_auto]  '>
    {isLoading && <Loader />}
        <Header />
        <div className='my-10 overflow-scroll'>

       
        <main className='mx-auto max-w-3xl overflow-scroll '>
            <h1>
               
            </h1>
            <Outlet />
        </main>
        </div>
        <CartOverview />
    </div>
  )
}
