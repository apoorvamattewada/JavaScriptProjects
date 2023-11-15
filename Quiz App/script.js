//To add in this app:
// 1)Input from a text file: Typing all this wont do.
// 2) Moving modules -  After first set of questions, I want to move to the next module of questions.
// 3) Display score of each module before proceeding

const quizData = [
    {
        question: 'What distinguishes the "Internet" form the "World Wide Web"?', 
        a: 'The Internet refers to hardware while the WWW refers to software.',
        b: 'The Internet involves a connection of networks; the WWW is a collection of web pages.',
        c: 'The Internet relies on TCP/IP; the WWW operates on HTTP',
        d: 'The Internet involves circuit switching, the WWW uses packet switching',
        correct: 'b' 
    }, {
        question: 'Which network routing system was known for its inefficiency in bandwidth usage and scalability issues?',
        a: 'Packet Switched Networks',
        b: 'ARPANET',
        c: 'X.25',
        d: 'Circuit Switched Networks',
        correct: 'd'
    },{
        question: 'What defined the birth of the World Wide Web as we know it today in 1992?', 
        a: 'Implementation of HTTP',
        b: 'Introduction of TCP/IP',
        c: 'Publication of the first webpage',
        d: 'Features outlined by Tim Berners-Lee',
        correct: 'd'
    }, {
        question: 'Which advantage is associated with web applications compared to desktop applications?', 
        a: 'Offline access',
        b: 'Centralized storage',
        c: 'Hardware control',
        d: 'Universal appearance across browsers',
        correct: 'b'
    } , {
        question: 'What does Web 2.0 primarily emphasize in the user experience?', 
        a: 'Static Web Content',
        b: 'Server-driven Programming Logic',
        c: 'Interactive user contribution and consumption',
        d: 'Limited browser functionality',
        correct: 'c'
    } , {
        question: 'Which language became more crucial with the migration of programming logic to browsers during Web 2.0?', 
        a: 'HTML',
        b: 'CSS',
        c: 'JavaScript',
        d: 'PHP',
        correct: 'c'
    }, {
        question: 'What is the essential characteristic of a server in the client-server model?', 
        a: 'Sending requests only',
        b: 'Listening for requests and responding',
        c: 'Hosting web applications',
        d: 'Controlling network traffic',
        correct: 'b'
    } , {
        question: 'What term defines the provision of virtual servers that scales according to demand in cloud services?', 
        a: 'Elastic provisioning',
        b: 'Dynamic allocation',
        c: 'Scalable hosting',
        d: 'Flexible deployment',
        correct: 'a'
    } , {
        question: 'How is the Internet often visually represented, despite its acutal physical infrastructure?',
        a: 'Ocean waves',
        b: 'Cloud network',
        c: 'Underwater cables',
        d: 'Satellite network',
        correct: 'b'
    } , {
        question: 'What best describes the function of Tier 1 networks in the "Internet Backbone"?',
        a: 'They use slower regional infrastructure',
        b: 'They are the primary consumer-facing networks',
        c: 'They handle data for smaller ISPs',
        d: 'They utilize high-speed fiber optic cables',
        correct: 'd'
    }
];

const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById('question')
const a_text =  document.getElementById('a_text');
const b_text =  document.getElementById('b_text');
const c_text =  document.getElementById('c_text');
const d_text =  document.getElementById('d_text'); 
const submitBtn = document.getElementById('submit'); 

let currentQuiz = 0; 
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

    
}


function getSelected() {
    

    let answer = undefined;

    answersEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer; 

}

//Deselecting
function deselectAnswers() {
    answersEls.forEach((answerEL) => {
        answerEL.checked = false;
    }); 
}

submitBtn.addEventListener('click', () => {
    // check to see the answer
    const answer = getSelected();

    if(answer) {
        if (answer ===  quizData[currentQuiz].correct)
        {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length){
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2> You answered correctly at ${score}/${quizData.length} questions. </h2> 
            
            <button onClick="location.reload()"> Reload </button>`;
        }    

    }
    
});
