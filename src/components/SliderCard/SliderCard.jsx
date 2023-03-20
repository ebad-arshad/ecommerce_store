import './slider_card.css'

const SliderCard = ({ img }) => {
    return (
        <div className='flex-1 border-b-2'>
            <div className=''><img className='w-full object-contain' src={img} alt="" /></div>
            <div className='text-center mt-4 mb-10'>Computer Monitor & Laptop</div>
        </div>
    )
}

export default SliderCard