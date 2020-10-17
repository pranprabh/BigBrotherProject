// key : question ID
// value : dictionary with a key of "question-preset" to a preset name (string) OR key of "answers" to an array of questions
const questions = {
    "fam-threshold-question": {
        "question": "On a scale of 1-10, how would you rate your relationship with your family/caretaker?",
        "question-preset": "NUMERIC_SCALE"
    },
    "fam-sub-1": {
        "question": "On a scale of 1-10, how good of a role model do you consider your parents/caretaker to be?",
        "question-preset": "NUMERIC_SCALE"
    },
    "fam-sub-2": {
        "question": "Do you consider your parents to be trusted adults?",
        "question-preset": "AGREE_SCALE"
    },
    "fam-sub-3": {
        "question": "Would you say that your parents are easily approachable for most issues you may or have experienced?",
        "question-preset": "AGREE_SCALE"
    },
    "fam-sub-4": {
        "question": "Is there anything you disapprove of that your parents partake in?",
        "question-type": "USER_INPUT"
    },
    "fam-sub-5": {
        "question": "Have you ever had to worry about receiving your next meal or not?",
        "question-preset": "AGREE_SCALE"
    },
    "fam-sub-6": {
        "question": "How often do you eat outside home or at a restaurant?",
        "question-preset": "RARELY_SCALE"
    },
    "fam-sub-7": {
        "question": "Which family member in your household usually cooks (if applicable)?",
        "answers": ["Mother", "Father", "Sibling", "Relative", "Family friend", "Other"]
    },
    "fam-sub-8": {
        "question": "Have you ever experienced food poisoning?",
        "question-preset": "YES_NO_SCALE"
    },
    "fam-sub-9": {
        "question": "Are there ever times where you feel unsafe at home?",
        "question-preset": "RARELY_SCALE"
    },
    "fam-sub-10": {
        "question": "Do you ever feel threatened or insecure around family members?",
        "question-preset": "RARELY_SCALE"
    },
    "fam-sub-11": {
        "question": "Have you ever considered contacting local authorities or running away?",
        "question-preset": "RARELY_SCALE"
    },
    "fam-sub-12": {
        "question": "Have any members of your household been a victim of domestic abuse (including you)?",
        "question-preset": "RARELY_SCALE"
    },

    // community
    "com-threshold-question": {
        "question": "On a scale of 1-10, how safe do you feel in your community?",
        "question-preset": "NUMERIC_SCALE"
    },
    "com-sub-1": {
        "question": "Can you go outside while feeling safe at most times?",
        "question-preset": "RARELY_SCALE"
    },
    "com-sub-2": {
        "question": "How do you feel in areas of your community where there is poor street lighting?",
        "question-preset": "SAFE_SCALE"
    },
    "com-sub-3": {
        "question": "How do you feel in areas of your community you don’t know well?",
        "question-preset": "SAFE_SCALE"
    },
    "com-sub-4": {
        "question": "How do you feel when traveling through public transportation (buses, trains, taxis, Ubers, etc.)?",
        "question-preset": "SAFE_SCALE"
    },
    "com-sub-5": {
        "question": "How do you feel in local community parks?",
        "question-preset": "SAFE_SCALE"
    },
    "com-sub-6": {
        "question": "Is there any area in your community where you feel unsafe? Please list them if so.",
        "question-type": "USER_INPUT"
    },
    "com-sub-7": {
        "question": "Is there anything that would make you feel safer in the community? Please share if so.",
        "question-type": "USER_INPUT"
    },

    // education
    "edu-threshold-question": {
        "question": "On a scale of 1-10, how would you rate your education experience?",
        "question-preset": "NUMERIC_SCALE"
    },
    "edu-sub-1": {
        "question": "Do you have any special learning needs? Please list if there are any.",
        "question-type": "USER_INPUT"
    },
    "edu-sub-2": {
        "question": "Are you getting equal learning opportunities as other students?",
        "question-preset": "AGREE_SCALE"
    },
    "edu-sub-3": {
        "question": "Are there resources for free tutoring at school?",
        "question-preset": "AGREE_SCALE"
    },
    "edu-sub-4": {
        "question": "Does your teacher take extra steps to help you learn?",
        "question-preset": "AGREE_SCALE"
    },
    "edu-sub-5": {
        "question": "Do you have access to resources (Internet, textbooks, school supplies, libraries, etc)?",
        "answers": ["Yes", "Some, but not all", "No"]
    },
    "edu-sub-6": {
        "question": "Is your first language English?",
        "question-preset": "YES_NO_SCALE"
    },
    "edu-sub-7": {
        "question": "Are there any language barriers while learning?",
        "question-preset": "YES_NO_SCALE"
    },
    "edu-sub-8": {
        "question": "Do you enjoy learning?",
        "question-preset": "AGREE_SCALE"
    },
    "edu-sub-9": {
        "question": "What’s your favorite subject at school?",
        "answers": ["Math", "English", "Science", "Social Studies", "Art", "World Languages"]
    },
    "edu-sub-10": {
        "question": "How’s the overall environment of school?",
        "question-preset": "FUN_SCALE"
    },
    "edu-sub-11": {
        "question": "Are teachers excited about teaching you?",
        "question-preset": "AGREE_SCALE"
    },
    "edu-sub-12": {
        "question": "Are there fun activities at school (projects, recess, gym, group homework)?",
        "question-preset": "AGREE_SCALE"
    },
    "edu-sub-13": {
        "question": "Do your parents participate in your learning?",
        "question-preset": "AGREE_SCALE"
    },
    "edu-sub-14": {
        "question": "Is school a priority at home?",
        "question-preset": "AGREE_SCALE"
    },
    "edu-sub-15": {
        "question": "Do your parents support your homework needs?",
        "question-preset": "AGREE_SCALE"
    },

    // food

    "food-threshold-question": {
        "question": "On a scale of 1-10, how do you feel about your food intake?",
        "question-preset": "NUMERIC_SCALE"
    },
    "food-sub-1": {
        "question": "Do you get three meals a day?",
        "question-preset": "YES_NO_SCALE"
    },
    "food-sub-2": {
        "question": "Do you get a sufficient breakfast?",
        "question-preset": "AGREE_SCALE"
    },
    "food-sub-3": {
        "question": "Do you get a sufficient lunch?",
        "question-preset": "AGREE_SCALE"
    },
    "food-sub-4": {
        "question": "Do you get a sufficient dinner?",
        "question-preset": "AGREE_SCALE"
    },
    "food-sub-5": {
        "question": "Is there food available (snacks, meals, etc) when you’re hungry?",
        "question-preset": "AGREE_SCALE"
    },
    "food-sub-6": {
        "question": "Do you get enough nutrients?",
        "question-preset": "AGREE_SCALE"
    },
    "food-sub-7": {
        "question": "Do you get 3-5 servings of veggies?",
        "question-preset": "AGREE_SCALE"
    },
    "food-sub-8": {
        "question": "Do you enjoy learning?",
        "question-preset": "AGREE_SCALE"
    },
    "food-sub-9": {
        "question": "Do you get 2-3 servings of protein (meat, chicken, eggs, fish, beans)?",
        "question-preset": "AGREE_SCALE"
    },
    "food-sub-10": {
        "question": "Do you get 2-4 servings of fruits?",
        "question-preset": "AGREE_SCALE"
    },
    "food-sub-11": {
        "question": "Do you get 6-11 servings of carbs (bread, rice, cereal, pasta)?",
        "question-preset": "AGREE_SCALE"
    },
    "food-sub-12": {
        "question": "Do you drink 6-8 cups of water?",
        "question-preset": "AGREE_SCALE"
    },
    "food-sub-13": {
        "question": "Do you get enough supplements (multivitamins)?",
        "question-preset": "AGREE_SCALE"
    },
    "food-sub-14": {
        "question": "Do you have any food allergies? Please name them.",
        "question-type": "USER_INPUT"
    },

    // peer

    "peer-threshold-question": {
        "question": "On a scale of 1-10, how would you rate your relationships with fellow peers, classmates, and friends?",
        "question-preset": "NUMERIC_SCALE"
    },
    "peer-sub-1": {
        "question": "Do you get along well with your peers?",
        "question-preset": "AGREE_SCALE"
    },
    "peer-sub-2": {
        "question": "Do you respect your peers?",
        "question-preset": "AGREE_SCALE"
    },
    "peer-sub-3": {
        "question": "Do you feel like you are respected by your peers?",
        "question-preset": "AGREE_SCALE"
    },
    "peer-sub-4": {
        "question": "Do you ever argue or get upset with peers?",
        "question-preset": "AGREE_SCALE"
    },
    "peer-sub-5": {
        "question": "Do you have conversations with peers?",
        "question-preset": "AGREE_SCALE"
    },
    "peer-sub-6": {
        "question": "Are you able to make new friends easily?",
        "question-preset": "AGREE_SCALE"
    },
    "peer-sub-7": {
        "question": "Do you enjoy meeting new people?",
        "question-preset": "AGREE_SCALE"
    },
    "peer-sub-8": {
        "question": "How long have you known your friends?",
        "answers": ["Just met them", "Not too long", "Somewhat of a long time", "Very long time"]
    },
    "peer-sub-9": {
        "question": "Do you like making new friends?",
        "question-preset": "AGREE_SCALE"
    },
    "peer-sub-10": {
        "question": "Have your friends changed recently?",
        "question-preset": "AGREE_SCALE"
    },
    "peer-sub-11": {
        "question": "Do you have a group of good friends?",
        "question-preset": "AGREE_SCALE"
    },
    "peer-sub-12": {
        "question": "Do you spend time with friends?",
        "question-preset": "AGREE_SCALE"
    },
    "peer-sub-13": {
        "question": "Do you like your friends?",
        "question-preset": "AGREE_SCALE"
    },
    "peer-sub-14": {
        "question": "Do you do activities with friends?",
        "question-preset": "AGREE_SCALE"
    },
    "peer-sub-15": {
        "question": "Do you meet with friends outside of school?",
        "question-preset": "AGREE_SCALE"
    },
    "peer-sub-16": {
        "question": "Do you enjoy spending time with your classmates?",
        "question-preset": "AGREE_SCALE"
    },
    "peer-sub-17": {
        "question": "How do you feel when with classmates?",
        "question-preset": "AGREE_SCALE"
    },
    "peer-sub-18": {
        "question": "Do you look forward to interacting with others at school?",
        "question-preset": "AGREE_SCALE"
    },
    "peer-sub-19": {
        "question": "Are you happy when talking with peers?",
        "question-preset": "AGREE_SCALE"
    },
    "peer-sub-20": {
        "question": "How often do you interact with your peers every week?",
        "question-preset": "RARELY_SCALE"
    },






    // Batta's questions

    // mental health
    "mental-health-question": {
        "question": "How would you rate your mental and emotional well-being from 1-10?",
        "question-preset": "NUMERIC_SCALE"
    },
    "mental-threshold-question": {
        "question": "How do you feel your level of happiness is?",
        "question-preset": "NUMERIC_SCALE"
    },
    "mental-sub-2": {
        "question": "Do you overall feel happy?",
        "question-preset": "AGREE_SCALE"
    },
    "mental-sub-3": {
        "question": "Have you felt depressed recently?",
        "question-preset": "RARELY_SCALE"
    },
    "mental-sub-4": {
        "question": "Do you often do you feel low or down?",
        "question-preset": "RARELY_SCALE"
    },
    "mental-sub-5": {
        "question": "Would your friends describe you as upbeat and positive?",
        "question-preset": "AGREE_SCALE"
    },
    "mental-threshold-question-2": {
        "question": "How has your mental state been on a scale of 1-10?",
        "question-preset": "NUMERIC_SCALE"
    },
    "mental-sub-7": {
        "question": "Have you felt anxious recently?",
        "question-preset": "RARELY_SCALE"
    },
    "mental-sub-8": {
        "question": "Have you been stressed recently?",
        "question-preset": "RARELY_SCALE"
    },
    "mental-sub-9": {
        "question": "Have you been calm for the majority of the time recently?",
        "question-preset": "RARELY_SCALE"
    },
    "mental-sub-10": {
        "question": "Have you felt panicked recently?",
        "question-preset": "RARELY_SCALE"
    },
    "mental-sub-11": {
        "question": "Have you felt anxious recently?",
        "question-preset": "YES_NO_SCALE"
    },
    "mental-threshold-question-3": {
        "question": "Has your mental state ever negatively impacted your day to day activities?",
        "question-preset": "RARELY_SCALE"
    },
    "mental-sub-13": {
        "question": "Has feeling down ever prevented you from getting work done?",
        "question-preset": "RARELY_SCALE"
    },
    "mental-sub-14": {
        "question": "Have your feelings and emotions ever hurt your relationships?",
        "question-preset": "RARELY_SCALE"
    },
    "mental-sub-14": {
        "question": "Do you feel energetic and positive overall?",
        "question-preset": "AGREE_SCALE"
    },
    "mental-sub-15": {
        "question": "Have your friends ever said anything seemed wrong in terms of the way you were acting?",
        "question-preset": "YES_NO_SCALE"
    },
    "mental-threshold-question-4": {
        "question": "How do you deal with mental health trouble?",
        "question-type": "USER_INPUT"
    },
    "mental-sub-17": {
        "question": "Do you have someone who you can always talk to about what is troubling you?",
        "question-preset": "YES_NO_SCALE"
    },
    "mental-sub-18": {
        "question": "Do you ever feel alone in dealing with your problems?",
        "question-preset": "YES_NO_SCALE"
    },
    "mental-sub-19": {
        "question": "Do you know where to find mental health resources?",
        "question-preset": "YES_NO_SCALE"
    },
    "mental-sub-20": {
        "question": "Do you ever feel overwhelmed?",
        "question-preset": "RARELY_SCALE"
    },

    // physical health

    "physical-threshold-question": {
        "question": "How would you rate your physical health on a scale of 1-10?",
        "question-preset": "NUMERIC_SCALE"
    },
    "physical-threshold-question-2": {
        "question": "Do you get enough physical activity?",
        "question-preset": "AGREE_SCALE"
    },
    "physical-sub-1": {
        "question": "How much physical activity do you get per day?",
        "answers": ["None", "0-30 Minutes", "30-60 Minutes", "60+ Minutes"]
    },
    "physical-sub-2": {
        "question": "Do you play sports?",
        "question-preset": "YES_NO_SCALE"
    },
    "physical-sub-3": {
        "question": "Would you consider yourself athletic?",
        "question-preset": "YES_NO_SCALE"
    },
    "physical-sub-4": {
        "question": "Do you feel good about your health and body?",
        "question-preset": "YES_NO_SCALE"
    },
    "physical-threshold-question-3": {
        "question": "Do you follow a healthy lifestyle?",
        "question-preset": "AGREE_SCALE"
    },
    "physical-sub-6": {
        "question": "How much sleep do you get per night?",
        "answers": ["None", "0-4 hrs", "4-6 hrs", "6-8 hrs", "8+ hours"]
    },
    "physical-sub-7": {
        "question": "Do you eat and drink healthy foods?",
        "question-preset": "RARELY_SCALE"
    },
    "physical-sub-8": {
        "question": "Do you have enough time to devote to your health?",
        "question-preset": "AGREE_SCALE"
    },
    "physical-sub-9": {
        "question": "Would you consider yourself healthy?",
        "question-preset": "AGREE_SCALE"
    },
    "physical-threshold-question-4": {
        "question": "Do you avoid things bad for your health?",
        "question-preset": "YES_NO_SCALE"
    },
    "physical-sub-11": {
        "question": "Do you have enough time to devote to your health?",
        "question-preset": "AGREE_SCALE"
    },
    "physical-sub-12": {
        "question": "Do you drink alcohol?",
        "question-preset": "YES_NO_SCALE"
    },
    "physical-sub-13": {
        "question": "Do you smoke?",
        "question-preset": "YES_NO_SCALE"
    },
    "physical-sub-14": {
        "question": "Do you eat junk food often?",
        "question-preset": "RARELY_SCALE"
    },
    "physical-sub-15": {
        "question": "Do you know how to make healthy choices?",
        "question-preset": "YES_NO_SCALE"
    },
    "physical-threshold-question-5": {
        "question": "Do you have enough resources to help your physical health?",
        "question-preset": "AGREE_SCALE"
    },
    "physical-sub-17": {
        "question": "Are there sports facilities accessible to you?",
        "question-preset": "YES_NO_SCALE"
    },
    "physical-sub-18": {
        "question": "Is healthy food available to you?",
        "question-preset": "YES_NO_SCALE"
    },
    "physical-sub-19": {
        "question": "Do you have someone to talk to about your physical health?",
        "question-preset": "YES_NO_SCALE"
    },
    "physical-sub-20": {
        "question": "Are you financially able to make healthy choices?",
        "question-preset": "YES_NO_SCALE"
    },

    // internet

    "internet-threshold-question": {
        "question": "Do you have access to internet at home",
        "question-preset": "YES_NO_SCALE"
    },
    "internet-threshold-question-2": {
        "question": "How often do you use the internet?",
        "question-preset": "RARELY_SCALE"
    },
    "internet-sub-1": {
        "question": "How many members in your household (including yourself) use the internet at least once a day?",
        "question-preset": "NUMERIC_SCALE"
    },
    "internet-sub-2": {
        "question": "How long do your internet sessions typically last?",
        "answers": ["None", "0-30 Minutes", "30-60 Minutes", "60+ Minutes"]
    },
    "internet-sub-3": {
        "question": "If you don’t have access to internet at home, where do you typically go to gain access?",
        "question-type": "USER_INPUT"
    },
    "internet-threshold-question-3": {
        "question": "On a scale from 1-10, how would you rate the quality of your internet usage at home?",
        "question-preset": "NUMERIC_SCALE"
    },
    "internet-sub-5": {
        "question": "How many devices have access to the internet in your household?",
        "question-preset": "NUMERIC_SCALE"
    },
    "internet-sub-6": {
        "question": "Do you own a cellphone?",
        "question-preset": "YES_NO_SCALE"
    },
    "internet-sub-7": {
        "question": "Are you currently on a cellular data contract or family plan?",
        "question-preset": "YES_NO_SCALE"
    },
    "internet-sub-8": {
        "question": "How many devices have access to the internet in your household?",
        "question-preset": "NUMERIC_SCALE"
    },
    "internet-threshold-question-4": {
        "question": "Do your parents ever regulate your internet usage?",
        "question-preset": "YES_NO_SCALE"
    },
    "internet-sub-10": {
        "question": "Do your parents often limit the amount of time you can spend on the internet?",
        "question-preset": "RARELY_SCALE"
    },
    "internet-sub-11": {
        "question": "Do your parents ever ask to check or access your browsing history?",
        "question-preset": "YES_NO_SCALE"
    },
    "internet-sub-12": {
        "question": "Have your parents ever placed any kind of restrictions to the type of content you are allowed to access on the internet?",
        "question-preset": "YES_NO_SCALE"
    },

    // leisure

    "leisure-threshold-question": {
        "question": "On a scale from 1-10, how much freetime do you have?",
        "question-preset": "NUMERIC_SCALE"
    },
    "leisure-threshold-question-2": {
        "question": "Do you feel the current amount of leisure time you have is adequate?",
        "question-preset": "AGREE_SCALE"
    },
    "leisure-sub-1": {
        "question": "How much more freetime do you wish you had?",
        "answers": ["None", "0-30 Minutes", "30-60 Minutes", "60+ Minutes"]
    },
    "leisure-sub-2": {
        "question": "If you wanted to have more freetime than you currently do, how hard would this be to achieve?",
        "answers": ["Very hard", "Slightly Hard", " Not Hard", "Easy"]
    },
    "leisure-sub-3": {
        "question": "Have you ever worked a part-time job or participated in any labor-related activities?",
        "question-preset": "YES_NO_SCALE"
    },
    "leisure-threshold-question-3": {
        "question": "How do you typically spend your free time?",
        "question-type": "USER_INPUT"
    },
    "leisure-sub-5": {
        "question": "Do you own a gaming console and/or play video games to relax?",
        "question-preset": "YES_NO_SCALE"
    },
    "leisure-sub-6": {
        "question": "How often do you spend time with your family as a way to relax?",
        "question-preset": "RARELY_SCALE"
    },
    "leisure-sub-7": {
        "question": "Are there many things you don’t have access to but wish you did during your free time?",
        "question-preset": "YES_NO_SCALE"
    },
    "leisure-threshold-question-4": {
        "question": "Are you ever jealous of other children, friends, or schoolmates when it comes to leisure-related activities?",
        "question-preset": "RARELY_SCALE"
    },
    "leisure-sub-9": {
        "question": "Do your friends or other children ever make fun of you for not having something they do?",
        "question-preset": "RARELY_SCALE"
    },
    "leisure-sub-10": {
        "question": "How often do you hang out with friends?",
        "question-preset": "RARELY_SCALE"
    },
    "leisure-sub-11": {
        "question": "Would you consider your friends to be close and trustworthy?",
        "question-preset": "AGREE_SCALE"
    }
}

// key : string name of preset
// value : array of answer choices
const presets = {
    "NUMERIC_SCALE": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    "AGREE_SCALE": ["Strongly disagree", "Slightly disagree", "Not sure", "Slightly Agree", "Strongly Agree"],
    "YES_NO_SCALE": ["Yes", "No"],
    "RARELY_SCALE": ["Never", "Rarely", "Not sure", "Sometimes", "All the time"],
    "SAFE_SCALE": ["Never safe", "Rarely safe", "Somewhat safe", "Very safe"],
    "FUN_SCALE": ["Rarely fun", "Not too fun", "Somewhat fun", "Very fun"],
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