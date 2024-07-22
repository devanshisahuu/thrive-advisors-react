import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import IndustriesOverview from './views/industries-overview'
import Retail from './views/retail'
import BookkeepingPayrollAndBPO from './views/bookkeeping-payroll-and-bpo'
import Taxation from './views/taxation'
import About from './views/about'
import CapitalMarkets from './views/capital-markets'
import FinancialPlanning from './views/financial-planning'
import PrivacyPolicy from './views/privacy-policy'
import Home from './views/home'
import ServicesOverview from './views/services-overview'
import FinancialAccounting from './views/financial-accounting'
import FinanceServices from './views/finance-services'
import OilAndGas from './views/oil-and-gas'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          component={IndustriesOverview}
          exact
          path="/industries-overview"
        />
        <Route component={Retail} exact path="/retail" />
        <Route
          component={BookkeepingPayrollAndBPO}
          exact
          path="/bookkeeping-payroll-and-bpo"
        />
        <Route component={Taxation} exact path="/taxation" />
        <Route component={About} exact path="/about" />
        <Route component={CapitalMarkets} exact path="/capital-markets" />
        <Route component={FinancialPlanning} exact path="/financial-planning" />
        <Route component={PrivacyPolicy} exact path="/privacy-policy" />
        <Route component={Home} exact path="/" />
        <Route component={ServicesOverview} exact path="/services-overview" />
        <Route
          component={FinancialAccounting}
          exact
          path="/financial-accounting"
        />
        <Route component={FinanceServices} exact path="/finance-services" />
        <Route component={OilAndGas} exact path="/oil-and-gas" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
