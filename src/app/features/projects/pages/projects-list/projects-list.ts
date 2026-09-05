import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '@core/data/projects.data';
import { ProjectCard } from '@shared/components/project-card/project-card';

@Component({
  selector: 'app-projects-list',
  imports: [ProjectCard, RouterLink],
  templateUrl: './projects-list.html',
  styleUrl: './projects-list.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsList {
  protected readonly projects = PROJECTS;
}
