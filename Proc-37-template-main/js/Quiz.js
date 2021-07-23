class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();

    //write code to change the background color here
    background("cyan");

    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here
    getContestantInfo();
    if(allContestants !== undefined){
      for(var plr in allContestants){
        debugger;
        var correctAnswer='2';
        if(correctAnswer === allContestants[plr].answer)
            fill("green");
        else
            fill("red");
display_answer+=30
textSize(20);
text(allContestants[plr].name+":"+allContestants[plr].answer,250,display_answer);
      }
    }

    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
