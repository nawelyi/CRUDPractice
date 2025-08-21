import { Box, Button } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import CreatePage from './pages/CreatePage'
import HomePage from './pages/HomePage'
import Navbar from './components/NavBar'
function App() {


  return (
    <Box minH={"100vh"}>
      <Navbar />
       <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/add' element={<CreatePage/>} />
       </Routes>

    </Box>
  )
}

export default App