'use server';

import FormUpdateComponent from '@/components/formUpdateComponent';
import { selectById, Vaga } from '@/lib/actions';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { CSSProperties } from 'react';

const btStyle: CSSProperties = {
    background: 'rgba(65, 140, 238, 1)',
    border: 'none',
    borderRadius: '5px',
    color: 'rgba(255, 255, 255, 1)',
    margin: '0.5em 0',
    padding: '0.5em 1.5em',
};

export default async function Home({ params }: { params: { id: string } }) {
    const vaga: Vaga = await selectById(params.id);

    if (vaga.situacao) {
        vaga.situacao = 'ativo';
    } else {
        vaga.situacao = 'inativo';
    }

    return (
        <>
            <Link href={'/form'}>
                <button style={btStyle}>
                    <FontAwesomeIcon icon={faLongArrowAltLeft} size={'2x'} />
                </button>
            </Link>
            <FormUpdateComponent id={params.id} vaga={vaga} />
        </>
    );
}
