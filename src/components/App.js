import { React, useState, useEffect } from "react"

function App() {
    const [dogImage, setDogImage] = useState(false)
    
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((r) => r.json())
        .then((r) => setDogImage(r.message))
    }, [])
    
    return (
        <div>{(!dogImage) ? <p>Loading...</p>:<img src={dogImage} alt="A Random Dog"></img>}</div>
    )
}

export default App