from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

users = [{"username": "admin", "password": "admin"}, {"username": "1", "password": "1"}]

# Allow CORS for all origins (consider adjusting for production)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Or specify your frontend's origin here
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/login")
async def login(username: str = Query(...), password: str = Query(...)):
    for item in users:
        if item["username"] == username and item["password"] == password:
            print({"success": True})
            return {"success": True}
    print({"success": False})
    return {"success": False}


@app.get("/sign")
async def sign(username: str = Query(...), password: str = Query(...)):
    for item in users:
        if item["username"] == username:
            return {"success": False}
    users.append({"username": username, "password": password})
    return {"success": True}


@app.get("/forget")
async def sign(username: str = Query(...)):
    for item in users:
        if item["username"] == username:
            print(33333)
            return {"success": True}
    print(False)
    return {"success": False}


@app.get("/forget/change")
async def sign(username: str = Query(...), password: str = Query(...)):
    print(username , password)
    for item in users:
        if item["username"] == username:
            item["password"] = password
            return {"success": True}