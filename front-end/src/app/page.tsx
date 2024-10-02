'use client';

import { selectAllByPage, Vaga } from '@/lib/actions';
import {
    faChevronCircleLeft,
    faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

export default function Home() {
    const [currentPage, setCurrentPage] = useState<Vaga[]>([]);
    const [totalPages, setTotalPages] = useState(0);
    const [numPage, setNumPage] = useState(1);

    useEffect(() => {
        const selectAll = async () => {
            const response = await selectAllByPage(numPage - 1, 1);
            setTotalPages(response.page.totalPages);
            setCurrentPage(response.content);
        };

        selectAll();
    }, [numPage]);

    const avancar = () => {
        if (numPage < totalPages) {
            setNumPage((prevState) => prevState + 1);
        }
    };
    const voltar = () => {
        if (numPage > 1) {
            setNumPage((prevState) => prevState - 1);
        }
    };

    return (
        <section>
            <article>
                {currentPage.map((content: Vaga, index: number) => (
                    <div key={index}>
                        <h2>{content.funcao}</h2>
                        <p>{content.nomeEmpresa}</p>
                    </div>
                ))}
            </article>
            <article>
                <FontAwesomeIcon
                    icon={faChevronCircleLeft}
                    onClick={() => voltar()}
                />
                {numPage}
                <FontAwesomeIcon
                    icon={faChevronCircleRight}
                    onClick={() => avancar()}
                />
            </article>
        </section>
    );
}
