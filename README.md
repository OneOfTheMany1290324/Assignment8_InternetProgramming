
**This is the markdown text summary for Assignment 8.**

I used curl commands inside of the VS Code integrate terminal to test the REST endpoints and to ensure that each endpoint retunred the appropriate HTTP status according to the HTTP method.

API Endpoint Testing:
------------------------------------------------------
**1. GET- All resources:**

C:\Users\netek\Desktop\Assignment_8_InternetProgramming>curl.exe -i http://localhost:3000/api/resources
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 53
ETag: W/"35-tHe41HOgsaPhJeROhOD/AUyUaTI"
Date: Fri, 06 Nov 2026 04:05:54 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"data":[{"id":"1793857073077","title":"Test Item"}]}

RESULT:

Returned Status: 200 OK
- Also returned the id, which was then used to create a new resource with POST in the next command.
------------------------------------------------------
**2.POST - Create a new resource:**

C:\Users\netek\Desktop\Assignment_8_InternetProgramming>curl.exe -i -X POST http://localhost:3000/api/resources -H "Content-Type: application/json" -d "{\"title\":\"Test Item\"}"
HTTP/1.1 201 Created
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 51
ETag: W/"33-iHWkk9PmUPsduW53x2Zs1jbdyts"
Date: Fri, 06 Nov 2026 04:07:47 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"data":{"id":"1793938067434","title":"Test Item"}}

RESULT: 

Returned Status: 201 created

Created a new resource. The server automatically generated a new unique tracking ID and added the object to the in-memory collection.
------------------------------------------------------
**3. GET - Resource by ID:**

C:\Users\netek\Desktop\Assignment_8_InternetProgramming>curl.exe -i http://localhost:3000/api/resources/1793938067434
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 51
ETag: W/"33-iHWkk9PmUPsduW53x2Zs1jbdyts"
Date: Fri, 06 Nov 2026 04:11:35 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"data":{"id":"1793938067434","title":"Test Item"}}

RESULT: 
Returned Status: 200 OK 

Successfully retrieved an individual resource using its unique ID.
------------------------------------------------------
**4. PUT - Update an Existing Resource**

C:\Users\netek\Desktop\Assignment_8_InternetProgramming>curl.exe -i -X PUT http://localhost:3000/api/resources/1793938067434 -H "Content-Type: application/json" -d "{\"title\":\"Updated Item\"}"
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 54
ETag: W/"36-4Zoit3tlV75ogjNfZ43KzOcnCJI"
Date: Fri, 06 Nov 2026 04:13:09 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"data":{"id":"1793938067434","title":"Updated Item"}}

RESULT: 
Returned Status: 200 OK
Successfully updated the resource's title while preserving its original ID.

------------------------------------------------------
**5. DELETE - An existing resource:**

C:\Users\netek\Desktop\Assignment_8_InternetProgramming>curl.exe -i -X DELETE http://localhost:3000/api/resources/1793938067434
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 96
ETag: W/"60-5JP+xEPZEmOMK2T2zTWiv0KoiGg"
Date: Fri, 06 Nov 2026 04:14:38 GMT
Connection: keep-alive
Keep-Alive: timeout=5

RESULT:
Returned Status: 200 OK 
Successfully deleted the specified resource from the in memory collection using its unique ID.
------------------------------------------------------
