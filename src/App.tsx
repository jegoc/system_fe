import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoadingPage } from './components/loader';
import { encryptPath } from './components/encryptor';


import Test from './pages/test';

import Home from './pages/common/home';
import Header from './pages/common/header';
import About from './pages/common/about';
import Services from './pages/common/services';
import Contact from './pages/common/contact';
import Footer from './pages/common/footer';
import Pricing from './pages/common/pricing';
import FAQ from './pages/common/faq';
import Feedback from './pages/common/feedback';
import BillingMenu from './pages/billing/billing_menu';
import BookingMenu from './pages/booking/booking_menu';
import Shop from './pages/shopping/shop';

// Login
import Login from './pages/login/login';
import Logout from './pages/login/logout';
import SignUp from './pages/login/signup';
import Forgot from './pages/login/forgot';

// Enrollment
import Enroll from './pages/enrollment/enroll';

// Others
import UploadText from './pages/others/upload_text';
import Scheduler from './pages/others/scheduler';

//admin
//user
import UserDashboard from './pages/users/dashboard/dashboard';

//Scanner
import UniversalScanner from './pages/shopping/scanner';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state
  const signupPath = encryptPath('/sign_up');
  const forgotPath = encryptPath('/forgot');
  const userDashboardPath = encryptPath('/user_dashboard');

  useEffect(() => {
    // Set a timeout to simulate loading delay, e.g., 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  
    // Clean up the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
    {isLoading ? ( // Conditionally render the loader or the main content
        <LoadingPage />
      ) : (
        <>
          <Header/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/test" element={<Test />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/billing_menu" element={<BillingMenu />} />
              <Route path="/booking_menu" element={<BookingMenu />} />
              <Route path="/shop" element={<Shop />} />
              
              {/* Login */}
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path={`/${signupPath}`} element={<SignUp />} />
              <Route path={`/${forgotPath}`} element={<Forgot />} />

              {/* Enrollment */}
              <Route path="/enroll" element={<Enroll />} />

              {/* Users */}
              <Route path={`/${userDashboardPath}`} element={<UserDashboard />} />
              
              {/* Scanner */}
              <Route path="/scanner" element={<UniversalScanner />} />

              {/* Admin */}
              {/* Add admin routes here if needed */}

              {/* Common */}

              {/* Others */}
              <Route path="/upload_text" element={<UploadText />} />
              <Route path="/scheduler" element={<Scheduler />} />

            </Routes>
          <Footer/>
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
