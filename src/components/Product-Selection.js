import Autocomplete from './Autocomplete';
import Card from './Card';
import { useState } from 'react';

export default function ProductSelection() {
  const [addedProducts, setAddedProducts] = useState([]);

  const removeProduct = (product) => {
    const modifiedProducts = addedProducts;
    const index = modifiedProducts.findIndex((x) => x.id === product);
    if (index > -1) {
      modifiedProducts.splice(index, 1);
    }
    setAddedProducts([...modifiedProducts]);
  };

  const totalProductList = () => {
    const arr = [];
    for (let i = 0; i < 4; i++) {
      if (addedProducts.length > i) {
        arr.push(addedProducts[i]);
      } else arr.push({});
    }
    return arr;
  };

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
              {totalProductList().length > 0 &&
                totalProductList().map((x, i) => (
                  <Card
                    onRemoveProduct={(product) => removeProduct(product)}
                    product={x}
                    key={i}
                  />
                ))}
            </div>
          </div>
          <div className='text-center font-semibold color text-gray-400'>
            {addedProducts.length ? addedProducts.length : 'No'} Product
            {addedProducts.length > 1 || addedProducts.length === 0
              ? 's'
              : ''}{' '}
            Added
          </div>
        </div>
        <div className='w-1/2 flex justify-center'>
          <div className='w-6/12 pt-32'>
            <div className='rounded-lg bg-fuchsia-500 text-center w-16 text-white py-1 text-sm'>
              1 of 3
            </div>
            <div className='mt-4 text-3xl font-semibold'>
              Let's add your internal tools
            </div>
            <div className='mt-4 font-normal'>
              Search to quickly add products your team uses today. You'll be
              able to add as many as you need later but for now let's add four.
            </div>
            <div className='mt-4'>
              <Autocomplete
                onAddProduct={(product) =>
                  setAddedProducts([...addedProducts, product])
                }
                addedProducts={addedProducts}
              />
              <button
                className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 w-full disabled:opacity-25`}
                disabled={addedProducts.length !== 4}
                onClick={() => alert('API Call')}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
