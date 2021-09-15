import errorStyles from '../../styles/ErrorAlert.module.css';

const ErrorAlert = ({children}) => {
    return <div className={errorStyles.alert}>{children}</div>;
}

export default ErrorAlert;
