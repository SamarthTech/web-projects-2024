import amazone from "../assets/amazon.png";
import flipkart from "../assets/flipkart.png";
import shoe from "../assets/shoe_image.png";
import "./Body.css";

export function Body() {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="second-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icon">
            <img src={amazone} alt="" />
            <img src={flipkart} alt="" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src={shoe} alt="" />
      </div>
    </main>
  );
}
