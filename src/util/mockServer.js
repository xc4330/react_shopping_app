import categoryJSON from './category.json'
import productJSON from './product.json'

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
