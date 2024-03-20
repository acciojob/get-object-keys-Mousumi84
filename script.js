const student = {
	name: "Abcd",
}

Object.prototype.getKeys= function() {
	let array=[];

    let ar= Object.entries(this);

     for(let i=0;i<ar.length;i++) {
         let key=ar[i][0];

         array.push(key);
     }

    return array;
}

student.getKeys();