import React from 'react'
import StepInChapters from './step_in_chapters.js'

var Chapters = React.createClass({
  getInitialState: () => ({}),
  render: function(){
    var props = this.props;
    var thisView = this;

    function unlock(e){
      e.preventDefault();

      var keyInput = $("#unlock-code-input").val();
      $.ajax({
        url: "/unlock_with_code/" + keyInput,
        method: "GET",
        dataType: "json",
        contentType: "application/json",
        success: function(response){
          props.unlockUser();
          props.selectChapter("15");
          alert("Thank You for Supporting our Site and We Wish You Financial Success!");
        },
        error: function(response){
          alert(":( Sorry the code is not valid.");
        }
      })
    }

    return (
      <div>
        <div className="col-md-4 chapters-list height-align">
          <h3>Available Chapters</h3>
          <div>
            {$.map(props.chapters, (chapter, idx) => {
                if(chapter.premium && !props.user.premium){
                  return (
                    <div className={"chapters-list-item locked"} onClick={function(){
                      props.paymentPage();
                      if(props.device.isMobile){
                        $(".chapters-detailed").css("display", "block");
                        $(".chapters-list").css("display", "none");
                      }
                    }} key={chapter.id}><img className="lock-image" src="images/lock.png"/>&nbsp;&nbsp;&nbsp;{chapter.title}</div>
                  )
                }else{
                  return (
                    <div className={"chapters-list-item " + (props.user.chaptersPassed[chapter.id] ? "passed" : "")}  onClick={function(){
                      props.selectChapter(chapter.id);
                      if(props.device.isMobile){
                        $(".chapters-detailed").css("display", "block");
                        $(".chapters-list").css("display", "none");
                      }
                    }} key={chapter.id}>{idx + ". "}&nbsp;&nbsp;{chapter.title}</div>
                  );
                }
              })
            }
          </div>
        </div>
        <div className="col-md-8 chapters-detailed height-align">
          {(function(){
            if(props.mode == "payment"){
              return (
                <div>
                  <h2>Unlock Additional Exercises</h2>
                  <p>If you find the above journey insufficient in satisfying your learning, then perhaps these additional exercises will help solidify your knowledge.</p>
                  <p>These chapters are individually constructed scenarios with each one testing a specific concept we covered. They come at a premium of $4.99 and can be accessed like free chapters once you unlock them.</p>
                  {props.device.isMobile ? (<button className="btn btn-default chapter-go-back-button" style={{"margin-left": "0px"}} onClick={() => {
                    $(".chapters-detailed").css("display", "none");
                    $(".chapters-list").css("display", "block");
                  }}>Back to Chapters</button>) : ""}

                  <h3>&nbsp;</h3>

                  {
                    (props.user.email=="demony@lanyardblue.com" ? (
                      <h6 style={{"color": "#df1a20"}}>You are using the public demo account. Please use a registered accout to unlock additional contents.</h6>
                    ) : (
                      <div>
                        <h4>Unlock with Lanyard Access Code:</h4>
                        <p>If you have received a Lanyard Access Code (a 10-digit serial number with only capital letters and numbers), enter it here to unlock the additional chapters:</p>
                        <form>
                        <input id="unlock-code-input" type="text" className="form-control"/>
                        <input type="submit" className="btn btn-default" onClick={unlock}/>
                        </form>
                        <h3>&nbsp;</h3>
                        <h4>Pay $4.99 Premium:</h4>
                        <p>Please PayPal or Venmo me $4.99 (if you want to support the site by sending more, that is fantastic and I will remember you). My associated email and phone number with these two payment methods are qg231@nyu.edu and (347)549-0904.</p>
                        <p>Append a note to your payment (including where I can send the access code) or email me the receipt afterwards directly to receive the code.</p>
                      </div>
                    ))
                  }
                </div>
              )
            }else{
              return (
                <div>
                  <h2>{props.currentChapter.title}</h2>
                  <p>{props.currentChapter.description}</p>
                  <button className="btn btn-default chapter-go-button" onClick={() => {
                     props.startChapter(props.currentChapter.id);
                  }}>Start Chapter Exercises</button>
                  {props.device.isMobile ? (<button className="btn btn-default chapter-go-back-button" onClick={() => {
                    $(".chapters-detailed").css("display", "none");
                    $(".chapters-list").css("display", "block");
                  }}>Back to Chapters</button>) : ""}
                  <hr/>
                  <div>
                    {props.currentChapter.steps.map((step, idx) => {
                      return (
                        <StepInChapters key={idx} index={idx + 1} step={step} formatNumber={props.formatNumber}/>
                      )
                    })}
                  </div>
                </div>
              )
            }
          })()}




        </div>
      </div>
    );
  },
  componentDidMount: function(){
    $('.height-align').matchHeight();
  }
})

export default Chapters;
