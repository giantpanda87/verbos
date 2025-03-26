const irregularVerbs = {
    ser: {
        presente: {
            "yo": "soy",
            "tú": "eres",
            "él": "es",
            "ella": "es",
            "usted": "es",
            "nosotros": "somos",
            "nosotras": "somos",
            "vosotros": "sois",
            "vosotras": "sois",
            "ellos": "son",
            "ellas": "son",
            "ustedes": "son"
        },
        // Add other tenses for "ser" here...
    },
    ir: {
        presente: {
            "yo": "voy",
            "tú": "vas",
            "él": "va",
            "ella": "va",
            "usted": "va",
            "nosotros": "vamos",
            "nosotras": "vamos",
            "vosotros": "vais",
            "vosotras": "vais",
            "ellos": "van",
            "ellas": "van",
            "ustedes": "van"
        },
        pretérito: {
            "yo": "fui",
            "tú": "fuiste",
            "él": "fue",
            "ella": "fue",
            "usted": "fue",
            "nosotros": "fuimos",
            "nosotras": "fuimos",
            "vosotros": "fuisteis",
            "vosotras": "fuisteis",
            "ellos": "fueron",
            "ellas": "fueron",
            "ustedes": "fueron"
        },
        "subjuntivo de presente": {
            "yo": "vaya",
            "tú": "vayas",
            "él": "vaya",
            "ella": "vaya",
            "usted": "vaya",
            "nosotros": "vayamos",
            "nosotras": "vayamos",
            "vosotros": "vayáis",
            "vosotras": "vayáis",
            "ellos": "vayan",
            "ellas": "vayan",
            "ustedes": "vayan"
        }
        // Add other tenses for "ir" here...
    },
    dar: {
        "subjuntivo de presente": {
            "yo": "dé",
            "tú": "des",
            "él": "dé",
            "ella": "dé",
            "usted": "dé",
            "nosotros": "demos",
            "nosotras": "demos",
            "vosotros": "deis",
            "vosotras": "deis",
            "ellos": "den",
            "ellas": "den",
            "ustedes": "den"
        }
    },
    traer: {
        presente: {
            "yo": "traigo",
            "tú": "traes",
            "él": "trae",
            "ella": "trae",
            "usted": "trae",
            "nosotros": "traemos",
            "nosotras": "traemos",
            "vosotros": "traéis",
            "vosotras": "traéis",
            "ellos": "traen",
            "ellas": "traen",
            "ustedes": "traen"
        },
        pretérito: {
            "yo": "traje",
            "tú": "trajiste",
            "él": "trajo",
            "ella": "trajo",
            "usted": "trajo",
            "nosotros": "trajimos",
            "nosotras": "trajimos",
            "vosotros": "trajisteis",
            "vosotras": "trajisteis",
            "ellos": "trajeron",
            "ellas": "trajeron",
            "ustedes": "trajeron"
        },
        // Add other tenses for "traer" here...
    },
    venir: {
        presente: {
            "yo": "vengo",
            "tú": "vienes",
            "él": "viene",
            "ella": "viene",
            "usted": "viene",
            "nosotros": "venimos",
            "nosotras": "venimos",
            "vosotros": "venís",
            "vosotras": "venís",
            "ellos": "vienen",
            "ellas": "vienen",
            "ustedes": "vienen"
        },
        pretérito: {
            "yo": "vine",
            "tú": "viniste",
            "él": "vino",
            "ella": "vino",
            "usted": "vino",
            "nosotros": "vinimos",
            "nosotras": "vinimos",
            "vosotros": "vinisteis",
            "vosotras": "vinisteis",
            "ellos": "vinieron",
            "ellas": "vinieron",
            "ustedes": "vinieron"
        },
        "subjuntivo de presente": {
            "yo": "venga",
            "tú": "vengas",
            "él": "venga",
            "ella": "venga",
            "usted": "venga",
            "nosotros": "vengamos",
            "nosotras": "vengamos",
            "vosotros": "vengáis",
            "vosotras": "vengáis",
            "ellos": "vengan",
            "ellas": "vengan",
            "ustedes": "vengan"
        }
    },
    decir: {
        presente: {
            "yo": "digo",
            "tú": "dices",
            "él": "dice",
            "ella": "dice",
            "usted": "dice",
            "nosotros": "decimos",
            "nosotras": "decimos",
            "vosotros": "decís",
            "vosotras": "decís",
            "ellos": "dicen",
            "ellas": "dicen",
            "ustedes": "dicen"
        },
        pretérito: {
            "yo": "dije",
            "tú": "dijiste",
            "él": "dijo",
            "ella": "dijo",
            "usted": "dijo",
            "nosotros": "dijimos",
            "nosotras": "dijimos",
            "vosotros": "dijisteis",
            "vosotras": "dijisteis",
            "ellos": "dijeron",
            "ellas": "dijeron",
            "ustedes": "dijeron"
        },
        "subjuntivo de presente": {
            "yo": "diga",
            "tú": "digas",
            "él": "diga",
            "ella": "diga",
            "usted": "diga",
            "nosotros": "digamos",
            "nosotras": "digamos",
            "vosotros": "digáis",
            "vosotras": "digáis",
            "ellos": "digan",
            "ellas": "digan",
            "ustedes": "digan"
        }
    },
    // Add more irregular verbs as needed...
};

export default irregularVerbs;