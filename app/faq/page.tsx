"use client"

import { useEffect, useState } from "react";
import Link from "next/link"
function FaqPage() {
  const [originalNavColor, setOriginalNavColor] = useState<string>("");

  useEffect(() => {
    // DOM manipulation logic
    const navElements = document.getElementsByTagName("nav") as HTMLCollectionOf<HTMLElement>;
    const changeMode = document.getElementById("mode") as HTMLElement | null;

    if (changeMode) {
      changeMode.onclick = function () {
        // Toggle dark-mode on the body
        document.body.classList.toggle("dark-mode");

        if (navElements.length > 0) {
          const navElement = navElements[0]; // Get the first 'nav' element

          // If original color is not stored, store it
          if (!originalNavColor) {
            const computedColor = window.getComputedStyle(navElement).backgroundColor; // Get original background color
            setOriginalNavColor(computedColor);
          }

          // Toggle between grey and original background color
          if (navElement.style.backgroundColor === "grey") {
            navElement.style.backgroundColor = originalNavColor; // Restore original color
          } else {
            navElement.style.backgroundColor = "grey"; // Set to grey
          }
        }
      };
    } else {
      console.error("Change mode button not found.");
    }
  }, [originalNavColor]); 

  return (
   
    <div>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <div className="main">
    <div className="navbar">
           <div className="logo">
       <span className="logoImg"></span>
       <div className="logo2">
        <span> Bashar Tech </span>
       
   </div>
</div>

   <nav>
   <Link href={"/home"}> <li id="home">Home</li> </Link>
       <Link href={"/about"}> <li id="about">About</li> </Link>
       <Link href={"/services"}> <li id="services">Services</li> </Link>
       <Link href={"/contact"}> <li id="contact">Contact</li> </Link>
       <Link href={"/"}> <li id="faq">FAQ</li> </Link>
   </nav>
   <i className="fa-solid fa-moon" id="mode"></i>
   <Link href={"/contact"}><button>Contact us</button></Link>
</div>

<div className="box">
<div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <ul>
            <li>
                <h4>What is web development?</h4>
                <p>Web development is the process of building and maintaining websites and web applications.</p>
            </li>
            <li>
                <h4>What technologies do you use?</h4>
                <p>We use the latest technologies such as HTML5, CSS3, JavaScript, React, Node.js, and more.</p>
            </li>
            <li>
                <h4>Do you provide ongoing support and maintenance?</h4>
                <p>Yes, we offer ongoing support and maintenance services.</p>
            </li>
            <li>
                <h4>How do I contact your support team?</h4>
                <p>You can contact us through our contact form or email.</p>
            </li>
            <li>
            <h4>How long does a typical project take?</h4>
<p>           A: Project timelines vary depending on the complexity of the project.
</p>            
</li>
        </ul>
    </div>

</div>
<div className="box4">
<div className="box2">
   <div className="seperation"></div>
   <div>Up to 1,000 Parts</div> 
   <div className="seperation"></div>
   <div>30+ Materials Available</div> 
   <div className="seperation"></div>
   <div>Available in 57 Countries</div> 
   <div className="seperation"></div>
  <div>42 Industrial Printers</div> 
</div>
</div>
   </div>
   </div>
  )
}

export default FaqPage
