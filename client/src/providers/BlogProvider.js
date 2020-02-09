import React, {Component} from 'react';
import axios from 'axios';

export const BlogContext = React.createContext();
export const BlogConsumer = BlogContext.Consumer;

export default class BlogProvider extends Component {

  state = {entries: [], color: 'black', darkMode: true, order: false}

  componentDidMount() {
    axios.get('/api/blogs')
      .then( res => {
        this.setState({ entries: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  addEntry = (entry) => {
    axios.post('/api/blogs', entry)
      .then( res => {
        const { entries } = this.state
        this.setState({ entries: [...entries, res.data]})
      })
      .catch( err => {
        console.log(err)
      })
  }

  removeEntry = (id) => {
    axios.delete(`/api/blogs/${id}`)
      .then(res => {
        const {entries} = this.state
        this.setState({entries: entries.filter(b=> b.id !==id )})
      })
      .catch (err => {
        console.log(err)
      })
  }

  updateEntry = (id, entry) => {
    axios.put(`/api/blogs/${id}`, entry)
      .then( res => {
        const entries = this.state.entries.map( b => {
          if (b.id === id)
          {return res.data}
          return b
        })
        this.setState({ entries })
      })
      .catch(err => {
        console.log(err)
      })
  }

  toggleMode = () => {
    this.setState({ darkMode: !this.state.darkMode })
  }

  toggleOrder = () => {
    this.setState({ order: !this.state.order })
  }

  colorChange = (e, { name }) => this.setState({ color: name })

  render() {

    return(

      <BlogContext.Provider value={{
        ...this.state,
        addEntry: this.addEntry,
        updateEntry: this.updateEntry,
        removeEntry: this.removeEntry,
        colorChange: this.colorChange,
        toggleMode: this.toggleMode,
        toggleOrder: this.toggleOrder
      }}>
        {this.props.children}
      </BlogContext.Provider>
    )
  }
}
