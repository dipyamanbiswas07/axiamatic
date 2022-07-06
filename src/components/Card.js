import './styles.css';
export default function Card() {
  return (
    <div className='rounded overflow-hidden shadow-xl w-2/5 flex justify-center flex-col my-10 mx-4'>
      <div className='flex justify-center'>
        <img
          className='w-full product-image'
          src='/images/Slack.png'
          alt='Notion'
        />
      </div>
      <div class='px-6 py-4 text-center'>
        <div class='font-bold text-xl mb-2'>Notion</div>
      </div>
      <div className='text-center py-2'>Remove</div>
    </div>
  );
}
