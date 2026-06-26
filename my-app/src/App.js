import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = { selectedDate: null };
  }

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <header style={{ backgroundColor: '#0770e3', padding: '20px', marginBottom: '20px' }}>
          <h1 style={{ color: 'white', margin: 0 }}>Reservation Date</h1>
        </header>
        <main>
          <input
            type="date"
            onChange={e => this.setState({ selectedDate: e.target.value })}
            style={{ padding: '10px', fontSize: '16px', marginBottom: '20px', display: 'block' }}
          />
          {this.state.selectedDate && (
            <p>Selected: {this.state.selectedDate}</p>
          )}
          <button
            onClick={() => alert('It works!')}
            style={{
              backgroundColor: '#0770e3',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            Continue
          </button>
        </main>
      </div>
    );
  }
}

export default App;