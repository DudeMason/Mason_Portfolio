import React, {Component} from 'react';
import {Form, Input, TextArea, Button, Segment, Container} from 'semantic-ui-react';
import {BlogConsumer} from '../../../providers/BlogProvider';

class BlogForm extends Component {

  state = {title: '', body: '', date: '', like: 0, dislike: 0, bId: undefined, edit: false}

  handleChange = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addEntry(this.state)
    this.setState({ title: '', body: '', date: '', like: 0, dislike: 0 })
  }

  handleUpdate = (e) => {
    e.preventDefault()
    this.props.updateEntry(this.state.bId, this.state)
    this.setState({ title: '', body: '', date: '', like: 0, dislike: 0, bId: undefined})
  }

  editTrue = (b) => {
    this.setState({edit: true, title: b.title, body: b.body, date: b.date, bId: b.bId})
  }

  editFalse = () => {
    this.setState({edit: false, title: '', body: '', date: '', bId: undefined})
  }

  render() {

    const{title, body, date} = this.state

    return(

      <div>
        {this.state.edit
          ?
          <Form inverted onSubmit={this.handleUpdate}>
            <Segment inverted>
              <Form.Group>
                <Form.Field
                  control={Input}
                  label='Title'
                  placeholder={title}
                  name='title'
                  value={title}
                  onChange={this.handleChange}
                />
                <Form.Field
                  control={Input}
                  label='Date'
                  placeholder={date}
                  name='date'
                  value={date}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Field
                control={TextArea}
                label='Body'
                placeholder={body}
                name='body'
                value={body}
                onChange={this.handleChange}
              />
            </Segment>

            <Form.Field
             control={Button}
             content='Submit'
             type='submit'
             color='green'
            />
          </Form>
          :
          <Form inverted onSubmit={this.handleSubmit}>
            <Segment inverted>
              <Form.Group>
                <Form.Field
                  control={Input}
                  label='Title'
                  placeholder='Title'
                  name='title'
                  value={title}
                  onChange={this.handleChange}
                />

                <Form.Field
                  control={Input}
                  label='Date'
                  placeholder='Date'
                  name='date'
                  value={date}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Field
                control={TextArea}
                label='Body'
                placeholder='Your content here'
                name='body'
                value={body}
                onChange={this.handleChange}
              />
            </Segment>

            <Form.Field
               control={Button}
               content='Submit'
               type='submit'
               color='green'/>
          </Form>
        }
        <Segment compact inverted>
          { this.state.edit
            ?
            <>
              {this.props.entries.map(b => <Button basic color='blue' key={b.id} onClick={this.editFalse}>Edit → {b.title}</Button>)}
            </>
            :
            <>
              {this.props.entries.map(b => <Button basic color='blue' key={b.id} onClick={() => this.editTrue(b)}>Edit → {b.title}</Button>)}
            </>
          }
          <Container>
            {this.props.entries.map(b => <Button basic color='red' key={b.id} onClick={() => this.props.removeEntry(b.id)}>Delete → {b.title}</Button>)}
          </Container>
        </Segment>
      </div>
    )
  }
}

const ConnectedBlogForm = (props) => {

  return(
    <BlogConsumer>
    {
      value => (
        <BlogForm
        {...props}
        entries={value.entries}
        updateEntry={value.updateEntry}
        removeEntry={value.removeEntry}
        addEntry={value.addEntry}/>
      )
    }
    </BlogConsumer>
  )
}

export default ConnectedBlogForm;
