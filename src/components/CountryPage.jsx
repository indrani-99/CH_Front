import { Heading, Input, Button, Box } from "@chakra-ui/react";
import {  useRef, useState } from "react";
import axios from "axios";
function CountryPage() {
  const currencyCode = useRef(null);
  const [name, setName] = useState("");
  const [countries, setCountries] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const county_url = `https://restcountries.com/v3.1/currency`;

  
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `${county_url}/${currencyCode.current.value}`
      );
      currencyCode.current.value = null;
      setCountries(response.data);
    } catch (err) {
      console.log(err);
    }
  };
 
  const handleFavourite=(name)=>{
    setFavourites([...favourites,name]);
  };

  const sortCountries = (order) => {
    const sortCountries = [...countries].sort((a, b) => {
      if(order === 'asc')
        return a.name.common.localeCompare(b.name.common);
      else
        return b.name.common.localeCompare(a.name.common);
    });
    setCountries(sortCountries);
  };

  return (
    <>
      <Heading style={{ textAlign: "center" ,paddingTop:"40px", paddingBottom:"40px", color:"rgb(59, 99, 247)"}}>Country Hub</Heading>
      <Box style={{display:"flex", width:"80%",justifyContent:"space-evenly",margin:"auto"}}>
        <Input placeholder="Search by currency code" style={{width:"400px"}} ref={currencyCode} />
        <Button onClick={handleSearch}>Search</Button>
         {countries.length > 0 && <Box >
        <Button onClick={() => sortCountries('asc')}>Sort by Asc</Button>
        <Button onClick={() => sortCountries('dec')}>Sort by Des</Button>
      </Box>}
      </Box>
      {countries.length==0 && <Heading style={{textAlign:"center", marginTop:"100px"}}>Country data is not available</Heading>}
      <Box>
        {countries.length > 0 &&
          countries.map((element, index) => (
            <Box
              key={index}
              style={{
                border: "1px solid black",
                padding: "10px",
                margin: "10px",
              }}
            >
              <h3><strong>{element["name"]["common"]}</strong></h3>
              <p>
                <strong>Official name : </strong>
                {element.name.official}
              </p>
              <p>
                <strong>Currency:</strong>{" "}
                {Object.values(element.currencies)
                  .map((currency) => `${currency.name} (${currency.symbol})`)
                  .join(", ")}
              </p>
              <p>
                <strong>Capital:</strong> {element.capital.join(", ")}
              </p>
              <p>
                <strong>Languages:</strong>{" "}
                {Object.values(element.languages).join(", ")}
              </p>
              <Button onClick={() => handleFavourite(element.name.common)} colorScheme={favourites.includes(element.name.common) ? 'red' : 'green'} disabled={favourites.includes(element.name.common)}>Favourite</Button>
            </Box>
          ))}
      </Box>
    </>
  );
}

export default CountryPage;
