function ticketManager(ticket, isIncrease) {
    const ticketInput = document.getElementById(ticket + '-count');
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if (isIncrease == true){
       ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0){
       ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;

  //   class wise calculation 
    let ticketTotal = 0;
    if (ticket == 'first-class'){
       ticketTotal = ticketNewCount * 150;
    }
    if (ticket == 'economy-class'){
    ticketTotal = ticketNewCount * 100;
 }
  
  //   document.getElementById(ticket + '-total').innerText = ticket +' charge '+ '$'+ ticketTotal;
  document.getElementById(ticket + '-total').innerText = ticket + ' price ' + '$' + ticketTotal;
  calculateTotal();
 }

function calculateTotal(){
  //   Subtotal
    const firstClassInput = document.getElementById('first-class-count');
    const firstClassCount = parseInt(firstClassInput.value);
    const economyClassInput = document.getElementById('economy-class-count');
    const economyClassCount = parseInt(economyClassInput.value);
    const totalPrice = firstClassCount * 150 + economyClassCount * 100;
    document.getElementById('Subtotal').innerText = '$' + totalPrice;
    
  //    vat 
    const vat = Math.round(totalPrice * 0.1);
    document.getElementById('total-vat').innerText = '$' + vat;

  // Grand Total Payable
    const grandTotal = totalPrice + vat;
    document.getElementById('total-payable').innerText = '$' + grandTotal;
}

// popup function
function createPopupWin(pageURL, pageTitle, 
  popupWinWidth, popupWinHeight) { 
var left = (screen.width - popupWinWidth) / 2; 
var top = (screen.height - popupWinHeight) / 4; 

var myWindow = window.open(pageURL, pageTitle,  
  'resizable=yes, width=' + popupWinWidth 
  + ', height=' + popupWinHeight + ', top=' 
  + top + ', left=' + left); 
}


