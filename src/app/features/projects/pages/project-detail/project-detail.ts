import { NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  input,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '@core/data/projects.data';
import { ProjectImage } from '@core/models/project.model';
import { SeoService } from '@core/services/seo.service';
import { ChevronLeft } from '@primeicons/angular/chevron-left';
import { ChevronRight } from '@primeicons/angular/chevron-right';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-project-detail',
  imports: [
    RouterLink,
    DialogModule,
    NgOptimizedImage,
    ChevronLeft,
    ChevronRight,
    AnimateOnScrollModule,
  ],
  templateUrl: './project-detail.html',
  styleUrl: './project-detail.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetail {
  // Recebe o parâmetro de rota 'slug' como obrigatório.
  // Isso permite identificar qual projeto está sendo exibido na página.
  readonly slug = input.required<string>();
  protected readonly selectedImage = signal<ProjectImage | null>(null);
  protected readonly selectedGalleryImage = signal<ProjectImage | null>(null);

  private readonly seo = inject(SeoService);

  // Busca o projeto correspondente ao slug informado na lista global de projetos.
  // O resultado é um valor computado, que reage automaticamente a mudanças no slug.
  protected readonly project = computed(() =>
    PROJECTS.find((project) => project.slug === this.slug()),
  );

  protected readonly currentGalleryImage = computed(() => {
    const gallery = this.project()?.gallery;

    if (!gallery?.length) {
      return null;
    }

    const selectedImage = this.selectedGalleryImage();

    return gallery.find((image) => image.src === selectedImage?.src) ?? gallery[0];
  });

  protected readonly selectedImageIndex = computed(() => {
    const gallery = this.project()?.gallery;
    const selectedImage = this.selectedImage();

    if (!gallery || !selectedImage) {
      return -1;
    }

    return gallery.findIndex((image) => image.src === selectedImage.src);
  });

  protected readonly currentProjectIndex = computed(() =>
    PROJECTS.findIndex((project) => project.slug === this.slug()),
  );

  protected readonly previousProject = computed(() => {
    const index = this.currentProjectIndex();

    if (index <= 0) {
      return null;
    }

    return PROJECTS[index - 1] ?? null;
  });

  protected readonly nextProject = computed(() => {
    const index = this.currentProjectIndex();

    if (index < 0 || index >= PROJECTS.length - 1) {
      return null;
    }

    return PROJECTS[index + 1] ?? null;
  });

  constructor() {
    effect(() => {
      const project = this.project();

      const title = project
        ? `${project.title} | Jonathan Heidy Kinjo`
        : 'Projeto não encontrado | Jonathan Heidy Kinjo';

      const description = project
        ? project.summary
        : 'O projeto solicitado não foi encontrado no portfólio de Jonathan Heidy Kinjo.';

      this.seo.update({
        title,
        description,
        path: project ? `/projetos/${project.slug}/` : '/projetos/',
      });
    });
  }

  protected selectGalleryImage(image: ProjectImage): void {
    this.selectedGalleryImage.set(image);
  }

  protected openImage(image: ProjectImage): void {
    this.selectedGalleryImage.set(image);
    this.selectedImage.set(image);
  }

  protected onDialogVisibilityChange(visible: boolean): void {
    if (!visible) {
      this.selectedImage.set(null);
    }
  }

  protected showPreviousImage(): void {
    this.changeDialogImage(-1);
  }

  protected showNextImage(): void {
    this.changeDialogImage(1);
  }

  private changeDialogImage(direction: number): void {
    const gallery = this.project()?.gallery;
    const selectedImage = this.selectedImage();

    if (!gallery?.length || !selectedImage) {
      return;
    }

    const currentIndex = gallery.findIndex((image) => image.src === selectedImage.src);

    if (currentIndex === -1) {
      return;
    }

    const nextIndex = (currentIndex + direction + gallery.length) % gallery.length;

    const nextImage = gallery[nextIndex];

    if (!nextImage) {
      return;
    }

    this.selectedImage.set(nextImage);
    this.selectedGalleryImage.set(nextImage);
  }
}
