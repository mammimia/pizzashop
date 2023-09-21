import Pizza from './components/Pizza';
import { pizzas } from './pizzas';

export default function Home() {
  return (
    <section>
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
