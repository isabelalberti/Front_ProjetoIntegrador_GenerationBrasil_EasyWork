import { Card } from './Card';

export class User {
    public id: number;
    public fullName: string;
    public password: string;
    public picture: string;
    public autoBiography: string;
    public email: string;
    public phoneNumber: string;
    public age: number;
    public linkedin: string;
    public gitHub: string;
    public city: string;
    public state: string;
    public type: string;
    public gender: string;
    public card: Card[];
}
