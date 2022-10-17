import React from 'react'
// import { useState } from 'react'


function EasyAlgos() {
    // const [twoNumberSolutionBlur, setTwoNumberSolutionBlur] = useState(false);
    const twoSumExample = `
    array = [3, 5, -4, 8, 11, 1, -1, 6];
    targetSum = 10;

    function twoNumberSum(array, targetSum) {
        // code here
    }
    `
    const twoSumNested = `
    function twoSumNested(array, targetSum) {
        console.log("targetNumber:", targetSum)

        const newArrayResult = [];
        
           for (let index = 0; index < array.length - 1; index++) {
              let sum1 = array[index];
                console.log("sum1:", sum1)
             
              for (let j = index + 1; j < array.length; j++) {
                let sum2 = array[j];
                let result = sum1 + sum2;
                
                console.log("sum2:", sum2)
                console.log("result", result)
      
                if(result === targetSum){
                  console.log("twoSumResult", sum1 + " " + sum2)
                  newArrayResult.push(sum1)
                  newArrayResult.push(sum2)
                  return newArrayResult;  
                }
                console.log("finalResult;", newArrayResult)
            } 
         }
        return [];
    `

    const twoSumObject = `
    function twoNumberSum(array, targetSum) {
        console.log("data", array, "target", targetSum);
        let nums = {};
        
        for (let index = 0; index < array.length; index++) {    
          let num = array[index];
          let potentialMatch = targetSum - num;
          
          if(potentialMatch in nums){
            console.log("Final object data", nums)
            console.log("found two sums", [potentialMatch, num])         
            return [potentialMatch, num]
          }else{
            console.log("add to object", nums) 
            nums[num] = "check";
            
          } 
          
        }  
        
        return [];
      }
    `


    const twoSumPointers = `
    function twoNumberSum(array, targetSum) {
        function sortNumber(a, b) {
         return a - b;
        }

        array.sort(sortNumber);
        console.log(array);
        
        let startPointer = 0;
        let endPointer = array.length -1;
      
        while (startPointer < endPointer){
            let currentSum = array[startPointer] + array[endPointer];
            if(currentSum === targetSum){
              console.log("return both sums")
              return [array[startPointer], array[endPointer] ]
              
              }else if(currentSum < targetSum){
                  console.log("increase the left pointer")
                  startPointer += 1;
              }else if (currentSum > targetSum ){
                console.log("decrease the right pointer")
                  endPointer -= 1;
              }
          
        }
        return [];
      
      }
      
    `
    


  return (
    <div className='algorithm-container'>
        <h1>Easy Algorithms</h1>
        <section>
            <header>
                <h2>1. Two number sum</h2>
                
                <h3>Questions: </h3>
                <p>Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.</p>
                <h3>Solutions:</h3>
                <p>There is 3 ways to solve this algorithm. The questions may ask you to return the index or the numbers that equal to the target, therefore make sure that your return is either the numbers or the index's.</p>
                <h3>Category</h3>
                <p>Arrays</p>
                <aside>
                    <h3>Try it</h3>
                    <code>
                    <pre>
                        
                    <button  onClick={() => navigator.clipboard.writeText(twoSumExample)}>Copy</button>
                        <code>
                            {twoSumExample}
                        </code>
                    </pre>    
                    </code>
                </aside>
            </header>
          
                <ul>
                    <li>
                    <h4>Solution 1: Nested Loop</h4>    
                    <p>One way to solve this algorithm is with a new array, nested loop, variables and a conditional statement, and return. The nested loops will be use to track the two possible sums. The new array will contain the two numbers that are equal to the target. The conditional statement will be use to check when the two numbers are equal to the target.</p>
                        <pre>
                        <button>Show</button>

                            <button  onClick={() => navigator.clipboard.writeText(twoSumNested)}>Copy</button>
                            {/* <code style={ { filter: twoNumberSolutionBlur ? "blur(0px)" : "blur(5px)" }}> */}
                            <code>
                                {twoSumNested}
                            </code>
                        </pre>                    
                    </li>

                    <li>
                    <h4>Solution 2: Object</h4>    
                    <p>The second way to solve this algorithm is is by using an object, a loop, variables, and a conditional statement. The object to will be use to store the </p>
                        <pre>
                            <button  onClick={() => navigator.clipboard.writeText(twoSumObject)}>Copy</button>
                            <code>
                                {twoSumObject}
                            </code>
                        </pre>                    
                    </li>

                    <li>
                    <h4>Solution 3: Pointers</h4>    
                    <p>The last way possible way to solve this algorithm is with pointers, while loop, variables, and conditional statement. However this solutions will only work if the array is sorted. Therefore you most sort the array first. With the pointers you will set a start pointer that start that will move to the right and a end pointer that will move to the left. The while loop is to keep checking as log as the two pointer have not crossed each each other. The conditional statement will check if two numbers are equal to the target if they are not the pointers will need to move.</p>
                        <pre>
                            <button  onClick={() => navigator.clipboard.writeText(twoSumPointers)}>Copy</button>
                            <code>
                                {twoSumPointers}
                            </code>
                        </pre>                    
                    </li>
                
                
              
                </ul>
        </section>

        <section>
        <header>
                <h2>2. </h2>
                <h3>Questions: </h3>
                <p>Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.</p>
                <h3>Example:</h3>
                <p>array: [2,7,11,15] target: 9 </p>
                <h3>Solutions:</h3>
                <p>There is 3 ways to solve this algorithm. The questions may ask you to return the index or the numbers that equal to the target, therefore make sure that your return is either the numbers or the index's.</p>
                <aside>
                    <h3>Try it</h3>
                    <code>
                    <pre>
                                <button  onClick={() => navigator.clipboard.writeText(twoSumExample)}>Copy</button>
                                <code>
                                    {twoSumExample}
                                </code>
                            </pre>    
                    </code>
                </aside>
            </header>
        <ul>
                    <li>
                    <h4>Solution 1</h4>    
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit explicabo perspiciatis quam, culpa non earum tempore. Illum itaque corporis quia excepturi ut impedit corrupti blanditiis ipsam? Recusandae ab deserunt voluptatum?</p>
                        <pre>
                            <button  onClick={() => navigator.clipboard.writeText(twoSumExample)}>Copy</button>
                            <code>
                                {twoSumExample}
                            </code>
                        </pre>                    
                    </li>
            </ul>
        </section>


    </div>
  )
}

EasyAlgos.propTypes = {}

export default EasyAlgos
