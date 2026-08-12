# Retry Backoff

Exponential backoff & retry logic. Resilience for Ferrow agent calls.

```javascript
const retry = new RetryBackoff({ maxAttempts: 3, baseDelay: 100 });
const result = await retry.execute(() => unreliableAPI());
```

## Features
- ✓ Exponential backoff
- ✓ Jitter
- ✓ Deadline handling
- ✓ Ferrow fault tolerance

## License: MIT
