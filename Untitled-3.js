function checkCashRegister(price, cash, revCid) {
  var change={
    status:'',
    change:[]
  };
  let arrChange=[];
  let ost=0;
  let eqv= {
    'PENNY':0.01,
    'NICKEL':0.05,
    'DIME':0.10,
    'QUARTER':0.25,
    'ONE':1.00,
    'FIVE':5.00,
    'TEN':10.00,
    'TWENTY':20.00,
    'ONE HUNDRED':100.00
  }
  let chNum=cash-price;
  let curNum=0;
  let cid=revCid.slice(); 
  let chArr=[['PENNY', 0.00], ['NICKEL', 0], ['DIME', 0], ['QUARTER', 0], ['ONE', 0], ['FIVE', 0], ['TEN', 0], ['TWENTY', 0], ['ONE HUNDRED', 0]];

  for (let i=8; i>=0; i--) {
    curNum=eqv[cid[i][0]];

    while ((chNum>=curNum)&(cid[i][1]!==0)){
      chArr[i][1]+=curNum;
      cid[i][1]-=curNum;
      chNum-=curNum;
      }
  }

  arrChange=chArr.filter(x=>x[1]>0).reverse();
  if (chNum===0 & cid.some(x=>x[1]>0)) {change.status="OPEN"; change.change=arrChange}
  if (chNum===0 & cid.every(x=>x[1]===0)) {change.status="CLOSED"; change.change=revCid}
  if (chNum>0) {change.status="INSUFFICIENT_FUNDS"}


console.log(arrChange);
  return change;
}


checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);