import React, {useState} from 'react'
import './EightBall.css'

const answers = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ]
const EightBall=(props)=>{
    let[message, setMessage] = useState({msg:'Think of a question', color:'black'})
    let[count, setCount] = useState({red:0,goldenrod:0,green:0})
    let answer = ()=>{
        let id = Math.floor(Math.random()*answers.length)
        setMessage(answers[id])
        const color = answers[id];
        if(color!=='black'){
        count[color.color] = count[color.color]+1
        setCount(count)
        }

    }
    let reset = ()=>{
        setMessage({msg:'Think of a question', color:'black'})
        setCount({red:0,goldenrod:0,green:0})
    }
    return(
        <div className='eight-ball-container'>
            <div className='eight-ball-inner-container'>
                <h1>Magic Eight Ball!</h1>
                <div className="eight-ball"style={{backgroundColor:message.color}} onClick={answer}>
                    <p className='eight-ball-message'>{message.msg}</p>

                </div>
                <button className='eight-ball-btn'onClick={reset}>Reset EightBall</button>
            </div>
            <div className='eight-ball-count-container'>
                <h2>Color Count</h2>
                <ul className='eight-ball-counter'>
                    <li>Red: {count.red}</li>
                    <li>Green:{count.green}</li>
                    <li>Yellow: {count.goldenrod}</li>

                </ul>
            </div>
        </div>
    )

}

export default EightBall