import React from 'react'

const contact = ()=>{
    return(
        <div className='contact'>
            <div className='question'>
                <h4>Got a question?</h4>
                <h2>Contact Me</h2>
                <p>Go ahead ask any query you have I will be replying you ASAP</p>
            </div>
            <form>
                <div>
                    <label>Name</label>
                    <input placeholder='Enter your name' type="text"></input>
                </div>
                <div>
                    <label>Email</label>
                    <input placeholder='Enter your Email' type="email"></input>
                </div>
                <div>
                    <label>Password</label>
                    <input placeholder='Password' type="password"></input>
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default contact