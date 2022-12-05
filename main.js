// gọi biến sum =2; num = 2() => vì num là số nguyên dương nên num > 0  => sum = 1
// dùng vòng lặp while với điều kiện sum < 10000
// num sẽ cộng dồng lên 1
// sum = sum + num đến khi hàm đủ điện kiện
function min() {
  var sum = 1;
  var num = 1;
  while (sum < 10000) {
    num++;
    sum = sum + num;
  }
  document.getElementById("min").innerHTML = "Kết quả là " + num;
}
// gọi biến x
// gọi biến n
// gán biến sum
// dùng for (var i = 1; i <= n; i++ ){
// sum += Math.pow(x, i)
// }
function sum() {
  var x = document.getElementById("num_x").value * 1;
  var n = document.getElementById("num_n").value * 1;
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += Math.pow(x, i);
  }
  document.getElementById("sum").innerHTML = "Kết quả là " + sum;
}

// gọi biên n
// gán  biến tich
// dùng for(i = 1; i <= n, i++){
//     tich = n**
// }
function tich() {
  var n = document.getElementById("n").value * 1;
  var tich = 1;
  for (var i = 1; i <= n; i++) {
    tich *= i;
  }
  document.getElementById("tinh").innerHTML = "Kết quả là " + tich;
}

function div(){
    var divChan = '<div style=" background-color: red; width: 500px; height: 30px;">div chẵn</div> ';
    var divLe = '<div style=" background-color: blue; width: 500px; height: 30px;">div lẻ</div>';
    var content = '';
    for(var i = 1; i <= 10; i++){
        if((i + 1) % 2 === 0){
            content += divChan  + '<br/>'
        }else{
            content += divLe + '<br/>'
        }
    }
    document.getElementById("hienthi").innerHTML = content
}

function KtsonguyenTo(n){
  var flag = true
  if (n => 2){
    for(var i = 2; i <= (n - 1); i++){
      if(n % (n -1) === 0 ){
        flag = true;
        break
      }
    }
  }else{
    flag = false
  }
}

function prime(){
  var x = document.getElementById("number").value * 1;
  var primeNumber = '';

  if(x > 0 && x % 1 ==0 ){
    if(x => 2){
      for(var i = 2; i <= x; i++){
        if(KtsonguyenTo() == true){
          primeNumber += i + " "
        }
      }
    }else{
      alert("không phải số nguyên tố")
    }
  }else{
    alert('Không phải số nguyên dương')
  }
  document.getElementById('prime').innerHTML = primeNumber
}
