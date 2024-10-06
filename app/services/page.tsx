"use client"

import cssStyle from "./services.module.css"
import { useEffect, useState } from "react";
import Link from "next/link"
function ServicePage() {
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
       <span className="logoImg"><img src="" alt=""/></span>
       <div className="logo2">
       <span> Bashar Tech </span>
       
   </div>
</div>

   <nav className={cssStyle.list}>
   <Link href={"/home"}> <li id="home">Home</li> </Link>
       <Link href={"/about"}> <li id="about">About</li> </Link>
       <Link href={"/"}> <li id="services">Services</li> </Link>
       <Link href={"/contact"}> <li id="contact">Contact</li> </Link>
       <Link href={"/faq"}> <li id="faq">FAQ</li> </Link>
   </nav>
   <i className="fa-solid fa-moon" id="mode"></i>
   <Link href={"/contact"}><button>Contact us</button></Link>
</div>

<div className="box">
<div className="container">
        <div className="card1">
            <div className="title">Simple Website</div>
                <p>We create user-friendly, responsive websites that enhance your online presence seamlessly.</p>
                <Link href={"/contact"}><button>
                <div className="btn">
                Get Service
                    </div></button></Link> 
        </div>
        <div className="card1">
            <div className="title">Dynamic Website</div>
            <p>Our dynamic websites feature real-time updates and interactivity to engage your audience effectively.</p>
           <Link href={"/contact"}><button>
                <div className="btn">
                Get Service
                    </div></button></Link> 
        </div>
        <div className="card1">
            <div className="title">E-commerce Website</div>
            <p>We build secure, intuitive e-commerce sites to optimize user experience and boost your sales.</p>
            <Link href={"/contact"}><button>
                <div className="btn">
                Get Service
                    </div></button></Link> 
        </div>
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

export default ServicePage
