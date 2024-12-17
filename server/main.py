from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse


app = FastAPI()

users = [
    {
        "username": "admin",
        "password": "admin",
        "interest": [],
        "shoppingCard": [],
    },
    {
        "username": "1",
        "password": "1",
        "interset": [],
        "shoppingCard": [],
    },
]

allProduct = [
    {
        "numberStart": 0,
        "img": "h1",
        "price": 800,
        "information": "هدست کامپیوتر تسکو مدل HP12",
        "offer": False,
    },
    {
        "numberStart": 0,
        "img": "h2",
        "price": 680,
        "information": "هدست بی سیم مدل e44",
        "offer": False,
    },
    {
        "numberStart": 2,
        "img": "h3",
        "price": 240,
        "information": "هدست بی سیم مدلS100",
        "offer": False,
    },
    {
        "numberStart": 1,
        "img": "h4",
        "price": 120,
        "information": "هدست کامپیوتر تسکو مدل PP12",
        "offer": True,
    },
    {
        "numberStart": 1,
        "img": "h5",
        "price": 120,
        "information": "هدست کامپیوتر تسکو مدل PP12",
        "offer": True,
    },
    {
        "numberStart": 4,
        "img": "h6",
        "price": 145,
        "information": "هدست کامپیوتر تسکو مدل PP12",
        "offer": True,
    },
    {
        "numberStart": 4,
        "img": "h7",
        "price": 120,
        "information": "هدست کامپیوتر تسکو مدل PP12",
        "offer": True,
    },
    {
        "numberStart": 3,
        "img": "p1",
        "price": 1800,
        "information": "هدست کامپیوتر تسکو مدل HP12",
        "offer": True,
    },
    {
        "numberStart": 0,
        "img": "p2",
        "price": 680,
        "information": "هدست بی سیم مدل e44",
        "offer": False,
    },
    {
        "numberStart": 2,
        "img": "p3",
        "price": 240,
        "information": "هدست بی سیم مدلS100",
        "offer": False,
    },
    {
        "numberStart": 4,
        "img": "p4",
        "price": 120,
        "information": "هدست کامپیوتر تسکو مدل PP12",
        "offer": True,
    },
]


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
    users.append(
        {
            "username": username,
            "password": password,
            "interset": [],
            "shoppingCard": [],
        }
    )
    return {"success": True}


@app.get("/forget")
async def sign(username: str = Query(...)):
    for item in users:
        if item["username"] == username:
            return {"success": True}
    return {"success": False}


@app.get("/forget/change")
async def sign(username: str = Query(...), password: str = Query(...)):
    print(username, password)
    for item in users:
        if item["username"] == username:
            item["password"] = password
            return {"success": True}


@app.get("/image")
def bg(id: str = Query(...)):
    path = "./image/"
    path = path + id + ".jpg"
    print(path)
    return FileResponse(path)


@app.get("/headphones")
def headPhone():
    return [
        {
            "numberStart": 0,
            "img": "h1",
            "price": 800,
            "information": "هدست کامپیوتر تسکو مدل HP12",
            "offer": False,
        },
        {
            "numberStart": 0,
            "img": "h2",
            "price": 680,
            "information": "هدست بی سیم مدل e44",
            "offer": False,
        },
        {
            "numberStart": 2,
            "img": "h3",
            "price": 240,
            "information": "هدست بی سیم مدلS100",
            "offer": False,
        },
        {
            "numberStart": 1,
            "img": "h4",
            "price": 120,
            "information": "هدست کامپیوتر تسکو مدل PP12",
            "offer": True,
        },
        {
            "numberStart": 1,
            "img": "h5",
            "price": 120,
            "information": "هدست کامپیوتر تسکو مدل PP12",
            "offer": True,
        },
        {
            "numberStart": 4,
            "img": "h6",
            "price": 145,
            "information": "هدست کامپیوتر تسکو مدل PP12",
            "offer": True,
        },
        {
            "numberStart": 4,
            "img": "h7",
            "price": 120,
            "information": "هدست کامپیوتر تسکو مدل PP12",
            "offer": True,
        },
    ]


@app.get("/headphoneTOP")
def head():
    return [
        {
            "numberStart": 3,
            "img": "p1",
            "price": 1800,
            "information": "هدست کامپیوتر تسکو مدل HP12",
            "offer": True,
        },
        {
            "numberStart": 0,
            "img": "p2",
            "price": 680,
            "information": "هدست بی سیم مدل e44",
            "offer": False,
        },
        {
            "numberStart": 2,
            "img": "p3",
            "price": 240,
            "information": "هدست بی سیم مدلS100",
            "offer": False,
        },
        {
            "numberStart": 4,
            "img": "p4",
            "price": 120,
            "information": "هدست کامپیوتر تسکو مدل PP12",
            "offer": True,
        },
    ]


@app.get("/LOGO")
def logo():
    return FileResponse("./image/img.png")


@app.get("/slider")
def slider():
    return [
        {
            "img": "s1",
            "text": "با انرژی گوش دهید",
            "id": "slider1",
            "active": "hidden",
        },
        {"img": "s2", "text": "با دقت گوش دهید", "id": "slider2", "active": ""},
        {
            "img": "s3",
            "text": "تجربه خرید انلاین جدید...",
            "id": "slider4",
            "active": "hidden",
        },
    ]


@app.get("/addInterest")
def addInterest(
    username: str = Query(...),
    img: str = Query(...),
):
    for item in users:
        if item["username"] == username:
            for i in allProduct:
                if i["img"] == img:
                    item["interest"].append(i)
                    print(item)
                    break
    print(img, username)


@app.get("/addShop")
def addShop(
    img: str = Query(...),
    username: str = Query(...),
):
    for item in users:
        if item["username"] == username:
            for i in allProduct:
                if i["img"] == img:
                    item["shoppingCard"].append(i)
                    print(item)
                    break

    print(img, username)
