import { csharp_question_data as question_data } from '../modules/csharpquestion.js';

// step 1 import module 


// step 2

let currentQuiz = 0;
let score = 0;
let attend = 0;

let totalQuestionSpan1 = document.querySelector(".total_question_span1");
let totalQuestionSpan2 = document.querySelector(".total_question_span2");
let currentQuestionSpan = document.getElementById("current_question_span");
let leftTime = document.getElementById("left_time_span");
let attendQuestionSpan = document.getElementById("attend_question_span");
let leftQuestionSpan = document.getElementById("left_question_span");

let btnPrevious = document.getElementById("btn-previous");
let btnNext = document.getElementById("btn-next");

const quiz = document.querySelector(".quiz-div");

const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1,option_2,option_3,option_4] = document.querySelectorAll(
    "#question, option_1, #option_2, #option_3, #option_4"
);
const submitBtn = document.querySelector("#btn");


// step 3

function loadQuiz(){


    
    const { question , options } = question_data[currentQuiz];

    totalQuestionSpan1.innerHTML = `${question_data.length}`;
    totalQuestionSpan2.innerHTML = `${question_data.length}`;
    attendQuestionSpan.innerHTML = `${attend}`;
    leftQuestionSpan.innerHTML = `${question_data.length - ( currentQuiz + 1 )}`;
    currentQuestionSpan.innerHTML = `${currentQuiz + 1}`;

    questionElm.innerText = `${question}`;

    let op;

    // options.forEach( (curelm , ind ) => {
    //     op = `option_${ ind + 1 }`;
    //     window[op].innerText = curelm;
    // } );

    options.forEach(
        ( curOption , index ) => {
            window[`option_${ index + 1 }`].innerText = curOption
        }
    );
    

};


loadQuiz();


// step 4



const getSelectedOptionIndex = function() {
    // let ans_index;
    // answerElm.forEach((curOption,index) => {
    //     if(curOption.checked){
    //         ans_index = index;
    //     }
    // });
    // return ans_index;


    let answerElement = Array.from(answerElm);
    return answerElement.findIndex((curelm) => curelm.checked);

};

const getSelectedOption = () => {
    let answerElement = Array.from(answerElm);
    return answerElement.findIndex((curelm) => curelm.checked);
};

const deSelectAnswer = () => {
    return answerElm.forEach((curElm) => curElm.checked = false );
};



const timerFunction = () => {

    let tq = question_data.length;

    let sec = 30;

    let totalSec = tq * sec;

    var time = setInterval(myTimer, 1000 );

    function myTimer() {
        leftTime.innerHTML = totalSec + "s";
        totalSec--;
        if (totalSec == -1) {
            clearInterval(time);
        }
    }
};


timerFunction();

submitBtn.addEventListener("click", function(){

    const selectedOptionIndex = getSelectedOptionIndex();
    const selectOption = getSelectedOption();

    if(selectOption > -1){
        attend += 1;
    }

    if(selectedOptionIndex === question_data[currentQuiz].correct){
        score += 1;
    }

    currentQuiz++;

    if(currentQuiz < question_data.length){
        deSelectAnswer();
        loadQuiz();
    }
    else{
        quiz.innerHTML = `
        <div class="result-div flex justify-center content-center flex-col text-center gap-2 font-bold">
            <h1 class="text-3xl">Your score : ${score}/${question_data.length} correct answer</h1>
            <p class="text-xl">Congratulation on complete the quiz !!</p>
            <button class="btn-play-again" onclick="location.reload()">Play Again !!</button>
        </div>
        `;
    }
});

btnNext.addEventListener("click", () => {
    if(currentQuiz < question_data.length - 1){

        currentQuiz++;
        loadQuiz();
    }
    else{

    }
    
});

btnPrevious.addEventListener("click", () => {

    if(currentQuiz < 1 ){

    }
    else{
        currentQuiz--;
        loadQuiz();
    }

    
});