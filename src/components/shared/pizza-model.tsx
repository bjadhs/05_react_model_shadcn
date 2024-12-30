import Image from '@/assets/pizza.jpg';
import { ShoppingCartIcon } from 'lucide-react';
import { Button } from '../ui/button';
import ChooseSize from './choose-size';
import ChooseToppings from './choose-toppings';

const PizzaModel = () => {
  return (
    <div className='flex items-center'>
      <div className='w-1/3 bg-white'>
        <img src={Image} alt='Pizza' width={400} height={400} />
      </div>
      <div className='w-2/3 p-4'>
        <h1 className='font-semibold'>Magarita pizza</h1>
        <p className='font-thin text-gray-700 text-xs'>
          This is a very healthy pizza
        </p>
        <br />
        <ChooseSize />
        <ChooseToppings />
        <div className='flex items-center justify-between'>
          <p className='text-md font-semibold'>$40</p>
          <Button className='bg-primary' size='lg'>
            <ShoppingCartIcon size={24} />
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PizzaModel;
