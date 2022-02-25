import { Card } from './Card';

export class Usuario {
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
    public card: Card[];
}
