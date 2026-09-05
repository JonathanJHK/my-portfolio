import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CONTACT_LINKS } from '@core/data/contact-links.data';
import { ButtonDirective } from 'primeng/button';

@Component({
  selector: 'app-hero',
  imports: [ButtonDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly contactLinks = CONTACT_LINKS;

  protected readonly linkedinUrl = CONTACT_LINKS.find((link) => link.label === 'LinkedIn')!.url;
  protected readonly githubUrl = CONTACT_LINKS.find((link) => link.label === 'GitHub')!.url;
  protected readonly resumeUrl = CONTACT_LINKS.find((link) => link.label === 'Currículo')!.url;
}
