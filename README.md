# Voice-Assistant — Browser Voice Assistant (Web Speech API)

A small, friendly voice-activated virtual assistant that runs entirely in the browser.
It uses the Web Speech API (SpeechRecognition + SpeechSynthesis) and modern JavaScript (ES6+) to listen to your voice, understand simple natural-language commands, and automate common web tasks like opening WhatsApp Web, playing YouTube videos, or performing searches.

## What’s in this repo

* `index.html` — simple demo page and the UI (central mic, greeting, status).
* `css/styles.css` — responsive layout using Flexbox / Grid.
* `js/app.js` — main logic: starts/stops recognition, handles UI, uses async/await.
* `js/commands.js` — command-mapping engine: maps intents to actions (window.open, fetch for voice search, etc.).
* `js/speech.js` — helpers for SpeechRecognition & SpeechSynthesis setup and voice responses.
* `assets/` — icons, audio prompts, or small images used by the demo.
* `README.md` — this file.
* `LICENSE` — suggested license (e.g., MIT).

## Key features

* Hands-free control with speech recognition and spoken responses.
* Command mapping to open common sites (YouTube, WhatsApp Web, Google) or perform voice-driven searches via Fetch API.
* Clean, responsive UI with a central mic button and contextual greetings based on local time.
* Built with plain HTML/CSS/JS — easy to read and extend.

## How to run

1. Clone the repo:

   ```
   git clone <your-repo-url>
   ```
2. Open `index.html` in a Chromium-based browser (Chrome is recommended).
3. Allow the page to use your microphone when the browser asks.
4. Click the mic button and say things like:

   * “Open YouTube”
   * “Search for lo-fi music”
   * “Open WhatsApp Web”
   * “What’s the time?”
5. The assistant will speak back responses and perform actions in the browser.

> Note: The Web Speech API has the best compatibility in Chrome/Edge. Some browsers may not fully support SpeechRecognition.

## Example commands

* “Open YouTube and play lo-fi”
* “Search Google for climate change articles”
* “Open WhatsApp Web”
* “What’s the weather?” (if you add a weather API)
* “Stop listening” / “Mute response”

## Extend & customize

* Add new intents in `js/commands.js` — map recognized phrases to actions or functions.
* Plug in NLP services (optional) for more advanced intent parsing.
* Add persistent settings (language, wake word, voice selection) to personalize the assistant.

## Privacy & security

* All audio is handled by your browser. No server is required for the demo.
* If you add third-party APIs, be mindful of what data is sent and follow privacy best practices.

## License

This project is open source. Use the `LICENSE` file to pick a license (MIT recommended).

## Credits

Built with the Web Speech API (SpeechRecognition & SpeechSynthesis).
Feel free to reuse, fork, and improve — and please open issues or pull requests if you add cool features!
