import React from 'react'
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


export default function CategorySection() {
 
    const [categories, setCategories] = useState([])
    useEffect(() => {
    axios.get('https://dummyjson.com/products/categories')
    .then(json => setCategories(json.data))
    
    },[])
    
      return (
        <>
        <div className="container">
            <div className="my-5 text-center">
                <h1>
                    Categories
                </h1>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat consequuntur deserunt illum aut quaerat sunt sapiente ab ea tenetur magnam laudantium iusto neque beatae qui quae dolorem nam minima esse, atque nihil vel enim omnis deleniti. Saepe veniam vero dolore eaque nam doloribus, quidem possimus a omnis sed nulla consectetur!</p>
            </div>
    
            <div className="row">
               {
    
    categories.map((val, key) =>
    
        <div className="col-md-6 my-4" key={key}>
        <Link className='text-decoration-none' to={`/products/category/${val}`} >
        <Card >
    {/* <Card.Img variant="top" src={val.thumbnail}  />    */}
    <Card.Body>
    <Card.Title>{key + 1} - {val.toUpperCase().replace('-', ' ')}</Card.Title>
    <Card.Text>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae architecto incidunt aliquid ducimus excepturi.  
    </Card.Text>
   <Button variant="info" style={{marginLeft:"180px"}}>Shop now</Button>
    </Card.Body>
    </Card>
        </Link>
        </div>
    )
         }
            </div>
        </div>
        </>
      )
    }
   
 