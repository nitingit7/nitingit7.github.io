// js/config.js
var BASE_URL = "https://nitingit7.github.io/";

var GITHUB_FILES = {
    'quant': [
        { name: "Testing", file: BASE_URL + "tests/quant/mock1.json" },
        { name: "RRB Clerk: Speed Math 1", file: BASE_URL + "tests/quant/mock2.json" },
        { name: "RRB Clerk Quant: [Easy]", file: BASE_URL + "tests/quant/mock3.json" },
        { name: "RRB Clerk: Speed Math 2", file: BASE_URL + "tests/quant/SM2.json" },
        { name: "RRB Clerk Prelims: Quant [Moderate]", file: BASE_URL + "tests/quant/hardqa1.json" },
        { name: "RRB Clerk Prelims: Quant [Easy-Moderate]", file: BASE_URL + "tests/quant/quanteasymod.json" },
        { name: "RRB Clerk Prelims: Quant [Easy-Moderate] 2", file: BASE_URL + "tests/quant/easytomode2.json" },
        { name: "RRB Clerk Prelims: Quant [Moderate]", file: BASE_URL + "tests/quant/quant5.json" },
        { name: "RRB Clerk: Speed Math [Moderate]", file: BASE_URL + "tests/quant/QA008.json" },
        { name: "RRB Clerk: Speed Math [Moderate]", file: BASE_URL + "tests/quant/QA009.json" },
        { name: "RRB Clerk: Speed Math [Moderate]", file: BASE_URL + "tests/quant/QA010.json" },
        { name: "RRB Clerk Prelims: Quant [Moderate]", file: BASE_URL + "tests/quant/QA011.json" },
        { name: "RRB Clerk Prelims: Quant [Moderate]", file: BASE_URL + "tests/quant/QA012.json" },
        { name: "RRB Clerk Prelims: Quant [Moderate]", file: BASE_URL + "tests/quant/QA013.json" },
        { name: "RRB Clerk Prelims Quant (7th Dec Shift 1)", file: BASE_URL + "tests/quant/QA014.json" },
        { name: "RRB Clerk Prelims: Quant (6th Dec Shift 1)", file: BASE_URL + "tests/quant/QA015.json" },
        { name: "RRB Clerk Prelims: Quant (6th Dec Shift 2)", file: BASE_URL + "tests/quant/QA016.json" },
        { name: "RRB Clerk Prelims: Quant (7th Dec Shift 2)", file: BASE_URL + "tests/quant/QA017.json" },
        { name: "RRB Clerk Prelims: Full Mock 1", file: BASE_URL + "tests/Full_Mock/RRB/RRBQS001.json" }
    ],
    'reasoning': [
        { name: "RRB Clerk Reasoning: Puzzle & Seating", file: BASE_URL + "tests/reasoning/mock1.json" },
        { name: "RRB Clerk Reasoning: Sectional 1", file: BASE_URL + "tests/reasoning/reas2.json" },
        { name: "RRB Clerk Reasoning: Marathon", file: BASE_URL + "tests/reasoning/puzzlemarathon.json" },
        { name: "RRB Clerk Prelims: Reasoning Ability [Moderate]", file: BASE_URL + "tests/reasoning/RA004.json" },
        { name: "RRB Clerk Prelims: Reasoning (6th Dec Shift 2)", file: BASE_URL + "tests/reasoning/RA005.json" },
        { name: "RRB Clerk Prelims: Reasoning (7th Dec Shift 1)", file: BASE_URL + "tests/reasoning/RA006.json" },
         { name: "RRB Clerk Prelims: Reasoning (xth Dec Shift x)", file: BASE_URL + "tests/reasoning/RA007.json" }
    ],
    'english': [
        { name: "COMING SOON....", file: BASE_URL + "tests/english/mock1.json" }
    ]
};

var GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfcBe23FbEQkCmH2QEWLUvV2Ei0CFezkOv54BXYG40GheCCLw/viewform?usp=pp_url&entry.57428168=TEST_NAME_HERE&entry.1889905698=Q_NUM_HERE";

// --- THEME MANAGER (Global Definition) ---

// 1. Define this function GLOBALLY (outside any blocks)

// window.toggleTheme = function() {
//     var body = document.body;
//     if(!body) return; // Safety check

//     // Toggle class
//     var isDark = body.classList.toggle('dark-mode');
    
//     // Save to storage
//     localStorage.setItem('site-theme', isDark ? 'dark' : 'light');
    
//     // Update button text
//     var btn = document.getElementById('theme-toggle-btn');
//     if(btn) btn.innerText = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
// };

// 2. Initialize Theme on Load (Wait for HTML to be ready)
document.addEventListener("DOMContentLoaded", function() {
    var savedTheme = localStorage.getItem('site-theme');
    if(savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});
