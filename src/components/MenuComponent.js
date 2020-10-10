import React,{ Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {
    constructor (props) {
        super(props);

        this.state = {
            dishes: [

                {
                    id: 0,
                    name: 'First Image',
                    image: 'https://dummyimage.com/300x300/6643f2/fff.png&text=01',
                    category: 'mains',
                    label: 'Hot',
                    price: '4.99',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500'
                },
                  {
                    id: 1,
                    name: 'Second Image',
                    image: 'https://dummyimage.com/300x300/6643f2/fff.png&text=02',
                    category: 'appetizer',
                    label: '',
                    price: '1.99',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500'
                }, 
                  {
                    id: 2,
                    name: 'Thrid Image',
                    image: 'https://dummyimage.com/300x300/6643f2/fff.png&text=03',
                    category: 'appetizer',
                    label: 'maor',
                    price: '2.22',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500'
                },
                  {
                    id: 3,
                    name: 'Fourth Image',
                    image: 'https://dummyimage.com/300x300/6643f2/fff.png&text=04',
                    category: 'appetizer',
                    label: 'fruits',
                    price: '2.72',
                    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500'
                }
            
            ]
        }
    }

    render () {
        const menu = this.state.dishes.map((dish) =>{
            return (
                <div key={dish.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name} />
                        </Media>
                        <Media body className="ml-5">
                             <Media heading> {dish.name}</Media>
                             <p>{dish.description}</p>
                        </Media>
                    </Media>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}

export default Menu;