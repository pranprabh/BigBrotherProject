
// key : question ID
// value : dictionary with a key of "question-preset" to a preset name (string) OR key of "answers" to an array of questions
questions = {
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
presets = {
    "NUMERIC_SCALE": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    "AGREE_SCALE": ["Strongly disagree", "Slightly disagree", "Not sure", "Slightly Agree", "Strongly Agree"]
}

for (let key in questions) {
    console.log(key, questions[key]);
}