import React, {Component} from 'react';
import {Segment, Header, Container, Icon} from 'semantic-ui-react';
import axios from 'axios';

class BlogItem extends Component {

  state = { like: this.props.like, dislike: this.props.dislike, liked: false, disliked: false }

  handleLike = () => {
    const{disliked} = this.state
    const{like} = this.props
    if (disliked === true) {
      axios.put(`/api/blogs/${this.props.id}`, {like: (like + 1)})
      this.setState({ like: (like + 1), liked: true })
      this.removeDislike()
    }
    else {
      axios.put(`/api/blogs/${this.props.id}`, {like: (like + 1)})
      this.setState({ like: (like + 1), liked: true })
    }
  }

  removeLike = () => {
    const{like} = this.props
    axios.put(`/api/blogs/${this.props.id}`, {like: (this.state.like - 1)})
    this.setState({ like: like, liked: false })
  }


  handleDislike = () => {
    const{liked} = this.state
    const{dislike} = this.props
    if (liked === true) {
      axios.put(`/api/blogs/${this.props.id}`, {dislike: (dislike + 1)})
      this.setState({ dislike: (dislike + 1), disliked: true })
      this.removeLike()
    }
    else {
      axios.put(`/api/blogs/${this.props.id}`, {dislike: (dislike + 1)})
      this.setState({ dislike: (dislike + 1), disliked: true })
    }
  }

  removeDislike = () => {
    const{dislike} = this.props
    axios.put(`/api/blogs/${this.props.id}`, {dislike: (this.state.dislike - 1)})
    this.setState({ dislike: dislike, disliked: false })
  }

  render() {

    const {title, body, date} = this.props
    const {like, dislike, liked, disliked} = this.state

    return(

      <Segment>
        <Header as='h3'>{title}</Header>
        <Container>{body}</Container>
        <p style={{fontSize: 12, marginBottom: -20}}>
          <br/>
          {
            liked
              ?
            <Icon name='thumbs up' color='green' onClick={this.removeLike}/>
              :
            <Icon name='thumbs up' color='grey' onClick={this.handleLike}/>
          }
            ‏{like} ‏‏‎  ‏‏‎  ‏‏‎  ‏‏‎  ‏‏‎  ‏‏‎
         ‏‏‎ {
            disliked
              ?
            <Icon name='thumbs down' color='red' onClick={this.removeDislike}/>
              :
            <Icon name='thumbs down' color='grey' onClick={this.handleDislike}/>
          }
            {dislike}
        </p>
        <br/>
        <Header as='h6'>{date}</Header>
      </Segment>
    )
  }
}

export default BlogItem;
