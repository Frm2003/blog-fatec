'use server';

import { selectList, Vaga } from '@/lib/actions';
import listStyle from '@/styles/list.module.css';

import Buttons from '../client/buttons';

export default async function ListComponent() {
    const response = await selectList();

    return (
        <>
            {response &&
                response.map((vaga: Vaga, index: number) => (
                    <div className={listStyle.item} key={index}>
                        <div>
                            <h3>{vaga.nomeEmpresa}</h3>
                            <p>{vaga.area}</p>
                            <p>
                                status:{' '}
                                {vaga.situacao == true ? 'ativa' : 'inativa'}
                            </p>
                        </div>
                        {vaga.id && <Buttons id={vaga.id} />}
                    </div>
                ))}
        </>
    );
}
