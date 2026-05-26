import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import emailjs from '@emailjs/browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  isSending = false;
  successMessage = '';

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  get f() {
    return this.contactForm.controls;
  }

  sendMessage() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    this.isSending = true;

    const templateParams = {
      from_name: this.contactForm.value.name,
      from_email: this.contactForm.value.email,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message,
    };

    emailjs
      .send(
        'service_7o8sybf',
        'template_z2899cy',
        templateParams,
        '_dHqvekCWVUt33qjB'
      )
      .then(
        () => {
          this.successMessage = 'Message sent successfully!';
          this.contactForm.reset();
          this.submitted = false;
          this.isSending = false;
        },
        (error) => {
          console.error(error);
          this.isSending = false;
          alert('Failed to send message');
        }
      );
  }
}