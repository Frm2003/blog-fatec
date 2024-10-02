'use server';

import { revalidateTag } from 'next/cache';

enum Curso {
    ANALISE_E_DESENVOLVIMENTO_DE_SISTEMAS = 'ANALISE_E_DESENVOLVIMENTO_DE_SISTEMAS',
    AMS_ANALISE_E_DESENVOLVIMENTO_DE_SISTEMAS = 'AMS_ANALISE_E_DESENVOLVIMENTO_DE_SISTEMAS',
    DESENVOLVIMENTO_DE_SOFTWARE = 'DESENVOLVIMENTO_DE_SOFTWARE',
    COMERCIO_EXTERIOR = 'COMERCIO_EXTERIOR',
    DESENVOLVIMENTO_DE_PRODUTOS_PLASTICOS = 'DESENVOLVIMENTO_DE_PRODUTOS_PLASTICOS',
    GESTAO_EMPRESARIAL = 'GESTAO_EMPRESARIAL',
    GESTAO_DE_RECURSOS_HUMANOS = 'GESTAO_DE_RECURSOS_HUMANOS',
    LOGISTICA = 'LOGISTICA',
    POLIMEROS = 'POLIMEROS',
}

export interface Vaga {
    id?: string;
    objetivo: string;
    nomeEmpresa?: string;
    linkDaVaga: string;
    area: Curso;
    situacao: boolean | string;
    funcao: string;
}

export const selectList = async (): Promise<any> => {
    try {
        const response = await fetch('http://localhost:8080/vagas/list', {
            next: { tags: ['get-all-vagas'] },
        });

        return response.json();
    } catch (error) {
        console.log(error);
    }
};

export const selectAllByPage = async (
    page: number,
    tamanho: number
): Promise<any> => {
    try {
        const response = await fetch(
            `http://localhost:8080/vagas?page=${page}&tamanho=${tamanho}`
        );

        return response.json();
    } catch (error) {
        console.log(error);
    }
};

export const selectById = async (id: string) => {
    try {
        const response = await fetch(`http://localhost:8080/vagas/${id}`, {
            next: { tags: ['get-vagas-by-id'] },
        });
        revalidateTag('get-all-vagas');
        return response.json();
    } catch (error) {
        console.log(error);
    }
};

export const insert = async (e: FormData) => {
    const jsonData = JSON.stringify(Object.fromEntries(e));

    try {
        const response = await fetch('http://localhost:8080/vagas', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: jsonData,
        });

        console.log(response.json);
        revalidateTag('get-all-vagas');
    } catch (error) {
        console.log(error);
    }
};

export const update = async (id: string, e: FormData) => {
    const jsonData = JSON.stringify(Object.fromEntries(e));
    try {
        const response = await fetch(`http://localhost:8080/vagas/${id}`, {
            headers: { 'Content-Type': 'application/json' },
            method: 'PUT',
            body: jsonData,
        });

        console.log(response);
        revalidateTag('get-vagas-by-id');
        revalidateTag('get-all-vagas');
    } catch (error) {
        console.log(error);
    }
};

export const deleteById = async (id: string) => {
    try {
        const response = await fetch(`http://localhost:8080/vagas/${id}`, {
            method: 'DELETE',
        });

        console.log(response);
        revalidateTag('get-all-vagas');
    } catch (error) {
        console.log(error);
    }
};
