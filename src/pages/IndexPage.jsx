import "../css/home.css";
import "../css/about.css";
import "../css/brief.css";
import "../css/whybuy.css";
import "../css/takeproduct.css";
import "../css/testimonial.css";
import "../css/buying.css";
import "../css/footer.css";
import "../css/navbar.css";




import { useEffect } from "react";

const About = () => (
  <div className="about">
    <div className="about-left">
      <div className="aboutitem header">
        Discover the Wonderer's Pen
      </div>
      <div className="aboutitem smallinfo">
        Experience! Explore Captivating Insights, Inspiring Stories, and
        Thought-Provoking Articles.
      </div>
      <div className="aboutitem buy">
        <button className="button-home" onClick={() => {window.location.href = "/blogs";}}>
          Explore now
        </button>
      </div>
    </div>
      <div className="about-right">
        <img src="/writing.jpg" alt="Writing" className="side-image" />
        <img src="/writing2.png" alt="Writing small" className="mobile" />
      </div>
  </div>
);



const Brief = () => {
  useEffect(() => {
    const typingElement = document.querySelector('.typing-text');
    typingElement.addEventListener('animationend', () => {
      typingElement.classList.add('finished'); 
    });
  }, []);
  return (
    <div className="brief">
      <div className="left">
      <img src="/globe.jpg" alt="globe" className="left-image" />
      </div>
      <div className="right">
        <p className="typing-text">
          In the hustle of the 21st century, where schedules are demanding and time is of the essence, 
          The Wonderer's Pen stands as your go-to destination for a different kind of shopping - a shopping spree for ideas, knowledge, and inspiration.
        </p>
      </div>
    </div>
  );
};



const WhyBuy = () => (
  <div className="whybuy">
    <div className="brief1">
      <div className="brief11">
        <p>🌐 Unleash the Power of Words</p>
      </div>
      <div className="brief12">
        <p>
          Dive into a world of diverse perspectives, where thoughts take center
          stage, and conversations flourish.
        </p>
      </div>
    </div>
    <div className="brief2">
      <div className="brief21">
        <p>🚀 Elevate Your Mind</p>
      </div>
      <div className="brief22">
        <p>
          Just like a great product enhances your life, our blog content aims to
          elevate your thoughts and broaden your horizons.
        </p>
      </div>
    </div>
    <div className="brief3">
      <div className="brief31">
        <p>💬 Join the Conversation</p>
      </div>
      <div className="brief32">
        <p>
          Engage with our community and be a part of discussions that matter. We
          believe in the exchange of ideas as the ultimate currency of the
          digital era
        </p>
      </div>
    </div>
  </div>
);



const TakeProduct = () => (
  <div className="takeproduct">
    <div className="takeproducthead">Carry a notebook with You Everywhere</div>
    <div className="takeproductinfo">
      "Empower your journey with the wonderer's pen, your constant companion for
      boundless insights and inspiration. Whether you're on a commute or
      savoring a quiet moment, let us be your go-to source, making
      every place and every moment an opportunity to discover, learn, and grow."
    </div>
  </div>
);



const Testimonial = () => (
  <div className="testimonial">
    <div className="testimonialcomment">
      " Love The Wonderer's Pen. So nice! So good! Could not live without! "
    </div>
    <div className="testimonialcustomer">
      <span className="bouncing-customer">- Satisfied Customer</span>
    </div>
  </div>
);




const Buying = () => (
  <div className="buying">
    <div className="buyinghead">Why are you still reading</div>
    <div className="buyingbutton">
        Dive into the Wonderer's Pen now and pen your note NOW!
    </div>
  </div>
);



const IndexPage = () => (
  <div className="home-body">
    <About />
    <Brief />
    <WhyBuy />
    <TakeProduct />
    <Testimonial />
    <Buying />
  </div>
);



export default IndexPage;
