import React, { Component } from 'react';
import './App.css';
import data from '../data.json'




class App extends Component {

   constructor(props){
      super(props);

      this.state = {
         results: data,
      };

   }

   setSearchTopStories(results){
     console.log(results);
      this.setState({
         results
      })
      //see if there're more stories. Se sim, amendar. Se não, set results
   }

   componentDidMount(){
      //Call the API
      //this.getFrontPage();
   }

   render() {
      const {results, searchTerm} = this.state;
      if (!results) { return null; }
      return (
         <div className="box">
            <div className="flex-item">
               <h1 className="title"> FIFA FUT FINDER</h1>
            </div>
            <div className="flex-item">
               <Search onSubmit={this.onSearchSubmit} onChange={this.onSearchChange}>
                  Serch
               </Search>
            </div>
            <div className="flex-item">
               <Table list={results}/>
            </div>
         </div>
      );
   }
}

const Button = ({onClick, className = "", children}) =>
   <button
      onClick={onClick}
      className={className}
      type="button">
         {children}
      </button>

const Table = ({list}) =>
   <div className="table">
      { list.map(item =>
         <div key={item.ID} className="table-row">
            <Item name={item.name} club={item.club} club_logo={item.club_logo} age={item.age} eur_value={item.eur_value} photo={item.photo} overall={item.overall}/>
         </div>
      )}
   </div>

const Item = ({name, club, club_logo, photo, age, eur_value, overall}) =>
   <div className="card">
      <img className="card-img" src={photo} />
      <div className="card-body">
         <h3 className="card-title">{name} - {overall}</h3>
          <div>
            <h5 className="card-text">{club}</h5>
            <img className="club-logo" width="50" src={club_logo}/>
          </div>
          <p>Value: €{eur_value}</p>
      </div>
   </div>


const Search = ({value, children, onSubmit, onChange}) =>
   <form onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange}/>
      <button type="submit">
         {children}
      </button>
   </form>

export default App;
