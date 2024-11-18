

                    // ARRAY OF OBJECT 
// const arr =[{
//     name:"nayeem",
//     address:"damra",
//     age:26,
//     nayem: function(){
//         console.log("all right");
        
//     }},
//     {
//         name:"nayeem",
//         address:"damra",
//         age:26,
//         nayem: function(){
//             console.log("all right");
//         }    

// }]
// console.log(arr);
 
//                 //  2D arrays
// const newarra =[[10,20,30,],[40,50,60],[70,80,90]]

                //  2D arrays ta loop

// const newarr =[[10,20,30,],[40,50,60],[70,80,90]]
//     for(const arr of newarr){
//         for(const ar of arr){
//             console.log(ar);
            
//         }
//     }

            //  &&&&&&&&&&&&
              // নেস্টেড লুপ

// const newarr =[[10,20,30,],[40,50,60],[70,80,90]]
   
//   for(let i=0;i<newarr.length;i++){
//     // console.log(newarr[i]);
//     for(let k= 0;k<newarr[i].length;k++){
//         console.log(newarr[i][k]);

//     }    
//   }

                //   Higher order function / হায়ার অর্ডার ফাংশন

//  function names(a,b) {
//     return a+b
    
//  }  
//  function  sumss(c,d,another) {
//     const f = c+d;
//     const g =c-d;
//     function multip() {
//         const e = another(f,g)
//         const result = e*f*g;
//         return   result;    
//     }
//      return multip;
    
//  }
//  let result1 = sumss(10,20,names)
//  console.log(result1());
 


               //    arrow function / এরো ফাংশন

// let naym = (pra,pra2)=>
//     pra + pra2;


//  console.log(naym(10,20));
 

             
                        //  Disstructuring / ডিসস্ট্রাক্টারিং

 
// const obje ={
//     name : "nayeem",
//     phone : "0123648989",
//     profession : "student",
//     bondhuBandhob :[ "abul","kabul","cabul","raju","chulbul"],
//     subject : function () {
//         const nam = "nabin"
//         console.log(nam); 
//     },
   
// }  
//                      //  Disstructuring {object} ডিক্লিয়ার

// const {name,phone,profession,bondhuBandhob,subject} = obje ;   

// subject()

//               //  Disstructuring [arrray] ডিক্লিয়ার

// let array = [25,30,50,60,70,80,90,100]
//  const [n1,n2,n3,n4,n5,n6,n7,n8] = array;
//    console.log(n5);
   

                //   Spread operator / স্পিড অপারেটর [...]

// const newarr = [25,30,50,60,70,80,90,100]
// let arrs =[20,... newarr,105];
// arrs.push(110);
// arrs.unshift(15);
//                                              //    arrs.splice(2,55);

// console.log(arrs);


                        //   MAP / এক ধরনের লুপ

//  let arrr = [25,30,50,60,70,80,90,100]   
//  let result = arrr.map (ar=>ar*2)  
//  console.log(result);
                   

                            //  filter / 

//   let arrr = [25,30,51,61,70,81,90,100]   
// //  let result = arrr.filter (ar=>ar<70);
// //  let result = arrr.filter (ar=>ar%2 ===0);
// //  let result = arrr.filter (ar=>ar%2 !==0);
//  let result = arrr.filter (ar=>ar>51);
//  console.log(result);
                             


                        //    FIND / 

//  let arrr = [25,30,51,61,70,81,90,100]  
// //  let result = arrr.find (ar=> ar>70)  
//  let result = arrr.find (ar=> ar<70)  
//  console.log(result);



                    //    FOR-EACH / 

//  let arrr = [25,30,51,61,70,81,90,100]  
//  let result = arrr.forEach (ar=> ar*2)  
//  console.log(result);