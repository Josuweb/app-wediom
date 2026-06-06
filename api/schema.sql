-- api/schema.sql — Esquema de base de datos para Wediom English.
-- ──────────────────────────────────────────────────────────────────────────
-- Cómo usar en VenHost (cPanel):
--   1) Crea la base de datos y el usuario en "MySQL Databases".
--   2) Abre "phpMyAdmin", selecciona tu base de datos.
--   3) Pestaña "Importar" → sube este archivo, o pega el SQL en "SQL".
--
-- Las tablas usan utf8mb4 para soportar tildes, ñ y emojis.

CREATE TABLE IF NOT EXISTS users (
  id            INT AUTO_INCREMENT PRIMARY KEY,
  name          VARCHAR(100)        NOT NULL,
  email         VARCHAR(190)        NOT NULL UNIQUE,
  password_hash VARCHAR(255)        NOT NULL,
  role          ENUM('user','admin') NOT NULL DEFAULT 'user',
  progress      LONGTEXT            NULL,
  created_at    TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    TIMESTAMP           NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS sessions (
  token       CHAR(64)   NOT NULL PRIMARY KEY,
  user_id     INT        NOT NULL,
  created_at  TIMESTAMP  NOT NULL DEFAULT CURRENT_TIMESTAMP,
  expires_at  TIMESTAMP  NOT NULL,
  INDEX idx_sessions_user (user_id),
  CONSTRAINT fk_sessions_user FOREIGN KEY (user_id)
    REFERENCES users(id) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Registro de intentos para limitar fuerza bruta (login/registro por IP).
CREATE TABLE IF NOT EXISTS rate_limits (
  id          INT AUTO_INCREMENT PRIMARY KEY,
  rl_key      VARCHAR(190) NOT NULL,
  created_at  TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_rl_key_time (rl_key, created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
