export default function findindex(arr, id){
    var result = -1;
    for(var i=0; i<arr.length; i++){
        if(parseInt(arr[i].id,10) === parseInt(id,10)) {
            result = i;
            break;
        }
    }

    return result;

}