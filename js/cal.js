
var total = "0";
var input = "";
var preinput = "";
var sym = "";
var fig = new Boolean(false);

function push(data){
    if(sym == "" && preinput != ""){
        clear();
    }
    if(preinput!="") fig = true;
    input += data;
    document.form.result.value = input;
}

function cal(data){
    if(fig){
        all = preinput + sym + input;
        total = eval(all);
        if(data == '=') sym = "";
        else{
            fig = false;
            sym = data;
        }
        input = "";
        preinput = total;
        document.form.result.value = total;
    }
    else{
        sym = data;
        preinput = input;
        input = "";
    }
}

function c(){
    total = "0";
    input = "";
    preinput = "";
    sym = "";
    fig = false;
    document.form.result.value = total;
}
