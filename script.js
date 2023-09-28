// For Problem 1
function findDistinctSum() {

    const distinctSet = [];
    let sum = 0 // As given in the checkpoint instruction

    // function to Add distinct elements from set to the sum 
    function addDistinctElementsToSum(set) 
    
    {
        for (const element of set) // using the `for...of` loop to iterate over each element in the input set (`set`)
        { 

            if (!distinctSet.includes(element)) // Condition to check if the element is distinct
            {
                distinctSet.push(element); // we use the `push` to add the current element to the array of distinct elements (`distinctSet`)
                sum += element; // to add the value of the current element to the total sum.
            }
        }
    }

    // add the distinct elements from set1 to the sum 
    addDistinctElementsToSum(set1);

    // add distinct elements from set2 to the sum
    addDistinctElementsToSum(set2);

    return sum;

}


// now we run it 
const set1 = [3, 1, 7, 9];
const set2 = [2, 4, 1, 9, 3]
const result = findDistinctSum(set1, set2);

console.log('output:', result);