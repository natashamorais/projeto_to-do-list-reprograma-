/*clicar e add uma tarefa embaixo> limpar o campo da tarefa> clicar no botao e excluir a tarefa>*/
/*pegar input criar um p e colocar o ele dentro> pegar o p e colocar dentro de uma div>
/*deletar a tarefa quando  clicar o botão de excluir */
const input = document.getElementById("taskInput")
const taskBox = document.getElementById("taskBox")
const form = document.querySelector(".task-composer__form")
const deleteButton = document.getElementById("deleteButton")
const button = document.getElementById("inputBtn")
const divstylebox = document.querySelector("divstylebox")

// =---------------------- drag and drop ------------------------------------------
let dragging  //variavel para guardar a classe a ser movida 
// O conceito do drag n' drop é pegar um elemento pela classe ou id guardar ela em uma variável e depois colocar esse elemento em outro lugar chamando essa variável
//--------------------------drag and drop ------------------------------------------


form.addEventListener("submit", function (eve) {
    eve.preventDefault()
})


button.addEventListener("click", function (event) {
    event.preventDefault()


    //Validar o campo se estiver nulo ou as outras variaveis
    //Trim remove os espaços necesários 

    if (input.value === "" || input.value.length === 0 || !input.value.trim() || input.value === " " || input.value === null || input.value === undefined) {
        input.focus()
        return false
    }


    const taskDiv = document.createElement("div")
    taskDiv.className = "taskdivclasse"
    taskDiv.setAttribute('draggable', true)
    
    
    const task = document.createElement("p")
    task.className = "class-styleJss"

    //Criado div para colocar botao de excluir, dps deu uma classe e por ultimo criou no html
    const btnDeleteTask = document.createElement("div")
    btnDeleteTask.className = "btnDeleteTask"
    btnDeleteTask.innerHTML = ` x `

    //Botao excluir tarefas 
    btnDeleteTask.addEventListener("click", function (eventdelete) {
        eventdelete.preventDefault()
        taskDiv.remove()
    })

    task.innerHTML = taskInput.value
    taskDiv.appendChild(btnDeleteTask)
    taskDiv.appendChild(task)
    taskBox.appendChild(taskDiv)

    //Após tudo ele deixa o campo em branco    
    taskInput.value = ""

    //Ao clicar nas tarefas ela fica cinza 
    taskDiv.addEventListener("click", function (eventclass) {
        eventclass.preventDefault()
        task.className = "class-styleJss__check"
        
    
    })

    // ----- dragstart é onde começa a nossa viagem pelo drag n' drop  ele define que o elemento pode ser arrastado (guarda a classe numa variável)
    taskDiv.addEventListener("dragstart", function (ev) { // definindo o começo do "arrastão" 
        dragging = ev.target.closest( ".taskdivclasse") //aqui definimos o que vamos arrastar no caso a nossa taskdiv - usamos o closest porque ele vai pegar o elemento que tiver a classe ."taskdivclasse" mais próximo do que está selecionado (definido pelo target que pega sempre o elemento o que fez a nossa função funcionar ou seja a taskDiv que a gente clicou) assim não vamos selecionar todas as divs de uma vez 
        //draging.classList.add('') se vc quiser fazer perfumaria pode fazer assim 

    })
    //----------dragover é o meio da nossa viagem enquanto estamos arrastando pela tela
    taskDiv.addEventListener("dragover", function (ev) { //
        //permite colocar o objeto arrastado aqui 
        ev.preventDefault();
        const node = ev.target.closest(".taskdivclasse") //criamos uma nova variável com os mesmo valores da dragging porque queremos a taskdiv que estamos passando por cima então queremos a mesma coisa que antes mas não como uma função que pega o que foi selecionado
        this.parentNode.insertBefore(dragging, node) // (coloca a variável na lugar que eu quero que ela fique chamando ela) aqui usamos o insertBefore para não ficar por último aqui ele funciona como um appendchild. chamamos o parent node do "this" ou seja do taskdiv que é o taskbox pq é lá que vamos colocar mexer nas div né > definimos que queremos que ele o dragging ou seja a div que selecionamos fique antes do node a div que queremos substituir
    })

    ///-----------dragend é o final da nossa viagem de drag n' drop
    taskDiv.addEventListener("dragend", function (ev) { //aqui definimos acabou o nosso arrastão que vai soltar e ficar parada lá 
        dragging = null     //usamos o dragging = null para dizer que não é mais para arrastar a não se que vc selecione de novo desencadeando o evento dragstart  
    })

    // FASE 3 - MARCAR TODOS OS ITENS COMO FEITO
    const checkButton = document.getElementById("checkButton")
    checkButton.addEventListener("click", function (eventcheck) {
        eventcheck.preventDefault()
        task.className = "class-styleJss__check"
        

    })

    //FASE 3 - EXCLUIR TUDO DA LISTA 
    deleteButton.addEventListener("click", function (E) {
        E.preventDefault()
        taskDiv.remove()

    })

})
