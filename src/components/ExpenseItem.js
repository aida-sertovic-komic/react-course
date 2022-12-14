import './ExpenseItem.css';

function ExpenseItem(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' })
    return (
        <><div>{month}</div><div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
        </div></>
    )
}

export default ExpenseItem;