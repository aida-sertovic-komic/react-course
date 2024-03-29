import React, { useState } from 'react';
import Wrapper from '../Helpers/Wrapper';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);
    
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const cancelFormHandler = () => {
        setIsEditing(false);
    }


    return (
        <Wrapper className='new-expense'>
           {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
           {isEditing &&  <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelFormHandler}/>}
        </Wrapper>
    )
}

export default NewExpense;