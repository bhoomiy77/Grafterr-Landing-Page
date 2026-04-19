import GradientText from "../ui/GradientText";
import GradientButton from "../ui/GradientButton";
import FloatingShape from "../ui/FloatingShape";

const HeroSection = () => {
  return (
    <section className="hero">
      <FloatingShape className="shape shape1" />
      <FloatingShape className="shape shape2" />

      <h1 className="hero-title">
        Looking for a new <br />
        <GradientText>technology provider?</GradientText>
      </h1>

      <p className="hero-subtext">
        Explore our success stories to see how businesses like yours
        have transformed with Grafterr's technology.
      </p>

      <GradientButton>Learn more</GradientButton>
    </section>
  );
};

export default HeroSection;