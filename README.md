# csv-task

Install the dependencies
Step1: npm i

To Run the code
Step 2 : npm run dev  (or) nodemon server.js

======================================================================================

API END POINTS LISTS

To Upload:
POST:  http://localhost:3000/api/create-datas
Payload: In form-data key:'file' value:"data-sheet.csv" (file)

======================================================================================

CRUD For Accounts

POST:  http://localhost:3000/api/create-account
GET:   http://localhost:3000/api/get-accounts
GET:   http://localhost:3000/api/get-account/:id
PUT:   http://localhost:3000/api/update-account/:id
DELETE:   http://localhost:3000/api/delete-account/:id

Sample Payload:
{
    "name":"Account name"
}

======================================================================================

CRUD For User

POST:  http://localhost:3000/api/create-user
GET:   http://localhost:3000/api/get-users
GET:   http://localhost:3000/api/get-user/:id
PUT:   http://localhost:3000/api/update-user/:id
DELETE:   http://localhost:3000/api/delete-user/:id

Sample Payload:

       {
            "first_name": "Lura Lucca",
            "email": "madler@yahoo.ca",
            "gender": "male",
            "user_type": "64d098867586b58577a04874",
            "account_name": "64d098857586b58577a04318",
            "city": "64d098857586b58577a047d6",
            "account_type": "64d098857586b58577a04315",
            "phone": "8677356559",
            "address": "170 MATTHIAS CT",
            "state": "64d098867586b58577a0486a",
            "zip": "27028",
            "dob": "1960-02-11",
            "policy_number": "YEEX9MOIBUX"
        }

======================================================================================

CRUD For Policy

POST:  http://localhost:3000/api/create-policy
GET:   http://localhost:3000/api/get-policys
GET:   http://localhost:3000/api/get-policy/:id
PUT:   http://localhost:3000/api/update-policy/:id
DELETE:   http://localhost:3000/api/delete-policy/:id


Sample Payload:

      {
            "policy_number": "YEEX9MOIBUX",
            "agent": "64d098857586b58577a04311",
            "producer": "Brandie Placencia",
            "csr": "Tami Ellison",
            "policy_mode": "12",
            "premium_amount_written": "",
            "premium_amount": "1180.83",
            "policy_type": "64d098867586b58577a04867",
            "company_name": "64d098867586b58577a04838",
            "category_name": "64d098857586b58577a047c2",
            "policy_start": "2018-11-02",
            "policy_end": "2019-11-02"
        }
====================================================================================== 


TO GET ALL THE REFERNECE COLLECTION DATA AND IDS

GET:   http://localhost:3000/api/get-account-types
GET:   http://localhost:3000/api/get-agent
GET:   http://localhost:3000/api/get-category
GET:   http://localhost:3000/api/get-city
GET:   http://localhost:3000/api/get-company
GET:   http://localhost:3000/api/get-policy-types
GET:   http://localhost:3000/api/get-state
GET:   http://localhost:3000/api/get-user-types


