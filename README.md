# Retry Backoff
![CI](https://github.com/FerrowAI/retry-backoff/actions/workflows/ci.yml/badge.svg)

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

---
Part of the [ferrow-toolkit](https://github.com/FerrowAI/ferrow-toolkit) collection · Sponsored by [Ferrow](https://ferrow.ai)
