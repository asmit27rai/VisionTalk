import { SignedIn, SignedOut } from '@clerk/clerk-react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from './pages/SignIn'
import Home from './pages/Home';
import Chat from './pages/Chat';

function App() {
  return (
    <header>
      <SignedOut>
        <SignIn />
      </SignedOut>
      <SignedIn>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </Router>
      </SignedIn>
    </header>
  )
}

export default App
