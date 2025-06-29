export class Lenis {
  private element: HTMLElement | Window;
  private animationId: number | null = null;
  private isRunning = false;

  constructor(element?: HTMLElement) {
    this.element = element || window;
    this.init();
  }

  private init() {
    // Simple smooth scrolling implementation
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
  }

  raf(time: number) {
    if (!this.isRunning) return;
    this.animationId = requestAnimationFrame(this.raf.bind(this));
  }

  start() {
    this.isRunning = true;
    this.animationId = requestAnimationFrame(this.raf.bind(this));
  }

  stop() {
    this.isRunning = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  destroy() {
    this.stop();
    if (typeof window !== 'undefined') {
      document.documentElement.style.scrollBehavior = 'auto';
    }
  }
}