import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

export interface SeoConfig {
  title: string;
  description: string;
  path: string;
  image?: string;
  robots?: string;
}

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);
  private readonly document = inject(DOCUMENT);

  private readonly siteUrl = 'https://jonathan-kinjo.pages.dev';
  private readonly defaultImage = '/images/og/portfolio-og.jpg';

  update(config: SeoConfig): void {
    const canonicalUrl = new URL(config.path, `${this.siteUrl}/`).href;

    const imageUrl = new URL(config.image ?? this.defaultImage, `${this.siteUrl}/`).href;

    this.titleService.setTitle(config.title);

    this.metaService.updateTag({
      name: 'description',
      content: config.description,
    });

    // Open Graph
    this.metaService.updateTag({
      property: 'og:type',
      content: 'website',
    });

    this.metaService.updateTag({
      property: 'og:locale',
      content: 'pt_BR',
    });

    this.metaService.updateTag({
      property: 'og:site_name',
      content: 'Portfólio de Jonathan Heidy Kinjo',
    });

    this.metaService.updateTag({
      property: 'og:title',
      content: config.title,
    });

    this.metaService.updateTag({
      property: 'og:description',
      content: config.description,
    });

    this.metaService.updateTag({
      property: 'og:url',
      content: canonicalUrl,
    });

    this.metaService.updateTag({
      property: 'og:image',
      content: imageUrl,
    });

    this.metaService.updateTag({
      property: 'og:image:width',
      content: '1199',
    });

    this.metaService.updateTag({
      property: 'og:image:height',
      content: '675',
    });

    this.metaService.updateTag({
      property: 'og:image:alt',
      content: 'Portfólio de Jonathan Heidy Kinjo',
    });

    // Twitter / X
    this.metaService.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image',
    });

    this.metaService.updateTag({
      name: 'twitter:title',
      content: config.title,
    });

    this.metaService.updateTag({
      name: 'twitter:description',
      content: config.description,
    });

    this.metaService.updateTag({
      name: 'twitter:image',
      content: imageUrl,
    });

    if (config.robots) {
      this.metaService.updateTag({
        name: 'robots',
        content: config.robots,
      });
    }

    this.updateCanonical(canonicalUrl);
  }

  private updateCanonical(url: string): void {
    let canonical = this.document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!canonical) {
      canonical = this.document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      this.document.head.appendChild(canonical);
    }

    canonical.setAttribute('href', url);
  }
}
