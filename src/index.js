module.exports = function check(str, bracketsConfig) {
	let brackets = {};

	bracketsConfig.forEach(pair => {
		brackets[pair[0]] = pair[1];
	});

	let stack = [];
	let copiesStack = [];

	for (let i = 0; i < str.length; i++) {
		if (Object.keys(brackets).includes(str[i]) && Object.values(brackets).includes(str[i]) && stack.includes(str[i])) {
			stack.pop();
		} else if (brackets.hasOwnProperty(str[i])) {
			stack.push(str[i]);
		} else if (brackets[stack[stack.length - 1]] === str[i]) {
			stack.pop();
		} else if (!stack.length) return false;
	};

	return stack.length > 0 ? false : true;
}
