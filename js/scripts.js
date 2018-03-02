//Business Logic
function BankAccount(ideposit, deposit, withdraw){
  this.ideposit = ideposit;
  this.deposit = deposit;
  this.withdraw = withdraw;
};

BankAccount.prototype.famount = function(ideposit){
    return this.ideposit + this.deposit - this.withdraw;
};
function IsEmpty(deposit){

    if(depo == "")
    {
        alert("empty");
    }
    return;
}
//ui

$(document).ready(function(){
    $("form#form1").submit(function(event){
      $("h3#display-money").empty();
      event.preventDefault();
      var name = parseInt($("input#name").val());
      var ideposit =parseInt($("input#ideposit").val());
      var depo = parseInt($("input#depo").val());
      var withdraw = parseInt($("input#withdraw").val());
        console.log(IsEmpty());

      var newAccount = new BankAccount (ideposit, depo, withdraw);
      if (withdraw > ideposit + depo){
        return alert("you're a criminal!");
      };

      $("div.ideposit").hide();
      $("h3#display-money").fadeIn().append(" " + newAccount.famount());

    });


});
