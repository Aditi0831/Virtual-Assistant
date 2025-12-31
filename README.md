# Voice-Assistant — Browser Voice Assistant (Web Speech API)

A small, friendly voice-activated virtual assistant that runs entirely in the browser.
It uses the Web Speech API (SpeechRecognition + SpeechSynthesis) and modern JavaScript (ES6+) to listen to your voice, understand simple natural-language commands, and automate common web tasks like opening sites or doing searches.

---

## What’s in this repo

This project contains the code and assets needed to run the demo locally:

* `index.html` — demo page and UI (central mic, greeting, status).
* `script.js` — main application logic (start/stop recognition, parse commands, perform actions, generate voice responses).
* `style.css` — responsive styles (Flexbox / Grid) and layout for the UI.
* `logo.jpg` — project logo used in the demo.
* `mic.svg` — microphone icon for the UI button.
* `voice.gif` — small animated visual used while the assistant is listening/processing.

---

## Key features

* Hands-free control with speech recognition and spoken responses.
* Command mapping to open common sites or run voice-driven search actions.
* Clean, responsive UI with a central mic button and contextual greetings based on local time.
* Single-file frontend (no backend required) — easy to read and extend.

---

## How to run (quick)

1. Clone or download the repository.
2. Open `index.html` in a Chromium-based browser (Chrome or Edge recommended).
3. Allow microphone access when the browser prompts.
4. Click the mic icon and speak a command.

> Tip: For local testing you can also serve the folder via a simple static server (optional):
>
> * Python 3: `python -m http.server 8000` and open `http://localhost:8000/`

---

## Example voice commands

* “Open YouTube”
* “Search for lo-fi music”
* “Open WhatsApp Web”
* “What’s the time?”
* “Stop listening”

(Commands depend on the phrases recognized in `script.js`. Add or customize phrases there.)

---

## Files & Roles

* `index.html` — page structure and UI elements (buttons, status text, placeholders for logo/animation).
* `script.js` — initializes SpeechRecognition / SpeechSynthesis, maps recognized text to actions (window.open, fetch for search), and controls UI states (listening, processing, idle).
* `style.css` — styles for responsive layout, central mic button, and animated states using `voice.gif`.
* `logo.jpg`, `mic.svg`, `voice.gif` — static assets used by the UI.

---

## Extend & customize

* Add new intents/actions in `script.js` — map more phrases to behaviors or call external APIs.
* Plug in a simple NLP parser (optional) if you want better intent extraction.
* Add settings for language, voice selection, wake word, or response verbosity.
* Add persistence (localStorage) for user preferences.

---

## Privacy & security

* All audio is handled locally by your browser. This demo does not send audio to any server.
* If you wire up third-party APIs, be mindful of data you send and include clear user consent.

---

## Browser compatibility

* Best experience: Chrome / Edge (Chromium-based).
* Some browsers may not fully support the SpeechRecognition API — check your browser’s compatibility before testing.

---

## License

This project is open source — MIT recommended. Add a `LICENSE` file if you’d like to publish under MIT.

---

## Credits

Built with the Web Speech API (SpeechRecognition & SpeechSynthesis).
Feel free to fork, improve, or open issues/PRs.
