import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../service/alert.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
    nome: string
    email: string
    mensagem: string

    constructor( 
    private router: Router
    
    ){}

    ngOnInit(): void {
        window.scroll(0,0)
    }
    enviarContato() {
        console.log(this.nome + this.email + this.mensagem)
        if (this.nome == "" || this.email == "" || this.mensagem == "" || this.nome == null || this.email == null || this.mensagem == null) {
          alert('Todos os campos precisam ser preenchidos!')
        } else {
          alert('Recebemos seu e-mail e logo entraremos em contato!')
          this.router.navigate(['/inicio'])
        }
      }
}
