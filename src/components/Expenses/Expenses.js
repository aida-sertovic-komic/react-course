import { useState } from "react";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');
    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
        
    }
    const filteredExpenses = props.expenseItems.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
       })
       
       let expenseContent = <p>No expenses found!</p>;
       if(filteredExpenses.length > 0) {
        expenseContent = filteredExpenses.map((expense) => (
            <ExpenseItem key={expense.id} title={expense.title} price={expense.amount} date={expense.date} />
        ))
       }


    return (
        <>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
                {expenseContent}
            </Card>
        </>
    )
}

export default Expenses;