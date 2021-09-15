import Button from '../ui/button';
import resStyles from '../../styles/ResultTitle.module.css';

const ResultTitle = ({ date }) => {
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
    });

    return (
        <section className={resStyles.title}>
            <h1>Events in {humanReadableDate}</h1>
            <Button link='/events'>Show all events</Button>
        </section>
    );
}

export default ResultTitle;