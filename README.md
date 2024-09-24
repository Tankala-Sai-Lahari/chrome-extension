Study Helper Chrome Extension
A lightweight Chrome extension that helps you stay focused while studying. It allows you to:

Search for word meanings
Keep personal notes
Set study time alerts
Block distracting websites during study sessions
Features
Search Meaning: Quickly search the meaning of any word using an integrated dictionary API.
Keep Notes: Write and save notes directly in the extension.
Set Alerts: Set reminders for study sessions to keep you on track.
Block Websites: Restrict access to distracting websites during your study time.
Tech Stack
HTML: For structuring the user interface.
CSS: For styling the extension's popup.
JavaScript: For adding interactive functionalities (e.g., word search, setting alerts, blocking websites).
Chrome APIs: Used for alarms, web requests, and storage management.
Project Structure
graphql
Copy code
my-extension/
│
├── manifest.json         # Defines metadata, permissions, and the behavior of the extension
├── popup.html            # The main HTML file for the extension's popup interface
├── popup.css             # Styling for the popup interface
├── popup.js              # JavaScript logic for the popup functionalities
├── background.js         # Background script handling web request blocking and alarms
└── icons/                # Icon images for the extension
    ├── icon16.png        # 16x16 icon (used in the browser toolbar)
    ├── icon48.png        # 48x48 icon (used in the Chrome Web Store listing)
    └── icon128.png       # 128x128 icon (used in the Chrome Web Store details page)
Installation
Download the project files: Clone or download the repository to your local machine.

Open Chrome Extensions:

Go to chrome://extensions/ in your Chrome browser.
Enable "Developer mode" by toggling the switch at the top right.
Load the Extension:

Click on "Load unpacked".
Select the project folder where you stored the extension files (e.g., my-extension/).
The extension will now appear in your Chrome toolbar, and you can start using it.

Usage
Search Word Meaning:

Enter a word in the search bar and click "Search" to get its definition.
Take Notes:

Type notes into the notes section and click "Save Notes". Your notes will persist even after closing the popup.
Set Alerts:

Pick a date and time using the date-time picker, then click "Set Alert". You'll receive a notification when it's time to study.
Block Websites:

Enter websites (comma-separated) in the block list and click "Block Websites". These sites will be blocked during your study time.
Troubleshooting
If you encounter the error Could not load icon 'icons/icon.png' specified in 'action', ensure that:

The icons/ folder contains correctly named files: icon16.png, icon48.png, and icon128.png.
The file paths in manifest.json use forward slashes (/) and match the actual icon file names.
Icons are in the correct format (.png) and are the right sizes (16x16, 48x48, 128x128).
Future Enhancements
Implementing a timer feature for Pomodoro-style study sessions.
Syncing notes across multiple devices using Chrome's sync API.
Adding a more advanced word search feature with pronunciation and examples.
License
This project is licensed under the MIT License.

