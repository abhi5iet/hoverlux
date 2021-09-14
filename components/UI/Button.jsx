import Link from 'next/link';
import btnStyles from '../../styles/Button.module.css';

const Button = ({children, link, onClick}) => {
    if(link){
        return (
            <Link href={link}>
                <a className={btnStyles.btn}>{children}</a>
            </Link>
        )
    }
    return (
        <button className={btnStyles.btn} onClick={onClick} >
            {children}
        </button>
    )
}

export default Button
