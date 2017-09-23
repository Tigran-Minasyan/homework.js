const f1 = function(a,b,c){
    const sum = a+b+c;
    const dif = a-b-c;
    const prod = a*b*c;
    const result = sum+dif+prod;
    return result;
};

const f2 = function(){
    const a = f1(20,4,7)*2;
    return a;
};

const f3 = function(a){
    const sqr = a*a;
    const dbl = a+a;
    console.log('Nothing');
};

const f4 = function(name,surname){
    const fullname = name+' '+surname;
    return fullname;
};

const f5 = function(str1,str2,str3){
    const l1 = str1.length;
    const l2 = str2.length;
    const l3 = str3.length;
    if(l1>l2 && l1>l3){
        return str1;
    }else if(l2>l1 && l2>l3){
        return str2;
    }else{
        return str3;
    }
};

const f6 = function(num1,num2){
    if(num1>num2){
        return 1;
    }
    if(num2>num1){
        return -1;
    }
    if(num1 === num2){
        return 0;
    }
};

const f7 = function(a,b,c){
    if(a){
        return a;
    }
    if(b){
        return b;
    }
    if(c){
        return c;
    }
};