import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EXPERIENCES } from '@core/data/experiences.data';

@Component({
  selector: 'app-experience-section',
  templateUrl: './experience-section.html',
  styleUrl: './experience-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceSection {
  protected readonly experiences = EXPERIENCES;
}
