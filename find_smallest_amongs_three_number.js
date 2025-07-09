function findSmallest(a,b,c){
    if(a<b && a<c){
        console.log(a);
        return a;
    }
    else if(b<a && b<c){
        console.log(b);
        return b;
    }
    else{
        console.log(c);
        return c;
    }
}
findSmallest(3, 1, 2);    