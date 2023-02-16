/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable strict */

// Fill info into preview card //

function handleInputName(event) {
  event.preventDefault();
  const nameInputValue = inputName.value;
  if (nameInputValue === '') {
    previewName.innerHTML = 'Nombre Apellido';
  } else {
    previewName.innerHTML = nameInputValue;
  }
}

function handleInputJob(event) {
  event.preventDefault();
  const jobInputValue = inputJob.value;
  if (jobInputValue === '') {
    previewJob.innerHTML = 'Front-end developer';
  } else {
    previewJob.innerHTML = jobInputValue;
    previewJob.classList.remove("preview__card--link--disabled");
  }
}

function handleInputTel(event) {
  event.preventDefault();
  const telInputValue = inputTel.value;
  previewTel.href = `tel:${telInputValue}`;
  previewTel.classList.remove("preview__card--link--disabled");
}

function handleInputEmail(event) {
  event.preventDefault();
  const emailInputValue = inputEmail.value;
  previewEmail.href = `mailto:${emailInputValue}`;
  previewEmail.classList.remove("preview__card--link--disabled");
}

function handleInputLinkedin(event) {
  event.preventDefault();
  const linkedinInputValue = inputLinkedin.value;
  previewLinkedin.href = linkedinInputValue;
  previewLinkedin.classList.remove("preview__card--link--disabled");
}

function handleInputGithub(event) {
  event.preventDefault();
  const githubInputValue = inputGithub.value;
  previewGithub.href = githubInputValue;
  previewGithub.classList.remove("preview__card--link--disabled");
}

inputName.addEventListener('input', handleInputName);

inputJob.addEventListener('input', handleInputJob);

inputTel.addEventListener('input', handleInputTel);

inputEmail.addEventListener('input', handleInputEmail);

inputLinkedin.addEventListener('input', handleInputLinkedin);

inputGithub.addEventListener('input', handleInputGithub);

// Change colors palette //

function handleClickPalettes(event) {
  const target = event.target.id;
  /* const current = event.currentTarget; */
  if (target === "color_1") {
    previewCard.classList.remove("palette2");
    previewCard.classList.remove("palette3");
    previewCard.classList.add("palette1");
  }

  if (target === "color_2") {
    previewCard.classList.remove("palette1");
    previewCard.classList.remove("palette3");
    previewCard.classList.add("palette2");
  }

  if (target === "color_3") {
    previewCard.classList.remove("palette2");
    previewCard.classList.remove("palette1");
    previewCard.classList.add("palette3");
  }
}

designContent.addEventListener("click", handleClickPalettes);
