import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import InstagramIcon from '@mui/icons-material/Instagram';
import RefreshIcon from '@mui/icons-material/Refresh';
import {useNavigate} from 'react-router-dom';







const TypingPage = () => {
    let text= "This is the sentence to be displayed on the basis of how many words you want to type in the given amount of time. This test takes speed and accuracy in consideration while calculating your skill level. All the best and be assure to complete the test to see the results on next page. This is the sentence to be displayed on the basis of how many words you want to type in the given amount of time. This test takes speed and accuracy in consideration while calculating your skill level. All the best and be assure to complete the test to see the results on next page. This is the sentence to be displayed on the basis of how many words you want to type in the given amount of time. This test takes speed and accuracy in consideration while calculating your skill level. All the best and be assure to complete the test to see the results on next page.";
    const [time, setTime] = useState(15);
    const [words,setWords]= useState(30);
    const [userInput, setUserInput] = useState('');
    const [content,setContent]= useState((text.substring(0,10)));
    const Navbar = () => {
        return (
          <div className='header'>
          <div className='col-1'>
              <h1>TypeCat</h1>
              <div>{time}</div>
              
          </div>
          <div className='col-2'>
              <p><AccountCircleIcon/></p>
          <div>
              <button className='upper-btn' onClick={() => setTime(15)}>15</button>
              <button className='upper-btn' onClick={() => setTime(30)}>30</button>
              <button className='upper-btn' onClick={() => setTime(60)}>60</button>
          </div>
      
          </div>
          </div>
        )
    }
    const TypingBox = () => {
        //const [time, setTime] = useState(15);
        //const [userInput, setUserInput] = useState('');
        
        const handleInputChange = (e) => {
            setUserInput(e.target.value);
            testStart();
            if(time<0){
                testEnd();
            }
            // Add logic to track correctness, WPM, and other typing metrics.
            const wordsTyped= userInput.split(' ').length;
            const accuracy= calCaccuracy(text, userInput);
            const speed= calCspeed(wordsTyped,time);
            const charsTyped= typedChars(wordsTyped);

            function testStart(){
                setInterval(() => {
                    setTime(time-1);
                  }, 1000);
                };
            }
            function testEnd(){
                setTimeout(() => {
                    navigate('/Statistics');
                  }, 2000);
                };    

            function calCspeed(wordsTyped,time){
                const min= time/60;
                const speed= (wordsTyped/min).toFixed(2);
                return speed;
            }
            function calCaccuracy(text, userInput){
                const orgWords= text.split(' ');
                let corr_words= 0;
    
                for(let i=0; i<orgWords.length; i++){
                    if(orgWords[i] === wordsTyped[i]){
                        corr_words++;
                    }
                }
                return (corr_words/orgWords.length*100).toFixed(2);
    
            }
            function typedChars(wordsTyped){
                return wordsTyped.split('').length;
    
            }
        };
        
        
        
            
        
            //let keychar=0;
        return (
            <div>
                
                <div className='text-box'>
                <div>{content}</div>
                </div>
                <div classname='input-box'>
                <input type="text" value={userInput} onChange={handleInputChange} onInput={calCspeed}/>
                </div> 
            </div>
        )
    }
    const Footer = () => {
        const navigate = useNavigate();
        const refreshPage = () => {
            // You would typically implement actual user authentication logic here.
            // For this example, let's simulate success after a short delay.
            setTimeout(() => {
              navigate('/typing');
            }, 2000);
          };
      return (
        <div className='footer'>
            <center className='btn-container'>
                <div className='refresh'>
                    <RefreshIcon />
                </div>
                <div>
                    <button className='bottom-btn' onClick={refreshPage}>esc</button>
                    <span className='bottom-span'>-</span>
                    <span className='bottom-span'>reset</span>
                </div>
                <button className='bottom-btn' onClick={setWords(10)}>10</button>
                <button className='bottom-btn' onClick={setWords(50)}>50</button>
                <button className='bottom-btn' onClick={setWords(80)}>80</button>
                <button className='bottom-btn' onClick={setWords(100)}>100</button>
                <span className='bottom-span'>-</span>
                <span className='bottom-span'>no. of words</span>
            </center>
            <div className="links">
                    <a href="*"><GitHubIcon /></a>
                    <a href="*"><LinkedInIcon /></a>
                    <a href="*"><AttachEmailIcon /></a>
                    <a href="*"><InstagramIcon /></a>
            </div>
            <div className='theme-btn'>
                <select>Darken-black
                <options>Colored-grey</options>
                <options>Colored-pink</options>
                <options>Colored-green</options>
                <options>Colored-blue</options>
                <options>Lighten-white</options>
                <options>Colored-light-purple</options>
                </select>   
            </div>
                
          
        </div>
      )
    }
        if(words===100){
            setContent(text.substring(0,100));
        }
        else if(words===50){
            setContent(text.substring(0,50));
        }
        else if(words===80){
            setContent(text.substring(0,80));
        }
        else setContent(text.substring(0,10));
  return (
    <div className='typepage'>
        <Navbar/>
        <TypingBox content={content}/>
        <Footer setWords={setWords}/>
      
    </div>
  )
}

export default TypingPage


