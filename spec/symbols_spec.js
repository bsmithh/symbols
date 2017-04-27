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
		var emoji = "<3";
		expect(symbols.emoji(str)).toBe("<3");
	});

	it("can convert string to show the action it is describing", () => {
		let str = "smile";
		var emoji2 = ":)"
		expect(symbols.emoji2(str)).toBe(":)");
		let str2 = "wink";
		var emoji3 = ";)"
		expect(symbols.emoji3(str2)).toBe(";)");
	});
});