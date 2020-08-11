//Array of question,right ans and option:

var questionarray=[
    {
        question: "Q1. Select the appropriate HTML tag for inserting a line break?",
        answer: "None",
        options: [
            "break",
            "brbr",
            "None",
            "lb",
        ]
    },
    {
        question: "Q2. In CSS, what is the correct option to select only the paragraphs with class name “warning”?",
        answer: ".warning{}",
        options: [
            "p{}",
            ".warning{}",
            "warning{}",
            "#warning{}",
        ]
    },
    {
        question: "Q3 Where in an HTML document is the correct place to refer to an external style sheet ?",
        answer: "In the head section",
        options: [
            "In the body section",
            "In the head section",
            "At the end of the document",
            "none of the above",
        ]
    },
    {
        question: "Q4.Select the option to make a list that lists the items with bullets?",
        answer: "Ul",
        options: [
            "Dl",
            "List",
            "None",
            " Ul",
        ]
    },
    {
        question: "Q5. Select the correct option to create an e-mail link??",
        answer: "None",
        options: [
            "Mail href='xxx@yyy.com'",
            'A href="xxx@yyy.com"',
            "None",
            "A href=mailto:xxx@yyy.com",
        ]
    },
]

function startTime(){
    var startingMin = 2;
    var time = startingMin * 60;
    var timerPara = document.getElementById("timer");

    function updateCountDown(){
        var minutes = Math.floor(time / 60)
        var seconds = time % 60;
        
        if(seconds < 10){
            seconds = "0"+seconds;
        }
        if(minutes < 10){
            minutes = "0"+minutes;
        }
        
        timerPara.innerHTML = minutes + ":" + seconds;
        time--;

        if(minutes == 00 && seconds == 00){
            alert("Oopps!! Time Up");
            window.location.href = "result.html";
        }
    }
    setInterval(updateCountDown, 1000);
}

//function to show question:

function showQuestion(e){
    var questionElement = document.getElementById("questionElement");
    questionElement.innerHTML= questionarray[e].question;
    var optionElement = document.getElementsByClassName("optionElement");
    console.log(optionElement);
    for(var i=0; i < optionElement.length; i++){
    optionElement[i].innerHTML = questionarray[e].options[i];   
    
    }

}


//function to show next question :

var questioncount=0;
var score=0;
function nextQuestion(){
    checkanswer(questioncount);
   
    questioncount++;
    if(questioncount <= questionarray.length-1
        ){
            showQuestion(questioncount);
    }
   
   
    removeactiveclass();
    setResult();
    

}


//function to select right option

function activeclass(e){
    removeactiveclass()
    e.classList.add("active")
   

}

function removeactiveclass(){
    var active = document.getElementsByClassName("active")
    for (var i = 0; i < active.length; i++) {
        active[i].classList.remove("active")
        
    }
}


function checkanswer(x){
    var active = document.getElementsByClassName("active");
    if(active[0].innerHTML == questionarray[x].answer){
        score += 10;
        console.log(score)
    }
}   


function setResult(){
    if(questioncount == questionarray.length){
        window.location.href = "result.html";
    }
    var result = document.getElementById("result");
    sessionStorage.setItem("userscore", score);
}

function showresult(){
    var cs = sessionStorage.getItem("userscore");
    result.innerHTML = "You scored "+ cs +" out of 50";

}




