import Footer from '@/compenents/Footer'
import Header from '@/compenents/Header'
import React from 'react'

interface AuthLayoutProps {
    children: React.ReactNode

}
const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default AuthLayout