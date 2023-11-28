const getData = (id = 1) => {
    const url = "";
    const options = {
        method:"GET",
        headers: {
            "Content-Type":"application/json"
        }
    }
    return fetch(url,options)
        .then(response => {
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            return error;
        })
}

(()=>{
    getData(2).then(data => {
        console.log(data)
    });
    console.log("first")
})();