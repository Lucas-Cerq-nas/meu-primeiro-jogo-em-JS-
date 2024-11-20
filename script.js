// criando um jogo NOME = "N CLIQUE NO BOTÃO"
const botao = document.getElementById("botao")

const div = document.getElementById("div")

const Inp_Text = document.getElementById("Itexto")

const music = document.querySelector("audio")

let Som = document.createElement("audio")
Som.src = "Sons/botãoSom.mp3"
Som.currentTime = 0


let corpo = document.body

//contador de clicks
let contar = 0

let clicks = 0


/* // INICIO NO JOGO


    alert('antes de começar o "jogo" gostaria q coloca-se um nome que você quiser')

    let nome = window.prompt("coloque o nome que você quiser")

    let nome_valor = nome

    if(nome == ""){
        alert("seu nome esta vazio...")
        alert("porfavor, preencha o campo nome >:(")
    }


    while(nome == ""){
        nome = window.prompt("so colocar qualquer coisa '-' ")
    }

    if(nome != ""){

        nome_valor = nome
        let nome_confirm =  window.confirm(`Esse nome esta certo?

Nome colocado:  *${nome_valor}*`)
            
                if(nome_confirm){
            
                    window.alert("aperte o Botão com calma, para não acontecer bug.")
                    window.alert("muito Obrigado, Aproveite :)")
            
                }else{
            
            let nome__ = window.prompt("coloque o nome que você quiser")

            if(!nome__){

                alert("quer saber? seu nome agora vai ser 'irritante' >:( ")
                
                nome_valor = "irritante"

            }
            
            nome_valor = nome__
            
            window.alert("aperte o Botão com calma, para não acontecer bug.")
            window.alert("muito Obrigado, Aproveite :)")
            
            }

    }

*/


// fazendo o botão funcionar 
botao.addEventListener("click",function(){

 contar ++ 

console.log(contar)


  

// espaço para treinar :O


 //Aleatoriedades

        // condição para aleatoriedade do Botão TOP e LEFT
let num = ["10%","16.5%","20%","25%","30%","35%","40%","45%","50%","55%","60%","65%","70%","75","80%","85%","90%","95%"]

        // condição de aleatoriedade de Background e cor da fonte
let cor = ["red","blue","lightgray","gray","black","purple","yellow","green","cyan","chocolate","brown","blueviolet"]
            
let cor_random_fundo = cor[Math.floor(Math.random() * cor.length)]

        // FONT-COLOR
let fnt_cor = ["black", "white"]
        
let font_cor_random = fnt_cor[Math.floor(Math.random() * fnt_cor.length)]
             
let corpo = document.body

if(contar >= 17){ 
    Som.play()
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

if(contar >= 28){
    Som.play()
botao.style.border = "1px solid black"
botao.style.background = "lightblue"

}

if(contar >= 35){
    
    botao.style.top = "50%"
    botao.style.left = "50%"
    botao.innerText = "Botão"
    botao.style.background = "lightgray"
    botao.style.color = "black"
    document.body.style.background = "white"
    music.remove()
    Som.play()
}

if(contar >= 36){

let Top_ = num[Math.floor(Math.random() * num.length)]
let Left_ = num[Math.floor(Math.random()* num.length)]

botao.style.top = Top_
botao.style.left = Left_
Som.play()
}




switch (contar){

    case 1:
    
    div.innerHTML = `<h1>EII!!</h1>`
    Som.play()
    
    break;
    
    case 2:
    
        div.innerHTML = `<h1>Por que esta clicando neste botão?</h1>` 
        Som.play()
    break; 
    
    case 3:
    
        div.innerHTML = `<h1>tu é estranho ou o que?</h1>`
        Som.play()
    break;
    
    case 4:
    
        div.innerHTML = ""
        Som.play()
    break;
    
    case 5:
    
        botao.style.left = "70%"
        div.innerHTML = `<h1>Quero ver vc clicar agora >:)</h1>`
        Som.play()
    break;
    
    case 6: 
    
        botao.style.left = "50%"
        div.innerHTML = `<h1>Droga >:(</h1>`
        Som.play()
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
        Som.play()

    break;
    
    case 8:     // Sitema de repetição do botão
    
        div.innerHTML = ""
        alert("certo, certo.\n quero ver clicar Denovo!")
        corpo.style.background = "white"
        botao.classList.remove("Estilo_btn")
        Som.play()

        for(let c = 0; c <= 50; c++){
            
            let btn_criado = document.createElement("button") // cria uma copia
        
            btn_criado.setAttribute("onclick", "click_clones()")

            btn_criado.classList.add("btn_clones")

            btn_criado.innerText = "Botão"

            btn_criado.addEventListener("click", () => {Som.play()})    // todos os botões terem o som de click :)

        
                                    // ChatGPT >:( 
            let top_clones_btn = Math.random() * 90 + "vh"  //viewport Height
            let left_clones_btn = Math.random() * 90 + "vw" //viewport width
        
            botao.style.top = top_clones_btn
            botao.style.left = left_clones_btn
        
            btn_criado.style.top = top_clones_btn
            btn_criado.style.left = left_clones_btn
            
            corpo.appendChild(btn_criado)
     
    }
    
    break;
    
    case 9:
        RemoveAll_buttons()
        botao.style.background = "lightgray"
        botao.style.top = "50%"
        botao.style.left = "50%"

        botao.classList.remove("Estilo_btn")
        div.innerHTML = `<h1>Certo ${nome_valor}</h1>`
        document.body.style.background = "white"
        Som.play()
    break;
    
    case 10:
        div.innerHTML = `<h1> eu sei que você gosta de clicar nesse botão, <br> Mas, ta irritando é serio... </h1>`
        Som.play()
    break;
    
    case 11:
        div.innerHTML = `<h1>É serio >:( <br> você n quer continuar clicando nele >:(</h1>`
        Som.play()
    break;
    
    case 12:
        div.innerHTML = `<h1 class="carinha"> >:( </h1>`
        botao.style.top = "60%"
        Som.play()
    break;
    
    case 13:
        botao.style.top = "50%"
        div.innerHTML = `<h1>Então...</h1>`
        Som.play()
    break;
    
    case 14:
        div.innerHTML = `<h1>que os jogos comecem >:)</h1>`
        Som.play()
    break;
    
    case 15:
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
    
    case 16:
        div.innerHTML = "<h1>VAMOS VER SE VC É O BONZÂO ENTÃO >:)</h1>"
        Som.play()
    break;
    
    case 17:
            // executa o if de 17    
    break; 
    case 18: break; //na
    case 19: break; //na
    
    case 20: break; //na 
    case 21: 
    botao.innerText = "Para" 
    Som.play()
    break; 
    case 22:
        botao.innerText = "De"
        Som.play()
    break; 
    
    case 23:
        botao.innerText = "Clicar"
        Som.play()
    break;
    
    case 24: 
    botao.style.fontSize = "10em"
    botao.style.left = "50%"
    botao.style.top = "50%"
    botao.innerText = "NELE!"
    Som.play()
    break;
    
    case 25:
        botao.style.fontSize = "1em"
        botao.innerText = "Botão"  
        Som.play()  
    break; 
    
    case 26: break; //na 
    
    case 27: break; 
    alert(">:(((") 

    case 28: break; //na
    
    case 29:            // sistema de Som de Tiro
        botao.innerHTML = '<audio src="Sons/tiro7.wav" autoplay>Seu navegador não suporta audio</audio>'

    break; 
    
    case 30:
        botao.innerHTML = '<audio src="Sons/tiro7.wav" autoplay>Seu navegador não suporta audio</audio>'
    
    break; 
    
    case 31:

    botao.innerHTML = '<audio src="Sons/tiro7.wav" autoplay>Seu navegador não suporta audio</audio>'
    
    break;
    
    case 32:
        div.innerHTML = "<h1>Por que o botão esta fazendo esse som?</h1>"
    
        if(cor_random_fundo == ["black"]){
                
            div.style.color = "white"
        
        }else  if (cor_random_fundo == ["gray"] || cor_random_fundo == ["lightgray"] || cor_random_fundo == ["yellow"] || cor_random_fundo == ["cyan"]){
            div.style.color = "black"
        
        }
            botao.innerHTML = '<audio src="Sons/tiro7.wav" autoplay>Seu navegador não suporta audio</audio>'
    break;
    
    case 33: 
    div.innerHTML = "<h1>Espera um momento...</h1>"
    
    if(cor_random_fundo == ["black"]){
        
        div.style.color = "white"

    }else  if (cor_random_fundo == ["gray"] || cor_random_fundo == ["lightgray"] || cor_random_fundo == ["yellow"] || cor_random_fundo == ["cyan"]){
        div.style.color = "black"

    }
    botao.innerHTML = '<audio src="Sons/tiro7.wav" autoplay>Seu navegador não suporta audio</audio>'

    
    break;
    
    case 34: 
      if(cor_random_fundo == ["black"]){
            
        div.style.color = "white"
    
        }else  if (cor_random_fundo == ["gray"] || cor_random_fundo == ["lightgray"] || cor_random_fundo == ["yellow"] || cor_random_fundo == ["cyan"]){
        div.style.color = "black"
    
    }
        botao.innerHTML = '<audio src="Sons/tiro7.wav" autoplay>Seu navegador não suporta audio</audio>'
        
    break;
    
    case 35:
    //executao if de 35
    break;

    case 36:
        alert("ainda não sei o porque o botão fez esse som. ")
        alert("mas em fim...")
        alert("vamos fazer um trato?")
        alert("vamos jogar um jogo?")
       let conf2 = confirm("Você aceita jogar meu jogo?")

    if(conf2){
        alert("serio? blz então >:)")
        alert("caso você ganhei no meu jogo")
        alert("você ganha")
        alert("se não...")
        alert("você perder ¯\_(ツ)_/¯ ")
        alert("oq você acha?")

    }else{
        location.href = 'https://youtu.be/ETo5l_RFgPY?si=EAZUdZTJ_aOAnWRZ'
    }

        div.innerHTML = `<h1>O que você acha?</h1>`
        botao.setAttribute("hidden", true)

       corpo.innerHTML += ` <button class="botao_escolha_sim" onclick="btn_sim()">Vamos lá</button>`   
       corpo.innerHTML += `<button class="botao_escolha_nao" onclick="btn_nao()">Não quero não </button>`


    break;
    }


})

function btn_sim(){
    alert("Certo... Vamos lá")

    document.location.href = 'jogo.html'
}

function btn_nao(){
    location.href = 'https://youtu.be/ETo5l_RFgPY?si=EAZUdZTJ_aOAnWRZ'
}

function click_clones(){
clicks ++

if(clicks == 10){
    
    alert("Meu Deus, isso é pior doque você clicar nesse botão")
    alert("o botão ta aqui")
    alert("aff")
    botao.style.background = "yellow"

 }else if(clicks == 15){

alert("Tu é esquisito?  '-' ")
RemoveAll_buttons()

}
console.log(clicks)
}

// remove todos os botões, Chatgpt pq eu sou muito burro de não lembrar do querySelectorALL >:( sabendo q to criando botões pra varias classes MDSSSSS

function RemoveAll_buttons(){

    let Remove_btn = document.querySelectorAll(".btn_clones")

    Remove_btn.forEach(botoes => botoes.remove()); // removendo essa merda >:(

    if(contar == 9){
        alert("eita.. tu achou...")
        alert("mandou bem...")
        Remove_btn.forEach(botoes => botoes.remove());

    }

}




