import { useEffect , useState } from 'react'
import axios from "axios"
import { useParams } from 'react-router-dom'

export default function Products() {

const { CategoryName } = useParams()
const [products, setProducts] = useState([])
 useEffect (() => {
  axios.get(`https://dummyjson.com/products/category/${CategoryName}`).then(json => setProducts(json.data.products))
}, [CategoryName])
 

  return (
    <div className="container">
    <div className="my-5 text-center">
        <h1>{CategoryName}</h1>
        <p className="text-secondary">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat, officia nihil! Nemo sunt reprehenderit voluptates amet itaque libero in unde, molestias illo veniam, dolore veritatis eaque ipsum. Molestiae, nam architecto!</p>
    </div>

    <div className="row">
        {
            products.map((val, key) =>

                <div className="col-md-6 my-4" key={key}>
                    <Link className='text-decoration-none' to={`/products/${val.id}`}>
                        <Card>
                            <Card.Img variant="top" src={val.thumbnail} />
                            <Card.Body>
                                <Card.Title>{val.title} - {val.price}$</Card.Title>
                                <Card.Text>{val.description}
                                </Card.Text>
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

  