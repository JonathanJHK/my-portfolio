import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROJECTS } from '@core/data/projects.data';
import { ProjectImage } from '@core/models/project.model';
import { ChevronLeft } from '@primeicons/angular/chevron-left';
import { ChevronRight } from '@primeicons/angular/chevron-right';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, DialogModule, ChevronLeft, ChevronRight],
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
