import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    return (
        <div className="expenses">
            {props.expenseItems.map(expenseItem => {
                return <>
                    <ExpenseItem title={expenseItem.title} price={expenseItem.amount} date={expenseItem.date} />
                </>
            })}
        </div>
    )
}

export default Expenses;