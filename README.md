# Retry Backoff

Exponential backoff with jitter for retrying async operations.

```javascript
const retry = new RetryBackoff({ maxAttempts: 3, baseDelay: 100 });
const result = await retry.execute(() => unreliableAPI());
```

## Features
- Exponential backoff
- Jitter

## License: MIT

Sponsored by [Ferrow](https://ferrow.ai)
