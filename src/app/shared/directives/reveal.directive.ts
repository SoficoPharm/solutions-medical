import { Directive, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';

/**
 * Lightweight scroll-reveal directive.
 * Adds `.is-visible` to the host once it enters the viewport,
 * working together with the `[data-reveal]` styles in styles.scss.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
  host: { '[attr.data-reveal]': "''" },
})
export class RevealDirective implements OnInit, OnDestroy {
  private readonly el = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    if (typeof IntersectionObserver === 'undefined') {
      this.el.nativeElement.classList.add('is-visible');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.el.nativeElement.classList.add('is-visible');
            this.observer?.unobserve(this.el.nativeElement);
          }
        }
      },
      { threshold: 0.15 }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
