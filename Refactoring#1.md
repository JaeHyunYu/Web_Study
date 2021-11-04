# *Chapter 1*
## Preview

<span style="color:blue">Before start Refactoring, make test to check code.(for self-checking)</span>

As a human, there are always some mistakes.
> * Return specific value(such as string) to each function.
>> * Compare the return value after refactoring.
>> *  After check the function, you have ro naming it.
> * Even if a very small refactoring, observe 'compile-test-commit' step.
>> * Mistake is made very easily.
>> * 'compile-test-commit' step makes you fix code and modify quickly
> * When refactoring a long code/function, separate different parts of the code.
> * Make variable name clear!
>> * Good code should clearly communicate what it is doing
>> * Delete unused variables -> Unnecessary variables make code dirty.
> * Do not afraid using 'repeating a loop'
>> * The performance of SW usually depends on just a few specific parts of the code.
>>> But 'Mostly' not 'always'!
>>> If some Refactoring make code performance low, then just go back to last 'commit'
> * Brevity is the soul of with, but clarity is the soul of evolvable SW.
>> * Adding the modularity is very helpful.
