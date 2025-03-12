# express-slowpoke-logger

A lightweight Express.js middleware that tracks API response times and logs slow requests using Winston. It helps identify performance bottlenecks in your application.

### 🚀 Features

- Logs **all request response times**.
- Highlights **slow requests** (default: 500ms threshold).
- Integrates seamlessly with **Winston** for customizable logging.
- Lightweight and easy to use.

### 📦 Installation

Install via npm:

```bash
npm install express-slowpoke-logger
```

## 🔧 Usage

Integrate the middleware into your Express.js app:

```bash
const express = require('express');
const slowpokeLogger = require('express-slowpoke-logger');

const app = express();
const PORT = process.env.PORT || 3000;

// Add the middleware
app.use(slowpokeLogger());

app.get('/', (req, res) => {
  setTimeout(() => {
    res.send('Hello World!');
  }, Math.random() * 1000); // Simulate variable response times
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

## ⚙️ Configuration

You can customize the slow request threshold and logging level:

```bash
app.use(slowpokeLogger({ threshold: 300, level: 'warn' }));
```

| Option | Type | Default |	Description |
| ------ | ---- | ------- | ----------- |
| threshold | Number | 500 | Time in milliseconds to log as slow. |
| level | String | 'info' | Logging level for slow requests. |

## 📜 License

This project is licensed under the MIT License.

## ✨ Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## 🛠️ Author
Ruhul Amin Parvez

- GitHub: [Ruhul Amin Parvez](https://github.com/ruhulaminparvez)
- LinkedIn: [Ruhul Amin Parvez](https://www.linkedin.com/in/ruhulaminparvez)