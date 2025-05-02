import "../css/home.css";
import { useEffect } from "react";

const About = () => (
  <div className="about">
    <div className="aboutitem header">Discover the Wonderer's Pen</div>
    <div className="aboutitem smallinfo">
      Experience! Explore Captivating Insights, Inspiring Stories, <br /> and
      Thought-Provoking Articles.
    </div>
    <div className="aboutitem buy">
      <button
        className="button-home"
        onClick={() => {
          window.location.href = "/blogs";
        }}
      >
        Explore now
      </button>
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
        <i className="fas fa-globe-americas"></i>
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



const Reasons = () => (
  <div className="reasons">
    <div className="reasonshead">Reasons to Dive into The Wonderer's pen:</div>
    <div className="reasonss">
      <div className="reasons1">
        <ul>
          <li>
            ✨ It's the Best - A curated collection of the finest thoughts,
            ideas, and stories.
          </li>
          <li>
            😊 It Makes You Happy - Because a good read has the power to uplift
            your spirits.
          </li>
          <li>
            🌐 It Brings World Peace - By fostering understanding and empathy
            through shared experiences.
          </li>
          <li>
            🎁 It's Free! - The most valuable things in life often come without
            a price tag.
          </li>
        </ul>
      </div>
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
    <Reasons />
    <Buying />
  </div>
);

export default IndexPage;
