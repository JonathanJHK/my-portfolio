import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '@core/data/projects.data';
import { SeoService } from '@core/services/seo.service';
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

  private readonly seo = inject(SeoService);

  constructor() {
    this.seo.update({
      title: 'Projetos | Jonathan Heidy Kinjo',
      description:
        'Conheça projetos profissionais e técnicos de Jonathan Heidy Kinjo envolvendo Front-end, Back-end, APIs, bancos de dados e experiência do usuário.',
      path: '/projetos/',
    });
  }
}
