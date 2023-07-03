import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';




export default function CategoryPage() {


const {categoryName} = useParams()
const [products,setProducts] =useState([])

useEffect(() =>{
    axios.get(`https://dummyjson.com/products/category/${categoryName}`)
    .then(json => setProducts(json.data.products))

},[categoryName])

  return (
    <div className="container">
        <div className="my-5 text-center" >
            <h1>{categoryName.toUpperCase()}</h1>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, repellendus commodi! Unde iusto, ratione, consectetur eius totam nobis modi facilis, dolores quam ab est.</p>
        </div>
        <div className="row">
           {
            products.map((val,key)=>
            
            <div className="col-md-6 my-4" key={key}>
          <Link className='text-decoration-none' to={`/products/${val.id}`}>
          <Card>
       <Card.Img variant="top" src={val.thumbnail}/>
      <Card.Body>
        <Card.Title>{val.title} -${val.price}</Card.Title>
        <Card.Text>
         {val.description}
        </Card.Text>
        <Button variant="primary">View Item</Button>
        
      </Card.Body>
    </Card> 
          </Link>
                
                
                
                
                
                
                
       


            </div>
            
            
            )

           } 
            
        </div>





    </div>
  )
}
