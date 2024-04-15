const MAX_CHARACTERS = 1000; // Sets the maximum amount of characters the User can enter.

// Document Object Model(DOM) elements.
const iconPrivacyElement = document.getElementById("icon-privacy");
const iconRegisteredUsersElement = document.getElementById("icon-registeredUsers");
const userStateElement = document.getElementById("userState").textContent;
const userTextAreaElement = document.getElementById("userTextArea");
const charCountElement = document.getElementById("charCount");
const maxCharsElement = document.getElementById("maxChars");

document.addEventListener("DOMContentLoaded", function () {
    updateIconsPath();
    isCountCharsSupported();
});

/**
 * Updates the Icons Path based on the Users login state.
 */
function updateIconsPath() {
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
 * If the page supports the countChars() function, call the function.
 */
function isCountCharsSupported() {
    const VALID_PAGES = ["/Create", "/Edit/", "/Details/"];

    let validPage = Array.from(VALID_PAGES).some(p => window.location.href.includes(p));

    // Only call if on the Create, Edit or Details pages.
    if (validPage) {
        maxCharsElement.textContent = `/${MAX_CHARACTERS}`;
        countChars(userTextAreaElement);
    }
}

/**
 * Counts how many characters there are in the <textarea> and displays it.
 */
function countChars(input) {
    let charCount = input.value.length;
    charCountElement.textContent = `${charCount}`;
}
