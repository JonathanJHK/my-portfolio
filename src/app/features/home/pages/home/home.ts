import { ChangeDetectionStrategy, Component } from '@angular/core';
import { About } from '@features/home/components/about/about';
import { ContactSection } from '@features/home/components/contact-section/contact-section';
import { ExperienceSection } from '@features/home/components/experience-section/experience-section';
import { Hero } from '@features/home/components/hero/hero';
import { ProjectsSection } from '@features/home/components/projects-section/projects-section';
import { SkillsSection } from '@features/home/components/skills-section/skills-section';

@Component({
  selector: 'app-home',
  imports: [Hero, About, ProjectsSection, ExperienceSection, SkillsSection, ContactSection],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
