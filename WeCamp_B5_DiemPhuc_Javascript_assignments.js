// TWOSUM

function twoSum(nums, target) {
    if (nums.length < 2) {
        return "Can not form an expression."
    }
    else {
        for (let i = 0; i < nums.length; i++){
            for (let j= i+1; j <= nums.length; j++){
                if (nums[i] + nums [j] == target){
                    return [i,j]
                }

            }
        }
    }
    return -1

}


function twoSumMap(nums, target) {
    if (nums.length < 2) {
        return "Can not form an expression."
    }
    else {
        const map = new Object()
        for (let i = 0; i < nums.length; i++) {
            if (map.hasOwnProperty(nums[i])) {
                return [i, map[nums[i]]]
            }
            map[target - nums[i]] = i  
        }
    }
    
    return -1
}



nums = [11,-1,10,15]
target = 9

console.log({twoSum: twoSum(nums, target), twoSumMap: twoSumMap(nums, target)})



// VALID PARENTHESE

function validParenthese(input) {
    const dict = {
        '(': -1,
        ')': 1,
        '[': -2,
        ']': 2,
        '{':-3,
        '}': 3
    }

    if (input.length % 2 !=0 || input.length < 2 ) {
        return false
    }
    
    const newInput = new Array()
    var total = 0

    for (let i = 0; i < input.length; i++){
        newInput[i] = dict[input[i]]
        total += newInput[i]
    }

    if (total !=0){
        return false
    }

    const stack = new Array()
       for (let i = 0; i < newInput.length; i++){
            let bracker = newInput[i]
            if (bracker < 0){
                stack.push(bracker)
            } else {
                if (bracker + stack.at(-1) == 0){
                    stack.pop()
                } else {
                    return false
                }
            }
       }
    return stack.length === 0   
}


function validParentheseWithHint(input) {
    const dict = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    let stack = []
    
    if (input.length %2 !=0 || input.length < 2){
        return false
    }

    for (let i = 0; i < input.length; i++) {
        let bracker = input[i]

        if (dict[bracker]){
            stack.push(bracker)
        } else {
            let last = stack.at(-1)
            if (dict[last] == bracker){
                stack.pop()
            } else {
                return false
            }
        }
    }
    return stack.length === 0
}



input1 = [ '{']
input2 = ['[', ']', '(']
input3 = ['[',']', '{', ')']
input4 = ['[',']', '}', '{']
input5 = ['[',']', '{', '(',')', '}']


console.log({
    Solution1: {
        Testcase1: validParenthese(input1),
        Testcase2: validParenthese(input2),
        Testcase3: validParenthese(input3),
        Testcase4: validParenthese(input4),
        Testcase5: validParenthese(input5)
    },
    Solution2: {
        Testcase1: validParentheseWithHint(input1),
        Testcase2: validParentheseWithHint(input2),
        Testcase3: validParentheseWithHint(input3),
        Testcase4: validParentheseWithHint(input4),
        Testcase5: validParentheseWithHint(input5)
    
    }
})

