import { conjugationRules, radicalChangingVerbs } from './verbs.js';

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

const subjects = ["yo", "tú", "él", "ella", "usted", "nosotros", "nosotras", "ellos", "ellas", "ustedes"];
const commonVerbs = ["ser", "estar", "tener", "hacer", "ir", "decir", "ver", "dar", "saber", "poder", "querer", "llegar", "pasar", "deber", "poner", "creer", "hablar", "llevar", "dejar", "seguir"];
const businessVerbs = ["analizar", "gestionar", "desarrollar", "implementar", "optimizar", "coordinar", "evaluar", "negociar", "planificar", "presentar", "colaborar", "delegar", "invertir", "promover", "organizar", "dirigir", "supervisar", "comunicar", "estrategizar", "evaluar"];
const tenses = ["presente", "imperfecto", "pretérito", "futuro", "condicional", "pretérito perfecto", "subjuntivo de presente", "imperativo afirmativo"];

let currentVerb, currentSubject, currentTense;
let correctAnswers = 0;
let streak = 0;
let highScore = localStorage.getItem('highScore') ? parseInt(localStorage.getItem('highScore')) : 0;

document.getElementById('highScoreValue').innerText = highScore;

function conjugateVerb(subject, verb, tense) {
    const verbEnding = verb.slice(-2); // "ar", "er", or "ir"
    const verbStem = verb.slice(0, -2); // Remove the ending
    const rules = conjugationRules[tense];

    // Check for radical-changing verbs
    if (radicalChangingVerbs[verb] && radicalChangingVerbs[verb].tenses.includes(tense)) {
        const change = radicalChangingVerbs[verb];
        const radical = Object.keys(change)[0]; // e.g., "e" or "o"
        const replacement = change[radical]; // e.g., "ie" or "ue"
        const stemChangeRegex = new RegExp(radical, "g");
        const modifiedStem = verbStem.replace(stemChangeRegex, replacement);
        return modifiedStem + rules[verbEnding][subject];
    }

    // Regular conjugation
    if (rules) {
        if (rules[verbEnding] && rules[verbEnding][subject]) {
            return verbStem + rules[verbEnding][subject];
        } else if (rules["infinitive"] && rules["infinitive"][subject]) {
            return verb + rules["infinitive"][subject];
        } else if (rules["auxiliary"] && rules["past participle"]) {
            const auxiliary = rules["auxiliary"][subject];
            const participle = rules["past participle"][verbEnding];
            return `${auxiliary} ${verbStem}${participle}`;
        }
    }

    // If no conjugation is found, return a placeholder message
    return `No conjugation found for "${verb}" in "${tense}" tense with subject "${subject}".`;
}

function newQuestion() {
    currentSubject = getRandomElement(subjects);
    currentVerb = getRandomElement([...commonVerbs, ...businessVerbs]);
    currentTense = getRandomElement(tenses);

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