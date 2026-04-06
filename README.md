# Fullstack Test Project

Это полноценный fullstack проект, включающий backend на NestJS и frontend на Nuxt.js. Проект использует PostgreSQL в качестве базы данных и Docker для контейнеризации.

## Структура проекта

```
fullstack-test/
├── backend/          # Backend на NestJS
├── frontend/         # Frontend на Nuxt.js
├── docker-compose.yml # Конфигурация Docker
└── README.md         # Этот файл
```

## Требования

- Docker и Docker Compose
- Node.js (если запускаете без Docker)

## Установка и запуск

### С Docker (рекомендуется)

```bash
git clone https://github.com/Nevermind192/fullstack-test
cd fullstack-test
docker-compose up --build
```

### Без Docker

#### Backend

1. Перейдите в директорию `backend`:

   ```bash
   cd backend
   ```

2. Установите зависимости:

   ```bash
   npm install
   ```

3. Создайте `.env` файл на основе `.env.example` и настройте переменные окружения.

4. Запустите проект:

   ```bash
   npm run dev
   ```

#### Frontend

1. Перейдите в директорию `frontend`:

   ```bash
   cd frontend
   ```

2. Установите зависимости:

   ```bash
   npm install
   ```

3. Запустите проект:

   ```bash
   npm run dev
   ```

## Docker

Проект поддерживает Docker и Docker Compose для простого развертывания. Все сервисы (PostgreSQL, backend, frontend) запускаются в отдельных контейнерах.

## Лицензия

Проект распространяется под лицензией MIT License.
