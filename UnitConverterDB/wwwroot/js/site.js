﻿// Document Object Model(DOM) elements: RegisteredUser.
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


// Document Object Model(DOM) elements: Statistics Calculators page.
const inputZScoreXElement = document.getElementById("inputZScoreX");
const inputZScorePopulationMeanElement = document.getElementById("inputZScorePopulationMean");
const inputZScorePopulationStandardDeviationElement = document.getElementById("inputZScorePopulationStandardDeviation");
const calculateZScoreButtonElement = document.getElementById("calculateZScoreButton");
const clearZScoreButtonElement = document.getElementById("clearZScoreButton");
const errorZScoreElement = document.getElementById("errorZScore");
const resultXElement = document.getElementById("resultX");
const resultZScoreElement = document.getElementById("resultZScore");
const resultPValueLeftTailedElement = document.getElementById("resultPValueLeftTailed");
const resultPValueRightTailedElement = document.getElementById("resultPValueRightTailed");
const resultPValueTwoTailedElement = document.getElementById("resultPValueTwoTailed");
const resultPValueBetweenElement = document.getElementById("resultPValueBetween");

const inputInverseNormalDistributionProbabilityElement = document.getElementById("inputInverseNormalDistributionProbability");
const inputInverseNormalDistributionPopulationMeanElement = document.getElementById("inputInverseNormalDistributionPopulationMean");
const inputInverseNormalDistributionPopulationStandardDeviationElement = document.getElementById("inputInverseNormalDistributionPopulationStandardDeviation");
const calculateInverseNormalDistributionButtonElement = document.getElementById("calculateInverseNormalDistributionButton");
const clearInverseNormalDistributionButtonElement = document.getElementById("clearInverseNormalDistributionButton");
const errorInverseNormalDistributionElement = document.getElementById("errorInverseNormalDistribution");
const resultInverseNormalDistributionElement = document.getElementById("resultInverseNormalDistribution");

const inputInverseTDistributionProbabilityElement = document.getElementById("inputInverseTDistributionProbability");
const inputInverseTDistributionDegreesOfFreedomElement = document.getElementById("inputInverseTDistributionDegreesOfFreedom");
const calculateInverseTDistributionButtonElement = document.getElementById("calculateInverseTDistributionButton");
const clearInverseTDistributionButtonElement = document.getElementById("clearInverseTDistributionButton");
const errorInverseTDistributionElement = document.getElementById("errorInverseTDistribution");
const resultInverseTDistributionElement = document.getElementById("resultInverseTDistribution");

const inputEmpiricalRulePopulationMeanElement = document.getElementById("inputEmpiricalRulePopulationMean");
const inputEmpiricalRulePopulationStandardDeviationElement = document.getElementById("inputEmpiricalRulePopulationStandardDeviation");
const calculateEmpiricalRuleButtonElement = document.getElementById("calculateEmpiricalRuleButton");
const clearEmpiricalRuleButtonElement = document.getElementById("clearEmpiricalRuleButton");
const errorEmpiricalRuleElement = document.getElementById("errorEmpiricalRule");
const resultEmpiricalRule68Element = document.getElementById("resultEmpiricalRule68");
const resultEmpiricalRule95Element = document.getElementById("resultEmpiricalRule95");
const resultEmpiricalRule99_7Element = document.getElementById("resultEmpiricalRule99_7");
document.addEventListener("DOMContentLoaded", function () {
    updateIconsPath();
    checkAccordionSupport();
    checkTextAreaSupport();
    checkConversionSupport();
    checkStatisticsSupport();
    checkStatisticsCalculatorsSupport();
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
* Check if on the Statistics Calculators page.
*/
function checkStatisticsCalculatorsSupport() {
    const VALID_PAGE = "/Statistics/StatisticsCalculators";

    // Get the current page path name.
    const currentPage = window.location.pathname;

    if (currentPage === VALID_PAGE) {
        calculateZScoreButtonElement.addEventListener("click", calculateZScore);
        clearZScoreButtonElement.addEventListener("click", clearZScore);
        calculateInverseNormalDistributionButtonElement.addEventListener("click", calculateInverseNormalDistribution);
        clearInverseNormalDistributionButtonElement.addEventListener("click", clearInverseNormalDistribution);
        calculateInverseTDistributionButtonElement.addEventListener("click", calculateInverseTDistribution);
        clearInverseTDistributionButtonElement.addEventListener("click", clearInverseTDistribution);
        calculateEmpiricalRuleButtonElement.addEventListener("click", calculateEmpiricalRule);
        clearEmpiricalRuleButtonElement.addEventListener("click", clearEmpiricalRule);
    }

    function clearZScore() {
        inputZScoreXElement.value = null;
        inputZScorePopulationMeanElement.value = null;
        inputZScorePopulationStandardDeviationElement.value = null;
        errorZScoreElement.textContent = `*`;
        resultXElement.textContent = `Raw Score (x):`;
        resultZScoreElement.textContent = `Z-Score (z):`;
        resultPValueLeftTailedElement.textContent = `P-Value - Left-Tailed (x < z):`;
        resultPValueRightTailedElement.textContent = `P-Value - Right-Tailed (x > z):`;
        resultPValueTwoTailedElement.textContent = `P-Value - Two-Tailed (x < -z or x > z):`;
        resultPValueBetweenElement.textContent = `P-Value - Between (-z < x < z):`;
    }

    function clearInverseNormalDistribution() {
        inputInverseNormalDistributionProbabilityElement.value = null;
        inputInverseNormalDistributionPopulationMeanElement.value = null;
        inputInverseNormalDistributionPopulationStandardDeviationElement.value = null;
        errorInverseNormalDistributionElement.textContent = `*`;
        resultInverseNormalDistribution.textContent = `Normal Distribution:`;
    }

    function clearInverseTDistribution() {
        inputInverseTDistributionProbabilityElement.value = null;
        inputInverseTDistributionDegreesOfFreedomElement.value = null;
        errorInverseTDistributionElement.textContent = `*`;
        resultInverseTDistributionElement.textContent = `T-Score:`;
    }

    function clearEmpiricalRule() {
        inputEmpiricalRulePopulationMeanElement.value = null;
        inputEmpiricalRulePopulationStandardDeviationElement.value = null;
        errorEmpiricalRuleElement.textContent = `*`;
        resultEmpiricalRule68Element.textContent = `68% of the data falls between`;
        resultEmpiricalRule95Element.textContent = `95% of the data falls between`;
        resultEmpiricalRule99_7Element.textContent = `99.7% of the data falls between`;
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

    if (validNumbers(0)) { // If the Dataset contains valid numbers.
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
 * Calculate the z-score from the sample, mean, and standard deviation
 * then get the p-values.
 */
function calculateZScore() {
    errorZScoreElement.textContent = `*`;

    const x = parseFloat(inputZScoreXElement.value);
    const populationMean = parseFloat(inputZScorePopulationMeanElement.value);
    const populationStandardDeviation = parseFloat(inputZScorePopulationStandardDeviationElement.value);
    const z = (x - populationMean) / populationStandardDeviation;

    if (isNaN(x) || isNaN(populationMean) || isNaN(populationStandardDeviation)) {
        errorZScoreElement.textContent = "Please enter valid numbers for all fields.";
        return;
    }

        // Display the Z-Score result on the webpage.
    resultXElement.textContent = `Raw Score (x) = ${x}`;
    resultZScoreElement.textContent = `Z-Score (z) = ${z.toFixed(6).replace(/\.?0+$/, '')}`;

    getPValues(z);
}

/**
 * Get the p-values from the z-score.
 */
function getPValues(z) {
    // Calculates the Cumulative Distribution Function (CDF) for the z-score.
    const cdfZScore = jStat.normal.cdf(z, 0, 1);

    const pValueLeftTailed = cdfZScore;
    const pValueRightTailed = 1 - cdfZScore;
    const pValueTwoTailed = 2 * (1 - jStat.normal.cdf(Math.abs(z), 0, 1));
    const pValueBetween = 1 - pValueTwoTailed;

    // Display the P-Value results on the webpage.
    resultPValueLeftTailedElement.textContent = `P-Value - Left-Tailed (x < z): ${pValueLeftTailed.toFixed(6).replace(/\.?0+$/, '')}`;
    resultPValueRightTailedElement.textContent = `P-Value - Right-Tailed (x > z): ${pValueRightTailed.toFixed(6).replace(/\.?0+$/, '')}`;
    resultPValueTwoTailedElement.textContent = `P-Value - Two-Tailed (x < -z or x > z): ${pValueTwoTailed.toFixed(6).replace(/\.?0+$/, '')}`;
    resultPValueBetweenElement.textContent = `P-Value - Between (-z < x < z): ${pValueBetween.toFixed(6).replace(/\.?0+$/, '')}`;
}

/**
 * Calculate the Inverse Normal Distribution using Probability (p), Population Mean (μ),
 * and Population Standard Deviation (σ), and calculate the corresponding value in
 * the Normal Distribution.
 */
function calculateInverseNormalDistribution() {
    // Clear any error messages.
    errorInverseNormalDistributionElement.textContent = `*`;

    // Parse the input values.
    const p = parseFloat(inputInverseNormalDistributionProbabilityElement.value);
    const populationMean = parseFloat(inputInverseNormalDistributionPopulationMeanElement.value);
    const populationStandardDeviation = parseFloat(inputInverseNormalDistributionPopulationStandardDeviationElement.value);

    // Check that the probability (p) input value is between 0 an 1.
    if (p < 0 || p > 1) {
        errorInverseNormalDistributionElement.textContent = "Probability (p) must be between 0 and 1.";
        return;
    }
    // Check that all the input fields contain valid numbers.
    else if (isNaN(p) || isNaN(populationMean) || isNaN(populationStandardDeviation)) {
        errorInverseNormalDistributionElement.textContent = "Please enter valid numbers for all fields.";
        return;
    }

    // Calculate the z-score for the given probability using jStat.
    const z = jStat.normal.inv(p, 0, 1);

    // Calculate the inverse normal distribution value.
    const resultInverseNormalDistribution = populationMean + z * populationStandardDeviation;

    // Display the Normal Distribution result and remove any trailing zeros.
    resultInverseNormalDistributionElement.textContent = `Normal Distribution: ${resultInverseNormalDistribution.toFixed(6).replace(/\.?0+$/, '')}`;
}

/**
 * Calculate the Inverse T-Distribution using Probability (p) and
 * Degrees of Freedom (df), and calculate the corresponding
 * T-Score Value.
 */
function calculateInverseTDistribution() {
    // Clear any error messages.
    errorInverseTDistributionElement.textContent = `*`;

    // Parse the input values.
    const p = parseFloat(inputInverseTDistributionProbabilityElement.value);
    const df = parseInt(inputInverseTDistributionDegreesOfFreedomElement.value);

    // Check that the probability (p) input value is between 0 an 1.
    if (p < 0 || p > 1) {
        errorInverseTDistributionElement.textContent = "Probability (p) must be between 0 and 1.";
        return;
    }
    // Check that all the input fields contain valid numbers.
    else if (isNaN(p) || isNaN(p)) {
        errorInverseTDistributionElement.textContent = "Please enter valid numbers for all fields.";
        return;
    }

    // Calculate the t-score for the given probability (p) and degrees of freedom (df) using jStat.
    const resultInverseTDistribution = jStat.studentt.inv(p, df);

    // Display the T-Score result and remove any trailing zeros.
    resultInverseTDistributionElement.textContent = `T-Score: ${resultInverseTDistribution.toFixed(6).replace(/\.?0+$/, '')}`;
}

/**
 * Calculate the ranges for the Empirical Rule using Population Mean (μ) and
 * Population Standard Deviation (σ), and calculate the ranges for
 * 68%, 95%, and 99.7% of the data based on the Empirical Rule.
 */
function calculateEmpiricalRule() {
    // Clear any error messages.
    errorEmpiricalRuleElement.textContent = `*`;

    // Parse the input values.
    const populationMean = parseFloat(inputEmpiricalRulePopulationMeanElement.value);
    const populationStandardDeviation = parseFloat(inputEmpiricalRulePopulationStandardDeviationElement.value);

    // Check that all the input fields contain valid numbers.
    if (isNaN(populationMean) || isNaN(populationStandardDeviation)) {
        errorEmpiricalRuleElement.textContent = "Please enter valid numbers for all fields.";
        return;
    }

    // Calculate the ranges for 68%, 95%, and 99.7% of the data.
    const range68 = [populationMean - populationStandardDeviation, populationMean + populationStandardDeviation];
    const range95 = [populationMean - 2 * populationStandardDeviation, populationMean + 2 * populationStandardDeviation];
    const range99_7 = [populationMean - 3 * populationStandardDeviation, populationMean + 3 * populationStandardDeviation];

    // Display the Empirical Rule results.
    resultEmpiricalRule68Element.textContent = `68% of the data falls between ${range68[0]} to ${range68[1]} of one standard deviation.`;
    resultEmpiricalRule95Element.textContent = `95% of the data falls between ${range95[0]} to ${range95[1]} of two standard deviations.`;
    resultEmpiricalRule99_7Element.textContent = `99.7% of the data falls between ${range99_7[0]} to ${range99_7[1]} of three standard deviations.`;
}

/**
 * Check if the input(s) contains valid numbers.
 * If n = 0, for the Statistics page.
 * If n = 1, for the GetZScore page.
 */
function validNumbers(n) {
    if (n === 0) { // Statistics page.
        let checkNumbers1 = inputDataset.value.trim().split(/[\s,]+/);

        // If the dataset contains no numbers.
        if (checkNumbers1.length === 0 || checkNumbers1[0] === "") {
            return false;
        }

        // Check if all the elements are numbers.
        return checkNumbers1.every(num => !isNaN(Number(num)));
    }
    else if (n === 1) { // GetZScore page.
        let checkNumbers1 = inputZScoreXElement.value;
        let checkNumbers2 = inputZScorePopulationMeanElement.value;
        let checkNumbers3 = inputZScorePopulationStandardDeviationElement.value;

        // Check if any of the inputs are empty or not numbers.
        return [checkNumbers1, checkNumbers2, checkNumbers3].every(num => num !== "" && !isNaN(Number(num)));
    }

    return true;
}
