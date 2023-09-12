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
    usuarios.map ((usuarios => {
        if(user.email == usuarios.email && user.password == usuarios.password){
            listaUser = usuarios;
        }
    }))
    return listaUser;
}

const getUsers = () =>{
        return usuarios;
}
export { getUsers, getUserAuthenticated };