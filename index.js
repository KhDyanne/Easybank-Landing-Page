
const mini_bar=document.querySelector('.mini-bar');
const body=document.body;

function showBar(){      
    mini_bar.style.display="flex";  
    body.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
    mini_bar.style.backgroundColor = "rgba(255, 255, 255, 1)";
}

function hideBar(){
    mini_bar.style.display='none';
}



