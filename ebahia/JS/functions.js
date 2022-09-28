const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('light');
    btnSwitch.classList.toggle('active');

//localstorage
if(document.body.classList.contains('light')){
    localStorage.setItem('light-mode', 'true');
}else  {
    localStorage.setItem('light-mode', 'false');
}
});

//mantener el modo

if(localStorage.getItem('light-mode') === 'true'){
    document.body.classList.add('light');
    btnSwitch.classList.toggle('active');
}else{
    document.body.classList.remove('light');
}


function VerImagen(){
    if(document.getElementById("ask-selector").value==0){
        document.getElementById("alert-text").style.display = "none";
        document.getElementById("alert-text-2").style.display = "none";
        document.getElementById("alert-text-3").style.display = "none";
        document.getElementById("alert-text-4").style.display = "none";
        document.getElementById("plan-selector").style.display = "none";
        document.getElementById("plan-selector-text").style.display = "none";
        document.getElementById("plan-selector-text2").style.display = "none";
    }else if(document.getElementById("ask-selector").value==1){
        document.getElementById("alert-text").style.display = "block";
        document.getElementById("alert-text-2").style.display = "block";
        document.getElementById("alert-text-3").style.display = "block";
        document.getElementById("alert-text-4").style.display = "block";
        document.getElementById("plan-selector").style.display = "none";
        document.getElementById("plan-selector-text").style.display = "none";
        document.getElementById("plan-selector-text2").style.display = "none";
    }else{
        document.getElementById("plan-selector").style.display = "block";
        document.getElementById("plan-selector-text").style.display = "block";
        document.getElementById("plan-selector-text2").style.display = "block";
        document.getElementById("alert-text").style.display = "none";
        document.getElementById("alert-text-2").style.display = "none";
        document.getElementById("alert-text-3").style.display = "none";
        document.getElementById("alert-text-4").style.display = "none";
    }
}

function Agradecimiento(){
    document.getElementById("post-submit").style.display = "block";
}

