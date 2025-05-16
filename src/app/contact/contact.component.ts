import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createInvalidDomainValidator } from './invalidEmail';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  standalone: false,
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  contactForm = new FormGroup({
    senderName: new FormControl('', Validators.required),
    senderEmail: new FormControl('', [
      Validators.required,
      Validators.email,
      createInvalidDomainValidator(['gmail.com', 'yahoo.com']),
    ]),
    senderMessage: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });
  submitForm() {
    console.log(this.contactForm.valid);
  }
}
