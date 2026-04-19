import Carousel from "../ui/Carousel";
import useContent from "../../hooks/useContent";
import { fetchFeaturesContent } from "../../services/api";

const FeaturesSection = () => {
  const { data, loading } = useContent(fetchFeaturesContent);

  if (loading) return <p>Loading...</p>;

  return (
    <section className="features">
      <h2 className="features-heading">
        More ways <span>Grafterr</span> can help you grow your business
      </h2>

      <p className="features-subtext">
        An award-winning end-to-end restaurant technology & payments platform,
        designed to streamline food service and automate complex venue operations
      </p>

      <div className="line"></div>

      <Carousel items={data.products} />
    </section>
  );
};

export default FeaturesSection;