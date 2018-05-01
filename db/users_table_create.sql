CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(180),
    email VARCHAR(180),
    img TEXT,
    auth_id TEXT
)
