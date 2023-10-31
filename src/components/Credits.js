/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import React from 'react';
import { Link } from 'react-router-dom';
import AccountBalance from './AccountBalance';

const Credits = (props) => {
  // Create the list of Credit items
  let creditsView = () => {
    const { credits } = props;
    return credits.map((credit) => {
      let date = credit.date.slice(0, 10);
      // Use a combination of id and date as the key to ensure uniqueness
      return <li key={`${credit.id}-${date}`}>{credit.amount} {credit.description} {date}</li>;
    });
  };

  // Render the list of Credit items and a form to input new Credit item
  return (
    <div>
      <h1>Credits</h1>
      {creditsView()}

      <form onSubmit={(event) => {
        event.preventDefault();
        props.addCredit(event); // Call the addCredit function from props
      }}>
        <input type="text" name="description" />
        <input type="number" name="amount" />
        <button type="submit">Add Credit</button>
      </form>
      <br/>
      <AccountBalance accountBalance={props.accountBalance} />
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Credits;
