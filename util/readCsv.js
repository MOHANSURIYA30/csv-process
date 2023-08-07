const fs = require("fs");
const { parse } = require("csv-parse");




CsvProcess = (filePath) =>{
  let row1 =[];
  let whole_data;
  let agents =[];
  let userType = [];
  let policy_type = [];
  let cmpny_name =[];
  let category_name =[];
  let account_name =[];
  let city = [];
  let account_type =[];
  let state =[];
  
    return new Promise((resolve, reject) => {
// fs.createReadStream("./uploads/sheet1.csv")
// fs.createReadStream("./uploads/data-sheet.csv")
fs.createReadStream(filePath)
.pipe(parse({ delimiter: ",", from_line: 2  }))
 
.on("data", function (row) {
    row1.push(row);
    agents.push({name:row[0]});
    userType.push({type:row[1]});
    policy_type.push({type:row[7]});
    cmpny_name.push({ name:row[8] });
    category_name.push({ name:row[9] });
    account_name.push({ name:row[13] });
    city.push({ name:row[17] });
    account_type.push({ type:row[18] });
    state.push({ name:row[21] });

  })

  .on("end", function () {
     whole_data = row1.map(x => ({ 
        agent: x[0], 
        user_type: x[1],
        policy_mode:x[2],
        producer:x[3],
        policy_number:x[4],
        premium_amount_written:x[5],
        premium_amount:x[6],
        policy_type:x[7],
        company_name:x[8],
        category_name:x[9],
        policy_start:x[10],
        policy_end:x[11],
        csr:x[12],
        account_name:x[13],
        email:x[14],
        gender:x[15],
        first_name:x[16],
        city:x[17],
        account_type:x[18],
        phone:x[19],
        address:x[20],
        state:x[21],
        zip:x[22],
        dob:x[23],
        // primary:x[24],
        // ApplicantID:x[25],
        // agency_id:x[26],
        // hasActive:x[27],
        // ClientPolicy:x[28] 
      }));
      console.log("finished");
        //    console.log(objs);
    
    
    
    agents = removeDuplicates(agents)
    
    userType = removeDuplicates(userType)
   
    
    policy_type = removeDuplicates(policy_type)
 
    
    cmpny_name = removeDuplicates(cmpny_name)
 
    
    category_name = removeDuplicates(category_name)
  
    
    account_name = removeDuplicates(account_name)
   
    
    city = removeDuplicates(city)
  
    
    account_type = removeDuplicates(account_type)
  
    
    state = removeDuplicates(state)
    res_data = { agents,userType,policy_type,cmpny_name, category_name,account_name,city,account_type,state,whole_data} 

    resolve(res_data) 
  })
  
  .on("error", function (error) {
    console.log("error executed");
    console.log(error.message);
    reject(error.message)
  });



    })


}    

removeDuplicates =(dupArr=[]) =>
{
  jsonObject = dupArr.map(JSON.stringify);
  uniqueSet = new Set(jsonObject);
  uniqueArray = Array.from(uniqueSet).map(JSON.parse);
  return uniqueArray
}  

module.exports = {CsvProcess}