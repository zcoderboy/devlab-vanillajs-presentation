function callback(xhr,resolve,reject) {
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    resolve(JSON.parse(xhr.response));
  } else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 200) {
    reject(xhr.status);
  }
}

export default {
  get: (url) => {
    let xhr = new XMLHttpRequest()
    return new Promise((resolve, reject) => {
      xhr.open('GET',url,true)
      xhr.onreadystatechange = () => {
        callback(xhr,resolve,reject)
      }
      xhr.send()
    })
  },
  post: (url,data) => {
    let xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      xhr.open('POST', url, true);
      xhr.onreadystatechange = () => {
        callback(xhr,resolve,reject);
      }
      xhr.send(new URLSearchParams(data).toString())
    })
  }
  // TODO:Ajouter d'autres verbes HTTP
}