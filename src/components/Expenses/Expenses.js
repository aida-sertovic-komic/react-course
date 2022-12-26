import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

const Expenses = (props) => {
    return (
        <Card className="expenses">
            {props.expenseItems.map(expenseItem => {
                return <ExpenseItem key={expenseItem.id} title={expenseItem.title} price={expenseItem.amount} date={expenseItem.date} />
            })}
        </Card>
    )
}

export default Expenses;