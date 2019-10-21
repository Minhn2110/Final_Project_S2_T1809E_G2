import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MainService } from '../service/main.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: any;


  constructor(private formBuilder: FormBuilder,
    private mainService: MainService) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  submitContactForm() {
    const contactFormValue = {
      formValue: this.contactForm.value
    }
    this.mainService.sendContact(contactFormValue).subscribe((res) => {
      console.log('res', res);
      if (res) {
      }
    })
    console.log('contactFormValue', contactFormValue)
  }

}
