import React from "react";

const user = "starrykss";
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

function Footer() {
    return <footer>
        <p>Copyright ⓒ {currentYear}, {user} </p>
    </footer>;
}

export default Footer;