<h1>FAQ Accordion Card"</h1>

# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help me improve my coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Gif](#Gif)


## Overview
In this challenge, i'll be building out an FAQ accordion. This is an extremely common front-end pattern, so it's a great opportunity to get some practice in!

### The challenge

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

<img width="1024" alt="Screenshot 2023-06-26 at 22 46 15" src="https://github.com/mariamo101/faq-accordion-card-main/assets/117212859/16855b23-7553-4b7b-9d83-f8a4c82a2d22"/>

<img width="1019" alt="Screenshot 2023-06-26 at 22 45 17" src="https://github.com/mariamo101/faq-accordion-card-main/assets/117212859/4e9bb3e5-eed0-490c-bc74-a68de69fd2c6"/>


### Links

- Solution URL: [Solution URL here](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam)
- Live Site URL: [Live site URL here](https://faq-according-card-mm.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript


### What I learned

I had difficulty getting the orange block and the woman at the computer images to position correctly.
I used negative margins and display: flex.

Snippets see below:

```css
 proud-of-this-css 👇
 .before-click.bold{
    height: 2rem;
    color: #1E1F36;
    font-weight: 700;
  }
```

```js
const proudOfThisFunc = () => 👇
for (let j = 0; j < answerElements.length; j++) {
          if (answerElements[j] !== answerElement) {
            answerElements[j].classList.remove('show');
            questionElements[j].classList.remove('bold');
          }
        }
```

## Gif

<img src="https://media.giphy.com/media/82XJ3SNa0tWfbxjNTI/giphy.gif"/>


