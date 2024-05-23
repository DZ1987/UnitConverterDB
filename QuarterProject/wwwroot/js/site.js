// Document Object Model(DOM) elements: RegisteredUser.
const charCountElement = document.getElementById("charCount");
const wordCountElement = document.getElementById("wordCount");
const maxCharsElement = document.getElementById("maxChars");
const userTextAreaElement = document.getElementById("userTextArea");

// Document Object Model(DOM) elements: Conversion.
const input1Element = document.getElementById("input1");
const input2Element = document.getElementById("input2");
const inputName1Element = document.getElementById("inputName1");
const inputName2Element = document.getElementById("inputName2");
const displayFormulaElement = document.getElementById("formula");
const displayResultElement = document.getElementById("result");
const clearButtonElement = document.getElementById("clearButton");
const convertButtonElement = document.getElementById("convertButton");

document.addEventListener("DOMContentLoaded", function () {
    updateIconsPath();
    checkAccordionSupport();
    checkTextAreaSupport();
    checkConversionSupport();
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
 * Check if on the Conversion pages.
 */
function checkConversionSupport() {
    // Maps each valid page to its corresponding action and input type.
    const VALID_PAGES = {
        "/ConvertCurrencies": {      // The valid page.
            action: convertCurrency, // Sets the function.
            allowsNegatives: 0,      // If the input allows negative numbers.
            allowsLiveUpdates: 0     // If the input allows live updates.
        },
        "/ConvertLengths": {
            action: convertInput,
            allowsNegatives: 0,
            allowsLiveUpdates: 1
        },
        "/ConvertTemperatures": {
            action: convertInput,
            allowsNegatives: 1,
            allowsLiveUpdates: 1
        }
    };

    // Get the current page path name.
    const currentPage = window.location.pathname;

    // Get the page details from the valid pages mapping.
    const validPage = VALID_PAGES[currentPage];

    if (validPage) {
        if (currentPage !== "/ConvertCurrencies") {
            input1Element.addEventListener("input", validPage.action);
            inputName1Element.addEventListener("change", validPage.action);
            inputName2Element.addEventListener("change", validPage.action);

            validPage.action();
        }
        else if (currentPage === "/ConvertCurrencies") {
            inputName1.selectedIndex = 151;
            inputName2.selectedIndex = 151;

            convertButtonElement.addEventListener("click", validPage.action);
            clearButtonElement.addEventListener("click", clearInput);

            function clearInput() {
                inputName1.selectedIndex = 151;
                inputName2.selectedIndex = 151;
                input1.value = 0;
                input2.value = 0;
                result.textContent = null;
            }
        }

        inputValidation(validPage.allowsNegatives, validPage.allowsLiveUpdates);
    }
}

/**
 * Check if on the RegisteredUsers Index page only.
 */
function checkAccordionSupport() {
    const VALID_PAGES = ["/RegisteredUsers"];
    const validPage = VALID_PAGES.includes(window.location.pathname);

    if (validPage) {
        const accordionOpenElement = document.getElementById("accordionOpenAll");
        const accordionCloseElement = document.getElementById("accordionCloseAll");
        const accordionElements = Array.from(document.getElementsByClassName("collapse"));

        // If the button is clicked, open all accordions elements in the page.
        accordionOpenElement.addEventListener("click", () => openAccordion(true));

        // If the button is clicked, close all accordions elements in the page.
        accordionCloseElement.addEventListener("click", () => openAccordion(false));

        /**
         * Open or close all accordion elements in the page.
         * @param {boolean} open If true, open all accordions otherwise close them.
         */
        const openAccordion = (open) => {
            accordionElements.forEach(element => element.classList.toggle("show", open));
        }
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
 * Converts the selected currency to another. Supports 161 commonly circulating
 * world currencies. These cover 99% of all UN recognized states and territories.
 */
function convertCurrency() {
    // The values from the elements.
    const input1Value = input1Element.value;
    const currencyName1 = document.getElementById("inputName1").value;
    const currencyName2 = document.getElementById("inputName2").value;
    const currencyCode1 = document.getElementById(currencyName1).value;
    const currencyCode2 = document.getElementById(currencyName2).value;

    let x = parseFloat(input1Value);

    // If x is Not a Number show the message.
    if (isNaN(x)) {
        x = "Enter a valid number";
        input2Element.value = x;
        displayResultElement.textContent = x;
    }
    else {
        // Constructs the url for the API request, example: "https://open.er-api.com/v6/latest/USD".
        const url = `https://open.er-api.com/v6/latest/${currencyCode1}`;

        // Fetch the data from the constructed url API.
        fetch(url)
            .then(response => response.json())
            .then(data => {
                // Get the exchange rate for the second currency.
                const rate = data.rates[currencyCode2];

                // Calculates the converted amount.
                const convertedAmount = (input1Value * rate).toFixed(2);

                // Display the conversion result.
                input2Element.value = `${convertedAmount}`;
                displayResultElement.textContent = `${input1Value} ${currencyName1}(${currencyCode1}) is around ${convertedAmount} ${currencyName2}(${currencyCode2})`;
            });
    }
}

/**
 * Converts the selected input to the selected output.
 */
function convertInput() {
    // The name and the input value of the units.
    const inputName1 = inputName1Element.value;
    const inputName2 = inputName2Element.value;
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
        // Constructs the conversion name, example: "KilometerToMile", "CelsiusToFahrenheit".
        const conversionName = `${inputName1}To${inputName2}`;

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
            displayResultElement.textContent = `${x} ${inputName1} = ${result} ${inputName2}`;
        }
        // If the conversionFormulaElement Id does not exist, set result to x.
        else {
            input2Element.value = x;
            displayFormulaElement.textContent = `x`;
            displayResultElement.textContent = `${x} ${inputName1} = ${x} ${inputName2}`;
        }
    }

    /**
     * Sets the selected options back to default, clears the input fields,
     * and resets the Formula and Result displays.
     */
    function clearInput() {
        inputName1Element.selectedIndex = 0;
        inputName2Element.selectedIndex = 0;
        let inputName1 = inputName1Element.value;
        let inputName2 = inputName2Element.value;
        let x1 = input1Element.value = 0;
        let x2 = input2Element.value = 0;
        displayFormulaElement.textContent = `x`;
        displayResultElement.textContent = `${x1} ${inputName1} = ${x2} ${inputName2}`;
    }

    clearButtonElement.addEventListener("click", clearInput);
}

/**
 * Validate the user entered input by preventing invalid characters from being entered.
 * If the input allows negative numbers: n1 = (0: No, 1: Yes).
 * If the input allows live updates:     n2 = (0: No, 1: Yes).
 */
function inputValidation(n1, n2) {
    const ALLOWED_KEYS = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"];
    const ALLOWED_CHARS = {
        0: /[0-9\.]/i,  // Positive numbers only.
        1: /[0-9\.\-]/i // Positive and negative numbers.
    };

    // If the input allows live updates, call convertInput() otherwise do nothing.
    const updateInput = n2 === 1 ? convertInput : () => { };

    input1Element.addEventListener("keydown", function (e) {
        const inputValue = this.value; // The current input value.
        const inputLength = this.value.length; // The current input value length.

        // Check if the pressed key is a decimal point, a negative sign, or one of the allowed keys.
        const isAllowedKey = ALLOWED_KEYS.includes(e.key);
        const isAllowedChar = ALLOWED_CHARS[n1].test(e.key) || isAllowedKey;
        const isBackspace = e.key === "Backspace";
        const isDelete = e.key === "Delete";
        const isDecimalPoint = e.key === '.';
        const isNegativeSign = e.key === '-';

        // Check if the input value includes a decimal point or a negative sign.
        const hasDecimalPoint = inputValue.includes('.');
        const hasNegativeSign = inputValue.includes('-');

        // Check if the input value starts with or ends with a decimal point.
        const hasDecimalAtStart = inputValue.startsWith('.');
        const hasDecimalAtEnd = inputValue.endsWith('.');

        // The current index of the Caret.
        const caretIndex = this.selectionStart;

        // Get the start and end positions of the selected text in the input field.
        const selectedAllText = this.selectionStart === 0 && this.selectionEnd === inputLength;

        // Get the selected text within the input field.
        const selectedText = inputValue.substring(this.selectionStart, this.selectionEnd);

        // Check if the selected text includes a decimal point or a negative sign.
        const selectedIncludesDecimal = selectedText.includes('.');
        const selectedIncludesNegative = selectedText.includes('-');

        // If the selected text length is equal to the input value length.
        if (selectedAllText) {
            // If "Backspace" or "Delete" keys are pressed.
            if (isBackspace || isDelete) {
                this.value = "0";
            }
            // If a decimal point is entered.
            else if (isDecimalPoint) {
                this.value = "0.";
            }
            updateInput();
        }

        // Prevent input if not a number, decimal point or negative sign.
        if (!isAllowedChar) {
            e.preventDefault();
        }
        // If the "Backspace" key is pressed and the Caret is not at the start of the input field
        // or the "Delete" key is pressed and the Caret is not at the end of the input field.
        else if (inputLength <= 3 && (isBackspace || isDelete)) {
            // If the input value length is 3 and has a negative sign and a decimal point.
            if (inputValue.length === 3 && hasNegativeSign && hasDecimalPoint) {
                // Example: -3. or -.3
                if (isBackspace && (caretIndex === 2 && hasDecimalAtEnd || caretIndex === 3 && !hasDecimalAtEnd)) {
                    this.value = "0";
                }
                // Example: -4. or -.4
                else if (isDelete && (caretIndex === 1 && hasDecimalAtEnd || caretIndex === 2 && !hasDecimalAtEnd)) {
                    this.value = "0";
                }
                e.preventDefault();
            }
            // If the input value length is 2 and has a negative sign or decimal point.
            else if (inputValue.length === 2 && (hasNegativeSign || hasDecimalPoint)) {
                // If the "Backspace" key is pressed.
                if (isBackspace) {
                    // Example: -1
                    if (hasNegativeSign) {
                        // If the Caret is in the middle, remove the negative sign otherwise set it to "0".
                        this.value = caretIndex === 1 ? inputValue.replace('-', '') : "0";
                    }
                    // Example: 1. or .1
                    else if (caretIndex === 1 && hasDecimalAtEnd || caretIndex === 2 && hasDecimalAtStart) {
                        // If either condition is true, set the current value to "0".
                        this.value = "0";
                    }
                    e.preventDefault();
                }
                // If the "Delete" key is pressed.
                else if (isDelete) {
                    // Example: -2
                    if (hasNegativeSign) {
                        // If the Caret is at the start, remove the negative sign otherwise set it to "0".
                        this.value = caretIndex === 0 ? this.value : "0";
                    }
                    // Example: 2. or .2
                    else if (caretIndex === 0 && hasDecimalAtEnd || caretIndex === 1 && hasDecimalAtStart) {
                        // If either condition is true, set the current value to "0".
                        this.value = "0";
                    }
                }
            }
            // If the input value length is 1, set the value to back "0".
            else if (inputValue.length === 1) {
                e.preventDefault();
                this.value = "0";
            }
            updateInput();
        }
        // Replace the default value "0" on user input.
        else if ((inputValue === "0" || inputValue === "-0") && !isDecimalPoint && !isNegativeSign && !isAllowedKey) {
            e.preventDefault();
            this.value = inputValue === "0" ? e.key : `-${e.key}`;
            updateInput();
        }
        // Prevent users from entering more than one decimal point.
        else if (isDecimalPoint && hasDecimalPoint && !selectedIncludesDecimal) {
            e.preventDefault();
        }
        // Moves the negative sign to the start of the input field.
        else if (isNegativeSign && !selectedIncludesNegative) {
            e.preventDefault();
            this.value = `-${inputValue.replace('-', '')}`;
            updateInput();
        }
        // Prevent users from entering anything before the negative sign.
        else if (hasNegativeSign && caretIndex === 0 && !isAllowedKey && !selectedIncludesNegative) {
            e.preventDefault();
        }
    });
}
