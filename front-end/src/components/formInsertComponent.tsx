import * as inputs from '@/utils/camposDoForm.json';
import formStyle from '@/styles/form.module.css';
import { insert } from '@/lib/actions';
import FormLayout from '@/components/client/formLayout';

export default function FormInsertComponent() {
    const {
        inputFuncao,
        textAreaObjetivo,
        inputNomeEmpresa,
        inputLinkDaVaga,
        selectCursos,
        hiddenSituacao,
    } = inputs;

    return (
        <form action={insert} className={formStyle.layout}>
            <FormLayout
                inputs={[
                    inputFuncao,
                    textAreaObjetivo,
                    inputNomeEmpresa,
                    inputLinkDaVaga,
                    selectCursos,
                    hiddenSituacao,
                ]}
                styleField={formStyle.field1}
                subTitulo={'Formulário para criação de vagas'}
                titulo={'Criar vaga'}
            />
            <button type="submit">Inserir</button>
        </form>
    );
}
