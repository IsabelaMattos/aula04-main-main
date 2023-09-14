'use server'

const lista=[{
    name:'Isabela',
    password:'123',
    email:'isabela@gmail.com',
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
},

{
    name:'Taty',
    password:'123',
    email:'taty@gmail.com',
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
},

{
    name:'Bruna',
    password:'123',
    email:'bruna@gmail.com',
    token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c'
}]

const getUserAuthenticated = (user) => {
    let listaUser = {}
    lista.map ((lista => {
        if(lista.email == lista.email && lista.password == lista.password){
            listaUser = lista;
        }
    }))
    return listaUser;
}

const getUsers = () =>{
        return lista;
}
export { getUsers, getUserAuthenticated };