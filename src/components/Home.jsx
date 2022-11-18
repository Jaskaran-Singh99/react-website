import React from 'react'
import i1 from '../assets/3.jpg'
import {AiFillGithub,AiFillInstagram, AiFillLinkedin, AiFillFacebook} from 'react-icons/ai'

const Home = () => {
    return (
        <>
            <div className='home' id="home">
                <main>
                
                    <h1>Jk_developer</h1>
                    <p>Eat, sleep, code, Repeat!!</p>
                </main>
            </div>
            <div className='home2' id="about">
                <img src={i1} />

                <div>
                    <h2>Web Developer</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure magnam voluptatibus impedit,
                        perspiciatis, dolorem deleniti, est nisi eos deserunt
                        odit adipisci quisquam quaerat? Consequuntur repellat alias accusamus, sed nobis sequi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, perferendis in. Doloribus dicta
                        eveniet impedit
                    </p>
                </div>

            </div>
            <div className='home3' >
                <div>
                    <h1>About me</h1>
                    <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure magnam voluptatibus impedit,
                        perspiciatis, dolorem deleniti, est nisi eos deserunt
                        odit adipisci quisquam quaerat? Consequuntur repellat alias accusamus, sed nobis sequi.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, perferendis in. Doloribus dicta
                        eveniet impedit</p>
                </div>
            </div>
            <div className='home4' id="follow">
                <div className='home4-container'>
                    <h1>Follow me on</h1>
                    <article>
                        <div style={{animationDelay:'0.3s'}} id="social-media-icons">
                            <AiFillGithub/>
                            <p>Github</p>
                        </div>
                        <div style={{animationDelay:'0.6s'}} id="social-media-icons">
                            <AiFillFacebook/>
                            <p>Facebook</p>
                        </div>
                        <div style={{animationDelay:'1s'}} id="social-media-icons">
                            <AiFillInstagram/>
                            <p>Instagram</p>
                        </div>
                        <div style={{animationDelay:'1.3s'}} id="social-media-icons">
                            <AiFillLinkedin/>
                            <p>Linkedin</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home 