import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import PizzaModel from './components/shared/pizza-model';

const App = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <Dialog>
        <DialogTrigger>
          <Button variant='default'>Choose</Button>
        </DialogTrigger>
        <DialogContent>
          <PizzaModel />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default App;
