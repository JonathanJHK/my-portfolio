import { ChangeDetectionStrategy, Component } from '@angular/core';
import { About } from '@features/home/components/about/about';
import { Hero } from '@features/home/components/hero/hero';
import { ProjectsSection } from '@features/home/components/projects-section/projects-section';

@Component({
  selector: 'app-home',
  imports: [Hero, About, ProjectsSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
