const commonSpanishVerbs = [
    "ser", "estar", "tener", "hacer", "ir", "decir", "ver", "dar", "saber", "querer",
    "poder", "venir", "salir", "traer", "hablar", "comer", "vivir", "pensar", "trabajar", "leer"
];

const businessSpanishVerbs = [
    "negociar", "invertir", "analizar", "planificar", "gestionar", "colaborar", "desarrollar", "presentar",
    "evaluar", "organizar", "promover", "vender", "comprar", "contratar", "consultar", "liderar", "optimizar",
    "estrategizar", "implementer", "coordinar"
];

const radicalChangingVerbs = {
    "pensar": { "e": "ie", "tenses": ["presente"] },
    "poder": { "o": "ue", "tenses": ["presente"] },
    "pedir": { "e": "i", "tenses": ["presente"] },
    "jugar": { "u": "ue", "tenses": ["presente"] },
    "dormir": { "o": "ue", "tenses": ["presente"] },
    "sentir": { "e": "ie", "tenses": ["presente"] },
    "servir": { "e": "i", "tenses": ["presente"] }
};

const conjugationRules = {
    presente: {
        "ar": {
            "yo": "o",
            "tú": "as",
            "él": "a",
            "ella": "a",
            "usted": "a",
            "nosotros": "amos",
            "nosotras": "amos",
            "vosotros": "áis",
            "vosotras": "áis",
            "ellos": "an",
            "ellas": "an",
            "ustedes": "an"
        },
        "er": {
            "yo": "o",
            "tú": "es",
            "él": "e",
            "ella": "e",
            "usted": "e",
            "nosotros": "emos",
            "nosotras": "emos",
            "vosotros": "éis",
            "vosotras": "éis",
            "ellos": "en",
            "ellas": "en",
            "ustedes": "en"
        },
        "ir": {
            "yo": "o",
            "tú": "es",
            "él": "e",
            "ella": "e",
            "usted": "e",
            "nosotros": "imos",
            "nosotras": "imos",
            "vosotros": "ís",
            "vosotras": "ís",
            "ellos": "en",
            "ellas": "en",
            "ustedes": "en"
        }
    },
    imperfecto: {
        "ar": {
            "yo": "aba",
            "tú": "abas",
            "él": "aba",
            "ella": "aba",
            "usted": "aba",
            "nosotros": "ábamos",
            "nosotras": "ábamos",
            "vosotros": "abais",
            "vosotras": "abais",
            "ellos": "aban",
            "ellas": "aban",
            "ustedes": "aban"
        },
        "er": {
            "yo": "ía",
            "tú": "ías",
            "él": "ía",
            "ella": "ía",
            "usted": "ía",
            "nosotros": "íamos",
            "nosotras": "íamos",
            "vosotros": "íais",
            "vosotras": "íais",
            "ellos": "ían",
            "ellas": "ían",
            "ustedes": "ían"
        },
        "ir": {
            "yo": "ía",
            "tú": "ías",
            "él": "ía",
            "ella": "ía",
            "usted": "ía",
            "nosotros": "íamos",
            "nosotras": "íamos",
            "vosotros": "íais",
            "vosotras": "íais",
            "ellos": "ían",
            "ellas": "ían",
            "ustedes": "ían"
        }
    },
    pretérito: {
        "ar": {
            "yo": "é",
            "tú": "aste",
            "él": "ó",
            "ella": "ó",
            "usted": "ó",
            "nosotros": "amos",
            "nosotras": "amos",
            "vosotros": "asteis",
            "vosotras": "asteis",
            "ellos": "aron",
            "ellas": "aron",
            "ustedes": "aron"
        },
        "er": {
            "yo": "í",
            "tú": "iste",
            "él": "ió",
            "ella": "ió",
            "usted": "ió",
            "nosotros": "imos",
            "nosotras": "imos",
            "vosotros": "isteis",
            "vosotras": "isteis",
            "ellos": "ieron",
            "ellas": "ieron",
            "ustedes": "ieron"
        },
        "ir": {
            "yo": "í",
            "tú": "iste",
            "él": "ió",
            "ella": "ió",
            "usted": "ió",
            "nosotros": "imos",
            "nosotras": "imos",
            "vosotros": "isteis",
            "vosotras": "isteis",
            "ellos": "ieron",
            "ellas": "ieron",
            "ustedes": "ieron"
        }
    },
    futuro: {
        "infinitive": {
            "yo": "é",
            "tú": "ás",
            "él": "á",
            "ella": "á",
            "usted": "á",
            "nosotros": "emos",
            "nosotras": "emos",
            "vosotros": "éis",
            "vosotras": "éis",
            "ellos": "án",
            "ellas": "án",
            "ustedes": "án"
        }
    },
    condicional: {
        "infinitive": {
            "yo": "ía",
            "tú": "ías",
            "él": "ía",
            "ella": "ía",
            "usted": "ía",
            "nosotros": "íamos",
            "nosotras": "íamos",
            "vosotros": "íais",
            "vosotras": "íais",
            "ellos": "ían",
            "ellas": "ían",
            "ustedes": "ían"
        }
    },
    "pretérito perfecto": {
        "auxiliary": {
            "yo": "he",
            "tú": "has",
            "él": "ha",
            "ella": "ha",
            "usted": "ha",
            "nosotros": "hemos",
            "nosotras": "hemos",
            "vosotros": "habéis",
            "vosotras": "habéis",
            "ellos": "han",
            "ellas": "han",
            "ustedes": "han"
        },
        "past participle": {
            "ar": "ado",
            "er": "ido",
            "ir": "ido"
        }
    },
    "subjuntivo de presente": {
        "ar": {
            "yo": "e",
            "tú": "es",
            "él": "e",
            "ella": "e",
            "usted": "e",
            "nosotros": "emos",
            "nosotras": "emos",
            "vosotros": "éis",
            "vosotras": "éis",
            "ellos": "en",
            "ellas": "en",
            "ustedes": "en"
        },
        "er": {
            "yo": "a",
            "tú": "as",
            "él": "a",
            "ella": "a",
            "usted": "a",
            "nosotros": "amos",
            "nosotras": "amos",
            "vosotros": "áis",
            "vosotras": "áis",
            "ellos": "an",
            "ellas": "an",
            "ustedes": "an"
        },
        "ir": {
            "yo": "a",
            "tú": "as",
            "él": "a",
            "ella": "a",
            "usted": "a",
            "nosotros": "amos",
            "nosotras": "amos",
            "vosotros": "áis",
            "vosotras": "áis",
            "ellos": "an",
            "ellas": "an",
            "ustedes": "an"
        }
    },
    "imperativo afirmativo": {
        "ar": {
            "tú": "a",
            "él": "e",
            "ella": "e",
            "usted": "e",
            "nosotros": "emos",
            "nosotras": "emos",
            "vosotros": "ad",
            "vosotras": "ad",
            "ellos": "en",
            "ellas": "en",
            "ustedes": "en"
        },
        "er": {
            "tú": "e",
            "él": "a",
            "ella": "a",
            "usted": "a",
            "nosotros": "amos",
            "nosotras": "amos",
            "vosotros": "ed",
            "vosotras": "ed",
            "ellos": "an",
            "ellas": "an",
            "ustedes": "an"
        },
        "ir": {
            "tú": "e",
            "él": "a",
            "ella": "a",
            "usted": "a",
            "nosotros": "amos",
            "nosotras": "amos",
            "vosotros": "id",
            "vosotras": "id",
            "ellos": "an",
            "ellas": "an",
            "ustedes": "an"
        }
    }
};

export { commonSpanishVerbs, businessSpanishVerbs, conjugationRules, radicalChangingVerbs };