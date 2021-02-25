module.exports = function check(str, bracketsConfig) {
    let stack = [];
    bracketsConfig = bracketsConfig.flat().join('');
    for (let i = 0; i < str.length; i = i + 1) {
        let char = str[i];
        let bracketIndex = bracketsConfig.indexOf(str[i]); 
        if (bracketIndex % 2 === 0) {
            stack.push(bracketIndex + 1);
        } else {
            if(stack.pop() !== bracketIndex) {
        return false;
        }
    }
    } 
    return stack.length === 0;
}
