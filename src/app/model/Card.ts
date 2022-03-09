import { Skill } from './Skill';
import { User } from './User';

export class Card {
    public id: number;
    public tip: boolean;
    public occupation: string;
    public companyName: string;
    public institution: string;
    public formation: string;
    public startDate: string;
    public endDate: string;
    public image: string;
    public option: string;
    public FunctionDescription: string;
    public user: User;
    public skill: Skill[];
    public description: string;
}
