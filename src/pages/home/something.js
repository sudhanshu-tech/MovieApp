import React,{useState} from 'react';

const App=()=>{
    const [populatMovies,setPopularMovies]=useState([]);
    useEffect(
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=9ec25f97adcdc034f463d6c7b0f01445&language=en-US&page=1')
        .then(res=>res.json())
        .then(data=>{
            setPopularMovies(data.results)
        })
        .catch((error)=>{
            console.log('error:',error)
        })
    )
    return(
        <div>
            <h1>
                this is me
            </h1>
        </div>
    )
}