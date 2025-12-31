let btn = document .querySelector("#btn")
let content = document .querySelector("#content")
function speak(text){
    let text_speak= new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="en-IN"
    window.speechSynthesis.speak(text_speak)

}

function wish()
 {
    let day = new Date()
    let hours= day.getHours()
    if(hours>=0 & hours<12){
        speak("good morning maam")
    }
    else if(hours>=12 & hours<5){
        speak("good afternoon maam")
    }
    else{
        speak("good night maam")
    }
}
window.addEventListener('load',() =>{
        wish()
    })
var Speechrecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
var Recognition = new Speechrecognition
Recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcrpit
    content.innerText=transcript
 console.log(event)
}
btn.addEventListener("click",()=>{
    Recognition.start()
    btn.computedStyleMap.display ="none"
    Voice.style.display="block"
})
function takecommand(message){
    btn.style.display="flex"
    Voice.style.display ="none"
    if(message.includes("hello")|| message.includes("hey")){
        speak("hello maam , what can i help you")
    }
    else if (message.includes("who are you")){
        speak("I am virtual assistant , created by Aditi")
    }
    else if (message.includes("oepn google")){
        speak("opening  google")
        window . open("https://www.google.com/","_blank")

    }
    else if (message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com/","_blank")
    }
    else if (message.includes("open whatsapp")){
        speak("opening whatsapp")
        window.open("https://web.whatsapp.com/","_blank")}
    else if (message.includes("time")){
        let time = new Date().toLocaleString(underdefined,{day:"numeric",minute:"numeric"})
        speak(time)
    }
    else if (message.includes("date")){
        let date = new Date().toLocaleDateString(underdefined,{day:"numeric",month:"short"})
        speak(date)
    }
    else{
        speak("this is what i found on internet regarding maam")
        window.open('https://www.google.com/search?q= ${message}')
    }
} 



