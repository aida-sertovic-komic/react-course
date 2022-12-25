import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    return (
        <>
            {props.expenseItems.map(expenseItem => {
                return <>
                    <ExpenseItem title={expenseItem.title} price={expenseItem.amount} date={expenseItem.date} />
                </>
            })}
        </>
    )
}

export default Expenses;