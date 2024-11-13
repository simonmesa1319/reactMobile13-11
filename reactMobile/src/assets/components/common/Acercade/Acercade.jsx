import React from 'react'
import imgAD from '../../../img/smile.jpg'
import './AcercaDe.css'

function Acercade() {
  return (
    <>
        <section className="container my-5">
            <div className="row">
                <div className="containerP col-12 col-md-8">
                    <h1 className="AboutUs">SOBRE NOSOTROS</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam doloribus expedita aspernatur perferendis deserunt nobis, illum necessitatibus consectetur impedit dolores repudiandae aperiam dolor minus iure porro obcaecati,
                        <br />
                         odit rem laudantium reiciendis ipsam. Incidunt at, repellendus nulla aliquam iure nemo et corrupti neque suscipit autem modi animi deserunt iusto. Ex architecto explicabo ea! Eum ullam earum maxime voluptate,
                         <br />
                          quibusdam voluptatum repudiandae libero totam accusamus beatae aspernatur natus, explicabo tenetur, exercitationem reiciendis pariatur quae atque hic non? Cum commodi libero doloribus eveniet corporis dolores
                          <br />
                         quidem praesentium rem similique temporibus sunt natus quasi debitis architecto, provident officia in incidunt perspiciatis, expedita molestias sapiente.
                    </p>
                </div>
                <div className="col-12 col-md-4">
                    <img src={imgAD} alt="" className='img-fluid'/>
                </div>
            </div>
        </section>
    </>
  )
}

export default Acercade