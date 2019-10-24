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
    logValues = logs.values()
    console.log(logValues.next())
    setTimeout("showLog(logVaule,showDiv)",50)
    showDiv.innerHTML = logs
}