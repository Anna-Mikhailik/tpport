import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const contactEmail = document.querySelector('.work-together-input-email');
const contactComment = document.querySelector('.work-together-comments');
const contactForm = document.querySelector('.work-together-subscribe');
const label = document.querySelector('.label-input-email');
const modalBackdrop = document.querySelector('.work-together-backdrop');
const modalBackdropBg = document.querySelector('.modal-backdrop-bg');
const modalTitle = document.querySelector('.work-together-modal-head-text');
const modalText = document.querySelector('.work-together-invitation');
const modalBtn = document.querySelector('.work-together-modal-close-x-btn');
const body = document.body;

modalBackdropBg.style.opacity = '0';
modalBackdropBg.style.visibility = 'hidden';
modalBackdropBg.style.pointerEvents = 'none';

contactForm.addEventListener('submit', getContactInfo);

function getContactInfo(event) {
  event.preventDefault();

  const userEmail = event.target.elements.email.value.trim();
  const userComment = event.target.elements.comments.value.trim();

  const url = 'https://portfolio-js.b.goit.study/api/requests';
  const data = {
    email: userEmail,
    comment: userComment,
  };

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(response => {
      if (!response.ok) {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, try again!',
          messageColor: 'white',
          messageSize: '16',
          backgroundColor: 'red',
          theme: 'dark',
          position: 'bottomRight',
        });
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      openModal(data.title, data.message);
      contactForm.reset();
      label.textContent = '';
      contactEmail.style.borderBottomColor = 'rgba(250, 250, 250, 0.20)';
    })
    .catch(() => {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, network failed, check your modem and try again!',
        messageColor: 'white',
        messageSize: '16',
        backgroundColor: 'red',
        theme: 'dark',
        position: 'bottomRight',
      });
    });
}

contactEmail.addEventListener('blur', checkEmail);

function checkEmail(event) {
  const userEmail = event.target.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (userEmail === '') return;

  if (emailRegex.test(userEmail)) {
    label.textContent = 'Success!';
    contactEmail.style.borderBottomColor = '#3CBC81';
    label.style.color = '#3CBC81';
  } else {
    label.textContent = 'Invalid email, try again';
    contactEmail.style.borderBottomColor = '#E74A3B';
    label.style.color = '#E74A3B';
  }
}

contactComment.addEventListener('input', checkCommentLength);

function checkCommentLength(event) {
  const maxLength = parseInt(contactComment.getAttribute('maxlength'));
  let userComment = event.target.value;

  if (userComment.length > maxLength) {
    contactComment.value = userComment.slice(0, maxLength);
  }
  contactComment.style.whiteSpace = 'nowrap';
  contactComment.style.overflow = 'hidden';
  contactComment.style.textOverflow = 'ellipsis';
}

modalBtn.addEventListener('click', closeModal);
modalBackdropBg.addEventListener('click', closeModal);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeModal();
  }
});

function openModal(title, message) {
  modalBackdrop.classList.remove('visually-hidden');
  modalBackdrop.style.display = 'block';
  modalBackdrop.style.pointerEvents = 'auto';
  modalBackdropBg.classList.remove('visually-hidden');
  modalBackdropBg.style.pointerEvents = 'auto';
  modalBackdropBg.style.opacity = '1';
  modalBackdropBg.style.visibility = 'visible';
  body.classList.add('modal-open');
  modalTitle.textContent = title;
  modalText.textContent = message;
}

function closeModal() {
  modalBackdrop.classList.add('visually-hidden');
  modalBackdrop.style.display = 'none';
  modalBackdrop.style.pointerEvents = 'none';
  modalBackdropBg.classList.add('visually-hidden');
  modalBackdropBg.style.pointerEvents = 'none';
  modalBackdropBg.style.opacity = '0';
  modalBackdropBg.style.visibility = 'hidden';
  body.classList.remove('modal-open');
}
