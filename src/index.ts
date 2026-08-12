export class RetryBackoff {
  private maxAttempts: number;
  private baseDelay: number;
  
  constructor(options: { maxAttempts: number; baseDelay: number }) {
    this.maxAttempts = options.maxAttempts;
    this.baseDelay = options.baseDelay;
  }
  
  async execute<T>(fn: () => Promise<T>): Promise<T> {
    for (let i = 0; i < this.maxAttempts; i++) {
      try { return await fn(); }
      catch (e) {
        if (i === this.maxAttempts - 1) throw e;
        const delay = this.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        await new Promise(r => setTimeout(r, delay));
      }
    }
    throw new Error('Max retries exceeded');
  }
}
