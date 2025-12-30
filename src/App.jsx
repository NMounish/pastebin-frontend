import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreatePaste from "./Components/CreatePaste"
import ViewPaste from "./Components/ViewPaste"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreatePaste />} />
        <Route path="/p/:id" element={<ViewPaste />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
