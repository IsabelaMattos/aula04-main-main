'use client'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "@/app/componentes/navbar";
import '../css/alterar.css'

export default function Alterar() {
  function alterar (e) {
    e.preventDefault();
    toast.sucess("Funcionando ;)");
  }

  return (
    <div>
      <Navbar/>
      <form onSubmit={alterar}>
        <div className="texto">
          <div class="input-box">
            <i>Nome</i>
            <input type="name" required/>
          </div>
          <div class="input-box">
            <i>Email</i>
            <input type="email" required/>
          </div>
          <div class="input-box">
            <i>Senha</i>
            <input type="password" required/>
          </div>
          <br/><br/>
          <button className="btn">Alterar</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}
