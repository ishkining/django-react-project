import React, {useState, useEffect} from "react";

const Numbers = () => {
    const [numbers, setNumbers] = useState(['one', 'two', 'three'])
    const [letters, setLetters] = useState(['a', 'b', 'c'])
    
    const addNumber = () => {
        setNumbers([...numbers,['four']])
    }

    const addLetter = () => {
        setLetters([...letters,['d']])
    }
    
    useEffect( () => {
        console.log("Our use effect trigger");
    }, [numbers, letters])

    return (
        <div>
            <h1>Numbers</h1>
            {
                numbers.map(num => {
                    return <h4>{num}</h4>
                })
            }
            <h1>Letters</h1>
            {
                letters.map(letter => {
                    return <h4>{letter}</h4>
                })
            }
            <button onClick={addNumber}>Add number</button>
            <button onClick={addLetter}>Add number</button>
        </div>
    )
}

export default Numbers