import { Component, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  submitted:boolean = false
  contactForm! : NgForm

  constructor(
    private _router: Router
  ){}

  onSubmit(event: Event){
    this.submitted = true
    event.preventDefault()
    console.log("coucou c'est envoyé nan ?"+this.submitted);
    this._router.navigateByUrl("/contact")
  }


}
