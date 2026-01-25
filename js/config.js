// js/config.js
var BASE_URL = "https://nitingit7.github.io/";

var GITHUB_FILES = {
    // --- 1. QUANTITATIVE APTITUDE ---
    // Moved existing tests to "quant_sectional"

    'full_test': [
        { name: "RRB Clerk Prelims: Full Mock 1", tags: "Full Mock", file: BASE_URL + "tests/Full_Mock/RRB/RRBQS001.json" },
        { name: "SBI PO Prelims: Full Mock Based on 4th August 2nd Shift 2025", tags: "Full Mock", file: BASE_URL + "tests/Full_Mock/SBI/SBI-PO001.json" }
    ],

    'quant_sectional': [
        { name: "Testing", file: BASE_URL + "tests/quant/mock1.json" },
        { name: "RRB Clerk: Speed Math 1", tags: "Speed Math", file: BASE_URL + "tests/quant/mock2.json" },
        { name: "RRB Clerk Quant: [Easy]", tags: "Easy", file: BASE_URL + "tests/quant/mock3.json" },
        { name: "RRB Clerk: Speed Math 2", tags: "Speed Math", file: BASE_URL + "tests/quant/SM2.json" },
        { name: "RRB Clerk Prelims: Quant [Moderate]", tags: "Moderate", file: BASE_URL + "tests/quant/hardqa1.json" },
        { name: "RRB Clerk Prelims: Quant [Easy-Moderate]", tags: "Easy-Moderate", file: BASE_URL + "tests/quant/quanteasymod.json" },
        { name: "RRB Clerk Prelims: Quant [Easy-Moderate] 2", tags: "Easy-Moderate", file: BASE_URL + "tests/quant/easytomode2.json" },
        { name: "RRB Clerk Prelims: Quant [Moderate]", tags: "Moderate", file: BASE_URL + "tests/quant/quant5.json" },
        { name: "RRB Clerk: Speed Math [Moderate]", tags: "Speed Math", file: BASE_URL + "tests/quant/QA008.json" },
        { name: "RRB Clerk: Speed Math [Moderate]", tags: "Speed Math", file: BASE_URL + "tests/quant/QA009.json" },
        { name: "RRB Clerk: Speed Math [Moderate]", tags: "Speed Math", file: BASE_URL + "tests/quant/QA010.json" },
        { name: "RRB Clerk Prelims: Quant [Moderate]", tags: "Moderate", file: BASE_URL + "tests/quant/QA011.json" },
        { name: "RRB Clerk Prelims: Quant [Moderate]", tags: "Moderate", file: BASE_URL + "tests/quant/QA012.json" },
        { name: "RRB Clerk Prelims: Quant [Moderate]", tags: "Moderate", file: BASE_URL + "tests/quant/QA013.json" },
        { name: "RRB Clerk Prelims Quant (7th Dec Shift 1)", tags: "PYQ", file: BASE_URL + "tests/quant/QA014.json" },
        { name: "RRB Clerk Prelims: Quant (6th Dec Shift 1)", tags: "PYQ", file: BASE_URL + "tests/quant/QA015.json" },
        { name: "RRB Clerk Prelims: Quant (6th Dec Shift 2)", tags: "PYQ", file: BASE_URL + "tests/quant/QA016.json" },
        { name: "RRB Clerk Prelims: Quant (7th Dec Shift 2)", tags: "PYQ", file: BASE_URL + "tests/quant/QA017.json" },
    ],
    // New Topic Tests Category
    'quant_topic': [
        { name: "Number System: Basic 1", tags: "Number System", file: BASE_URL + "tests/quant/TopicTest/Number System/QANS001.json" },
        { name: "Number System: Basic 2", tags: "Number System", file: BASE_URL + "tests/quant/TopicTest/Number System/QANS002.json" },
        { name: "Number System: Basic 3", tags: "Number System", file: BASE_URL + "tests/quant/TopicTest/Number System/QANS003.json" },
        { name: "Number System: Basic 4", tags: "Number System", file: BASE_URL + "tests/quant/TopicTest/Number System/QANS005.json" },
        { name: "Number System: Basic 5", tags: "Number System", file: BASE_URL + "tests/quant/TopicTest/Number System/QANS006.json" },
        { name: "Number System: Advance 1", tags: "Number System", file: BASE_URL + "tests/quant/TopicTest/Number System/QANS004.json" },
        { name: "Algebra: Basic 1", tags: "Algebra", file: BASE_URL + "tests/quant/TopicTest/Algebra/QAA001.json" },
        { name: "Algebra: Basic 2", tags: "Algebra", file: BASE_URL + "tests/quant/TopicTest/Algebra/QAA002.json" },
        { name: "Time and Work: Basic 1", tags: "Time and Work", file: BASE_URL + "tests/quant/TopicTest/Time_and_Work/QATW001.json" },
        { name: "Time and Work: Basic 2", tags: "Time and Work", file: BASE_URL + "tests/quant/TopicTest/Time_and_Work/QATW002.json" },
        { name: "Time and Work: Basic 3", tags: "Time and Work", file: BASE_URL + "tests/quant/TopicTest/Time_and_Work/QATW003.json" },
        { name: "Time and Work: Basic 4", tags: "Time and Work", file: BASE_URL + "tests/quant/TopicTest/Time_and_Work/QATW004.json" }
    ],

    // --- 2. REASONING ABILITY ---
    'reasoning_sectional': [
        { name: "RRB Clerk Reasoning: Puzzle & Seating", tags: "Sectional", file: BASE_URL + "tests/reasoning/mock1.json" },
        { name: "RRB Clerk Reasoning: Sectional 1", tags: "Sectional", file: BASE_URL + "tests/reasoning/reas2.json" },
        { name: "RRB Clerk Reasoning: Marathon", tags: "Marathon", file: BASE_URL + "tests/reasoning/puzzlemarathon.json" },
        { name: "RRB Clerk Prelims: Reasoning Ability [Moderate]", tags: "Moderate", file: BASE_URL + "tests/reasoning/RA004.json" },
        { name: "RRB Clerk Prelims: Reasoning (6th Dec Shift 2)", tags: "PYQ", file: BASE_URL + "tests/reasoning/RA005.json" },
        { name: "RRB Clerk Prelims: Reasoning (7th Dec Shift 1)", tags: "PYQ", file: BASE_URL + "tests/reasoning/RA006.json" },
        { name: "RRB Clerk Prelims: Reasoning (xth Dec Shift x)", tags: "PYQ", file: BASE_URL + "tests/reasoning/RA007.json" }
    ],
    'reasoning_topic': [
        { name: "Puzzles: Box Based", tags: "Puzzles", file: BASE_URL + "tests/reasoning/topics/puz1.json" },
        { name: "Syllogism: Only a Few", tags: "Syllogism", file: BASE_URL + "tests/reasoning/topics/syl1.json" },
        { name: "Mains Puzzle 1", tags: "Mains Puzzle", file: BASE_URL + "tests/reasoning/mp001.json" }
    ],

    // --- 3. ENGLISH LANGUAGE ---
    'english_sectional': [
        { name: "RRB Assistant: English Mock 1", tags: "Sectional", file: BASE_URL + "tests/english/mock1.json" }
    ],
    'english_topic': [
        { name: "Reading Comprehension 1", tags: "RC", file: BASE_URL + "tests/english/topics/rc1.json" }
    ],

    // --- 4. GENERAL AWARENESS ---
    'general_sectional': [
        { name: "Emty", tags: "Daily CA", file: BASE_URL + "tests/general/daily_1.json" },
        { name: "Emty", tags: "Mock", file: BASE_URL + "tests/general/mock1.json" }
    ],
    'general_topic': [
        { name: "Current Affairs: 1", tags: "Current Affairs", file: BASE_URL + "tests/General Awareness/CA/gaca001.json" },
        { name: "Emty", tags: "Banking", file: BASE_URL + "tests/general/topics/banking1.json" },
        { name: "Emty", tags: "Static GK", file: BASE_URL + "tests/general/topics/static1.json" }
    ]

    // --- 4. FULL MOCK TESTS (Stays the same) ---

};

var GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfcBe23FbEQkCmH2QEWLUvV2Ei0CFezkOv54BXYG40GheCCLw/viewform?usp=pp_url&entry.57428168=TEST_NAME_VAR&entry.1889905698=Q_ID_VAR";


document.addEventListener("DOMContentLoaded", function () {
    var savedTheme = localStorage.getItem('site-theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});
