import { Route, Routes, Navigate } from "react-router"

import { UserProvider } from "./context/UserProvider"

import HomePage from "./pages/Home"
import AboutPage from "./pages/About"
import LoginPage from "./pages/Login"

import NavBar from "./components/NavBar"

export default function MainApp() {
  return (
    <UserProvider>
      <div className="flex flex-col h-screen gap-10">
        <header>
          <h1 className="text-4xl font-bold text-center p-3">Main App</h1>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element= {<HomePage />} />
            <Route path="about" element= {<AboutPage />} />
            <Route path="login" element= {<LoginPage />}/>
            {/* <Route path="/*" element= {<LoginPage />} /> */}
            <Route path="/*" element= {<Navigate to="/about" />} />
          </Routes>
        </main>
      </div>
    </UserProvider>
  )
}
