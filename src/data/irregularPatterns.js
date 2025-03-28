const irregularPatterns = {
    pretérito: {
        hacer: {
            stem: "hic",
            exceptions: {
                "él": "hizo",
                "ella": "hizo",
                "usted": "hizo"
            }
        },
        decir: {
            stem: "dij",
            specialEnding: "eron" // For "ellos/ellas/ustedes"
        },
        traer: {
            stem: "traj",
            specialEnding: "eron" // For "ellos/ellas/ustedes"
        }
    }
};

function conjugatePreterite(verb, subject) {
    const pattern = irregularPatterns.pretérito[verb];
    if (!pattern) return null; // No irregular pattern found

    const endings = {
        "yo": "e",
        "tú": "iste",
        "él": "o",
        "ella": "o",
        "usted": "o",
        "nosotros": "imos",
        "nosotras": "imos",
        "vosotros": "isteis",
        "vosotras": "isteis",
        "ellos": "ieron",
        "ellas": "ieron",
        "ustedes": "ieron"
    };

    // Handle exceptions (e.g., "hizo" for "él/ella/usted")
    if (pattern.exceptions && pattern.exceptions[subject]) {
        return pattern.exceptions[subject];
    }

    // Handle special endings (e.g., "eron" for "dijeron" and "trajeron")
    if (pattern.specialEnding && ["ellos", "ellas", "ustedes"].includes(subject)) {
        return pattern.stem + pattern.specialEnding;
    }

    // Default case
    return pattern.stem + endings[subject];
}

// Example usage
console.log(conjugatePreterite("hacer", "yo")); // Output: "hice"
console.log(conjugatePreterite("hacer", "él")); // Output: "hizo"
console.log(conjugatePreterite("decir", "ellos")); // Output: "dijeron"
console.log(conjugatePreterite("traer", "ustedes")); // Output: "trajeron"

export { irregularPatterns, conjugatePreterite };