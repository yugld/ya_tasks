const obj = { x: 15 };

function first() {
   return this.x; // 15
}

function second() {
    // return first.apply(obj);
	// return first.bind(obj)(a);
	// return ({...obj, ...first}).first()
	//return first.call(obj);

	return first.bind(obj)(); 
}
