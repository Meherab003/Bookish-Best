import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>BookishBest | About</title>
      </Helmet>
      <div className="flex flex-col gap-4 lg:gap-6 lg:w-11/12 mx-auto my-8">
        <div className="flex flex-col gap-3 bg-[#1313130D] p-3 rounded-xl border">
          <h1 className="text-3xl lg:text-4xl font-bold text-center">
            About Us
          </h1>
          <p className="text-[#131313CC] font-medium">
            Welcome to BookWorm Haven! At BookWorm Haven, we believe that books
            have the power to transport us to magical worlds, ignite our
            imaginations, and connect us with diverse perspectives. Our passion
            for literature drives us to create a haven where readers of all ages
            can explore, discover, and lose themselves in the written word.
          </p>
        </div>
        <div className="flex flex-col gap-3 bg-pink-100 p-3 rounded-xl border">
          <h1 className="text-3xl lg:text-4xl font-bold text-center">
            Our Mission
          </h1>
          <p className="text-[#131313CC] font-medium">
            Our mission is simple: to foster a love for reading. Whether you’re
            a seasoned bibliophile or a curious beginner, we’re here to curate
            an enchanting collection of books that will captivate your mind and
            touch your soul.
          </p>
        </div>
        <div className="flex flex-col gap-3 bg-green-100 p-3 rounded-xl border">
          <h1 className="text-3xl lg:text-4xl font-bold text-center">
            What Sets Us Apart
          </h1>
          <ul className="text-[#131313CC] font-medium list-disc flex flex-col gap-1 p-5">
            <li>
              Handpicked Selection: Our shelves are adorned with carefully
              selected titles across genres—classics, contemporary fiction,
              mysteries, romance, fantasy, and more. We believe in quality over
              quantity, so you’ll find only the most captivating reads here.
            </li>
            <li>
              Cozy Reading Nooks: Step into our cozy nooks, sip a cup of
              aromatic tea, and lose yourself in the pages of a novel. Our
              inviting ambiance encourages you to linger, explore, and immerse
              yourself in literary adventures.
            </li>
            <li>
              Community Events: Book clubs, author signings, poetry readings—we
              host a variety of events that celebrate the joy of reading.
              Connect with fellow book lovers, share insights, and expand your
              literary horizons.
            </li>
            <li>
              Knowledgeable Staff: Our passionate team of book enthusiasts is
              always ready to recommend hidden gems, discuss plot twists, and
              share their favorite reads. Ask us anything—we’re here to enhance
              your reading journey.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 bg-red-100 p-3 rounded-xl border">
          <h1 className="text-3xl lg:text-4xl font-bold text-center">
            Meet the Team
          </h1>
          <ul className="text-[#131313CC] font-medium list-disc flex flex-col gap-1 p-5">
            <li>
              Evelyn Harper (Founder & CEO): A lifelong bookworm, Evelyn dreamed
              of creating a sanctuary for fellow readers. Her love for
              storytelling and dedication to promoting literacy led to the birth
              of BookWorm Haven.
            </li>
            <li>
              Oliver Bennett (Head Librarian): Oliver’s encyclopedic knowledge
              of books is legendary. He can recite opening lines from obscure
              novels and always knows where to find that elusive title you’ve
              been searching for.
            </li>
            <li>
              Sophia Ramirez (Events Coordinator): Sophia infuses our events
              with magic. From themed book parties to midnight release
              celebrations, she ensures that every gathering at BookWorm Haven
              is unforgettable.
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 bg-blue-100 p-3 rounded-xl border">
          <h1 className="text-3xl lg:text-4xl font-bold text-center">
            Join Us on this Literary Journey
          </h1>
          <p className="text-[#131313CC] font-medium">
            Whether you’re seeking an old favorite or a fresh adventure,
            BookWorm Haven invites you to turn the page and embark on a
            delightful literary journey. Come, explore, and let the words weave
            their magic. Happy reading!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
