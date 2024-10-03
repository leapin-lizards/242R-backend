//assignment 2.1
const factorial = n => !(n > 1) ? 1 : factorial(n - 1) * n;


const permutation=(n,r)=>{
    return factorial(n)/factorial(n-r);
};
const multiPermutation=(n,r)=>{
    return Math.pow(n,r);
};

const combination=(n,r)=>{
    return factorial(n)/(factorial(n-r)*factorial(r));
};
const multiCombination=(n,r)=>{
    return factorial(n+r-1)/(factorial(n-1)*factorial(r));
};

module.exports={
    permutation,
    multiPermutation,
    combination,
    multiCombination,
};