// Document Object Model(DOM) elements.
const charCountElement = document.getElementById("charCount");
const wordCountElement = document.getElementById("wordCount");
const maxCharsElement = document.getElementById("maxChars");
const userTextAreaElement = document.getElementById("userTextArea");

document.addEventListener("DOMContentLoaded", function () {
    updateIconsPath();
    checkTextAreaSupport();
    checkTemperatureSupport();
});

/**
 * Updates the Icons Path based on the Users login state.
 */
function updateIconsPath() {
    // Document Object Model(DOM) elements.
    const iconPrivacyElement = document.getElementById("icon-privacy");
    const iconRegisteredUsersElement = document.getElementById("icon-registeredUsers");
    const userStateElement = document.getElementById("userState").textContent;

    // Icons for the Navigation Links.
    const iconPathLocked = "M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2";
    const iconPathUnocked = "M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2";

    // If the user is logged in, set the icon to unlocked otherwise set it to locked.
    const iconPath = userStateElement === "Logout" ? iconPathUnocked : iconPathLocked;

    // Updates the Icons Path for "Privacy" and "RegisteredUsers" Navigation Links.
    iconPrivacyElement.setAttribute("d", iconPath);
    iconRegisteredUsersElement.setAttribute("d", iconPath);
}

/**
 * Check if on the ConvertTemperatures page.
 */
function checkTemperatureSupport() {
    const VALID_PAGE = ["/ConvertTemperatures"];

    if (VALID_PAGE) {
        convertTemperature(0);
    }
}

/**
 * Check if on the RegisteredUsers Create, Edit or Details pages.
 */
function checkTextAreaSupport() {
    const VALID_PAGES = ["/Create", "/Edit/", "/Details/"];
    const validPage = Array.from(VALID_PAGES).some(p => window.location.href.includes(p));

    // Only call if on the RegisteredUsers Create, Edit or Details pages.
    if (validPage) {
        addTextAreaSupport();
    }
}

/**
 * Add <textarea> support if on the RegisteredUsers Create, Edit or Details pages.
 */
function addTextAreaSupport() {
    const MAX_CHARACTERS = 1000; // Sets the maximum amount of characters the User can enter.

    maxCharsElement.textContent = `/${MAX_CHARACTERS}`;

    updateCounts();
    userTextAreaElement.addEventListener("input", updateCounts);
    addTabSupport();
}

/**
 * Adds tab support for <textarea> allowing Users to enter tab spaces at the
 * current location of the Caret.
 * 
 * A Caret is a cursor indicator used to show where the text insertion will occur.
 */
function addTabSupport() {
    const TAB_SPACES = 2; // Sets the number of tab spaces.

    userTextAreaElement.addEventListener("keydown", function (e) {
        if (e.key == "Tab") {
            e.preventDefault();

            const selectStart = this.selectionStart;
            const selectEnd = this.selectionEnd;
            const textBeforeCaret = this.value.substring(0, selectStart);
            const textAfterCaret = this.value.substring(selectEnd);

            // Adds tab spaces at the Carets current location.
            this.value = `${textBeforeCaret}${" ".repeat(TAB_SPACES)}${textAfterCaret}`;

            // Moves the Caret right by the number of tab spaces.
            this.selectionStart = this.selectionEnd = selectStart + TAB_SPACES;

            updateCounts();
        }
    });
}

/**
 * Counts how many characters and words there are in the <textarea> and displays it.
 */
function updateCounts() {
    const inputChar = userTextAreaElement.value;
    const charCount = inputChar.length;

    // Split the input into words using space as the separator.
    const words = inputChar.trim().split(/\s+/);

    // If there are no words, set to 0 otherwise return the length.
    const wordCount = words[0] === "" ? 0 : words.length;

    // Display the results.
    charCountElement.textContent = `${charCount}`;
    wordCountElement.textContent = `${wordCount}`;
}

/**
 * Converts temperatures between Celsius, Fahrenheit and Kelvin units.
 * @param {number} n - The state to set the conversion function.
 */
function convertTemperature(n) {
    // Document Object Model(DOM) elements.
    const tempName1Element = document.getElementById("temperatureName1");
    const tempName2Element = document.getElementById("temperatureName2");
    const input1Element = document.getElementById("input1");
    const input2Element = document.getElementById("input2");
    const displayFormulaElement = document.getElementById("formula");
    const displayResultElement = document.getElementById("result");

    // Temperature names and the input value.
    const tempName1 = tempName1Element.value;
    const tempName2 = tempName2Element.value;
    const x = parseFloat(input1Element.value);

    // Constructs the conversion name, example: "CelsiusToFahrenheit"
    const conversionName = `${tempName1}To${tempName2}`;

    // Searches for the constructed Id in the web page.
    const conversionFormulaElement = document.querySelector(`#${conversionName}`);

    if (n === 0) {
        // If n is 0, initialize the web page.
        clearInput();
    }
    else if (n === 1) {
        // If n is 1, convert using the first input field.
        if (conversionFormulaElement) {
            // Get the conversion formula from the input field.
            const formula = conversionFormulaElement.value;
            const resultFunction = new Function("x", "return " + formula);
            const result = resultFunction(x).toFixed(2);

            displayFormulaElement.textContent = formula;
            displayResultElement.textContent = `${x} ${tempName1} = ${result} ${tempName2}`;
            input2Element.value = result;
        }
        else { // If the conversionFormulaElement does not exist, set result to x1.
            displayFormulaElement.textContent = `x`;
            displayResultElement.textContent = `${x} ${tempName1} = ${x} ${tempName2}`;
            input2Element.value = x.toFixed(2);
        }
    }
    else {
        // If n is not 0 or 1, show the error message.
        alert(`Invalid Number: ${n}`);
    }

    /**
     * Sets the selected temperature options to default,
     * clears the input fields, resets the Formula and Result displays.
     */
    function clearInput() {
        tempName1Element.selectedIndex = 0;
        tempName2Element.selectedIndex = 0;
        let tempName1 = tempName1Element.value;
        let tempName2 = tempName2Element.value;
        let x1 = input1Element.value = 0;
        let x2 = input2Element.value = 0;
        displayFormulaElement.textContent = `x`;
        displayResultElement.textContent = `${x1} ${tempName1} = ${x2} ${tempName2}`;
    }

    clearButton.addEventListener("click", function () {
        clearInput();
    });
}
