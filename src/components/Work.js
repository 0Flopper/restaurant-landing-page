import React from 'react'
import PickMeals from '../Assets/pick-meals-image.png' 
import ChooseMeals from '../Assets/choose-image.png'
import DeliverMeals from '../Assets/delivery-image.png'

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: 'Pick Meals',
            description: 'Choose from our menu of delicious meals prepared by our chefs.'
        },
        {
            image: ChooseMeals,
            title: 'Choose Meals',
            description: 'Select your favorite meals and customize them to your taste.'
        },
        {
            image: DeliverMeals,
            title: 'Deliver Meals',
            description: 'Enjoy fast and fresh delivery right to your doorstep.'
        }   
    ]
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Work</p>
            <p className='primary-heading'>How It Works</p>
            <p className="primary-text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
            </p>
        </div>
        <div className='work-section-bottom'>
            {workInfoData.map((data) => (
                <div className='work-section-info'> 
                    <div className='info-boxes-img-container'>
                        <img src={data.image} alt={data.title} />
                    </div>
                    <h2>{data.title}</h2>
                    <p>{data.description}</p> 
                </div>
            ))}
        </div>
    </div>
  )
}

export default Work