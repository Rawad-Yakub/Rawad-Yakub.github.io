/*==================================================
src/App.js

This is the top-level component of the app.
It contains the top-level state.
==================================================*/
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import axios from 'axios';

// Import other components
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';

class App extends Component {
  constructor() {  // Create and initialize state
    super();
    this.state = {
      debitID : 1,
      creditID : 1,
      accountBalance: 3000,
      totalCredits : 0,
      totalDebits : 0,
      creditList: [],
      debitList: [],
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99',
      }
    };
  }

  // Update state's currentUser (userName) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {
    const newUser = {...this.state.currentUser};
    newUser.userName = logInInfo.userName;
    this.setState({currentUser: newUser})
  }

  async componentDidMount(){
    let linkToDebitAPI = "https://johnnylaicode.github.io/api/debits.json"
    let linkToCreditAPI ="https://johnnylaicode.github.io/api/credits.json"


    try{
      let response = await axios.get(linkToDebitAPI);
      for(var key in response.data){
        if(response.data.hasOwnProperty(key)) {
          let newEntry = {"id": this.state.debitID, "description" : response.data[key].description, "amount" : response.data[key].amount, "date": response.data[key].date};
          this.state.debitList.push(newEntry);
          this.setState({totalDebits: this.state.totalDebits + response.data[key].amount})
          this.setState({debitID: this.state.debitID + 1});
        }
      }
    }
    catch(error){
      if (error.response){
        console.log(error.response.data);
        console.log(error.response.status);
      }
    }

    try{
      let response = await axios.get(linkToCreditAPI)
      for(var key in response.data){
        if(response.data.hasOwnProperty(key)) {
          let newEntry = {"id": this.state.creditID, "description" : response.data[key].description, "amount" : response.data[key].amount, "date": response.data[key].date};
          this.state.creditList.push(newEntry);
          this.setState({totalCredits: this.state.totalCredits + response.data[key].amount})
          this.setState({creditID: this.state.creditID + 1});
        }
      }
    }
    catch(error){
      if (error.response){
        console.log(error.response.data);
        console.log(error.response.status);
      }
    }
  }

  //Update state's debitList after "Add Debit" button is clicked
  addDebit = (event) => {
    event.preventDefault();
    const date = new Date().toJSON().slice(0, 10);
    const debitAmount = parseInt(event.target.elements.amount.value);
    const newDebit = {
      id: this.state.debitID,
      description: event.target.elements.description.value,
      amount: debitAmount,
      date: date,
    };
    const updatedDebitList = [...this.state.debitList, newDebit];
    const updatedTotalDebits = this.state.totalDebits + debitAmount;
    const updatedAccountBalance = this.state.accountBalance - debitAmount;

    // Update state with new debit and updated account balance
    this.setState({
      debitList: updatedDebitList,
      totalDebits: updatedTotalDebits,
      accountBalance: updatedAccountBalance,
      debitID: this.state.debitID + 1,
    });
  }

  addCredit = (event) => {
    event.preventDefault();
    const date = new Date().toJSON().slice(0, 10);
    const creditAmount = parseInt(event.target.elements.amount.value);
    const newCredit = {
      id: this.state.creditID,
      description: event.target.elements.description.value,
      amount: creditAmount,
      date: date,
    };
    const updatedCreditList = [...this.state.creditList, newCredit];
    const updatedTotalCredits = this.state.totalCredits + creditAmount;
    const updatedAccountBalance = this.state.accountBalance + creditAmount;

    // Update state with new credit and updated account balance
    this.setState({
      creditList: updatedCreditList,
      totalCredits: updatedTotalCredits,
      accountBalance: updatedAccountBalance,
      creditID: this.state.creditID + 1,
    });
  }


  // Create Routes and React elements to be rendered using React components
  render() {
    // Create React elements and pass input props to components
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />)
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    )
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const CreditsComponent = () => (
      <Credits credits={this.state.creditList} accountBalance={this.state.accountBalance} addCredit={this.addCredit} />
    )
    const DebitsComponent = () => (
      <Debits debits={this.state.debitList} accountBalance={this.state.accountBalance} addDebit={this.addDebit} />
    )
  
    // Include the "basename" in Router for deploying the React app to GitHub Pages
    return (
      <Router basename="/my-react-app">
        <div>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/credits" render={CreditsComponent}/>
          <Route exact path="/debits" render={DebitsComponent}/>
        </div>
      </Router>
    );
  }
}

export default App;
