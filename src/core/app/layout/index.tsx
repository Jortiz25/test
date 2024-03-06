import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar'

// import { useEffect } from 'react';

function RootLayout() {
  //   useEffect(() => {
  //     const openPublication = () => {
  //       if () {
  //         document.body.style.overflow = 'hidden';
  //       } else {
  //         document.body.style.overflow = '';
  //       }
  //     };
  //     openPublication();
  //   }, [isModalOpen]);

  return (
    <div className="container">
      <Navbar />
      <div className="content-container">
        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default RootLayout
