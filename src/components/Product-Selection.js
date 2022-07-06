import Autocomplete from './Autocomplete';
import Card from './Card';
import productList from './configs';
export default function ProductSelection() {
  return (
    <div className='container w-full mx-auto p-8 m-10 font-sans'>
      <div className='flex justify-between'>
        <div className='text-4xl font-bold'>axiamatic</div>
        <div className='text-gray-400 underline cursor-pointer'>Exit Setup</div>
      </div>
      <div className='columns-2 mt-12 flex'>
        <div className='w-1/2'>
          <div>
            <div className='p-10 flex flex-wrap'>
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
          <div className='text-center'>1 Product Added</div>
        </div>
        <div className='w-1/2 flex justify-center'>
          <div className='w-6/12 pt-32'>
            <div className='rounded-lg bg-fuchsia-500 text-center w-16 text-white py-1 text-sm'>
              1 of 3
            </div>
            <div className='mt-8 text-3xl font-semibold'>
              Let's add your internal tools
            </div>
            <div className='mt-4 font-normal'>
              Search to quickly add products your team uses today. You'll be
              able to add as many as you need later but for now let's add four.
            </div>
            <div className='mt-4'>
              <Autocomplete />
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 w-full'>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
