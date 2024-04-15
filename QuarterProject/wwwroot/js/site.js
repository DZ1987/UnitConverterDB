window.onload = function () {
    updateIconsPath();

    // Only call if on the "Edit" page.
    if (window.location.href.includes("/Edit/")) {
        countChars(document.getElementById("userTextArea"));
    }
};

/**
 * Updates the Icons Path based on the Users login state.
 */
function updateIconsPath() {
    const iconPathLocked = "M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2";
    const iconPathUnocked = "M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2";
    const userStateElement = document.getElementById("userState").innerText;
    const iconPrivacyElement = document.getElementById("icon-privacy");
    const iconRegisteredUsersElement = document.getElementById("icon-registeredUsers");
    let iconPath;

    // Checks the current state of the User.
    if (userStateElement === "Logout") { // The User is logged in.
        iconPath = iconPathUnocked;
    }
    else { // The User is logged out.
        iconPath = iconPathLocked;
    }

    // Updates the Icons Path for "Privacy" and "RegisteredUsers" pages.
    iconPrivacyElement.setAttribute("d", iconPath);
    iconRegisteredUsersElement.setAttribute("d", iconPath);
}

/**
 * Counts how many characters there are in the <textarea>
 * and displays it.
 */
function countChars(input) {
    let charCount = input.value.length;
    document.getElementById("charCount").innerText = charCount + "/1000";
}
