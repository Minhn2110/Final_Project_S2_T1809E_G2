import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MainService } from '../adidas-service/main.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: any;
  submitted = false;


  constructor(private formBuilder: FormBuilder,
    private mainService: MainService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  get f() { return this.contactForm.controls; }

  submitContactForm() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
        return;
    } else {
      const contactFormValue = {
        formValue: this.contactForm.value
      }
      this.mainService.sendContact(contactFormValue).subscribe(res => {
        console.log('res', res);
        console.log('contactFormValue', contactFormValue)
        if (res) {
          this.toastr.success('Message send successfully', 'Adidas');
          this.contactForm.reset();
        }
      });
    }
  }
}
