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
