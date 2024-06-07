import Footer from "./Footer";
import Navbar from "./Navbar";

function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <div className=" min-h-screen pt-20">
          <div className="container mx-auto py-12">
            <h1 className="text-3xl font-bold text-center mb-6">About Us</h1>
            <div className="max-w-3xl mx-auto p-8 rounded-lg shadow-2xl">
              <p className="text-lg mb-4">
                Welcome to our website! We are a passionate team dedicated to
                providing the best service and products to our customers.
              </p>
              <p className="text-lg mb-4">
                Our mission is to aim to make reading and learning accessible to everyone, every day.
              </p>
              <p className="text-lg mb-4">
              We are a team of book lovers and tech enthusiasts dedicated to providing a platform where you can explore, learn, and grow.
              </p>
              <p className="text-lg mb-4">
              Founded in 2024, Book Store began as a small project and has grown into a vibrant community of readers and learners worldwide.
Become part of our community. Follow us on social media and subscribe to our newsletter for updates and special offers.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
