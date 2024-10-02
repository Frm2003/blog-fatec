'use client';

import { update, Vaga } from '@/lib/actions';
import formStyle from '@/styles/form.module.css';
import * as inputs from '@/utils/camposDoForm.json';

import FormLayout from './client/formLayout';

interface iProps {
    vaga: Vaga;
    id: string;
}

export default function FormUpdateComponent({ vaga, id }: iProps) {
    const updateVaga = update.bind(null, id);

    const {
        inputFuncao,
        textAreaObjetivo,
        inputNomeEmpresa,
        inputLinkDaVaga,
        selectCursos,
        selectSituaco,
    } = inputs;

    return (
        <form className={formStyle.layout} action={updateVaga}>
            <div style={{ overflow: 'hidden' }}>
                <FormLayout
                    inputs={[
                        textAreaObjetivo,
                        inputFuncao,
                        inputNomeEmpresa,
                        inputLinkDaVaga,
                        selectCursos,
                        selectSituaco,
                    ]}
                    styleField={formStyle.field2}
                    values={vaga}
                />
            </div>
            <button type="submit">Atualizar</button>
        </form>
    );
}
