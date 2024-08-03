import { Heading,Button,Box } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

function Home()
{
    const navigate=useNavigate();
    const handleSignup=()=>{
        navigate('/register');
    }
    const handleLogin=()=>{
        navigate('/login');
    }
    return<>
    <Heading style={{color:"rgb(0, 0, 81)",marginBottom:"50px", textAlign:"center", marginTop:"200px"}}>Welcome to CountryHub</Heading>
    <Box style={{display:"flex", justifyContent:"space-between", width:"20%", margin:"auto"}}>
    <Button style={{backgroundColor:'rgb(1, 210, 249)'}} onClick={handleSignup}>Signup</Button>
    <Button style={{backgroundColor:'rgb(1, 210, 249)'}} onClick={handleLogin}>Login</Button>
    </Box>
    
   </>
}  

export default Home;