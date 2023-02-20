/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable strict */

// Fill info into preview card //

const data={
  palette: 1,
  name: '',
  job: '',
  phone: '',
  email: '',
  linkedin: '',
  github: '',
  photo: '',
};


function handleInputName(event) {
  event.preventDefault();
  data.name = inputName.value;
  updatePreview();
}

function handleInputJob(event) {
  event.preventDefault();
  data.job = inputJob.value;
  updatePreview();
}

function handleInputTel(event) {
  event.preventDefault();
  data.phone = inputTel.value;
  updatePreview();
}

function handleInputEmail(event) {
  event.preventDefault();
  data.email = inputEmail.value;
  updatePreview();
}

function handleInputLinkedin(event) {
  event.preventDefault();
  data.linkedin = inputLinkedin.value;
  updatePreview();
}

function handleInputGithub(event) {
  event.preventDefault();
  data.github = inputGithub.value;
  updatePreview();
}

const updatePreview = () => {
  if (data.name === '') {
    previewName.innerHTML = 'Nombre Apellido';
  } else {
    previewName.innerHTML = data.name;
  } 
  if (data.job === '') {
    previewJob.innerHTML = 'Front-end developer';
  } else {
    previewJob.innerHTML = data.job;
    previewJob.classList.remove("preview__card--link--disabled");
  }
  previewTel.href = `tel:${data.phone}`;
  previewTel.classList.remove("preview__card--link--disabled");
  previewEmail.href = `mailto:${data.email}`;
  previewEmail.classList.remove("preview__card--link--disabled");
  previewLinkedin.href = data.linkedin;
  previewLinkedin.classList.remove("preview__card--link--disabled");
  previewGithub.href = data.github;
  previewGithub.classList.remove("preview__card--link--disabled");
};


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

//botón reset

const handleClickReset =(ev)=> {
  ev.preventDefault();
  data.palette= 1;
  data.name= '';
  data.job= '';
  data.phone= '';
  data.email= '';
  data.linkedin= '';
  data.github= '';
  data.photo= '';
  palette1.checked= true;
  inputName.value ='';
  inputJob.value='';
  inputEmail.value ='';
  inputTel.value ='';
  inputLinkedin.value ='';
  inputGithub.value ='';
  previewCard.classList.remove("palette2");
  previewCard.classList.remove("palette3");
  previewCard.classList.add("palette1");
  updatePreview();
};


btnReset.addEventListener('click', handleClickReset);