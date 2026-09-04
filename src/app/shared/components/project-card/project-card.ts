import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioProject } from '../../../core/models/project.model';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink, NgOptimizedImage],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCard {
  readonly project = input.required<PortfolioProject>();
}
