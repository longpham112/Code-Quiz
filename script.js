//data for the questions
var data = [
    {
        "qs": "Inside which HTML element do we put the JavaScript?",
        "options": [
            "js",
            "javascript",
            "scripting",
            "script",
        ],
        "answerID": 2
    },
    {
        "qs": "Where is the correct place to insert a JavaScript?",
        "options": [
            "Both the <head> section and the <body> section are correct",
            "The <body> section",
            "The <head> section",
        ],
        "answerID": 0
    },
    {
        "qs": "How do you create a function in JavaScript?",
        "options": [
            "function:myFunction()",
            "function myFunction()",
            "function = myFunction()",
        ],
        "answerID": 1
    },
    {
        "qs": "How to write an IF statement in JavaScript?",
        "options": [
            "if i = 5 then",
            "if i = 5",
            "if (i == 5)",
            "if i == 5 then",
        ],
        "answerID": 2
    },
]

// defining variable
let questionNo = 0;
let score = 0;
let startButton = document.getElementById("start");
let questionsDiv = document.getElementById("questions");
var itemIndex = 0;
// hide item when play

// start btn on click 
start.addEventListener("click", function() {
    hideItem(startButton);

    var question = data[0];
    questionsDiv.innerHTML = '<h2 id="questionTitle">' + question.qs + '</h2>';
    //questionsDiv.innerHTML = `<h2 id="questionTitle">${question.qs}</h2>`;

    for(let i = 0; i < question.options.length; i++){        
        questionsDiv.innerHTML += `<input type="radio" id="option${i}" name="fav_language" value="${question.options[i]}"><label for="html">${question.options[i]}</label><br>`   
    }  

    show(questionsDiv);
    for(let i = 0; i < question.options.length; i++){  
        let optionRadioButton = document.getElementById("option" + i);
        optionRadioButton.addEventListener("click", function(){
            if(question.answerID == i) alert("Dung cmnr");
            else alert("Sai cmr");
    
        });
    }

   
   
});


function hideItem(element) {
    element.style.display = "none";
}

function show(element) {
    element.style.display = "block";
}