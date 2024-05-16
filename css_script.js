import { question_data } from './modules/htmlquestions.js';

// step 1 import module 


// const question_data = [
//     {
//         question: "what is html",
//         options: [
//             "hyper text markup lang",
//             "hyper",
//             "text",
//             "lang"
//         ],
//         correct : 0
//     },
//     {
//         question: "what is css",
//         options: [
//             "hyper text markup lang",
//             "hyper",
//             "cascading style sheet",
//             "lang"
//         ],
//         correct : 2
//     },
//     {
//         question: "what is js",
//         options: [
//             "hyper text markup lang",
//             "hyper",
//             "text",
//             "javascript"
//         ],
//         correct : 3
//     },
//     {
//         question: "what is ts",
//         options: [
//             "hyper text markup lang",
//             "typescript",
//             "text",
//             "lang"
//         ],
//         correct : 1
//     },
//     {
//         question: "what is jq",
//         options: [
//             "hyper text markup lang",
//             "hyper",
//             "jQuery",
//             "lang"
//         ],
//         correct : 2
//     }
// ];

// step 2

let currentQuiz = 0;
let score = 0;

const quiz = document.querySelector(".quiz-div");

const answerElm = document.querySelectorAll(".answer");
const [questionElm, option_1,option_2,option_3,option_4] = document.querySelectorAll(
    "#question, option_1, #option_2, #option_3, #option_4"
);
const submitBtn = document.querySelector("#btn");


// step 3

function loadQuiz(){
    const { question , options } = question_data[currentQuiz];

    questionElm.innerText = `${currentQuiz + 1}: ${question}`;

    console.log(options);
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
    // answerElm.forEach((curOption,inde) => {
    //     if(curOption.checked){
    //         ans_index = index;
    //     }
    // });
    // return ans_index;


    let answerElement = Array.from(answerElm);
    return answerElement.findIndex((curelm) => curelm.checked);

};

const deSelectAnswer = () => {
    return answerElm.forEach((curElm) => curElm.checked = false );
};


submitBtn.addEventListener("click", function(){

    const selectedOptionIndex = getSelectedOptionIndex();

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
        <div class="result-div">
            <h1>Your score : ${score}/${question_data.length} correct answer</h1>
            <p>Congratulation on complete the quiz !!</p>
            <button class="btn-play-again" onclick="location.reload()">Play Again !!</button>
        </div>
        `;
    }
});