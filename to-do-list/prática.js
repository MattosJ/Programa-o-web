const listaTarefas = document.querySelector('#listaTarefas');
const caixaTexto = document.querySelector('#caixaDeTexto');
const  botaoAdicionar = document.querySelector('#botaoAdicionar');
const listaSuspensa = document.querySelector('#listaSuspensa')
//LISTENER - SEMPRE QUE O BOTÃO ADICIONAR FOR CLICADO
// ADCIONA  UM ITEM NA LISTA DE TAREFA

botaoAdicionar.addEventListener('click',function(){
    const textoDaTarefa = caixaTexto.value;
    caixaTexto.value = "";
    listaTarefas.appendChild(adicionaTarefa(textoDaTarefa));
    caixaTexto.focus();
    exibeOcultaListaSuspensa();
});
function adicionaTarefa(textoDaTarefa){
    const elementoLI = document.createElement('li');
    const elementoSPAN = document.createElement('span');

    elementoSPAN.setAttribute('id','tarefa');

    elementoSPAN.textContent = textoDaTarefa;

    
    elementoLI.className =' nãoRealizada' ;
    elementoLI.appendChild(elementoSPAN);
    elementoLI.appendChild(adicionaBotaoRemover());

    // LISTENER - SEMPRE QUE UM ITEM FOR CLICADO PELO MOUSE
    // ALTERA O MARCADOR, A COR  DA FONTE E RISCA O TEXTO
    


    elementoSPAN.addEventListener('click', function(){
        if(this.id === 'tarefa') {
            if(this.parentNode.className === 'nãoRealizada') {
                this.parentNode.className = 'Realizada'
            } else{
                this.parentNode.className = 'nãoRealizada'
            }
         
        }
    });

    console.log(elementoSPAN);

    return elementoLI;

}

function adicionaBotaoRemover(){
    const BotaoRemover = document.createElement('button');
    BotaoRemover.textContent ='✘';
    BotaoRemover.className = 'remover';
    //LISTENER - SEMPRE QUE  UM ITEM DA LISTA FOR CLICADO  PELO MOUSE 
    // REMOVE UM ITEM  DA LISTA
    BotaoRemover.addEventListener('click',function(){
        listaTarefas.removeChild(this.parentNode);
        exibeOcultaListaSuspensa();
     }
    );
    return BotaoRemover; 
}

function exibeOcultaListaSuspensa(){
    const elementoSPAN = document.querySelector('#tarefa');
    if(elementoSPAN === null) {
        listaSuspensa.setAttribute('hidden','hidden');
    } else {
        listaSuspensa.removeAttribute('hidden');
    };
}
listaSuspensa.addEventListener('change',function(){
    if(listaSuspensa.selectedIndex === 2 || listaSuspensa.selectedIndex === 1 ) {
        const vetorTarefas = listaTarefas.querySelectorAll('#tarefa');
        for(tarefa of vetorTarefas) {
            tarefa.dispatchEvent(new Event('click'));
        }
    }
    if(listaSuspensa.selectedIndex === 3 ) {
        const vetorBotoes = listaTarefas.querySelectorAll('.remover');
        for(botao of vetorBotoes) {
            botao.dispatchEvent(new Event('click'));
        }
    }
}
);
