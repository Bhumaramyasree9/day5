var array=[7,8,9,19,10,8,7,6,9,19,10];
for(i=0;i<array.length;i++){
    for(j=i+1;j<array.length;j++){
        if(array[i]==array[j]){
            
            console.log(array[j]);
        }
    }

}
