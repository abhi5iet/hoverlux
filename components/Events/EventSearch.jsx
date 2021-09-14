import React from 'react';
import Button from '../UI/Button';
import evSearchStyles from '../../styles/EventSearch.module.css';

const EventSearch = () => {
    return (
        <form className={evSearchStyles.form}>
            <div className={evSearchStyles.controls}>
                <div className={evSearchStyles.control}>
                    <label htmlFor="year">YEAR</label>
                    <select name="year" id="year">
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                    </select>
                </div>
                <div className={evSearchStyles.control}>
                    <label htmlFor="month">Month</label>
                    <select name="month" id="month">
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                </div>
            </div>
            <Button>SEARCH</Button>
        </form>
    )
}

export default EventSearch
