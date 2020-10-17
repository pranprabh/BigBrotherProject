let allAnswers = {}

let questionKeyArr = Object.keys(questions);
let i = 0;

// console.log(Object.keys(questions));
// for (let ii=0; ii<questionKeyArr.length; ++ii) console.log(questionKeyArr[ii]);

var questionId;
var questionObj;

function nextQuestion() {
    console.log(i);
    if (i == questionKeyArr.length) {
        uploadAnswers();
        return;
    }
    // console.log(allAnswers);
    questionId = questionKeyArr[i];
    questionObj = questions[questionId];
    i++;

    if (!("question-preset" in questionObj || "answers" in questionObj || "question-type" in questionObj)) {
        return nextQuestion();
    }

    html = questionObj["question"];

    if ("question-type" in questionObj) {
        questionType = questionObj["question-type"];
        if (questionType == "USER_INPUT") {
            html += "<form>";
            html += "<input type='text' id='textInput'>"
            html += "</form>";
        } else return nextQuestion();
    } else {
        let answers;
        if ("answers" in questionObj) answers = questionObj["answers"]
        else answers = presets[questionObj["question-preset"]]

        html += "<form>";
        answers.forEach(ans => {
            html += `<input type="radio" name="formChoice" value=${ans}>${ans}</input><br>`;
        });
        html += "</form>";
    }
    html += "<button onClick='submitAnswer()'>Next Question</button>";
    document.getElementById("questionDiv").innerHTML = html;
}

function submitAnswer() {
    if (document.getElementById("textInput")) {
        input = document.getElementById("textInput").value;
        if (input != "") {
            allAnswers[questionId] = input;
            nextQuestion();
        }
    }
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