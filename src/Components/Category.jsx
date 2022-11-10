import React, { useState } from 'react'
import Categories from './Categories'

const Category = () => {

    const[data, setData] = useState(Categories);

    //Filtra por categoria 

    const filterResult = (catItem) => {
        const result = Categories.filter((el) => {
            return el.category === catItem;
        });
        setData(result);
    }

  return (
    <>
      <div className="container">
          <div className="row">
              <div className="col">
                  <h1 className='title'>Tienda Online</h1>
              </div>
          </div>
          <div className="row">
              <div className="col">
                  <button className='btn' onClick={() => setData(Categories)}>Todas</button>
                  <button className='btn' onClick={() => filterResult('Electrica')}>Electrica</button>
                  <button className='btn' onClick={() => filterResult('Acustica')}>Acustica</button>
                  <button className='btn' onClick={() => filterResult('Clasica')}>Clasica</button>
              </div>
              <div className="col">
                    <div className="cards">
                        {data.map((values) => {
                            const{id, title, price, image} = values;
                            return (
                                <>
                                    <div className="card" key={id}>
                                        <div className="card-header">
                                            <img src={image} alt={title} />
                                        </div>
                                        <div className="card-body">
                                            <h2 className='titleProduct'>{title}</h2>
                                            <span className="price">${price}</span>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                        
                    </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Category