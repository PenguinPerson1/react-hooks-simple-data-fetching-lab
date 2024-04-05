import React, {useState,useEffect} from "react";

export default function App() {
    const [isLoaded,setIsLoaded] = useState(false)
    const [dogImage,setDogImage] = useState("")
    useEffect(()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r=>r.json())
        .then(image=>{
            setDogImage(image.message)
            setIsLoaded(true);
        })
        .catch(error=>console.log(error))
    },[])
    if (!isLoaded) {
        return <p>Loading</p>
    }
    return <img src={dogImage} alt="A Random Dog"></img>
}