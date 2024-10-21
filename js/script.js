function userForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const province = document.getElementById('province').value;
    const membership = document.querySelector('input[name="membership"]:checked').value;

    const output = `
        Full Name: ${firstName} ${lastName}<br>
        Email: ${email}<br>
        Address: ${address}, ${city}, ${province}<br>
        Membership: ${membership}
    `;

    document.getElementById('output').innerHTML = output;
}

function myExcelFuns() {
    const numberStr = document.getElementById('numbers').value.trim();
    if (!numberStr) {
        alert('Please enter some numbers.');
        return;
    }

    const numberArr = numberStr.split(' ').filter(num => num !== '').map(Number);
    let result;

    if (document.getElementById('sum').checked) {
        result = numberArr.reduce((acc, num) => acc + num, 0);
    } else if (document.getElementById('avg').checked) {
        result = numberArr.reduce((acc, num) => acc + num, 0) / numberArr.length;
    } else if (document.getElementById('max').checked) {
        result = Math.max(...numberArr);
    } else {
        result = Math.min(...numberArr);
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}