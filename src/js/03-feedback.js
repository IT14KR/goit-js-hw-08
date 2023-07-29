import throttle from 'lodash.throttle';

const refs = {
  inputEmail: document.querySelector('input'),
  textMassage: document.querySelector('textarea'),
  form: document.querySelector('.feedback-form'),
};

const LS_KEY = 'feedback-form-state';

refs.form.addEventListener('input', getVelueForm);

function getVelueForm() {
  const feedbackSave = {
    email: refs.inputEmail.value,
    message: refs.textMassage.value,
  };
  localStorage.setItem(LS_KEY, JSON.stringify(feedbackSave));
}

document.addEventListener('DOMContentLoaded', getVelueFromLS);

function getVelueFromLS() {
  const saveFeedback = localStorage.getItem(LS_KEY);
  if (saveFeedback) {
    const feedbackSave = JSON.parse(saveFeedback);
    refs.inputEmail.value = feedbackSave.email;
    refs.textMassage.value = feedbackSave.message;
  }
}

function pressSubmit(event) {
  const feedbackSave = {
    email: refs.inputEmail.value,
    message: refs.textMassage.value,
  };

  localStorage.clear();
  refs.form.reset();
}

const saveTimeToLS = throttle(currentTime => {
  localStorage.setItem(LS_KEY, currentTime);
}, 500);

refs.form.addEventListener('submit', pressSubmit);

// - логіка яка при завантаженні сторіки перевіряє сховище JSON pars і підставляє в форму

// - в кінці очищувати форму очищувати сховище
