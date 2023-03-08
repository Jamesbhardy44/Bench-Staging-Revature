/*
Using TypedArray views 
or a DataView object 
can help you efficiently manipulate binary data 
in JavaScript, 
but it's important to keep in mind the limitations 
and potential pitfalls of working with low-level
 memory manipulation functions.


 problem statement: 
 
Given two ArrayBuffer objects of equal length,
write a function that returns a new ArrayBuffer containing the element-wise sum of the two input buffers.
*/



function addBuffers(a,b){

    //error handling
    if(!a.byteLength===b.byteLength){
        throw new Error('byteLength!=');
    }

     //place parameters into arrayBuffer and read/wr objects
     var res = new ArrayBuffer(a.byteLength);
     var viewA = new Uint8Array(a);
     var viewB = new Uint8Array(b);
     var viewResult = new Uint8Array(res);

     //loop
     for(var i = 0; i < a.byteLength; i++){
        viewResult[i] = viewA[i]+viewB[i];
    }
    return res;

}

var a = new ArrayBuffer(4);
var b = new ArrayBuffer(4);

var viewA = new Uint8Array(a);
var viewB = new Uint8Array(b);

viewA[0] = 0x12;
viewA[1] = 0x34;
viewA[2] = 0x56;
viewA[3] = 0x78;

viewB[0] = 0x01;
viewB[1] = 0x23;
viewB[2] = 0x45;
viewB[3] = 0x67;

var result = addBuffers(a,b);
var viewResult = new Uint8Array(result);
console.log(viewResult);






/*
var buffer = new ArrayBuffer(8);

var view = new Int32Array(buffer);

console.log(view);

view[0] = 0x24;
console.log(view[3]);
*/
