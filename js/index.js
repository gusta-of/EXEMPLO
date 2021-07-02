var botao = document.getElementById('botao')
botao.addEventListener('click', function(){
    alert("EXECUTEI ALGUMA COISA!")
})

 function muda_texto() {
     var paragrafo = document.getElementById('paragrafo')
     paragrafo.innerText = "Agora tenho outro texto!"
 }