import { Route, Routes } from 'react-router-dom'
import LoginMenu from './components/LoginMenu'
export default function AllRoute() {
    return (
        <Routes>
            <Route path='/' element={<h1>home</h1>} />
            <Route path='/login' element={<LoginMenu />} />
        </Routes>
    )
}