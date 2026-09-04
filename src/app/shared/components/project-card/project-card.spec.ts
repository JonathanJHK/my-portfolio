import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { PROJECTS } from '../../../core/data/projects.data';
import { ProjectCard } from './project-card';

describe('ProjectCard', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCard],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should render the project information', () => {
    const project = PROJECTS[0]!;
    const fixture = TestBed.createComponent(ProjectCard);

    fixture.componentRef.setInput('project', project);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('h3')?.textContent).toContain(project.title);

    expect(element.textContent).toContain(project.summary);
  });

  it('should generate the project details link', () => {
    const project = PROJECTS[0]!;
    const fixture = TestBed.createComponent(ProjectCard);

    fixture.componentRef.setInput('project', project);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const link = element.querySelector('a[aria-label^="Ver detalhes"]');

    expect(link?.getAttribute('href')).toBe(`/projetos/${project.slug}`);
  });
});
