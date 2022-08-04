const prevBtns = document.querySelectorAll('.btn-prev');
const nexBtns = document.querySelectorAll('.btn-next');
const formSteps = document.querySelectorAll('.form-step');
const progressSteps = document.querySelectorAll('.progress-step')
const inputs = document.querySelectorAll('input')

let formStepNum = 0;

nexBtns.forEach(( btn ) => {
  btn.addEventListener('click', () => {
    formStepNum++;
    // inputs.forEach(( input ) => {
    //   if( input.value !== '' ) {
    //   } else {
    //     alert('É obrigatório preencher todos os campos!')
    //   }
    // })
    updateFormSteps();
    updateProgressbar();
  })
})

prevBtns.forEach(( btn ) => {
  btn.addEventListener('click', () => {
    formStepNum--;
    updateFormSteps();
    updateProgressbar();
  })
})

const updateFormSteps = () => {
  formSteps.forEach(( formStep ) => {
    formStep.classList.contains('form-step-active') &&
    formStep.classList.remove('form-step-active');
  })
  formSteps[formStepNum].classList.add('form-step-active')
}

const updateProgressbar = () => {
  const chips = document.querySelectorAll('.situation')
  const barras = document.querySelectorAll('.barra')
  const h1 = document.querySelector('h1')

  progressSteps.forEach(( progressStep, idx ) => {
    if( idx < formStepNum + 1 ) {

      if ( idx === 1 ) {
        console.log(idx)
        h1.innerText = 'User Location'
      } else if ( idx === 2 ) {
        console.log(idx)
        h1.innerText = 'Date of Birth'
      } else if ( idx === 3 ) {
        console.log(idx)
        h1.innerText = 'Verification'
      } else {
        h1.innerText = 'User Profile'
      }

      progressStep.classList.add('progress-step-active')
    } else {
      progressStep.classList.remove('progress-step-active')
    }
  })

  barras.forEach(( barra, idx ) => {
    if( idx < formStepNum + 1 ) {
      barra.classList.add('barra-active')
    } else {
      barra.classList.remove('barra-active')
    }
  })

  chips.forEach((chip, idx) => {
    if( idx < formStepNum + 1 ) {
      chip.innerText="Completed";
      chip.classList.add('active');
    } else {
      chip.innerText="In Progreess";
      chip.classList.remove('active');
    }
  })
}
