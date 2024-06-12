function displayFacts(response) {
  new Typewriter("#facts", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function generateFacts(event) {
  event.preventDefault();

  let userInformation = document.querySelector("#user-information");

  let apiKey = "oaff0b06238ce15e1bda3c4dt5f4a7ba";
  let context =
    "You are an intellectual, equestrian AI who knows everything about horses. Please be clear and concise, the shorter, the better.";
  let prompt =
    "Please give a fact about horses on the topic of ${userInformation.value} to another person.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let factsElement = document.querySelector("#facts");
  factsElement.classList.remove("hidden");
  factsElement.innerHTML = `<div class = "generating">Galloping a fact to you...</div>`;

  axios.get(apiUrl).then(displayFacts);
}

let formElement = document.querySelector("#horsefact-generator-form");
formElement.addEventListener("submit", generateFacts);
