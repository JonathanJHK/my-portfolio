import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SKILL_GROUPS } from '@core/data/skill-groups.data';

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsSection {
  protected readonly skillGroups = SKILL_GROUPS;
}
