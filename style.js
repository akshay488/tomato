const signin = document.getElementById('signin');
const closebtn = document.getElementById('closebtn');
const openbtn = document.getElementById('openbtn');







//events

//sign in window
openbtn.addEventListener('click', ()=>{
    signin.classList.remove('close');
    signin.classList.add('open') ;

    
});

closebtn.addEventListener('click', ()=>{

    signin.classList.remove('open');
    signin.classList.add('close')
});

// forms
const formParent = document.querySelectorAll('.number');

formParent.forEach(element=>{element.firstElementChild.addEventListener('focusin', 
()=>{
    
    element.lastElementChild.classList.remove('largetxt')
    element.lastElementChild.classList.add('smalltxt')
    });
});
formParent.forEach(element=>{element.firstElementChild.addEventListener('focusout', ()=>{
    if(element.firstElementChild.value === ""){
    element.lastElementChild.classList.add('largetxt')
    element.lastElementChild.classList.remove('smalltxt')}
    else{
        return;
    }
    });
});

//switch forms

const formlist = document.querySelector('#forms')
const signinform = document.querySelector('#form1');
const signupform = document.querySelector('#form2');
const header = document.getElementById('hedr');
const switchform = document.getElementById('switchform');

switchform.addEventListener('click', ()=>{
   
    if (signinform.classList.contains('open')) {
        switchform.innerHTML = 'create a new account';
        header.innerHTML='Signup';
        signupform.classList.remove('close');
        signupform.classList.add('open');
        signinform.classList.remove('open');
        signinform.classList.add('close');
    }else{
        switchform.innerHTML = 'login to your account';
        header.innerHTML='Login';
        signupform.classList.remove('open');
        signupform.classList.add('close');
        signinform.classList.remove('close');
        signinform.classList.add('open');
    }
   
});

//hotels
const hotelCard = document.querySelectorAll('.card');

function navigate(file){
    return document.location = `profiles/${file}.html`;
 }

