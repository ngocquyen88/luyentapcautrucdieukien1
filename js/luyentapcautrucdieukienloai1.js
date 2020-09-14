function bai1(){
    let a=parseFloat(document.getElementById("number1").value);
    let b=parseFloat(document.getElementById("number2").value);
    if(a%b==0)
    {
        document.getElementById("bai1").innerHTML=a+" chia hết cho "+b;
    }
    else{
        document.getElementById("bai1").innerHTML=a+" không chia hết cho "+b;
    }
}

function bai2(){
    let age=parseFloat(document.getElementById("tuoi").value);
    if(age>=16){
        document.getElementById("bai2").innerHTML="<br/>Bạn "+age+" tuổi!";
    }
    else{
        document.getElementById("bai2").innerHTML="<br/>Bạn "+age+" tuổi, không đủ tuổi để học lớp 10!";
    }
}

function bai3(){
    let so=parseInt(document.getElementById("sobatky").value);
    if(so>0){
        document.getElementById("bai3").innerHTML=so+" là số lớn hơn 0!";
    }
    else if(so==0){
        document.getElementById("bai3").innerHTML="Số bạn vừa nhập vào là: "+so;
    }
    else{
        document.getElementById("bai3").innerHTML=so+" là số nhỏ hơn 0!";
    }
}

function bai4(){
    let a=parseInt(document.getElementById("so1").value);
    let b=parseInt(document.getElementById("so2").value);
    let c=parseInt(document.getElementById("so3").value);
    if(a>b){
        if(a>c){
            document.getElementById("bai4").innerHTML=a+" là số lớn nhất trong ba số!";
        }
        else{
            document.getElementById("bai4").innerHTML=c+" là số lớn nhất trong ba số!";
        }
    }
    else if(a<b){
        if(b>c){
            document.getElementById("bai4").innerHTML=b+" là số lớn nhất trong ba số!";
        }
        else{
            document.getElementById("bai4").innerHTML=c+" là số lớn nhất trong ba số!";
        }
    }
}

function bai5(){
    let a=parseInt(document.getElementById("diem1").value);
    let b=parseInt(document.getElementById("diem2").value);
    let c=parseInt(document.getElementById("diem3").value);
    let dtb=(a+b+c)/3;

    if(dtb<5){
        document.getElementById("bai5").innerHTML="Học sinh xếp học lực yếu!!!";
    }
    else if(dtb>=5&&dtb<6.5){
        document.getElementById("bai5").innerHTML="Học sinh xếp học lực trung bình!!!";
    }
    else if(dtb>=6.5&&dtb<7.9){
        document.getElementById("bai5").innerHTML="Học sinh xếp học lực khá!!!";
    }
    else if(dtb>=8.0){
        document.getElementById("bai5").innerHTML="Học sinh xếp học lực giỏi!!!";
    }
}

function bai6(){
    let ds=parseInt(document.getElementById("doanhso").value);
    const lcb=6000000;
    const giasp=100000;
    if(ds>0&&ds<150){
        document.getElementById("bai6").innerHTML="Hoa hồng bạn nhận được tháng này là: "+parseFloat(lcb+0.1*ds*giasp);
    }
    else if(ds>=150&&ds<300){
        document.getElementById("bai6").innerHTML="Hoa hồng bạn nhận được tháng này là: "+parseFloat(lcb+0.2*ds*giasp);
    }
    else if(ds>=300){
        document.getElementById("bai6").innerHTML="Hoa hồng bạn nhận được tháng này là: "+parseFloat(lcb+0.3*ds*giasp);
    }
}

function bai7(){
    let tg=parseFloat(document.getElementById("time").value);
    const gia=2000;
    document.getElementById("bai7").innerHTML="Cước điện thoại tháng này của bạn là: "+parseFloat(tg*gia);
}

