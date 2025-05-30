const outputEl = document.getElementById('output');
const runBtn = document.getElementById('runBtn');

function log(message) {
    outputEl.textContent += message + '\n';
}

runBtn.addEventListener('click', () => {
    outputEl.textContent = '';  // Clear previous output

    // Global Scope
    var globalVar = 'I am global';
    log(`Global variable: globalVar = "${globalVar}"`);

    function functionScopeExample() {
        // Function Scope (var)
        var functionVar = 'I am function scoped';
        log(`Inside function: functionVar = "${functionVar}"`);

        if (true) {
            // Block Scope (let, const)
            let blockVar = 'I am block scoped (let)';
            const blockConst = 'I am block scoped (const)';
            log(`Inside block: blockVar = "${blockVar}"`);
            log(`Inside block: blockConst = "${blockConst}"`);
        }

        // Trying to access blockVar outside the block will cause error if uncommented:
        // log(blockVar); // ReferenceError

        // functionVar is accessible here
        log(`Still inside function: functionVar = "${functionVar}"`);
    }

    functionScopeExample();

    // functionVar is NOT accessible here (would cause error if uncommented)
    // log(functionVar); // ReferenceError

    // globalVar is accessible here
    log(`Outside function: globalVar = "${globalVar}"`);
});
