import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
    const clickHandler = () => {
        console.log('Test');
    }
    
    return (
        <div className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.price}</div>
                <button onClick={clickHandler}>Change Title</button>
            </div>
        </div>
    )
}

export default ExpenseItem;