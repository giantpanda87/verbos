import conjugationRules from './src/data/conjugationRules.js';
import radicalChangingVerbs from './src/data/radicalChangingVerbs.js';
import irregularVerbs from './src/data/irregularVerbs.js';
import SpanishVerbs from './src/data/verbs.js';

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const subjects = ["yo", "tú", "él", "ella", "usted", "nosotros", "nosotras", "ellos", "ellas", "ustedes"];
const tenses = ["presente", "imperfecto", "pretérito", "futuro", "condicional", "pretérito perfecto", "subjuntivo de presente", "imperativo afirmativo"];

const accentedVerbs = {
    dar: {
        "subjuntivo de presente": ["yo", "él", "ella", "usted"] // Forms requiring accents
    },
    estar: {
        "subjuntivo de presente": ["yo", "tú", "él", "ella", "usted", "ellos", "ellas", "ustedes"] // Forms requiring accents
    }
};

let currentVerb, currentSubject, currentTense;
let correctAnswers = 0;
let streak = 0;
let highScore = localStorage.getItem('highScore') ? parseInt(localStorage.getItem('highScore')) : 0;

document.getElementById('highScoreValue').innerText = highScore;

function conjugateVerb(subject, verb, tense) {
    // Check for irregular verbs
    if (irregularVerbs[verb] && irregularVerbs[verb][tense]) {
        return irregularVerbs[verb][tense][subject];
    }

    const verbEnding = verb.slice(-2); // "ar", "er", or "ir"
    const verbStem = verb.slice(0, -2); // Remove the ending
    const rules = conjugationRules[tense];

    // Handle accented verbs
    if (accentedVerbs[verb] && accentedVerbs[verb][tense]) {
        const accentedForms = accentedVerbs[verb][tense];
        if (accentedForms.includes(subject)) {
            // Add an accent to the last vowel of the conjugated form
            const conjugated = rules[verbEnding][subject];
            return conjugated.replace(/([aeiou])([^aeiou]*)$/, "$1́$2"); // Add accent
        }
    }
    
    // Handle spelling changes for "-car", "-gar", and "-zar" verbs
    let modifiedStem = verbStem;
    if (["car", "gar", "zar"].some(suffix => verb.endsWith(suffix)) && tense === "subjuntivo de presente") {
        if (verb.endsWith("car")) {
            verbStem = verbStem.replace(/c$/, "qu");
        } else if (verb.endsWith("gar")) {
            verbStem = verbStem.replace(/g$/, "gu");
        } else if (verb.endsWith("zar")) {
            verbStem = verbStem.replace(/z$/, "c");
        }
    }

    // Handle radical-changing verbs
    if (radicalChangingVerbs[verb] && radicalChangingVerbs[verb].tenses.includes(tense)) {
        const change = radicalChangingVerbs[verb];
        const radical = Object.keys(change)[0]; // e.g., "o" or "e"
        const replacement = change[radical]; // e.g., "ue" or "ie"

        // Apply the stem change only to the first occurrence of the radical
        const stemChangeRegex = new RegExp(radical);
        if (!["nosotros", "vosotros", "nosotras", "vosotras"].includes(subject)) {
            modifiedStem = modifiedStem.replace(stemChangeRegex, replacement);
        }
    }

    // Regular conjugation
    if (rules) {
        if (rules[verbEnding] && rules[verbEnding][subject]) {
            return modifiedStem + rules[verbEnding][subject];
        } else if (rules["infinitive"] && rules["infinitive"][subject]) {
            return verb + rules["infinitive"][subject];
        } else if (rules["auxiliary"] && rules["past participle"]) {
            const auxiliary = rules["auxiliary"][subject];
            const participle = rules["past participle"][verbEnding];
            return `${auxiliary} ${modifiedStem}${participle}`;
        }
    }

    // If no conjugation is found, return a placeholder message
    return `No conjugation found for "${verb}" in "${tense}" tense with subject "${subject}".`;
}

function newQuestion() {
    currentTense = getRandomElement(tenses);

    // Filter subjects for "imperativo afirmativo"
    const validSubjects = currentTense === "imperativo afirmativo"
        ? ["tú", "usted", "vosotros", "vosotras", "ustedes", "nosotros", "nosotras"]
        : subjects;

    currentSubject = getRandomElement(validSubjects);
    currentVerb = getRandomElement(SpanishVerbs);

    document.getElementById("verb").innerText = currentVerb;
    document.getElementById("subject").innerText = currentSubject;
    document.getElementById("tense").innerText = currentTense;
    document.getElementById("answer").value = "";
    document.getElementById("feedback").innerText = "";
}

function checkAnswer() {
    const userAnswer = document.getElementById("answer").value.trim().toLowerCase();

    // Check if the input field is empty
    if (!userAnswer) {
        document.getElementById("feedback").innerText = "⚠️ Please enter an answer!";
        document.getElementById("feedback").classList.add("shake");
        setTimeout(() => {
            document.getElementById("feedback").classList.remove("shake");
        }, 500);
        return; // Exit the function early
    }

    const correctAnswer = conjugateVerb(currentSubject, currentVerb, currentTense).toLowerCase();

    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").innerText = "✅ Correct!";
        correctAnswers++;
        streak++;
        document.getElementById("correctAnswers").innerText = correctAnswers;
        document.getElementById("streakCount").innerText = streak;

        if (correctAnswers > highScore) {
            highScore = correctAnswers;
            localStorage.setItem('highScore', highScore);
            document.getElementById('highScoreValue').innerText = highScore;
        }
    } else {
        document.getElementById("feedback").innerText = `❌ Incorrect. Correct answer: "${correctAnswer}"`;
        document.getElementById("feedback").classList.add("shake");
        setTimeout(() => {
            document.getElementById("feedback").classList.remove("shake");
        }, 500);
        streak = 0;
        document.getElementById("streakCount").innerText = streak;
    }

    setTimeout(newQuestion, 2000);
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        checkAnswer();
    }
}

newQuestion(); // Start with the first question

// Attach functions to the global window object
window.checkAnswer = checkAnswer;
window.handleKeyPress = handleKeyPress;