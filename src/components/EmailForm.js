import React, { useState } from "react";
import { sendEmail } from "../utils";
import "bootstrap/dist/css/bootstrap.min.css";

export default function EmailForm() {
    const [ emailMessage, updateEmail ] = useState(null);

    return (
        <div id="email-form">
            <h3>Share your email address for Shave Dave updates and news.</h3>
            <div>
                <label>email: </label>
                <input type="text" id="email-input" name="email-input" className="email-input" placeholder="enter email here"></input>
                <button type="button" className="btn btn-primary btn-email" onClick={() => sendEmail({ updateEmail })} >Submit</button>
                {/* {emailSucceeded === true ? 
                    <h3>Good news, you're on our mailing list.  You'll hear from us soon.</h3>
                :
                    <h3 id="email-confirm">Something went wrong.  Try again.</h3>
                } */}
            </div>
            <h3>{emailMessage}</h3>
        </div>
    );
}
