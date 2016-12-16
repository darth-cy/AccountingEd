import React from 'react'
import StepInChapter from './step_in_chapter'
import StatementItemList from './statement_item_list'

var Chapter = React.createClass({
  getInitialState: () => ({}),
  render: function(){
    var props = this.props;
    var thisView = this;
    var moveUtilities = {
      selectItem: props.selectItem,
      stopMoveProgress: props.stopMoveProgress,
      selectTargetItem: props.selectTargetItem,
      deselectTargetItem: props.deselectTargetItem,
      moveItem: props.moveItem,
    }

    var incomeList = props.currentState.statements.cash_flow_statement.income;
    var expensesList = props.currentState.statements.cash_flow_statement.expenses;
    var assetsList = props.currentState.statements.balance_sheet.assets;
    var liabilitiesList = props.currentState.statements.balance_sheet.liabilities;

    var netIncome = incomeList.reduce((total, item) => { return total + item.amount; }, 0) - expensesList.reduce((total, item) => { return total + item.amount }, 0);
    var equity = assetsList.reduce((total, item) => { return total + item.amount; }, 0) - liabilitiesList.reduce((total, item) => { return total + item.amount }, 0);

    return (
      <div className="row">
        <div className="col-md-4 chapters-list height-align">
          <h3>{props.currentState.title}</h3>
          <div>
            {props.currentState.steps.map((step, idx) => {
              return (
                <StepInChapter itemMoveStates={props.itemMoveStates} key={idx} index={idx + 1} step={step} moveUtilities={moveUtilities}/>
              )
            })}
          </div>
        </div>
        <div className="col-md-8 chapters-detailed height-align">
          <button className="btn btn-default chapter-go-button" onClick={() => {
             props.goBackChapters();
          }}>Back to Chapters</button>
          <span>&nbsp;&nbsp;</span>
          <button className="btn btn-success chapter-check-button">Submit Answer</button>
          <hr/>
          <div className="row statement-holder">
            <h3>Month Cash Flow Statment</h3>
            <div className="col-sm-6">
              <StatementItemList name={'income'} list={incomeList} itemMoveStates={props.itemMoveStates} moveUtilities={moveUtilities}/>
            </div>
            <div className="col-sm-6">
              <StatementItemList name={'expenses'} list={expensesList} itemMoveStates={props.itemMoveStates} moveUtilities={moveUtilities}/>
            </div>
          </div>
          <hr/>
          <div className="row statement-holder">
            <div className="col-sm-6">
              <div className="item-list-active">
              <div className="col-sm-6">Month Net Income: </div>
              <div className="col-sm-6">{netIncome < 0 ? "- $": "$"}{Math.abs(netIncome)}</div>
              </div>
            </div>
          </div>
          <div className="row statement-holder">
            <h3>Month Balance Sheet</h3>
            <div className="col-sm-6">
              <StatementItemList name={'assets'} list={assetsList} itemMoveStates={props.itemMoveStates} moveUtilities={moveUtilities}/>
            </div>
            <div className="col-sm-6">
              <StatementItemList name={'liabilities'} list={liabilitiesList} itemMoveStates={props.itemMoveStates} moveUtilities={moveUtilities}/>
            </div>
          </div>
          <hr/>
          <div className="row statement-holder">
            <div className="col-sm-6">
              <div className="item-list-active">
                <div className="col-sm-6">Month Net Equity: </div>
                <div className="col-sm-6">{equity < 0 ? "- $": "$"}{Math.abs(equity)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  componentDidMount: function(){
    $('.height-align').matchHeight();
  }
});


export default Chapter;
