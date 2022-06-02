//============================================================================================
//====фуникция проверки статуса оформлен и отправки такого статуса в основную таблицу=========
//============================================================================================
function check(){

  let active = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet().getActiveCell();
  
  let cell = active.getA1Notation();  
  let value = active.getValue();  

  if(cell.indexOf("M">=0))
  {
    Logger.log(value);
    let range = cell.replace(/M/, "O");
    let uuid = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Оформление_V.2").getRange(range).getValue();

    let mainUuuidsRange = main.getRange(2, 15, main.getLastRow()-1, 1).getValues();
    
    for(let i = 0; i < mainUuuidsRange.length; i++)
    {
      if(mainUuuidsRange[i][0] === uuid)
      {
        main.getRange(i+2,13).setValue(value);
        return;
      }
    }
  }

  if(cell.indexOf("N">=0))
  {
    Logger.log(value);
    let range = cell.replace(/N/, "O");
    let uuid = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Оформление_V.2").getRange(range).getValue();
        
    let mainUuuidsRange = main.getRange(2, 15, main.getLastRow()-1, 1).getValues();
    
    for(let i = 0; i < mainUuuidsRange.length; i++)
    {
      if(mainUuuidsRange[i][0] === uuid)
      {
        main.getRange(i+2,14).setValue(value);
        return;
      }
    }
  }

}



