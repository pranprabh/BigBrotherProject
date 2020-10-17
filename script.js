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

    if (answers == null) {
        i++;
        nextQuestion();
        return;
    }

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