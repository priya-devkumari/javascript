//immediately invoke function expressions
(function chai() {
    console.log(`Database connceted`);
    
})();

( (name) => {
    console.log(`database connected two ${name}`);
    
} )("priya")
