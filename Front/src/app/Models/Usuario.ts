import { ESexo } from "../Enums/ESexo.enum";

export interface Usuario {
    id: number;
    nome: string;
    cpf: string;
    email: string;
    telefone: string;
    sexo: ESexo;
    dataNascimento: Date;
}
