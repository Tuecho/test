let isHidden = true;


function toggleText(){
    const TXT = document.querySelector('.additional');
    const toggle = document.getElementById('toggle')
    if(isHidden){
        TXT.classList.remove('hidden');
        TXT.classList.add('visible'); 
        toggle.innerHTML = "Ocultar exceso de texto";
            
    } else {
        TXT.classList.remove('visible'); 
        TXT.classList.add('hidden'); 
        toggle.innerHTML = "Seguir leyendo"; 
    }
    isHidden = !isHidden;
}
