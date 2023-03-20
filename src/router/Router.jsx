import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import Login from "../pages/Login/Login"
import Signup from "../pages/Signup/Signup"
import Home from "../pages/Home/Home"
import { useState } from "react"

const Router = () => {

    const [user, setUser] = useState(true);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={user ? <Navigate to='/home' /> : <Navigate to='login' />} />
                <Route path="/home" element={!user ? <Navigate to={`/login`} /> : <Home />} />
                <Route path="/login" element={user ? <Navigate to={`/home`} /> : <Login />} />
                <Route path="/signup" element={user ? <Navigate to={`/home`} /> : <Signup />} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router