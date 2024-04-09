window.onload = function () {
    // Only call if on the "Edit" page.
    if (window.location.href.includes("/Edit/")) {
        countChars(document.getElementById("userTextArea"));
    }
};

/**
 * Counts how many characters there are in the <textarea>
 * and displays it.
 */
function countChars(input) {
    let charCount = input.value.length;
    document.getElementById("charCount").innerText = charCount + "/1000";
}
