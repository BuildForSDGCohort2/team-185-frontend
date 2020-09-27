import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Badge, Row, Col } from 'reactstrap'
import AppNavBar from './components/AppNavBar.js';
import Expense from './components/Expense.js';
import Footer from './components/Footer.js'
import Income from './components/Income'
import Menu from './components/Menu';
import ExpenseItemModal from './components/ExpenseItemModal';
import IncomeItemModal from './components/IncomeItemModal';
import './App.css';
import ExpenseSummary from './components/ExpenseSummary';
import IncomeSummary from './components/IncomeSummary.js';
import Visualization from './components/Visualization'
import {Provider} from 'react-redux';
import store from './store';



function App() {



  return (
    <Provider store={store}>
      <AppNavBar />
      <Container>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="2"><ExpenseItemModal /></Col>
            <Col xs lg="2"><IncomeItemModal /></Col>
            <Col xs lg="2" ><h2 style={{ marginBottom: '2rem' , marginTop: '2rem' }}><Badge color="white">{'BAL : $$$'}</Badge></h2></Col>
          </Row>
        </Container>
        <Expense />
        <ExpenseSummary />
        <Income />
        <IncomeSummary />
        <Footer />  
      </Container>
   
    </Provider>
  );
}

export default App;
