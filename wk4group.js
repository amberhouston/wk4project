window.onload = () =>
	//the function called when Calculate button is clicked.
	{
		
		document.querySelector('#calculate').onclick = calculateTip;
	}


    //calculator selectors
function calculateTip() {
	let amount = document.querySelector('#amount').value;
	let guests = document.querySelector('#guests').value;
	let service = document.querySelector('#services').value;

    //Quality  of service
	console.log(service)

	if (guests === '1')
		document.querySelector('#each').style.display = 'none';
	else
		document.querySelector('#each').style.display = 'block';

	//calculations and fixed decimals
	let total = (amount * service) / guests;
	total = total.toFixed(2);

	//not sure what this is but code doesn't run right without it
	document.querySelector('.tip').style.display = 'block';
	document.querySelector('#total').innerHTML = total;
}
