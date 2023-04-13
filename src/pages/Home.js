import React from "react";

export const Home = () => {
  return (
    <div>
      <main>
        <section className="header">
          <h1>Welcome to UNTRides!</h1>
          <p>Join our community and share rides with ease.</p>
          {/* Add your call to action button here */}
          <button>Sign up</button>
        </section>
        <section className="bottom-section">
          <h2>Why Choose UNTRides?</h2>
          <ul>
            <li>Convenient and affordable</li>
            <li>Safe and reliable</li>
            <li>Environmentally friendly</li>
          </ul>
        </section>
      </main>
      <footer>
        {/* Add your footer content here */}
        <p>Contact us: example@example.com</p>
      </footer>
    </div>
  );
};

export default Home;
