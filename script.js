let allAnswers = {}

let questionKeyArr = Object.keys(questions);
let i = 0;

// console.log(Object.keys(questions));
// for (let ii=0; ii<questionKeyArr.length; ++ii) console.log(questionKeyArr[ii]);

var questionId;
var questionObj;

function goToLogin() {
    location.href = 'login.html'
}

function nextQuestion() {
    // console.log(i);
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
            html += "<form onsubmit='return false'>";
            html += "<input type='text' id='textInput'>"
            html += "</form>";
        } else return nextQuestion();
    } else {
        let answers;
        if ("answers" in questionObj) answers = questionObj["answers"]
        else answers = presets[questionObj["question-preset"]]

        html += "<form onsubmit='return false'>";
        answers.forEach(ans => {
            html += `<input type="radio" name="formChoice" value=${ans}>${ans}</input><br>`;
        });
        html += "</form>";
    }
    html += "<button onClick='submitAnswer()' id='submitButton'>Next Question</button>";
    document.getElementById("questionDiv").innerHTML = html;
    
    if ("question-type" in questionObj && questionObj["question-type"] == "USER_INPUT") {
        document.getElementById("textInput").addEventListener("keyup", event => {
            if (event.keyCode === 13) {
                document.getElementById("submitButton").click();
            }
        });
    }
    
}

function submitAnswer() {
    let thisAnswer = null;
    // check for text inputs
    if (document.getElementById("textInput")) {
        input = document.getElementById("textInput").value;
        if (input != "") {
            thisAnswer = input;
        }
    }

    // check for radio button inputs
    for (let rb of document.querySelectorAll('input[name="formChoice"]')) {
        if (rb.checked) {
            thisAnswer = rb.value;
        }
    }

    // update answer if valid and move to next question
    if (thisAnswer != null) {
        allAnswers[questionId] = thisAnswer;

        if ("threshold" in questionObj && questionObj["threshold"] && isAboveThreshold(thisAnswer)) {
            nextQuestion();
            while (i < questionKeyArr.length && !("threshold" in questionObj && questionObj["threshold"])) nextQuestion();
            if (i == questionKeyArr.length) nextQuestion();
            return;
        }

        return nextQuestion();
    }
}

// precondition: current question is a threshold question
// returns: boolean
function isAboveThreshold(thisAnswer) {
    if (questionObj["question-preset"] == "NUMERIC_SCALE") return parseInt(thisAnswer) >= 8;
    if (questionObj["question-preset"] == "YES_NO_SCALE") return thisAnswer == "Yes";
    return false;
}

function uploadAnswers() {
    db.collection("survey_responses").add(allAnswers);
    document.getElementById("questionDiv").innerHTML = "Thank you for completing this survey! Your response is greatly appreciated.";
}