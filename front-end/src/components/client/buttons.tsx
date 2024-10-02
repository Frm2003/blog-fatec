'use client';

import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import btnStyles from '@/styles/button.module.css';
import { deleteById } from '@/lib/actions';
import { useRouter } from 'next/navigation';

interface iProps {
    id: string;
}

export default function Buttons({ id }: iProps) {
    const router = useRouter();

    return (
        <>
            <div className={btnStyles.layout}>
                <button onClick={() => router.push(`/form/${id}`)}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </button>
                <button onClick={() => deleteById(id)}>
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        </>
    );
}
