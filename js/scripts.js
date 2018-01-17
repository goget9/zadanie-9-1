// scripts.js


var triangle1Area = getTriangleArea(10, 15),
	triangle2Area = getTriangleArea(10, 20),
	triangle3Area = getTriangleArea(10, 25);
	
	function getTriangleArea (a, h) {
		return (a > 0) && (h > 0) ? a*h/2 : 'Nieprawidlowe dane';
	};

	console.log(getTriangleArea(10, 6));
