export function sendEmail({updateEmail}) {
    const address = document.querySelector("#email-input").value;

    const url = 'https://shave-dave-server.herokuapp.com/api/emails/';

    const email = {
        address
    };

    const options = {
        method: 'POST',
        body: JSON.stringify(email),
        headers: {
            'Content-Type': 'application/json'
        }
    }

    fetch(url, options)
        .then(res => res.json())
        .then(res => {
            if (res.msg === "Email received") {
                updateEmail("Good news, you're on our mailing list.  You'll hear from us soon.");
            } else {
                updateEmail("Something went wrong.  Try again.");
            }
        })
}