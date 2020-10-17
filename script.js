
// key : question ID
// value : dictionary with a key of "question-preset" to a preset name (string) OR key of "answers" to an array of questions
const questions = {
    "fam-threshold-question": {
        "question": "On a scale of 1-10, how would you rate your relationship with your family/caretaker?",
        "question-preset": "NUMERIC_SCALE"
    },
    "fam-sub-1": {
        "question-preset": "NUMERIC_SCALE"
    },
    "fam-sub-2": {
        "question-preset": "AGREE_SCALE"
    },
    "fam-sub-7": {
        "question": "Which family member in your household usually cooks (if applicable)?",
        "answers": ["Mother", "Father", "Sibling", "Relative", "Family friend", "Other"]
    }
}

// key : string name of preset
// value : array of answer choices
const presets = {
    "NUMERIC_SCALE": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    "AGREE_SCALE": ["Strongly disagree", "Slightly disagree", "Not sure", "Slightly Agree", "Strongly Agree"]
}

let allAnswers = {}

let questionKeyArr = Object.keys(questions);
let i = 0;

var questionId;
var questionObj;

function nextQuestion() {
    if (i == questionKeyArr.length) {
        uploadAnswers();
        return;
    }
    // console.log(allAnswers);
    questionId = questionKeyArr[i];
    questionObj = questions[questionId];

    let answers;
    if ("answers" in questionObj) answers = questionObj["answers"]
    else answers = presets[questionObj["question-preset"]]

    html = questionObj["question"];
    html += "<form>";
    answers.forEach(ans => {
        html += `<input type="radio" name="formChoice" value=${ans}>${ans}</input><br>`;
        // console.log(ans);
    });
    html += "</form>";
    html += "<button onClick='submitAnswer()'>Next Question</button>";
    document.getElementById("questionDiv").innerHTML = html;
    i++;
}

function submitAnswer() {
    for (let rb of document.querySelectorAll('input[name="formChoice"]')) {
        if (rb.checked) {
            allAnswers[questionId] = rb.value;
            nextQuestion();
        }
    }
}

function uploadAnswers() {
    db.collection("survey_responses").add(allAnswers);
    document.getElementById("questionDiv").innerHTML = "Thank you for completing this survey! Your response is greatly appreciated."
}

// for (let key in questions) {
//     console.log(key, questions[key]);
//     answers[key] = null;
// }