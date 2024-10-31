// criando um jogo NOME = "N CLIQUE NO BOTÃO"
const botao = document.getElementById("botao")

const div = document.getElementById("div")

const Inp_Text = document.getElementById("Itexto")

const music = document.querySelector("audio")

let contar = 0



    // INICIO NO JOGO

    alert('antes de começar o "jogo" gostaria q coloca-se um nome que você quiser')

    let nome = window.prompt("coloque o nome que você quiser")

    let nome_valor = nome

    let nome_confirm =  window.confirm(`Esse nome esta certo?

Nome colocado:  *${nome_valor}*`)

    if(nome_confirm == true){

        window.alert("aperte o Botão com calma, para não acontecer bug.")
        window.alert("muito Obrigado, Aproveite :)")

    }else{

let nome__ = window.prompt("coloque o o nome que você quiser")

nome_valor = nome__

window.alert("aperte o Botão com calma, para não acontecer bug.")
window.alert("muito Obrigado, Aproveite :)")


}



// fazendo o botão funcionar 
botao.addEventListener("click",function(){

 contar ++ 




        // condição para aleatoriedade do Botão TOP e LEFT
let num = ["10%","16.5%","20%","25%","30%","35%","40%","45%","50%","55%","60%","65%","70%","75","80%","85%","90%","95%"]

        // condição de aleatoriedade de Background e cor da fonte
let cor = ["red","blue","lightgray","gray","black","purple","yellow","green","cyan","chocolate","brown","blueviolet"]
            
let cor_random_fundo = cor[Math.floor(Math.random() * cor.length)]

        // FONT-COLOR
let fnt_cor = ["black", "white"]
        
let font_cor_random = fnt_cor[Math.floor(Math.random() * fnt_cor.length)]
             
let corpo = document.body

if(contar >= 16){ 

for(let i = 0; i <1;i++){

    let Top_ = num[Math.floor(Math.random() * num.length)]
    let Left_ = num[Math.floor(Math.random() * num.length)]
    
    botao.style.top = Top_ 
    botao.style.left = Left_

                    // Altera a altura da musica 
    if(botao.style.top == "95%" && botao.style.left == "10%"){

     music.style.top = "85%"

    }else{

        music.style.top = "92.5%"
    }


        // MUDA DE FONTE E BACKGROUND

            div.innerHTML = ""

            corpo.style.background = cor_random_fundo
             
            botao.style.background = cor_random_fundo
            botao.style.border = "none"
            botao.style.color = font_cor_random
            
            
        if(cor_random_fundo == ["black"]){
                botao.style.color = "white"
            
        }else if (cor_random_fundo == ["gray"] || cor_random_fundo == ["lightgray"] || cor_random_fundo == ["yellow"]){
            botao.style.color = "black"
            
    }

}

}

        // SISTEMA DE SOM COM TIRO 

if(contar >= 28){

botao.style.border = "1px solid black"
botao.style.background = "lightblue"

}

if(contar >= 34){
    botao.style.top = "50%"
    botao.style.left = "50%"
    botao.innerText = "Botão"
    botao.style.background = "lightgray"
    botao.style.color = "black"
    document.body.style.background = "white"
    music.remove()
}

if(contar >= 36){

let Top_ = num[Math.floor(Math.random() * num.length)]
let Left_ = num[Math.floor(Math.random()* num.length)]

botao.style.top = Top_
botao.style.left = Left_

}


switch (contar){

    case 1:
    
    div.innerHTML = `<h1>EII!!</h1>`
    
    break;
    
    case 2:
    
    div.innerHTML = `<h1>Por que esta clicando neste botão?</h1>` 
    
    break; 
    
    case 3:
    
    div.innerHTML = `<h1>tu é estranho ou o que?</h1>`
    
    break;
    
    case 4:
    
        div.innerHTML = ""
    
    break;
    
    case 5:
    
        botao.style.left = "70%"
        div.innerHTML = `<h1>Quero ver vc clicar agora >:)</h1>`
    
    break;
    
    case 6: 
    
        botao.style.left = "50%"
        div.innerHTML = `<h1>Droga >:(</h1>`
    break;
    
    case 7:
    
        let numeros = ['5%','20%','75%','90%','10%','40%','30%','80%','9%','15%','63%','77%','2%','28%','66%','33%']    
    
        // ChatGPT >:(      Sistema de Aleatoriedade
        let Top =  numeros[Math.floor(Math.random() * numeros.length)]; 
        let left = numeros[Math.floor(Math.random() * numeros.length)];
    
        botao.style.top = Top
        botao.style.left = left
    
        // TEXTO
        div.innerHTML = `<h1>Quero ver Clicar Novamente no Botão</h1> <img src="img/meem.jpg" alt="Rindo de vc kkkk">`
        document.body.style.background = "rgba(211, 211, 211, 0.358)"
        botao.classList.add("Estilo_btn")
    
    break;
    
    case 8:
    
        botao.style.top = "50%"
        botao.style.left = "50%"
    
        botao.classList.remove("Estilo_btn")
        div.innerHTML = `<h1>...</h1>`
        document.body.style.background = "white"
    
    break;
    
    case 9:
    
        div.innerHTML = `<h1>Olha ${nome_valor}, eu sei que você gosta de clicar nesse botão, <br> Mas, ta irritando é serio... </h1>`
    
    break;
    
    case 10:
        div.innerHTML = `<h1>É serio >:( <br> você n quer continuar clicando nele >:(</h1>`
    break;
    
    case 11:
        div.innerHTML = `<h1 class="carinha"> >:( </h1>`
        botao.style.top = "60%"
    break;
    
    case 12:
        botao.style.top = "50%"
        div.innerHTML = `<h1>Então...</h1>`
    break;
    
    case 13:
        div.innerHTML = `<h1>que os jogos comecem >:)</h1>`
    break;
    
    case 14:
        div.innerHTML = ""
        alert("ative a musica para uma melhor experiencia")
        alert("ou coloque uma musica que você goste, não sei ¯\_(ツ)_/¯ ")
    
        let conf =  confirm("deseja colocar a musica?")
    
    if(conf == true){
    
    music.removeAttribute("hidden")
    
    }else{
    
    music.getAttribute("hidden")
    
    }
    
    break;
    
    case 15:
        div.innerHTML = "<h1>VAMOS VER SE VC É O BONZÂO ENTÃO >:)</h1>"
    break;
    
    case 16:
        // executa o if de 16
    break;
    
    case 17: break; //na
    case 18: break; //na
    case 19: break; //na
    
    case 20:
        botao.innerText = "Para" 
    break; 
    case 21: 
        botao.innerText = "De"
    break; 
    case 22:
        botao.innerText = "Clicar"
    break; 
    
    case 23:
        botao.style.fontSize = "10em"
        botao.style.left = "50%"
        botao.style.top = "50%"
        botao.innerText = "NELE!"
    break;
    
    case 24: 
        botao.style.fontSize = "1em"
        botao.innerText = "Botão"
    break;
    
    case 25: break; //na
    
    case 26:
        alert(">:(((")        
    break; 
    
    case 27: break; //na
    
    case 28: 
        botao.innerHTML = '<audio src="Sons/tiro7.wav" autoplay>Seu navegador não suporta audio</audio>'
    
    break;  
    
    case 29:
        botao.innerHTML = '<audio src="Sons/tiro7.wav" autoplay>Seu navegador não suporta audio</audio>'
    
    break; 
    
    case 30:
        botao.innerHTML = '<audio src="Sons/tiro7.wav" autoplay>Seu navegador não suporta audio</audio>'
    
    break; 
    
    case 31:
         div.innerHTML = "<h1>Por que o botão esta fazendo esse som?</h1>"
    
    if(cor_random_fundo == ["black"]){
            
        div.style.color = "white"
    
    }else  if (cor_random_fundo == ["gray"] || cor_random_fundo == ["lightgray"] || cor_random_fundo == ["yellow"] || cor_random_fundo == ["cyan"]){
        div.style.color = "black"
    
    }
        botao.innerHTML = '<audio src="Sons/tiro7.wav" autoplay>Seu navegador não suporta audio</audio>'
    
    break;
    
    case 32:
        div.innerHTML = "<h1>Espera um momento...</h1>"
    
        if(cor_random_fundo == ["black"]){
            
            div.style.color = "white"
    
        }else  if (cor_random_fundo == ["gray"] || cor_random_fundo == ["lightgray"] || cor_random_fundo == ["yellow"] || cor_random_fundo == ["cyan"]){
            div.style.color = "black"
    
        }
        botao.innerHTML = '<audio src="Sons/tiro7.wav" autoplay>Seu navegador não suporta audio</audio>'
    
    break;
    
    case 33: 
    if(cor_random_fundo == ["black"]){
            
        div.style.color = "white"
    
    }else  if (cor_random_fundo == ["gray"] || cor_random_fundo == ["lightgray"] || cor_random_fundo == ["yellow"] || cor_random_fundo == ["cyan"]){
        div.style.color = "black"
    
    }
        botao.innerHTML = '<audio src="Sons/tiro7.wav" autoplay>Seu navegador não suporta audio</audio>'
    
    break;
    
    case 34:
    
        //executao if de 34
    break;
    
    case 35:
        alert("bem... é isso.")
        alert("você ganhou...")
        alert("não tenho o que dizer mais...")
        alert("você é muito persistente. E eu não quero me estressar")
        alert("então...")
        alert("acabo :)")
        alert("feito por lucas Cerqueito do Nascimento :D")
        alert("fim :)")
    break;
    
    case 36:
        //FIM :)
    break;
    
    case 37: break;
    case 38: break;
    case 39: break;
    case 40:
    alert("tu já pode sair já '-'")
    break;

    case 41: break; //na
    
    case 42: 
    window.open("https://youtu.be/ETo5l_RFgPY?si=EAZUdZTJ_aOAnWRZ", "_blank");
    break;
    }



/* 

if(contar == 1){

div.innerHTML = `<h1>EII!!</h1>` 

}else if (contar == 2){

    div.innerHTML = `<h1>você pode parar de clicar neste botão?</h1>` 
}else {

    div.innerHTML = `<h1>isso esta irritando já</h1>`

}
if(contar > 3 ){

div.innerHTML = ""

}



if(contar == 5){
    botao.style.left = "70%"
    div.innerHTML = `<h1>Quero ver vc clicar agora >:)</h1>`
}

if(contar == 6){
    botao.style.left = "50%"
    div.innerHTML = `<h1>Droga >:(</h1>`
}

if(contar == 7){    // Sistema de Aleatoriedade de Top e Left

let numeros = ['5%','20%','75%','90%','10%','40%','30%','80%','9%','15%','63%','77%','2%','28%','66%','33%']    

    // ChatGPT >:(      Sistema de Aleatoriedade
let Top =  numeros[Math.floor(Math.random() * numeros.length)]; 
let left = numeros[Math.floor(Math.random() * numeros.length)];

botao.style.top = Top
botao.style.left = left


// TEXTO
div.innerHTML = `<h1>Quero ver Clicar Novamente no Botão</h1> <img src="meem.jpg" alt="Rindo de vc kkkk">`
document.body.style.background = "rgba(211, 211, 211, 0.358)"
botao.classList.add("Estilo_btn")

}else if (contar >= 8){

botao.style.top = "50%"
botao.style.left = "50%"

botao.classList.remove("Estilo_btn")
div.innerHTML = `<h1>...</h1>`
document.body.style.background = "white"

}

if(contar == 10){

div.innerHTML = `<h1>Olha ${nome_valor}, eu sei que você gosta de clicar nesse botão <br> Mas, ta irritando mesmo </h1>`

}else if(contar == 11){
    div.innerHTML = `<h1>É serio >:( <br> você n quer continuar clicando nele >:(</h1>`

}

if(contar == 12){
 
div.innerHTML = `<h1 class="carinha"> >:( </h1>`

botao.style.top = "60%"
    
}



*/
})










