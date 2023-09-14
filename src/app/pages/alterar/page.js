'use client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const form = () => {

  const handlerLogin = async (e) => {
    e.preventDefault();
        toast.error("Alterado com sucesso");
      }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handlerLogin}>
      <input
          placeholder='Nome'
          type="nome"
       >
        </input>
        <input
          placeholder='E-mail'
          type="email"
        >
        </input>
        <input
          placeholder='Senha'
          type='password'
         >
        </input>
        <button>Entrar</button>
      </form>
      <ToastContainer />
    </div>
  )
};

export default form;
