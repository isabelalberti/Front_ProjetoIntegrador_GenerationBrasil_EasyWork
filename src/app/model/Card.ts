import { Skill } from "./Skill"
import { User } from "./User"

export class Card {

    public id_card: number
    public occupation: string
    public companyName: string
    public institution: string
    public startDate: string
    public endDate: string
    public image: string
    public user: User
    public skill: Skill[]


}