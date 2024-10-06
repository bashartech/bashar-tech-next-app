"use client"
import Link from "next/link"
import { useEffect, useState } from "react";
import cssStyle from "./about.module.css"

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
<h1 className="aboutH1">About Us</h1>
<p className={cssStyle.aboutP}>
With two years of devoted insight in web advancement, I spend significant time in making dynamic and responsive sites that upgrade client commitment. My skill envelops an expansive scope of innovations, including HTML, CSS, JavaScript, and TypeScript, permitting me to fabricate strong and viable web applications. Utilizing Next.js, I convey superior execution applications with upgraded server-side delivering, guaranteeing a consistent client experience. Furthermore, my capability in Tailwind CSS empowers me to create outwardly engaging and present day plans custom fitted to address client issues. I&apos;m focused on remaining refreshed with the most recent industry patterns and best practices to give creative arrangements that surpass client assumptions. Whether you really want an individual portfolio, an internet business stage, or a business site, I&apos;m here to change your thoughts into reality with incredible skill and innovativeness.

</p>

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
