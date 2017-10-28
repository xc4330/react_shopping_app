export const categoryJSON = [
  {
    "cid" : 1,
    "name" : "Electronics"
  },
  {
    "cid" : 2,
    "name" : "Furniture"
  }
]

export const productJSON = [
  {
    "pid" : 1,
    "name" : "Microwave Oven",
    "description" : "",
    "price" : "399.0",
    "image" : "",
    "cid" : 1
  },
  {
    "pid" : 2,
    "name" : "Television",
    "description" : "",
    "price" : "399.0",
    "image" : "",
    "cid" : 1
  },
  {
    "pid" : 3,
    "name" : "Vacuum Cleaner",
    "description" : "",
    "price" : "399.0",
    "image" : "",
    "cid" : 1
  },
  {
    "pid" : 4,
    "name" : "Table",
    "description" : "",
    "price" : "399.0",
    "image" : "",
    "cid" : 2
  },
  {
    "pid" : 5,
    "name" : "Chair",
    "description" : "",
    "price" : "399.0",
    "image" : "",
    "cid" : 2
  },
  {
    "pid" : 6,
    "name" : "Almirah",
    "description" : "",
    "price" : "399.0",
    "image" : "",
    "cid" : 2
  }
]

export function categoryAPI (callback){
  let response = categoryJSON
  setTimeout( _ => {
    callback(response)
  }, 1000)
}

export function productAPI (cid, callback){
  let response = productJSON.filter(product => product.cid === cid)
  console.log(response);
  setTimeout( _ => {
    callback(response)
  }, 1000)
}
