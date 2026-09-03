import { ChangeDetectionStrategy, Component } from '@angular/core';

interface CareerHighlight {
  value: string;
  label: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly careerHighlights: readonly CareerHighlight[] = [
    {
      value: 'Desde 2019',
      label: 'Experiência prática com produtos digitais',
    },
    {
      value: 'Visão completa',
      label: 'Interfaces, APIs, bancos de dados e BI',
    },
    {
      value: 'Vários setores',
      label: 'Saúde, meio ambiente, gestão e delivery',
    },
  ];
}
