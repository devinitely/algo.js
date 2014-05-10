var array = [];
//var count = 1;

var populateArray = function()
{
	$.get('IntegerArray.txt', function(data){
	array = data.split('\n');
	//console.log(array);
	mergeSort(array);
	});
}

var mergeSort = function(arr)
{
	//console.log("arr.length =" + arr.length);
	if(arr.length <= 1)
		return arr;

	var left = arr.slice(0, arr.length/2);
	var right = arr.slice(arr.length/2, arr.length);
	
	//console.log("New Iteration: " + count++ + "!");
	//console.log(left);
	//console.log(right);

	return merge(mergeSort(left), mergeSort(right));
}

var merge = function(left, right)
{
	var result = [];
//	console.log("left.ln" + left.length);
//	console.log("right.ln" + right.length);

	while(left.length && right.length)
	{
//		console.log("left && right: " + count++);
		if(left[0] <= right[0])
		{
			result.push(left.shift());
		}
		else
		{
			result.push(right.shift());
		}
	}
	while(left.length)
		result.push(left.shift());
	while(right.length)
		result.push(right.shift());

	//console.log(result);
	return result;
}

