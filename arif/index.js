Number.prototype.plus = (function (num) {
	return this + num;
});

Number.prototype.minus = (function (num) {
	return this - num;
});

(2).plus(3).minus(1) // 4
