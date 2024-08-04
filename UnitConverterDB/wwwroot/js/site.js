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

// Document Object Model(DOM) elements: Statistics page.
const inputDatasetElement = document.getElementById("inputDataset");
const getStatisticsButtonElement = document.getElementById("getStatisticsButton");
const numSortedElement = document.getElementById("numSorted");
const numSizeElement = document.getElementById("numSize");
const numSumElement = document.getElementById("numSum");
const numMinElement = document.getElementById("numMin");
const numMaxElement = document.getElementById("numMax");
const numRangeElement = document.getElementById("numRange");
const numMeanElement = document.getElementById("numMean");
const numMedianElement = document.getElementById("numMedian");
const numModeElement = document.getElementById("numMode");
const numPopulationDeviationElement = document.getElementById("numPopulationDeviation");
const numSampleDeviationElement = document.getElementById("numSampleDeviation");
const numPopulationVarianceElement = document.getElementById("numPopulationVariance");
const numSampleVarianceElement = document.getElementById("numSampleVariance");

const numQuartile1Element = document.getElementById("numQuartile1");
const numQuartile2Element = document.getElementById("numQuartile2");
const numQuartile3Element = document.getElementById("numQuartile3");
const numInterquartileRangeElement = document.getElementById("numInterquartileRange");
const numOutlierLowerElement = document.getElementById("numOutlierLower");
const numOutlierUpperElement = document.getElementById("numOutlierUpper");
const numOutliersElement = document.getElementById("numOutliers");
const numFiveNumberSummaryElement = document.getElementById("numFiveNumberSummary");


// Document Object Model(DOM) elements: GetZScore page.
const inputZScoreXElement = document.getElementById("inputZScoreX");
const inputZScoreMeanElement = document.getElementById("inputZScoreMean");
const inputZScoreDeviationElement = document.getElementById("inputZScoreDeviation");
const getZScoreButtonElement = document.getElementById("getZScoreButton");
const numXElement = document.getElementById("numX");
const numZScoreElement = document.getElementById("numZScore");
const numPValueLeftTailedElement = document.getElementById("numPValueLeftTailed");
const numPValueRightTailedElement = document.getElementById("numPValueRightTailed");
const numPValueTwoTailedElement = document.getElementById("numPValueTwoTailed");
const numPValueBetweenElement = document.getElementById("numPValueBetween");

document.addEventListener("DOMContentLoaded", function () {
    updateIconsPath();
    checkAccordionSupport();
    checkTextAreaSupport();
    checkConversionSupport();
    checkStatisticsSupport();
    checkGetZScoreSupport();
});

/**
 * Updates the Icons Path based on the Users login state.
 */
function updateIconsPath() {
    // Document Object Model(DOM) elements.
    //const iconPrivacyElement = document.getElementById("icon-privacy");
    const iconUserNotesElement = document.getElementById("icon-userNotes");
    const userStateElement = document.getElementById("userState").textContent;

    // Icons for the Navigation Links.
    const iconPathLocked = "M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2";
    const iconPathUnocked = "M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2";

    // If the user is logged in, set the icon to unlocked otherwise set it to locked.
    const iconPath = userStateElement === "Logout" ? iconPathUnocked : iconPathLocked;

    // Updates the Icons Path for "Privacy" and "UserNotes" Navigation Links.
    //iconPrivacyElement.setAttribute("d", iconPath);
    iconUserNotesElement.setAttribute("d", iconPath);
}

/**
 * Check if on the Conversion pages.
 */
function checkConversionSupport() {
    // Maps each valid page to its corresponding action and input type.
    const VALID_PAGES = {
        "/ConvertCurrency": {      // The valid page.
            action: convertCurrency, // Sets the function.
            allowsNegatives: 0,      // If the input allows negative numbers.
            allowsLiveUpdates: 0     // If the input allows live updates.
        },
        "/ConvertLength": {
            action: convertInput,
            allowsNegatives: 0,
            allowsLiveUpdates: 1
        },
        "/ConvertTemperature": {
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
        if (currentPage !== "/ConvertCurrency") {
            input1Element.addEventListener("input", validPage.action);
            inputName1Element.addEventListener("change", validPage.action);
            inputName2Element.addEventListener("change", validPage.action);

            validPage.action();
        }
        else if (currentPage === "/ConvertCurrency") {
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
* Check if on the Statistics page.
*/
function checkStatisticsSupport() {
    // Get the current page path name.
    const currentPage = window.location.pathname;

    if (currentPage === "/Statistics") {
        clearInput();
        getStatisticsButtonElement.addEventListener("click", getStatistics);
        clearButtonElement.addEventListener("click", clearInput);
    }

        function clearInput() {
            inputDatasetElement.value = null;
            numSortedElement.textContent = `Sorted:`;
            numSizeElement.textContent = `Size (n):`;
            numSumElement.textContent = `Sum (∑):`;
            numMinElement.textContent = `Min:`;
            numMaxElement.textContent = `Max:`;
            numRangeElement.textContent = `Range:`;
            numMeanElement.textContent = `Mean (μ)(x̄):`;
            numMedianElement.textContent = `Median:`;
            numModeElement.textContent = `Mode:`;
            numPopulationDeviationElement.textContent = `Population Deviation (σ):`;
            numSampleDeviationElement.textContent = `Sample Deviation (s):`;
            numPopulationVarianceElement.textContent = `Population Variance (σ²):`;
            numSampleVarianceElement.textContent = `Sample Variance (s²):`;
        numQuartile1Element.textContent = `Quartile 1 (Q1):`;
        numQuartile2Element.textContent = `Quartile 2 (Q2):`;
        numQuartile3Element.textContent = `Quartile 3 (Q3):`;
            numInterquartileRangeElement.textContent = `Interquartile Range (IQR):`;
            numOutlierLowerElement.textContent = `Outlier Lower Boundary:`;
            numOutlierUpperElement.textContent = `Outlier Upper Boundary:`;
            numOutliersElement.textContent = `Outliers:`;
            numFiveNumberSummaryElement.textContent = `Five Number Summary:`;
        }
    }

/**
* Check if on the GetZScore page.
*/
function checkGetZScoreSupport() {
    const VALID_PAGE = "/Statistics/GetZScore";

    // Get the current page path name.
    const currentPage = window.location.pathname;

    if (currentPage === VALID_PAGE) {
        clearInput();
        getZScoreButtonElement.addEventListener("click", getZScore);
        clearButtonElement.addEventListener("click", clearInput);
}

    function clearInput() {
        inputZScoreXElement.value = null;
        inputZScoreMeanElement.value = null;
        inputZScoreDeviationElement.value = null;
        numXElement.textContent = `Sample (x):`;
        numZScoreElement.textContent = `Z-Score (Z):`;
        numPValueLeftTailedElement.textContent = `P-Value - Left-Tailed (x < Z):`;
        numPValueRightTailedElement.textContent = `P-Value - Right-Tailed (x > Z):`;
        numPValueTwoTailedElement.textContent = `P-Value - Two-Tailed (x < -Z or x > Z)`;
        numPValueBetweenElement.textContent = `P-Value - Between (-Z < x < Z):`;
    }
}

/**
 * Check if on the UserNotes Index page only.
 */
function checkAccordionSupport() {
    const VALID_PAGES = ["/UserNotes"];
    const validPage = VALID_PAGES.includes(window.location.pathname);

    if (validPage) {
        const accordionOpenElement = document.getElementById("accordionOpenAll");
        const accordionCloseElement = document.getElementById("accordionCloseAll");
        let accordionElements = Array.from(document.getElementsByClassName("collapse"));

        // Exclude the navigation bar accordion.
        accordionElements = accordionElements.filter(element => element.id !== "navbarAccordion");

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
 * Check if on the UserNotes Create, Edit or Details pages.
 */
function checkTextAreaSupport() {
    const VALID_PAGES = ["/Create", "/Edit/", "/Details/"];
    const validPage = Array.from(VALID_PAGES).some(p => window.location.href.includes(p));

    // Only call if on the UserNotes Create, Edit or Details pages.
    if (validPage) {
        addTextAreaSupport();
    }
}

/**
 * Add <textarea> support if on the UserNotes Create, Edit or Details pages.
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

/**
* Gets the Statistics Data from a Dataset.
*/
function getStatistics() {
    const dataset = inputDatasetElement.value.trim();

    if (validNumbers()) { // If the Dataset contains valid numbers.
        // Convert the numbers from the Dataset input field into an array of numbers.
        let inputDataset = sortDataset(dataset.split(/[\s,]+/).map(Number));

        // Get the various Statistics from the Dataset.
        let inputSize = inputDataset.length;
        let inputSum = getSum(inputDataset);
        let inputMin = inputDataset[0];
        let inputMax = inputDataset[inputSize - 1];
        let inputRange = inputMax - inputMin;
        let inputMean = inputSum / inputSize;
        let inputMedian = getMedian(inputDataset);
        let inputMode = getMode(inputDataset);

        // Get the sum of squared differences for Deviation/Variance.
        let sumOfSquaredDifferences = inputDataset.map(x => Math.pow(x - inputMean, 2)).reduce((a, b) => a + b);
        let inputPopulationDeviation = Math.sqrt(sumOfSquaredDifferences / (inputSize));
        let inputSampleDeviation = Math.sqrt(sumOfSquaredDifferences / (inputSize - 1));
        let inputPopulationVariance = sumOfSquaredDifferences / (inputSize);
        let inputSampleVariance = sumOfSquaredDifferences / (inputSize - 1);

        let inputQuartile1 = getMedian(inputDataset.slice(0, Math.floor(inputSize / 2)));
        let inputQuartile2 = inputMedian;
        let inputQuartile3 = getMedian(inputDataset.slice(Math.ceil(inputSize / 2)));

        let inputInterquartileRange = inputQuartile3 - inputQuartile1;
        let inputOutlierLowerBoundary = inputQuartile1 - 1.5 * inputInterquartileRange;
        let inputOutlierUpperBoundary = inputQuartile3 + 1.5 * inputInterquartileRange;
        let inputOutliers = inputDataset.filter(x => (x < inputOutlierLowerBoundary || x > inputOutlierUpperBoundary));

        // If outliers is greater than 0 display the outliers otherwise there are no outliers.
        inputOutliers = inputOutliers.length > 0 ? inputOutliers.join(", ") : "No Outliers";

        // Display the Statistics on the webpage.
        numSortedElement.textContent = `Sorted: ${inputDataset.join(", ")}`;
        numSizeElement.textContent = `Size (n): ${inputSize}`;
        numSumElement.textContent = `Sum (∑): ${inputSum.toFixed(6).replace(/\.?0+$/, '')}`;
        numMinElement.textContent = `Min: ${inputMin}`;
        numMaxElement.textContent = `Max: ${inputMax}`;
        numRangeElement.textContent = `Range: ${inputRange}`;
        numMeanElement.textContent = `Mean (μ)(x̄): ${inputMean.toFixed(6).replace(/\.?0+$/, '')}`;
        numMedianElement.textContent = `Median: ${inputMedian}`;
        numModeElement.textContent = `Mode: ${inputMode}`;
        numPopulationDeviationElement.textContent = `Population Deviation (σ): ${inputPopulationDeviation.toFixed(6).replace(/\.?0+$/, '')}`;
        numSampleDeviationElement.textContent = `Sample Deviation (s): ${inputSampleDeviation.toFixed(6).replace(/\.?0+$/, '')}`;
        numPopulationVarianceElement.textContent = `Population Variance (σ²): ${inputPopulationVariance.toFixed(6).replace(/\.?0+$/, '')}`;
        numSampleVarianceElement.textContent = `Sample Variance (s²): ${inputSampleVariance.toFixed(6).replace(/\.?0+$/, '')}`;

        numQuartile1Element.textContent = `Quartile 1 (Q1): ${inputQuartile1}`;
        numQuartile2Element.textContent = `Quartile 2 (Q2): ${inputQuartile2}`;
        numQuartile3Element.textContent = `Quartile 3 (Q3): ${inputQuartile3}`;
        numInterquartileRangeElement.textContent = `Interquartile Range (IQR): ${inputInterquartileRange}`;
        numOutlierLowerElement.textContent = `Outlier Lower Boundary: ${inputOutlierLowerBoundary}`;
        numOutlierUpperElement.textContent = `Outlier Upper Boundary: ${inputOutlierUpperBoundary}`;
        numOutliersElement.textContent = `Outliers: ${inputOutliers}`;
        numFiveNumberSummaryElement.textContent = `Five Number Summary: ${inputMin}, ${inputQuartile1}, ${inputQuartile2}, ${inputQuartile3}, ${inputMax}`;
    }
    else {
        // If the dataset is empty or invalid.
        alert("The Dataset must contain valid numbers.");
    }

    /**
     * Check if the input contains only valid numbers.
     */
    function validNumbers() {
        let checkNumbers = inputDataset.value.split(/[\s,]+/);

        for (let i = 0; i < checkNumbers.length; i++) {
            if (isNaN(checkNumbers[i])) { // Is Not a Number.
                return false;
            }
        }

        return true;
    }


    /**
     * Sorts the Dataset in ascending order.
     */
    function sortDataset(inputDataset) {
        // Sorts the Elements in the Dataset.
        let sortedNumbers = inputDataset.sort(compareNumbers);

        /**
         * Compares two Numbers.
         * If the value is less then 0, move 'a' to a lower index than 'b'.
         */
        function compareNumbers(a, b) {
            return a - b;
        }

        return sortedNumbers;
    }

    /**
     * Gets the Sum of the Dataset.
     */
    function getSum(inputDataset) {
        // Executes a reducer function on each Element of the Array, resulting in a single output value.
        let sum = inputDataset.reduce(addNumbers, 0);

        /**
         * Adds 'a' and 'b' values together.
         */
        function addNumbers(a, b) {
            return a + b;
        }

        return sum;
    }

    /**
     * Gets the Median from the Dataset.
     * The median is the center value in the dataset.
     * If the dataset size is odd, the median is the center value.
     * If the dataset size is even, the median is the average of the 2 center values.
     */
    function getMedian(inputDataset) {
        let size = inputDataset.length;
        let mid = Math.floor(size / 2);

        // If the dataset is even, the median is the average of the 2 center values, otherwise the median is the center value.
        let median = size % 2 === 0 ? (inputDataset[mid - 1] + inputDataset[mid]) / 2 : inputDataset[mid];

        return median;
    }

    /**
     * Gets the Mode from the Dataset.
     * The mode is the number that appears most frequently in the Dataset.
     * If all numbers in the dataset appear with the same frequency, return "No Mode".
     */
    function getMode(inputDataset) {
        let counts = {};
        let mode = [];
        let maxCount = 0;

        // Count the frequency of each number in the inputDataset.
        for (let i = 0; i < inputDataset.length; i++) {
            let elementNumber = inputDataset[i];
            counts[elementNumber] = (counts[elementNumber] || 0) + 1;

            if (counts[elementNumber] > maxCount) {
                maxCount = counts[elementNumber];
            }
        }

        // Find the numbers that appears most frequently.
        for (let num in counts) {
            if (counts[num] === maxCount) {
                mode.push(Number(num));
            }
        }

        // If all numbers appear with the same frequency, there is no mode.
        mode = (mode.length === inputDataset.length) ? "No Mode" : mode.join(", ");

        return mode;
    }
}


/**
 * Get the z-score from the sample, mean, and standard deviation
 * then get the p-values.
 */
function getZScore() {

    if (validNumbers()) {
        let x = inputZScoreXElement.value;
        let mean = inputZScoreMeanElement.value;
        let deviation = inputZScoreDeviationElement.value;
        let zScore = (x - mean) / deviation;

        // Display the Z-Score result on the webpage.
        numXElement.textContent = `Sample (x) = ${x}`;
        numZScoreElement.textContent = `Z-Score (Z) = ${zScore}`;

        getPValues(zScore);
    }
    else {
        alert("Enter some numbers.");
    }
}
}
}
        }

        return mode;
    }
}
