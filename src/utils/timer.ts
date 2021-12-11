'use strict';

class Timer {
  private start: number;
  private timerId: number;
  private remaining: number;
  private callback: () => void;

  constructor(callback: () => void, delay: number) {
    this.start = delay;
    this.remaining = delay;
    this.callback = callback;
    this.timerId = Math.random() + Date.now() + delay;
    this.resume();
  }

  public pause(): void {
    window.clearTimeout(this.timerId);
    this.remaining -= Date.now() - this.start;
  }

  public resume(): void {
    this.start = Date.now();
    window.clearTimeout(this.timerId);
    this.timerId = window.setTimeout(this.callback, this.remaining);
  }
}

export default Timer;
