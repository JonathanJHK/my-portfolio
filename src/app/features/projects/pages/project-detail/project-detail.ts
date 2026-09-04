import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '@core/data/projects.data';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetail {
  // Recebe o parâmetro de rota 'slug' como obrigatório.
  // Isso permite identificar qual projeto está sendo exibido na página.
  readonly slug = input.required<string>();

  // Busca o projeto correspondente ao slug informado na lista global de projetos.
  // O resultado é um valor computado, que reage automaticamente a mudanças no slug.
  protected readonly project = computed(() =>
    PROJECTS.find((project) => project.slug === this.slug()),
  );
}
