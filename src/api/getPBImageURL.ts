import { Item } from "../@types/type";

//http://127.0.0.1:8090/api/files/COLLECTION_ID_OR_NAME/RECORD_ID/FILENAME
export function getPBImageURL(item: Item, filename = "photo") {
  return `${import.meta.env.VITE_PB_API}/files/${item.collectionId}/${item.id}/${item[filename]}`;
}

// function getPBImageURL<K extends keyof Item>(item:Item, filename:K = 'photo' as K){
//   return `http://127.0.0.1:8090/api/files/${item.collectionId}/${item.id}/${item[filename]}`
// }
