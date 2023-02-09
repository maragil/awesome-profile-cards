function handleInputName(event) {
  event.preventDefault();
  const nameInputValue = inputName.value;
  if (nameInputValue === "") {
    previewName.innerHTML = "Nombre Apellido";
  } else {
    previewName.innerHTML = nameInputValue;
  }
}

function handleInputJob(event) {
  event.preventDefault();
  const jobInputValue = inputJob.value;
  if (jobInputValue === "") {
    previewJob.innerHTML = "Front-end developer";
  } else {
    previewJob.innerHTML = jobInputValue;
  }
}

function handleInputTel(event) {
  event.preventDefault();
  const telInputValue = inputTel.value;
  previewTel.href = telInputValue;
}

function handleInputEmail(event) {
  event.preventDefault();
  const emailInputValue = inputEmail.value;
    previewEmail.href = `mailto:${emailInputValue}`;
}

function handleInputLinkedin(event) {
  event.preventDefault();
  const linkedinInputValue = inputLinkedin.value;
  previewLinkedin.href = linkedinInputValue;
}

function handleInputGithub(event) {
  event.preventDefault();
  const githubInputValue = inputGithub.value;
  previewGithub.href = InputValue;
}

inputName.addEventListener("input", handleInputName);

inputJob.addEventListener("input", handleInputJob);

inputTel.addEventListener("input", handleInputTel);

inputEmail.addEventListener("input", handleInputEmail);

inputLinkedin.addEventListener("input", handleInputLinkedin);

inputGithub.addEventListener("input", handleInputGithub);