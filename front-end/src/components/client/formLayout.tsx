/* eslint-disable prettier/prettier */
import { Vaga } from '@/lib/actions';

import { Select, option } from './tagSelect';

interface iCampos {
    name: string;
    label?: string;
    listOptions?: option[];
    tag: string;
    type?: string;
    value?: string;
}

interface iProps {
    inputs: iCampos[];
    titulo?: string;
    subTitulo?: string;
    values?: Vaga;
    styleField: string;
}

type VagaKeys = keyof Vaga;

export default function FormLayout({
    titulo,
    subTitulo,
    inputs,
    styleField,
    values,
}: iProps) {
    return (
        <>
            {titulo && <h2>{titulo}</h2>}
            {subTitulo && <p>{subTitulo}</p>}
            {inputs.map((element: iCampos, index: number) => (
                <div className={styleField} key={index}>
                    {'label' in element && <label>{element.label}</label>}

                    {element.tag === 'hidden' && (
                        <input
                            type="hidden"
                            name={element.name}
                            defaultValue={element.value}
                        />
                    )}

                    {element.tag === 'textarea' && (
                        <textarea
                            name={element.name}
                            defaultValue={
                                values
                                    ? (values[
                                          element.name as VagaKeys
                                      ] as string)
                                    : ''
                            }
                        />
                    )}

                    {element.tag === 'input' && (
                        <input
                            type={element.type}
                            name={element.name}
                            defaultValue={
                                values
                                    ? (values[
                                          element.name as VagaKeys
                                      ] as string)
                                    : ''
                            }
                        />
                    )}

                    {element.tag === 'select' && element.listOptions && (
                        <Select
                            name={element.name}
                            value={
                                values
                                    ? (values[
                                          element.name as VagaKeys
                                      ] as string)
                                    : ''
                            }
                            options={element.listOptions}
                        />
                    )}
                </div>
            ))}
        </>
    );
}
