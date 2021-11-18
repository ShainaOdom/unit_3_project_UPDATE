//focus on the first text field on load
const name = document.querySelector('#name');
name.focus();
//text field that will be revealed when the 'Other' option is selected from 'Job Role'
const other = document.querySelector('#other-title');
//Job Role select
const jobRole = document.querySelector('#title');


//initially hidden, input field that will show when other is selected
other.style.display= 'none';

//shows the input field when other is selected, and hides it when any other job role is selected
jobRole.addEventListener('change', (e) => {
  if (e.target.value === 'other') {
        other.style.display = 'block';
  } else {
        other.style.display = 'none';
          }
  });

//variables to reference the 'design' element, 'color' element, and color element options.
  const design = document.querySelector('#design');
  const colors = document.querySelector('#color');
  const colorOptions = colors.children;

//initally disable color options
  colors.disabled = true;
  colorOptions[0].textContent = 'Please select a T-shirt color';

//supposed to give shirt color options depending on which design is selected
//NOT WORKING
  design.addEventListener('change', (e) => {
      colors.disabled = false;

      for (let i = 0; i < colorOptions.length; i++) {
        const designSelection = e.target.value;
        const dataTheme = colorOptions[i].getAttribute('data-theme'); //https://stackoverflow.com/questions/65942968/storing-and-retrieving-a-theme-in-javascript-from-a-data-attribute



          if (designSelection === dataTheme) {
              colorOptions[i].hidden = false;
              colorOptions[i].setAttribute('selected', true);
            } else {
              colorOptions[i].hidden = true;
              colorOptions[i].removeAttribute('selected', false);
              }

              console.log(dataTheme);
              console.log(designSelection);

      }
  });
