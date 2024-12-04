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
    flag = True
    for item in users:
        if item["username"] == username:
            flag = False
            return {"success": False}
    users.append({"username": username, "password": password})
    return {"success": True}