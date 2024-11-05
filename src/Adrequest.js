import React from 'react';
import Nav from './Nav';
import './Update.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Issued = () => {
  return (
    <Row>
      <div className='uitem'>
        <Col md={3} className='min-vh-100'>
          <Adminnav />
        </Col>
        <Col xs={12} md={9}>
          <div className='uitem-form'>
            <Row>
              <Col xs={12}>
                <div>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <input id='search' className="form-control" placeholder="Search Here..."></input>
                  </form>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <div className='button-wrapper'>
                  <table className="table sub-table custom-table">
                    <thead>
                      <tr>
                        <th style={{textAlign:'center', color:'white'}}>ITEMS</th>
                        <th style={{textAlign:'center', color:'white'}}>QUANTITY</th>
                        <th style={{textAlign:'center', color:'white'}}>DATE</th>
                        <th style={{textAlign:'center', color:'white'}}>MESS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* Add your table rows here */}
                    </tbody>
                  </table>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </div>
    </Row>
  );
}

export default Issued;
