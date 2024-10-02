CREATE TABLE vaga_table (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    objetivo VARCHAR NOT NULL,
    nome_empresa VARCHAR,
    link_da_vaga VARCHAR NOT NULL,
    area_curso VARCHAR NOT NULL,
    situacao BOOLEAN NOT NULL
);

CREATE TABLE user_table (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR NOT NULL,
    create_on TIMESTAMP NOT NULL,
    updated_on TIMESTAMP NOT NULL,
    role VARCHAR(10) NOT NULL
);