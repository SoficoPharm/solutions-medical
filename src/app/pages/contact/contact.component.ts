import { Component } from '@angular/core';
import { RevealDirective } from '../../shared/directives/reveal.directive';

interface ContactDetail {
  icon: string;
  label: string;
  value: string;
  href: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly details: ContactDetail[] = [
    {
      icon: 'bi-envelope',
      label: 'Email',
      value: 'info@solutions-medical.com',
      href: 'mailto:info@solutions-medical.com',
    },
    {
      icon: 'bi-telephone',
      label: 'Phone',
      value: '+20 100 000 0000',
      href: 'tel:+201000000000',
    },
    {
      icon: 'bi-geo-alt',
      label: 'Location',
      value: 'Cairo, Egypt',
      href: '',
    },
  ];
}
