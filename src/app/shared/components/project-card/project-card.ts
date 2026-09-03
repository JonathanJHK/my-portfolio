import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PortfolioProject } from '../../../core/models/project.model';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCard {
  readonly project = input.required<PortfolioProject>();
}
