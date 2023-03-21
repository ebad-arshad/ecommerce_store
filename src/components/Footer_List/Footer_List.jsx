import './footer_list.css'

const Footer_List = ({ list, title, className }) => {
  return (
    <div className={className}>
      <div className='flex flex-col gap-4'>
        <b className='text-[#03041c] text-lg'>{title}</b>
        <ul className='p-0 flex flex-col gap-2 text-sm'>
          {list.map((item, index) => <li key={index} className='hover:text-[#f50963] cursor-pointer transition duration-300'>{item}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default Footer_List