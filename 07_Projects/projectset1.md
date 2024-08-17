# Projects Related to DOM

## Project Link

[click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## Solution Code

### Project 1

```JavaScript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (Event) {
    console.log(Event);
    console.log(Event.target);
    switch (Event.target.id) {
      case 'grey':
        body.style.backgroundColor = Event.target.id;
        break;
      case 'white':
        body.style.backgroundColor = Event.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = Event.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = Event.target.id;
        break;

      default:
        console.log('No matching case found.');
    }
  });
});
```

### Project 2
```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Give a Valid Height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Give a Valid Height ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // Result
    if (bmi < 18.6) {
      results.innerHTML = `<span>Your BMI Is ${bmi} & it is Under Weight</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<span>Your BMI Is ${bmi} & it is Normal Range</span>`;
    } else if (bmi > 24.9) {
      results.innerHTML = `<span>Your BMI Is ${bmi} & it is Overweight </span>`;
    }
  }
});
```



