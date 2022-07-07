import './styles.css';
export default function Card({ product, onRemoveProduct }) {
  return (
    product && (
      <div className='rounded overflow-hidden shadow-xl w-2/5 flex justify-center flex-col my-10 mx-4'>
        <div className='flex justify-center'>
          <img
            className='w-full product-image'
            src={product.image ? product.image : '/images/plus.png'}
            alt={product.id}
          />
        </div>
        <div className='px-6 py-4 text-center h-7 my-5'>
          <div
            className={`font-bold text-xl mb-2 ${!product.id && 'invisible'}`}
          >
            {product.name}
          </div>
        </div>
        <div
          className={`py-2 flex justify-center ${!product.id && 'invisible'}`}
        >
          <div
            onClick={() => onRemoveProduct(product.id)}
            className='cursor-pointer flex'
          >
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5 mt-0'
                fill='none'
                viewBox='0 0 24 24'
                stroke='red'
                strokeWidth='2'
              >
                <path d='M6 18L18 6M6 6l12 12' />
              </svg>
            </div>
            <div className='text-center pl-1 text-sm font-semibold color text-gray-400'>
              Remove
            </div>
          </div>
        </div>
      </div>
    )
  );
}
