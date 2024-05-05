// Document Object Model(DOM) elements.
const charCountElement = document.getElementById("charCount");
const wordCountElement = document.getElementById("wordCount");
const maxCharsElement = document.getElementById("maxChars");
const userTextAreaElement = document.getElementById("userTextArea");

document.addEventListener("DOMContentLoaded", function () {
    updateIconsPath();
    checkTextAreaSupport();
    checkLengthSupport();
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
 * Check if on the ConvertLengths page.
 */
function checkLengthSupport() {
    const VALID_PAGE = ["/ConvertLengths"];
    const currentPage = window.location.pathname;

    if (VALID_PAGE.includes(currentPage)) {
        // Document Object Model(DOM) elements.
        const input1Element = document.getElementById("input1");
        const lengthName1Element = document.getElementById("lengthName1");
        const lengthName2Element = document.getElementById("lengthName2");

        input1Element.addEventListener("input", convertLength);
        lengthName1Element.addEventListener("change", convertLength);
        lengthName2Element.addEventListener("change", convertLength);

        convertLength();
    }
}

/**
 * Check if on the ConvertTemperatures page.
 */
function checkTemperatureSupport() {
    const VALID_PAGE = ["/ConvertTemperatures"];
    const currentPage = window.location.pathname;

    if (VALID_PAGE.includes(currentPage)) {
        // Document Object Model(DOM) elements.
        const input1Element = document.getElementById("input1");
        const tempName1Element = document.getElementById("temperatureName1");
        const tempName2Element = document.getElementById("temperatureName2");

        input1Element.addEventListener("input", convertTemperature);
        tempName1Element.addEventListener("change", convertTemperature);
        tempName2Element.addEventListener("change", convertTemperature);

        convertTemperature();
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
 * Converts length between Millimeter, Centimeter, Meter, Kilometer,
 * Inch, Foot, Yard, Mile units.
 */
function convertLength() {
    // Document Object Model(DOM) elements.
    const lengthName1Element = document.getElementById("lengthName1");
    const lengthName2Element = document.getElementById("lengthName2");
    const input1Element = document.getElementById("input1");
    const input2Element = document.getElementById("input2");
    const displayFormulaElement = document.getElementById("formula");
    const displayResultElement = document.getElementById("result");
    const clearButtonElement = document.getElementById("clearButton");

    // Length names and the input value.
    const lengthName1 = lengthName1Element.value;
    const lengthName2 = lengthName2Element.value;
    let x = parseFloat(input1Element.value);

    // If x is Not a Number show the message.
    if (isNaN(x)) {
        x = "Enter a valid number";
        input2Element.value = x;
        displayFormulaElement.textContent = x;
        displayResultElement.textContent = x;
    }
    // Else x is a valid number.
    else {
        // Constructs the conversion name, example: "KilometerToMile".
        const conversionName = `${lengthName1}To${lengthName2}`;

        // Searches for the constructed Id in the web page.
        const conversionFormulaElement = document.querySelector(`#${conversionName}`);

        // If the conversionFormulaElement Id exists.
        if (conversionFormulaElement) {
            // Get the conversion formula from the input field.
            const formula = conversionFormulaElement.value;
            const resultFunction = new Function("x", "return " + formula);
            const result = resultFunction(x);

            input2Element.value = result;
            displayFormulaElement.textContent = formula;
            displayResultElement.textContent = `${x} ${lengthName1} = ${result} ${lengthName2}`;
        }
        // If the conversionFormulaElement Id does not exist, set result to x.
        else {
            input2Element.value = x;
            displayFormulaElement.textContent = `x`;
            displayResultElement.textContent = `${x} ${lengthName1} = ${x} ${lengthName2}`;
        }
    }

    /**
     * Sets the selected length options to default,
     * clears the input fields, resets the Formula and Result displays.
     */
    function clearInput() {
        lengthName1Element.selectedIndex = 0;
        lengthName2Element.selectedIndex = 0;
        let lengthName1 = lengthName1Element.value;
        let lengthName2 = lengthName2Element.value;
        let x1 = input1Element.value = 0;
        let x2 = input2Element.value = 0;
        displayFormulaElement.textContent = `x`;
        displayResultElement.textContent = `${x1} ${lengthName1} = ${x2} ${lengthName2}`;
    }

    clearButtonElement.addEventListener("click", function () {
        clearInput();
    });

    input1Element.addEventListener("keydown", function (e) {
        // The current value of the input field.
        const inputValue = this.value;

        // Check if the pressed key is a number, a decimal point or one of the allowed keys.
        const isAllowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key);
        const isAllowedChar = /[0-9\.]/i.test(e.key) || isAllowedKeys;
        const isBackspace = e.key === "Backspace";
        const isDelete = e.key === "Delete";
        const isDecimalPoint = e.key === '.';

        // Check if the input field includes a decimal point.
        const hasDecimalPoint = inputValue.includes('.');

        // Get the selected text within the input field.
        const selectedText = inputValue.substring(this.selectionStart, this.selectionEnd);

        // Check if the selected text includes a decimal point.
        const selectedIncludesDecimal = selectedText.includes('.');

        // If the selected text length is equal to the input value length.
        if (selectedText.length === inputValue.length) {
            // If "Backspace" or "Delete" keys are pressed.
            if (isBackspace || isDelete) {
                this.value = "0";
            }
            // If a decimal point is entered.
            else if (isDecimalPoint) {
                this.value = "0.";
            }
            convertLength();
        }

        // Prevent input if not a number or a decimal point.
        if (!isAllowedChar) {
            e.preventDefault();
        }
        // If the "Backspace" key is pressed and the Caret is not at the start of the input field
        // or the "Delete" key is pressed and the Caret is not at the end of the input field.
        else if (isBackspace && this.selectionStart !== 0 || isDelete && this.selectionStart !== inputValue.length) {
            // If the input value length is 2 and has a decimal point.
            if (inputValue.length === 2 && hasDecimalPoint) {
                // If the "Backspace" key is pressed.
                if (isBackspace) {
                    // If the Caret is in the middle, keep the current value otherwise set it to "0".
                    this.value = this.selectionStart === 1 ? this.value : "0";
                }
                // If the "Delete" key is pressed.
                else if (isDelete) {
                    // If the Caret is at the start, keep the current value otherwise set it to "0".
                    this.value = this.selectionStart === 0 ? this.value : "0";
                }
                convertLength();
            }
            // If the input value length is 1, set the value to back "0".
            else if (inputValue.length === 1) {
                e.preventDefault();
                this.value = "0";
                convertLength();
            }
        }
        // Replace the default value "0" on user input.
        else if (inputValue === "0" && !isDecimalPoint && !isAllowedKeys) {
            e.preventDefault();
            this.value = inputValue === "0" ? e.key : `-${e.key}`;
            convertLength();
        }
        // Prevent users from entering more than one decimal point.
        else if (isDecimalPoint && hasDecimalPoint && !selectedIncludesDecimal) {
            e.preventDefault();
        }
    });
}

/**
 * Converts temperatures between Celsius, Fahrenheit and Kelvin units.
 */
function convertTemperature() {
    // Document Object Model(DOM) elements.
    const tempName1Element = document.getElementById("temperatureName1");
    const tempName2Element = document.getElementById("temperatureName2");
    const input1Element = document.getElementById("input1");
    const input2Element = document.getElementById("input2");
    const displayFormulaElement = document.getElementById("formula");
    const displayResultElement = document.getElementById("result");
    const clearButtonElement = document.getElementById("clearButton");

    // Temperature names and the input value.
    const tempName1 = tempName1Element.value;
    const tempName2 = tempName2Element.value;
    let x = parseFloat(input1Element.value);

    // If x is Not a Number show the message.
    if (isNaN(x)) {
        x = "Enter a valid number";
        input2Element.value = x;
        displayFormulaElement.textContent = x;
        displayResultElement.textContent = x;
    }
    // Else x is a valid number.
    else {
        // Constructs the conversion name, example: "CelsiusToFahrenheit".
        const conversionName = `${tempName1}To${tempName2}`;

        // Searches for the constructed Id in the web page.
        const conversionFormulaElement = document.querySelector(`#${conversionName}`);

        // If the conversionFormulaElement Id exists.
        if (conversionFormulaElement) {
            // Get the conversion formula from the input field.
            const formula = conversionFormulaElement.value;
            const resultFunction = new Function("x", "return " + formula);
            const result = resultFunction(x);

            input2Element.value = result;
            displayFormulaElement.textContent = formula;
            displayResultElement.textContent = `${x} ${tempName1} = ${result} ${tempName2}`;
        }
        // If the conversionFormulaElement Id does not exist, set result to x.
        else {
            input2Element.value = x;
            displayFormulaElement.textContent = `x`;
            displayResultElement.textContent = `${x} ${tempName1} = ${x} ${tempName2}`;
        }
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

    clearButtonElement.addEventListener("click", function () {
        clearInput();
    });

    input1Element.addEventListener("keydown", function (e) {
        // The current value of the input field.
        const inputValue = this.value;

        // Check if the pressed key is a number, a decimal point, a negative sign, or one of the allowed keys.
        const isAllowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(e.key);
        const isAllowedChar = /[0-9\.\-]/i.test(e.key) || isAllowedKeys;
        const isBackspace = e.key === "Backspace";
        const isDelete = e.key === "Delete";
        const isDecimalPoint = e.key === '.';
        const isNegativeSign = e.key === '-';

        // Check if the input field includes a decimal point or a negative sign.
        const hasDecimalPoint = inputValue.includes('.');
        const hasNegativeSign = inputValue.includes('-');

        // Get the selected text within the input field.
        const selectedText = inputValue.substring(this.selectionStart, this.selectionEnd);

        // Check if the selected text includes a decimal point or a negative sign.
        const selectedIncludesDecimal = selectedText.includes('.');
        const selectedIncludesNegative = selectedText.includes('-');

        // If the selected text length is equal to the input value length.
        if (selectedText.length === inputValue.length) {
            // If "Backspace" or "Delete" keys are pressed.
            if (isBackspace || isDelete) {
                this.value = "0";
            }
            // If a decimal point is entered.
            else if (isDecimalPoint) {
                this.value = "0.";
            }
            // If a negative sign is entered.
            else if (isNegativeSign) {
                this.value = "-0";
            }
            convertTemperature();
        }

        // Prevent input if not a number, decimal point or negative sign.
        if (!isAllowedChar) {
            e.preventDefault();
        }
        // If the "Backspace" key is pressed and the Caret is not at the start of the input field
        // or the "Delete" key is pressed and the Caret is not at the end of the input field.
        else if (isBackspace && this.selectionStart !== 0 || isDelete && this.selectionStart !== inputValue.length) {
            // If the input value length is 2 and has a negative sign.
            if (inputValue.length === 2 && hasNegativeSign) {
                // If the "Backspace" key is pressed.
                if (isBackspace) {
                    // If the Caret is in the middle, keep the current value otherwise set it to "0".
                    this.value = this.selectionStart === 1 ? this.value : "0";
                }
                // If the "Delete" key is pressed.
                else if (isDelete) {
                    // If the Caret is at the start, keep the current value otherwise set it to "0".
                    this.value = this.selectionStart === 0 ? this.value : "0";
                }
                convertTemperature();
            }
            // If the input value length is 1, set the value to back "0".
            else if (inputValue.length === 1) {
                e.preventDefault();
                this.value = "0";
                convertTemperature();
            }
        }
        // Replace the default value "0" on user input.
        else if ((inputValue === "0" || inputValue === "-0") && !isDecimalPoint && !isNegativeSign && !isAllowedKeys) {
            e.preventDefault();
            this.value = inputValue === "0" ? e.key : `-${e.key}`;
            convertTemperature();
        }
        // Prevent users from entering more than one decimal point.
        else if (isDecimalPoint && hasDecimalPoint && !selectedIncludesDecimal) {
            e.preventDefault();
        }
        // Moves the negative sign to the start of the input field.
        else if (isNegativeSign && !selectedIncludesNegative) {
            e.preventDefault();
            this.value = `-${inputValue.replace('-', '')}`;
            convertTemperature();
        }
        // Prevent users from entering anything before the negative sign.
        else if (hasNegativeSign && this.selectionStart === 0 && !isAllowedKeys && !selectedIncludesNegative) {
            e.preventDefault();
        }
    });
}
