import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import Login from "../pages/Login/Login"
import Signup from "../pages/Signup/Signup"
import Home from "../pages/Home/Home"
import { useState } from "react"
import Forgot from "../pages/Forgot/Forgot"
import Wishlist from "../pages/Wishlist/Wishlist"
import Go_To_Top from "../components/Go_To_Top/Go_To_Top"
import Navbar from "../components/Navbar/Navbar"
import Footer from "../containers/Footer/Footer"
import Cart from "../pages/Cart/Cart"

const Router = () => {

    const [user, setUser] = useState(true);

    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Go_To_Top />
                <Routes>
                    <Route path="/" element={user ? <Navigate to='/home' /> : <Navigate to='login' />} />
                    <Route path="/home" element={!user ? <Navigate to={`/login`} /> : <Home />} />
                    <Route path="/login" element={user ? <Navigate to={`/home`} /> : <Login />} />
                    <Route path="/signup" element={user ? <Navigate to={`/home`} /> : <Signup />} />
                    <Route path="/forgot" element={user ? <Navigate to={`/home`} /> : <Forgot />} />
                    <Route path="/wishlist" element={!user ? <Navigate to={`/login`} /> : <Wishlist />} />
                    <Route path="/cart" element={!user ? <Navigate to={`/login`} /> : <Cart />} />
                    <Route path="/*" element={<ErrorPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default Router