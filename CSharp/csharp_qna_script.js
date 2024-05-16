

// step 1 import module 

import { csharp_question_data } from "../modules/csharpquestion.js";

// step 2

let currentQuiz = 0;

const qnadiv = document.getElementById("qna_div");

function loadData() {

        let answerOpt;    

        for(let i = 0; i < csharp_question_data.length; i++){

            const { question , options, correct } = csharp_question_data[currentQuiz];

            for(let x = 0; x < options.length; x++){
            
                if(x == correct){
    
                    answerOpt = options[x];
    
                }
            }

            let datahtm = `<div class="py-8 flex flex-wrap md:flex-nowrap">
                                <div class="md:w-64 w-full md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <span class="font-semibold title-font text-gray-700">QUESTION <span>${currentQuiz + 1}</span></span>
                                    <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                                </div>
                                <div class="md:flex-grow w-full">
                                    <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">${question}</h2>
                                    <p class="leading-relaxed">${answerOpt}</p>
                                </div>
                            </div>`;

            qnadiv.innerHTML += datahtm;

            currentQuiz++;

        }     

};

loadData();

