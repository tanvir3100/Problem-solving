/**
 * -----------------------important Roles in javaScript ---------------------------'-
 * 1. for loop
 * const sum = [5, 3, 2, 1, 7];
 * for(let i = 0; i < sum.length; i++){
  console.log(sum[i])
  }
  Answer: 5 3 2 1 7



  2. forEach loop

  * const sum = [5, 3, 2, 1, 7];
  sum.forEach((element)=> {
  console.log(element * element)
  })

  Answer: 25 9 4 1 49

  3. Array.from
  -----This allows you to convert a string collection into an array-----
  let name = "tanvir"
  let arr = Array.from(name);
  console.log(arr)

  Answer: 'T', 'a', 'n', 'v', 'r', 'r';

  
  4.for......of
   * const sum = [5, 3, 2, 1, 7];

  -----it is the simplified version of for loop -------
  ---it will give you the same result as for loop give's you--
  for(let i of sum){
  console.log(i)
  }

    Answer: 5 3 2 1 7

  5.for......in
  * const sum = [5, 3, 2, 1, 7];
  -----it will print the index of the array or key of the array-----
  for(let i in sum){
  console.log(i)
  }

  Answer: 0  1  2  3  4

  //but if you need to use it like an for...of loop then you need to added sum[i]
  then it will give you the same result
  for(let i in sum){
  console.log(sum[i])
  }

  Answer: 5 3 2 1 7

*/