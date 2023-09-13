# 🍋 Lime

An opinionated Deno Fresh project template that builds on the standard Fresh
project template with a number of additional features.

### ⭐ Features

- 🌎 Out-of-the-box Deno Deploy support
- 🗄️ Deno KV ready
- 🐳 Docker image
- 🔋 Batteries includes for tRPC, Zod & more
- 🚦 Automated Docker image release workflow
- ⚗️ Basic test suite
- 👨‍💻 VSCode launch & task configurations

### 🦄 Usage

Make sure to install Deno: https://deno.land/manual/getting_started/installation

Then start the project:

```
deno task start
```

This will watch the project directory and restart as necessary.

### 🐳 Docker

When a new release is created in GitHub, a new Docker image is automatically
built and pushed to the GitHub package registry.

To run the Docker image:

```
docker run -d -p 8000:8000 ghcr.io/nurodev/lime:latest
```
