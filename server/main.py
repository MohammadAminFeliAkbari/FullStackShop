from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow CORS for your React app
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to your React app's URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Item(BaseModel):
    name: str
    age: int


items = []


@app.get("/")
def root():
    return items


@app.get("/{id}")
def get_item_by_id(id: int):
    if id < 0 or id >= len(items):
        raise HTTPException(status_code=404, detail="Item not found")
    return {"data": items[id]}  # Return the item at the specified index


@app.post("/")
def create_item(item: Item):
    # Append the new item to the list
    items.append(item)
    return {"message": "Item created", "item": item}  # Return a meaningful response


@app.get("/items")
def list_item(limit: int = 10):
    return items[
        0:limit
    ]  # you can get query with 'http://127.0.0.1:8000/items?limit=2'


# # Initial list with one dictionary
# items = [{"username": "Mohammad", "password": "2345"}]

# # Adding a new key-value pair to the dictionary
# items[0]["product"] = [{"id": 2}]  # Directly assign the new key

# # Alternatively, you could use the update method
# # items[0].update({"product": [{"id": 2}]})  # This also works

# # Print the updated dictionary
# print(items[0])
