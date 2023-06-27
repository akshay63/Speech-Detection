/*
 **--------- Project20: DOM, Audio, CSS ---------**

 Goal: Learn all about speech recognition in the browser and not using any library or external APIs.

 */

//setting SpeechRecognition for chrome which is webkitSpeechRecognition. Using Short circuiting concept here.
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");
const words = document.querySelector(".words");
words.appendChild(p);

recognition.addEventListener("result", (e) => {
  // console.log(e.results);
  const transcript = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join(" ");

  p.textContent = transcript;

  if (e.results[0].isFinal) {
    p = document.createElement("p");
    words.appendChild(p);
  }

  //doing some fun stuff with our speech
  if (transcript.includes("unique")) {
    console.log("🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄🦄");
  }

  if (transcript.includes("get the weather")) {
    console.log(
      "Getting the weather for your location. Please wait for a moment."
    );
  }

  //or you can use external weather api to get some stuff from it depending on our speech

  console.log(transcript);
});

recognition.addEventListener("end", recognition.start);
recognition.start();
