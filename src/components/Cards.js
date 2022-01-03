import React from 'react'
import Card from './CardItem'
import img1 from '../assets/image1.jpg'
import img2 from '../assets/image2.jpg'
import img3 from '../assets/image3.jpg'

export default function Cards() {
    return (
        <div className='container d-flex justify-content-center h-100 align-items-center'> 
            <div class="row">
                <div class="col-md-4">
                    <Card 
                    src={img1}
                    title='Amazing'
                    text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, alias tenetur. Perspiciatis cumque libero aspernatur commodi natus, explicabo, dolorem nisi maiores voluptatem officia modi eius esse necessitatibus consectetur quo. Culpa.'
                    />
                </div>

                <div class="col-md-4">
                    <Card 
                    src={img2}
                    title='Great'
                    text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, alias tenetur. Perspiciatis cumque libero aspernatur commodi natus, explicabo, dolorem nisi maiores voluptatem officia modi eius esse necessitatibus consectetur quo. Culpa.'
                    />
                </div>
                
                <div class="col-md-4">
                    <Card 
                    src={img3}
                    title='Awesome'
                    text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, alias tenetur. Perspiciatis cumque libero aspernatur commodi natus, explicabo, dolorem nisi maiores voluptatem officia modi eius esse necessitatibus consectetur quo. Culpa.'
                    />
                </div>
            </div>
        </div>
    )
}
