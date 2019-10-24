function sort(method){
    let origin = document.getElementById('origin').value
    let logs
    console.log(method)
    if(method=='dubble'){
        logs = bubbleSort(origin)
    }else if(method=='insert'){
        logs = insertSort(origin)
    }
    showDiv = document.getElementById('Anim')
    showDiv.innerHTML = logs
}