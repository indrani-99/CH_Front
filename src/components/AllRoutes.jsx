import {Router, Route, Routes} from 'react-router-dom'
import Home from './Home';
import Login from './Login';
import Register from './Register';
import CountryPage from './CountryPage';


function AllRoutes()
{
    return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
       <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/country' element={<CountryPage/>
        }/>
       
    </Routes></>)
}  

export default AllRoutes;