import React, { Component } from 'react';
import {Header} from '../../Header/Header'

export class DashboardPage extends Component {
    render() {
      return (
        <div>
          <Header />

          <main role="main">
          <div className="album py-5 bg-light">
            <div className="container">
              <div className="row">
              <div className="col-md-4">
              <div className="card mb-4 box-shadow">
                <img className="card" src="https://picsum.photos/200/300/?image=300" alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div className="d-flex justify-content-between align-items-center">
                    
        
                  </div>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>

          </main>

        </div>
      );
    }
  }
  
 // export default DashboardPage;