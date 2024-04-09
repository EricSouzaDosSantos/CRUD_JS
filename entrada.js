import { AddUser } from "./crud.js"
import { ListUser } from "./crud.js"
import { UpdateUser } from "./crud.js"
import { DeleteUser } from "./crud.js"


let entrada = true

while(entrada){
    let opcao = parseInt(prompt(`Digite Qual das opções você deseja fazer:
    [1] Cadastrar Usuario
    [2] Listar Usuario
    [3] Atualizar Usario
    [4] Deletar Usuario
    [5] Sair do Programa`))


    switch(opcao){

        case 1:

        AddUser()

        break
        
        case 2:

        ListUser()

        break
        
        case 3:

        UpdateUser()

        break
        
        case 4:

        DeleteUser()

        break

        case 5:

        entrada = false

        break

        default:

        alert("Opção indisponivel")

        break
        
    }
 }