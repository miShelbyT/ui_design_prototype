const page = document.querySelector(".contact_form");
const form = document.querySelector("form");

form.addEventListener("submit", (e)=> {
  e.preventDefault();

  const message = document.createElement("h2");
  const status = document.getElementById("checkbox");
  console.log(status.checked)
  const note = document.createElement("h5")
  message.textContent = "Thank you for submitting your information! A Pexpert will be in touch."
  note.textContent = `You ${status.checked ? "have" : "have not"} signed up for our mailing list.`
  page.innerText = "";
  page.append(message, note);
})