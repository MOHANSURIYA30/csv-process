const helper = require('../util/responseHelper');
const accountTypeService = require('../services/account-type.service');
const accountService = require('../services/account.service');
const agentService =  require('../services/agent.service');
const categoryService =  require('../services/category.service');
const cityService =  require('../services/city.service');
const companyService =  require('../services/company.service');
const policyTypeService =  require('../services/policy-type.service');
const policyService =  require('../services/policy.service');
const stateService =  require('../services/state.service');
const userTypeService =  require('../services/user-type.service');
const userService =  require('../services/user.service');
const messages = require('../config/constants/messages');
const fileProcess = require('../util/readCsv');


exports.createDatas = async (req, res, next) => {

  try {
    let filePath ;
    if (req?.file)
    {
      filePath = req.file.path;
    }
    else
    {
      helper.deliverResponse(res, 422, {}, {
        "error_code": messages.UPLOAD_FILE.error_code,
        "error_message": messages.UPLOAD_FILE.error_message
      })
      return
    } 
       let data = await fileProcess.CsvProcess(filePath)
      
       let whole_data = data.whole_data; 
       let agents = await agentService.createAgents(data.agents)
       let account_type = await accountTypeService.createAccountTypes(data.account_type)
       let account_name = await accountService.createAccounts(data.account_name)
       let category = await categoryService.createCategorys(data.category_name)
       let city = await cityService.createCitys(data.city)
       let company = await companyService.createCompanys(data.cmpny_name)
       let policy_type = await policyTypeService.createPolicyTypes(data.policy_type)
       let state = await stateService.createStates(data.state)
       let user_type = await userTypeService.createUserTypes(data.userType)
       let user_data =[];
       let policy_data = [];
       
       for(let i =0;i<whole_data.length;i++)
       {
           let agent = await agentService.getAgent({ name: whole_data[i].agent });
           if(agent)
           whole_data[i].agent = agent._id;
           else delete whole_data[i].agent
          
       
           let account_type_res = await accountTypeService.getAccountType({type:whole_data[i].account_type})
           if(account_type_res)
           whole_data[i].account_type = account_type_res._id;
          else delete whole_data[i].account_type
       
           let account_name_res = await accountService.getAccount({name:whole_data[i].account_name})
           if(account_name_res)
           whole_data[i].account_name = account_name_res._id;
          else delete whole_data[i].account_name
       
       
           let category_res = await categoryService.getCategory({name:whole_data[i].category_name})
           if(category_res)
           whole_data[i].category_name = category_res._id;
           else delete whole_data[i].category_name
       
           let city_res = await cityService.getCity({name:whole_data[i].city})
           if(city_res)
           whole_data[i].city = city_res._id
           else delete whole_data[i].city
       
           let company_res = await companyService.getCompany({name:whole_data[i].company_name})
           if(company_res)
           whole_data[i].company_name = company_res._id
           else delete whole_data[i].company_name
       
           let policy_type_res = await policyTypeService.getPolicyType({type:whole_data[i].policy_type})
           if(policy_type_res)
           whole_data[i].policy_type = policy_type_res._id
           else delete whole_data[i].policy_type
       
           let state_res = await stateService.getState({name:whole_data[i].state})
           if(state_res)
           whole_data[i].state = state_res._id
           else whole_data[i].state
       
           let user_type_res = await userTypeService.getUserType({type:whole_data[i].user_type})
           if(user_type_res)
           whole_data[i].user_type = user_type_res._id
           else whole_data[i].user_type
       
         user_data.push({
           first_name:whole_data[i].first_name,
           email:whole_data[i].email,
           gender:whole_data[i].gender,
           user_type:whole_data[i].user_type,
           account_name:whole_data[i].account_name,
           city:whole_data[i].city,
           account_type:whole_data[i].account_type,
           phone:whole_data[i].phone,
           address:whole_data[i].address,
           state:whole_data[i].state,
           zip:whole_data[i].zip,
           dob:whole_data[i].dob,
           policy_number:whole_data[i].policy_number
       })
         
         policy_data.push({
           policy_number:whole_data[i].policy_number,
           agent: whole_data[i].agent,
           producer:whole_data[i].producer,
           csr:whole_data[i].csr,
           policy_mode:whole_data[i].policy_mode,
           premium_amount_written:whole_data[i].premium_amount_written,
           premium_amount:whole_data[i].premium_amount,
           policy_type:whole_data[i].policy_type, 
           company_name:whole_data[i].company_name,
           category_name:whole_data[i].category_name,
           policy_start:whole_data[i].policy_start,
           policy_end:whole_data[i].policy_end
         })
       
      }
      
      console.log(user_data.length);
      let policy = await policyService.createPolicys(policy_data);
      let user = await userService.createUsers(user_data)
      
      if(user)
      {
        helper.deliverResponse(res, 200, {}, {
          "error_code": messages.UPLOAD.error_code,
          "error_message": messages.UPLOAD.error_message
        });
      }

    } catch (error) {
      console.log(error);
      helper.deliverResponse(res, 422, {}, {
        "error_code": messages.SERVER_ERROR.error_code,
        "error_message": messages.SERVER_ERROR.error_message
      })
    }

}

