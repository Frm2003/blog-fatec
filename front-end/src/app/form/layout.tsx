import FormInsertComponent from '@/components/formInsertComponent';
import layout from '@/styles/crudLayout.module.css';
import { ReactNode } from 'react';

export default function CrudLayout({ children }: { children: ReactNode }) {
    return (
        <section className={layout.sec}>
            <article className={layout.col}>
                <div className={layout.body}>
                    <FormInsertComponent />
                </div>
            </article>

            <article className={layout.col}>
                <div className={layout.body}>{children}</div>
            </article>
        </section>
    );
}
