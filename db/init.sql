-- CREATE DATABASE IF NOT EXIST
SELECT 'CREATE DATABASE db_trakdev'
WHERE NOT EXIST (SELECT FROM pg_database WHERE datname = 'db_trakdev')\gexec