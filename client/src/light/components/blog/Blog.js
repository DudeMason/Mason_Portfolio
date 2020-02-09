import React from 'react';
import {Header, Button} from 'semantic-ui-react';
import BlogItem from './BlogItem';
import {BlogConsumer} from '../../../providers/BlogProvider';

const Blog = ({ value: {order, entries, toggleOrder }}) => (

    <>
    {
      order
        ?
      <>
        <Header as='h2' inverted>Mason's Blog</Header>
        <p style={{color: 'white'}}>
          Oldest → Newest
        <Button onClick={toggleOrder} compact floated='right' color='facebook'>
          Newest First
        </Button>
        </p>
        {entries.sort((a, c) => a.id - c.id).map( b => <BlogItem key={b.id} {...b}/>)}
        <p style={{color: 'white', fontSize: 11}}>{entries.length} Entries</p>
      </>
        :
      <>
        <Header as='h2' inverted>Mason's Blog</Header>
        <p style={{color: 'white'}}>
          Newest → Oldest
        <Button onClick={toggleOrder} compact floated='right' color='facebook'>
          Oldest First
        </Button>
        </p>
        {entries.sort((a, c) => a.id - c.id).slice(0).reverse().map( b => <BlogItem key={b.id} {...b}/>)}
        <p style={{color: 'white', fontSize: 11}}>{entries.length} Entries</p>
      </>
    }
  </>
)

const ConnectedBlog = () => {
  return(
    <BlogConsumer>
    {
      value => (
        <Blog value={value}/>
      )
    }
    </BlogConsumer>
  )
}
export default ConnectedBlog;
