import React from 'react';
// import axios from 'axios';
// import CategoryCard from './card';
import {MyContext} from '../../../App'
import {Container,Row ,Col , Card,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const uuidv1 = require('uuid/v1')

export  class DisplayCategoryBooks extends React.Component {
    constructor(props){
        super(props);
        // state = {
            //     data: [],
            
            // }
        }
        // const id =;
    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //         .then((response) => {
    //             const data = response.data;
    //             this.setState({ data });
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }
DisplayBooks =(value, id) =>(e) =>{
    
}

    render() {
        const idd =+this.props.match.params.id;
        console.log(idd)
      
        return (

            <MyContext.Consumer>
                {
                    value => (
                        <React.Fragment>
                        
                <div className='category-container'>
                <Container >
                    <Row className="">
                        {console.log('hello from list' )}
                        {value.state.Books.tbody.filter(c=>(c.CategoryId=== idd)).map(p => 
                           
                           <Col sm={6} md={3} className="mb-3 " key={uuidv1()}>
                           
        <Card>
          <Card.Img variant="top" src="https://elgarblog.files.wordpress.com/2014/01/education-books.jpg" />
          <Card.Body>
            <Link to={`/BookDetails/${p.ID}`}>Book Name : {p.Name}</Link> 
            {/* <Button onClick={this.DisplayBooks(value,p.ID)}>See all Books</Button> */}
           
          </Card.Body>
        </Card>
   
      </Col>
                   )}      
                    </Row>
                </Container>
               </div>
               </React.Fragment>
                    
               )
                }
            </MyContext.Consumer>
        )
    }
}