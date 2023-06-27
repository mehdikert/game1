const prixExacte = Math.floor((Math.random()*100000)+5000)
var moin = false ;
var plus = false ; 
function verification(){
 let prix = document.getElementById('prix').value;
    if(prix > prixExacte){
        document.getElementById('alerte').textContent = "c'est Moin -";
        playaudio2();
        document.getElementById('container').style.boxShadow = '0px 0px 40px red'
    }else if(prix < prixExacte){
      document.getElementById('alerte').textContent = "c'est Plus +"
      playaudio1();
      document.getElementById('container').style.boxShadow = '0px 0px 40px blue'
    }
    else{
     document.getElementById('alerte').textContent = "Vous Avez Gagnez "
     document.getElementById('container').style.boxShadow = '0px 0px 40px green'
    }
}

function playaudio1(){
    let audio = new Audio("plus.mp3")
    audio.play()
}


function playaudio2(){
    let audio = new Audio("moin.mp3")
    audio.play()
}



