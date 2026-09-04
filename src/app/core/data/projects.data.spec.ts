import { PROJECTS } from './projects.data';

describe('PROJECTS', () => {
  it('should contain published projects', () => {
    expect(PROJECTS.length).toBeGreaterThan(0);
  });

  it('should have unique slugs', () => {
    const slugs = PROJECTS.map((project) => project.slug);
    const uniqueSlugs = new Set(slugs);

    expect(uniqueSlugs.size).toBe(slugs.length);
  });

  it('should have the required information', () => {
    for (const project of PROJECTS) {
      expect(project.title.trim()).not.toBe('');
      expect(project.summary.trim()).not.toBe('');
      expect(project.slug).toMatch(/^[a-z0-9-]+$/);
      expect(project.technologies.length).toBeGreaterThan(0);
      expect(project.cover.src).toContain('images/projects/');
    }
  });

  it('should not expose internal project names', () => {
    const publishedContent = JSON.stringify(PROJECTS).toLowerCase();

    expect(publishedContent).not.toContain('fastfisio');
    expect(publishedContent).not.toContain('reflore');
  });
});
