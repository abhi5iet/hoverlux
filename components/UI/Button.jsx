import Link from 'next/link';
import btnStyles from '../../styles/Button.module.css';

const Button = ({children, link}) => {
    return (
        <Link href={link}>
            <a className={btnStyles.btn}>{children}</a>
        </Link>
    )
}

export default Button
