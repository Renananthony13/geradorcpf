import { ValidaCPF as Valida_cpf } from './ValidaCPF';

export default class Gera_cpf {
    rand(min = 10000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min)); 
    }

    formata_cpf(cpf) {
        return (
            cpf.replace(/^([\d]{3})([\d]{3})([\d]{3})([\d]{2})/, "$1.$2.$3-$4")
        )
    }

    gera_novo_cpf() {
        const cpfSemDigito = this.rand();
        const digito1 = Valida_cpf.cria_digito(cpfSemDigito);
        const digito2 = Valida_cpf.cria_digito(cpfSemDigito + digito1);
        const novo_cpf = cpfSemDigito + digito1 + digito2;
        return this.formata_cpf(novo_cpf)
    }


}


