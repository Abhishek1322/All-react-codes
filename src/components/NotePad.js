import React, { useState } from 'react'
import useDarkMode from 'use-dark-mode';

import Toggle from 'react-toggle';
//    const darkMode = useDarkMode(initialState, darkModeConfig);


const NotePad = () => {
    const darkMode = useDarkMode(false);
    const [text, setText] = useState('');


    function onChangeText(e) {
        setText(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault()
        localStorage.setItem('text', JSON.stringify(text));

    }

    function getData() {
        setText('')
        console.log(localStorage.getItem('text'));
    }


    // function onSubmit(e) {
    //     e.preventDefault()
    //     localStorage.setItem('text', text);
    // }

    // function getData() {
    //     console.log(localStorage.getItem('text'));
    // }


    return (
        <>
            <div className='container'>
                <div className='text-center'>
                    <h1 style={{ fontSize: "40px", fontFamily: "fantasy", color: "red" }}>
                        WRITE <span className='text-black'>NOTES</span>
                    </h1>
                    <div className='toggle-switch'>
                        <button type="button" onClick={darkMode.disable}>
                            🔆
                        </button>

                        <label class="switch">
                            <input type="checkbox" className='checked' checked={darkMode.value} onChange={darkMode.toggle} />
                            <span class="slider round"></span>
                        </label>
                        <button type="button" onClick={darkMode.enable}>
                            🌙
                        </button>
                    </div>
                </div>

                <form onSubmit={onSubmit} class="mb-3 px-32">
                    <label for="exampleFormControlTextarea1" class="form-label">Write your Notes</label>
                    <textarea value={text} onChange={onChangeText} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <button onClick={getData} className='btn btn-primary float-right '>Add</button>
                </form>
                <h1>{setText}</h1>

            </div>
        </>
    )
}

export default NotePad