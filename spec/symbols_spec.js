// import code to be tested
var symbols = require("../index");

describe("A program to demonstrate the concept of symbols", () => {

	it("can convert letters into names", () => {
		let x = "Bri";
		let y = "Anna";
		expect(symbols.NewName(x, y)).toBe("BriAnna");
	});

	it("can convert a string to all lowercase letters", () => {
		let str = "BriAnna";
		var lower = str.toLowerCase();
		expect(symbols.lower(str)).toBe("brianna");
	});

	it("can convert the new string to a heart", () => {
		let str = "brianna";
		var emoji = "U+2764";
		expect(symbols.emoji(str)).toBe("U+2764");
		expect("U+2764").toBe(❤️);
	});
});