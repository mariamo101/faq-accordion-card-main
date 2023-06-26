document.addEventListener('DOMContentLoaded', function() {
    const questionElements = document.getElementsByClassName('before-click');
    const answerElements = document.getElementsByClassName('after-click');
  
    for (let i = 0; i < questionElements.length; i++) {
      questionElements[i].addEventListener('click', function() {
        const answerElement = this.nextElementSibling;
        const expandIcon = this.querySelector('.arrow-icon');
  
        for (let j = 0; j < answerElements.length; j++) {
          if (answerElements[j] !== answerElement) {
            answerElements[j].classList.remove('show');
            questionElements[j].classList.remove('bold');
          }
        }
        if (answerElement.classList.contains('show')) {
          answerElement.classList.remove('show');
          expandIcon.classList.remove('rotate');
          this.classList.remove('bold');
        } else {
          answerElement.classList.add('show');
          expandIcon.classList.add('rotate');
          this.classList.add('bold');
        }
      });
    }
  });
  






















/*
document.addEventListener('DOMContentLoaded', function() {
    const questionElements = document.getElementsByClassName('before-click');
  
    for (let i = 0; i < questionElements.length; i++) {
      questionElements[i].addEventListener('click', function() {
        const answerElement = this.nextElementSibling;
  
        if (answerElement.classList.contains('show')) {
          answerElement.classList.remove('show');
          this.querySelector('.arrow-icon').style.transform = 'rotate(0deg)';
        } else {
          answerElement.classList.add('show');
          this.querySelector('.arrow-icon').style.transform = 'rotate(180deg)';
        }
      });
    }
});
*/