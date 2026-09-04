import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Bars } from '@primeicons/angular/bars';
import { DrawerModule } from 'primeng/drawer';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, DrawerModule, Bars],
  templateUrl: './site-header.html',
  styleUrl: './site-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeader {
  protected readonly mobileMenuVisible = signal(false);

  protected openMobileMenu(): void {
    this.mobileMenuVisible.set(true);
  }

  protected closeMobileMenu(): void {
    this.mobileMenuVisible.set(false);
  }
}
