const arr =["anil" , "sunil" , "sipun" ,"saroj" ,"gudu" , "gugul"];
//that above method for general 
 const Name = new Array(1 ,2 ,3 ,4 ,5);//1,2,3,4,5 this are the arguments
 //two methods of creating array
//  console.log(arr , Name);
//  console.log(arr[0]);
//  const arrayElement = (){
//     for (let i = 0; i < arr.length; i++) {
//        return <li>array[i]</li>;
        
//     }
//  }//that code should be write in the div of index after 
//  console.log(arrayElement)

//array iteration

// let indeX = arr.forEach(function (value) {
//     console.log(value);
    
// })
// let index2 = Name.map((s) =>{
//     console.log(s);
// })
// let ind = Name.map((s) =>{
//     let val ;
//     val = s+1;
//     console.log(val);
   
  
   
// })
// // console.log(ind)
// let ar =[] ;
// ar.push(ind)
// console.log(ind);

// Name.forEach((value ,index ,arrray)=> {
//       arrray[index] = value +1
// });
// console.log(Name);



//This is using for loop
// let emp = []
// for (let i = 0; i < Name.length; i++) {
//     emp.push(Name[i]+1);
//     }
// console.log(emp);


//using flatmap

let newArray = Name.flatMap((x)=>x+1);
console.log(newArray);


// filter method in array

//  Name.filter((val)=>{
//     return val < 4
//  })
//  console.log(Name)
