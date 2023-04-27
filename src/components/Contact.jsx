import React from "react";

export default function Contact() {
    return (
        <div className="contact-container">
            <div className="form-container">
                <form className="form-action" action="/action_page.php">
                    <label  for="name"></label>
                    <input className="form" type="text" id="name" placeholder="Enter your Name" />
                    <label  for="email"></label>
                    <input className="form" type="text" id="name" placeholder="Enter a valid email address" />
                    <label  for="textArea"></label>
                    <textarea className="form" name="textArea" id="textArea" cols="30" rows="10"></textarea>
                    <input id="button"className="form" type="submit" value="Submit" />
                </form>
            </div>
            <div className="contact-info">
                <h1>CONTACT US</h1>
                <p>pictures of social media</p>
                <p>Email: pedro.orvalho@gmail.com</p>
                <p>Phone: +46 72 547 22 97</p>
            </div>
        </div>
    );
}