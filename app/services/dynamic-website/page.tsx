"use client"
import Link from "next/link"
import { useEffect, useState } from "react";

function AboutPage() {
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
       <Link href={"/"}> <li id="about">About</li> </Link>
       <Link href={"/services"}> <li id="services">Services</li> </Link>
       <Link href={"/contact"}> <li id="contact">Contact</li> </Link>
       <Link href={"/faq"}> <li id="faq">FAQ</li> </Link>
   </nav>
   <i className="fa-solid fa-moon" id="mode"></i>
   <Link href={"/contact"}><button>Contact us</button></Link>
</div>

 <div className="box">
    <div className="boxA">
<h1 className="aboutH1">Dynamic Website</h1>
<p>
Our dynamic websites are designed to provide real time updates and interactive features that captivate your audience. By incorporating engaging elements such as live content user generated data and personalized experiences we ensure your site remains fresh and relevant. Our approach not only boosts user interaction but also enhances your sites overall performance making it a valuable asset for your business.
</p>
<div className="buttons2">
<Link href={"/contact"}><button className="btn2">Contact us</button></Link>
</div>
    </div>
</div> 
<div className="box4">
<div className="box2">
   <div className="seperation"></div>
   <div>Up to 1,000 Clients</div> 
   <div className="seperation"></div>
   <div>30+ Services Available</div> 
   <div className="seperation"></div>
   <div>Imagination To Creativity</div> 
   <div className="seperation"></div>
  <div>Meet Expert Developers</div> 
</div>
</div>
   </div>
   </div>
  )
}

export default AboutPage
