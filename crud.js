let arrUser = []
export const AddUser = () => {
    const nameUser = prompt("Qual o deseja adicionar nome:")
    const emailUser = prompt("Informe o email da pessoa")

    arrUser.push({nameUser, emailUser})

console.log(arrUser)
}

export const ListUser = () =>{

    let listUser;

    arrUser.forEach((dataUser) => {

        listUser = `nome: ${dataUser.nameUser} email: ${dataUser.emailUser}`

    })

    alert("*****Lista de usuarios****** \n"+ listUser)

}

export const UpdateUser = () => {
    const findEmail = prompt("informe o email que você deseja atualizar:")
    const userFound = arrUser.find(user => user.emailUser === findEmail)

    if(!userFound){
        alert("Usuario não foi encontrado")
        return;
    }else{
        alert("usuario encontrado")
    }
    
}
