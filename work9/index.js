function cal(){
    let order = document.getElementById('order').value
    order = parseInt(order)&&Number(order)
    if(!isNaN(order)){
        let perbonacci = document.getElementById('Perbonacci')
        perbonacci.value = recusion(order)
    }else{
        alert('请输入数字')
    }
}
function recusion(n){
    if(n < 0){
        return'输入的数字不能小于0'
    }else if (n == 0){
      return 0
    }else if (n == 1){
        return 1 
    }else if (n > 1){
        return recusion(n - 1) + recusion (n - 2)
    }
}