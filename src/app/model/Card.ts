import { Skill } from "./Skill"
import { Usuario } from "./Usuario"

export class Card {

    public id_card: number
    public occupation: string
    public nome_empresa: string
    public formacoes: string
    public dataInicio: string
    public dataFinal: string
    public imagem: string
    public usuario: Usuario
    public skill: Skill[]


}