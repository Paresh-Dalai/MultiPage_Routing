

import React from "react";
import Typewriter from "typewriter-effect";
import "./Typewritter.css"

function TypeWriting () {
     
    return (
        <div className="TypeWritter">

       
        <Typewriter
 
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Hello sir/mam, A warm Welcome to This Page....")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Hello, I'm Paresh Kumar Dalai! Passionate about crafting innovative digital solutions, I am a Full Stack Developer with a strong foundation in both front-end and back-end technologies. My journey in the world of technology began when I enrolled in the Full Stack Development course at Relevel in 2021. During my time at Relevel, I honed my skills in creating seamless and user-friendly web applications. I've gained proficiency in a range of technologies, including HTML, CSS, JavaScript, React, Node.js, and more. This comprehensive training has equipped me to tackle complex challenges and turn them into elegant, functional solutions. As a lifelong learner, I thrive on keeping up with the latest trends and best practices in the dynamic field of web development. I have a keen eye for detail, a collaborative spirit, and a knack for problem-solving that drive me to deliver high-quality results. Beyond coding, I'm passionate about contributing to projects that have a positive impact on people's lives. Whether it's creating tools that streamline processes or developing platforms that connect communities, I believe technology has the power to transform the world. I'm always open to new opportunities, collaborations, and chances to connect with fellow professionals. If you're interested in tech, innovation, or just want to chat, feel free to reach out. Let's connect and explore the possibilities together!")
                        .start();
                }}
            />
             </div>
    )
}
export default TypeWriting ;