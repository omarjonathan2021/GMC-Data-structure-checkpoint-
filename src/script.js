// For Problem 2

// Function to calculate the dot_product of two vectors
function dot_product(v1, v2) {
    if (v1.length !== v2.length) // checks if the lengths of v1 and v2 are not equal 
    {
        throw new Error('Vector dimensions must match for dot product calculation.')
    }// this check ensures that the vectors provided to the dot_product function have matching dimensions, which is a prerequisite for calculating the dot product. If the dimensions don't match, it raises an error to alert the user of the problem.

    let result = 0; 
    for (let i = 0; i < v1.length; i++) {
        result += v1[i] * v2[i];
    }

    return result;
}

// Function to check if two vectors are orthogonal 
function areVectorsOrthogonal(v1, v2) {
    const dotProduct = dot_product(v1, v2);
    return dotProduct === 0; // checks if the dot product is equal to zero, indicating that the vectors are orthogonal. If yes, it returns true; otherwise, it returns false.
}

//  Illustration using 2 examples vector1 & vector2
const vector1 = [2, 3, -1];
const vector2 = [1, -1, 1];

console.log('Vector 1:', vector1);
console.log('Vector 2:', vector2);

const isOrthogonal = areVectorsOrthogonal(vector1, vector2); // We then call the `areVectorsOrthogonal` function with these vectors to determine if they are orthogonal.

if (isOrthogonal) {
    console.log('The vectors are orthogonal.');
} else {
    console.log('The vectors are not orthogonal.');
}
