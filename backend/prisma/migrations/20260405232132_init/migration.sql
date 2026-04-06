-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "role" VARCHAR(5) NOT NULL DEFAULT 'user',
    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User" ("email");

-- Вставка тестовых записей
INSERT INTO
    "User" (email, password, role)
VALUES (
        'admin@example.com',
        '$2a$12$cKvBkblkK5FcQZe56ror7OJNT6dHBSlqRKfK9gvqvun2g4S8HazIO',
        'admin'
    ),
    (
        'user@example.com',
        '$2a$12$3Bt2./R.D0rYj8NaNniNfukbiAVrq1fSiOD061Wbqh8pDYh9x3s4G',
        'user'
    );