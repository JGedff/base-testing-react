import React, { useEffect, useState } from 'react'  
 
export const HelloWorld = () => {

    const [title, setTitle] = useState('Hello World!')

    const handleChangeButton1 = () => {
        setTitle('You pressed the button 1')
    }
    
    const handleChangeButton2 = () => {
        setTitle('You pressed the button 2')
    }
    
    const handleChangeButton3 = () => {
        setTitle('You pressed the button 3')
    }
    
    const handleChangeButton4 = () => {
        setTitle('You pressed the button 4')
    }

    const handleChangeButton5 = () => {
        setTitle('You pressed the button 5')
    }

    const [bgCountryName, setBgCountryName] = useState()
    const [background, setBackground] = useState('')

    const objectIsImage = (title) => {
        return (title.endsWith('.png') || title.endsWith('.jpg'))
    }

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name')
        .then(res => res.json())
        .then((data) => {
            const numberOfObjects = data.length
            const indexRandomObject = Math.trunc(Math.random() * numberOfObjects)
            const commonCountryName = data[indexRandomObject].name.common
            setBgCountryName(commonCountryName)
        })
    }, [])

    useEffect(() => {
        fetch(`https://en.wikipedia.org/w/api.php?origin=*&action=query&titles=${bgCountryName}&format=json&prop=images`)
        .then(res => res.json())
        .then((data) => {
            if (bgCountryName !== undefined) {
            const Files = (Object.values(data.query.pages)[0]).images

            for (let counter = 0; counter < Files.length; counter++) {
                if (objectIsImage(Files[counter].title)) {
                const selectedImage = Files[counter].title

                fetch(`https://en.wikipedia.org/w/api.php?origin=*&action=query&iiprop=url&prop=imageinfo&titles=${selectedImage}&format=json`)
                    .then(res => res.json())
                    .then((data) => {
                    const selectedURL = (Object.values(data.query.pages)[0]).imageinfo[0].url
                    setBackground(selectedURL)
                    })
                break
                }
            }
            }
        })
    }, [bgCountryName])

    return (
        <div style={{backgroundImage: `url(${background})`}}>
            <h1 data-testid='title'>{title}</h1>
            <button data-testid='button1' onClick={handleChangeButton1}>Button 1</button>
            <button data-testid='button2' onClick={handleChangeButton2}>Button 2</button>
            <button data-testid='button3' onClick={handleChangeButton3}>Button 3</button>
            <button data-testid='button4' onClick={handleChangeButton4}>Button 4</button>
            <button data-testid='button5' onClick={handleChangeButton5}>Button 5</button>
        </div>
	)
}
 
export default HelloWorld