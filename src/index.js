import './assets/style/style.css';
import Gera_cpf from './modules/Gera_cpf';





// funçao que auto inicia...

(function(){
    const gera = new Gera_cpf()
    const cpf_gerado = document.querySelector('#cpf_gerado')

    cpf_gerado.textContent = gera.gera_novo_cpf()

})();


