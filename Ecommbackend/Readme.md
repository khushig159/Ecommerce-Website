Routes:

products routes
url: localhost:8000/products/
o/p: gives all products

url: localhost:8000/products/camera
o/p: gives all cctv || camera

url: localhost:8000/products/laptop
o/p: gives all laptop

url: localhost:8000/products/storage
o/p: gives all storage devices

url: localhost:8000/products/printer
o/p: gives all printer


user routes

==signup==
url: localhost:8000/user/signup
sample input: {
    "username":"user1",
    "password":"123456789",
    "email":"p@q.com"
}
sample output: {
    "message": "User registered",
    "user": {
        "_id": "67ee5bb978425778a895c43c",
        "username": "user1",
        "email": "p@q.com",
        "createdAt": "2025-04-03T09:58:17.315Z",
        "updatedAt": "2025-04-03T09:58:17.315Z",
        "__v": 0
    }
}


==login==
url:localhost:8000/user/login
sample input:{
    "password":"123456789",
    "email":"p@q.com"
}
sample o/p: {
    "message": "User logged in",
    "user": {
        "_id": "67ee5bb978425778a895c43c",
        "username": "user1",
        "email": "p@q.com",
        "createdAt": "2025-04-03T09:58:17.315Z",
        "updatedAt": "2025-04-03T10:03:44.199Z",
        "__v": 0
    },
    "accesstoken": "",
    "refreshtoken": ""
}

==logout==
url:localhost:8000/user/logout
sample input:{}
sample o/p:{
    "message": "User logged out"
}

url: localhost:8000/order/execute
sampleinput: {
    "mobileNo":1234567890,
    "city":"mumbai",
    "state":"Maharashtra",
    "pincode":"400068",
    "address":"dahisar",
    "products":["67ee3dc26fec245fb315fb43","67ee3dc26fec245fb315fb44"],
    "options":{
        "amount":500,
        "currency":"INR",
        "receipt":"qwsaq1"

    }
}
sampleoutput: {
    "amount": 500,
    "amount_due": 500,
    "amount_paid": 0,
    "attempts": 0,
    "created_at": 1743858886,
    "currency": "INR",
    "entity": "order",
    "id": "order_QFOAqCtvyDESnV",
    "notes": [],
    "offer_id": null,
    "receipt": "qwsaq1",
    "status": "created"
}