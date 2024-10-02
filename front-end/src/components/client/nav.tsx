import Link from 'next/link';
import navStyle from '@/styles/nav.module.css';

export default function Nav() {
    return (
        <nav className={navStyle.layout}>
            <ul>
                <li>
                    <Link href={'/'}>Mural de Vagas</Link>
                </li>
                <li>
                    <Link href={'/form'}>Registrar Vagas</Link>
                </li>
            </ul>
        </nav>
    );
}
