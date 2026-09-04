import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACT_LINKS } from '@core/data/contact-links.data';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.html',
  styleUrl: './contact-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactSection {
  protected readonly contactLinks = CONTACT_LINKS;
}
