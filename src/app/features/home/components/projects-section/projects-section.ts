import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROJECTS } from '@core/data/projects.data';
import { ProjectCard } from '@shared/components/project-card/project-card';

@Component({
  selector: 'app-projects-section',
  imports: [ProjectCard],
  templateUrl: './projects-section.html',
  styleUrl: './projects-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSection {
  protected readonly projects = PROJECTS;
}
