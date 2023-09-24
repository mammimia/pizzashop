import Banner from './components/layout/Banner';
import Pizza from './components/pizza/Pizza';
import { pizzas } from './data/pizzas';

export default function Home() {
  return (
    <section>
      <Banner />
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-[15px] md:grid-cols-3 xl:grid-cols-4 xl:gap-[30px] py-12">
          {pizzas.map((pizza) => {
            return <Pizza key={pizza.id} pizza={pizza} />;
          })}
        </div>
      </div>
    </section>
  );
}
