import React from 'react'
import StepInChapter from './step_in_chapter'
import StatementItemList from './statement_item_list'
import ChapterNotification from './chapter_notification'

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
    var deletedList = props.currentState.statements.deleted;

    var netIncome = incomeList.reduce((total, item) => { return total + item.amount; }, 0) - expensesList.reduce((total, item) => { return total + item.amount }, 0);
    var equity = assetsList.reduce((total, item) => { return total + item.amount; }, 0) - liabilitiesList.reduce((total, item) => { return total + item.amount }, 0);
    var monthEndEquity = equity + netIncome;

    var verifyAnswer = function(){
      props.checkAnswer();
    };

    return (
      <div className="row">
        <ChapterNotification evaluation={props.chapterEvaluation} changeNotificationState={props.changeNotificationState} goBackChapters={props.goBackChapters}/>
        <div className="col-md-4 chapters-list height-align">
          <h3>{props.currentState.title}</h3>
          <div>
            {props.currentState.steps.map((step, idx) => {
              return (
                <StepInChapter wrongItems={props.wrongItems} itemMoveStates={props.itemMoveStates} key={idx} index={idx + 1} step={step} moveUtilities={moveUtilities} formatNumber={props.formatNumber}/>
              )
            })}
          </div>
        </div>
        <div className="col-md-8 chapters-detailed height-align">
          <button className="btn btn-default chapter-go-button" onClick={() => {
             props.goBackChapters();
          }}>Back to Chapters</button>
          <span>&nbsp;&nbsp;</span>
          <button className="btn btn-success chapter-check-button" onClick={verifyAnswer}>Submit Answer</button>
          <hr/>
          <div className="row statement-holder">
            <h3>Month Cash Flow Statment</h3>
            <div className="col-sm-6">
              <StatementItemList name={'income'} list={incomeList} wrongItems={props.wrongItems} itemMoveStates={props.itemMoveStates} moveUtilities={moveUtilities} formatNumber={props.formatNumber}/>
            </div>
            <div className="col-sm-6">
              <StatementItemList name={'expenses'} list={expensesList} wrongItems={props.wrongItems} itemMoveStates={props.itemMoveStates} moveUtilities={moveUtilities} formatNumber={props.formatNumber}/>
            </div>
          </div>
          <h6>&nbsp;</h6>
          <div className="row statement-holder">
            <div className="col-sm-6 gross-account">
              <div className="item-list-active">
              <div className="col-sm-6">Month Net Income: </div>
              <div className="col-sm-6">{netIncome < 0 ? "- $": "$"}{Math.abs(netIncome)}</div>
              </div>
            </div>
          </div>
          <h3>&nbsp;</h3>
          <div className="row statement-holder">
            <h3>Month Balance Sheet</h3>
            <div className="col-sm-6">
              <StatementItemList name={'assets'} list={assetsList} wrongItems={props.wrongItems} itemMoveStates={props.itemMoveStates} moveUtilities={moveUtilities} formatNumber={props.formatNumber}/>
            </div>
            <div className="col-sm-6">
              <StatementItemList name={'liabilities'} list={liabilitiesList} wrongItems={props.wrongItems} itemMoveStates={props.itemMoveStates} moveUtilities={moveUtilities} formatNumber={props.formatNumber}/>
            </div>
          </div>
          <h6>&nbsp;</h6>
          <div className="row statement-holder">
            <div className="col-sm-6 gross-account">
              <div className="item-list-active">
                <div className="col-sm-6">Month Start Net Equity: </div>
                <div className="col-sm-6">{equity < 0 ? "- $": "$"}{Math.abs(equity)}</div>
              </div>
            </div>
          </div>
          <div className="row statement-holder">
            <div className="col-sm-6 gross-account">
              <div className="item-list-active">
                <div className="col-sm-6">Month End Net Equity: </div>
                <div className="col-sm-6">{monthEndEquity < 0 ? "- $": "$"}{Math.abs(monthEndEquity)}</div>
              </div>
            </div>
          </div>
          <h3>&nbsp;</h3>
          <div className="row statement-holder">
            <h3>Removed Items</h3>
            <div className="col-sm-6">
              <StatementItemList name={'deleted'} list={deletedList} wrongItems={props.wrongItems} itemMoveStates={props.itemMoveStates} moveUtilities={moveUtilities} formatNumber={props.formatNumber}/>
            </div>
          </div>
          <hr/>
        </div>
      </div>
    );
  },
  componentDidMount: function(){
    $('.height-align').matchHeight();
  }
});


export default Chapter;
