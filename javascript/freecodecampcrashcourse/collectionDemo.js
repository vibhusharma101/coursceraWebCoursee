var collection ={
    "hello":"hii",
    "array":[{
        "color":"red"
    }],
    "number":1
}

var collectionCopy = JSON.parse(JSON.stringify(collection))
console.log(JSON.stringify(collectionCopy))
function updateRecords(key,value){
    if(value=="")
    {
        delete collection[key]
    }
    else if(key=="array")
    {
    collection[key] =collection[key] || []
    collection[key].push(value)
    }
    else{
        collection[key] =value
    }


    return collection
}

console.log(JSON.stringify(updateRecords("array","yellow")))


