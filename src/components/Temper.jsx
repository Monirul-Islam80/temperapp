import React, { useEffect, useState } from 'react'

export default function Temper() {
    const [city, setcity] = useState(null);
    const [search, setsearch] = useState('dhaka');
    useEffect(()=>{
        const fetchApi= async ()=>{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=0c566f1e90e9d98a94d3b56c6a8367cb`
        const response = await fetch(url)
        const resJson = await response.json();
         console.log(resJson)
        setcity(resJson.main);
    }
    fetchApi();
    },[search] )
    
    return (
        <>
            <div className="App-header">
                <div className="card" >
                    <div className="ss">
                        <input type="search" name="searchbar" id="sbar" placeholder="city name"
                        
                        onChange={(event)=>{setsearch(event.target.value)}} 
                        />
                    </div>                        
                  {!city ? (<h2>{search} is not a city. </h2>):(
                              <>
                              <div className="info">
                    <i className="fas fa-map-marked-alt"></i>
                        <h2>{ search}</h2>
                        <h2><span className="tm">{city.temp}°</span> cel</h2>
                        <h4>max:<span className="tm">{city.temp_max + 1}°</span> cel  min:<span className="tm">{city.temp_min - 1}°</span> cel</h4>
                        

                    </div>
                <div className="c one animated "></div>
                <div className="c two animated2"></div>
                <div className="c three animated3"></div>
                              </>  
                        )}
            </div>
            <h4 className="dev">Developed by <span>Monirul Islam Soumik </span> </h4>
              </div>
        </>
    )
}
// https://api.openweathermap.org/data/2.5/weather?q=moulvibazar&appid=0c566f1e90e9d98a94d3b56c6a8367cb
