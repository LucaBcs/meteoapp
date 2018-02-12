import React, { Component } from 'react'
import IconMap from "./IconMap"
import Gmaps from "./Gmaps"
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

export default class ModalExampleControlled extends Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Modal
            trigger={<Button className="trigger" onClick={this.handleOpen}><IconMap></IconMap></Button>}
            open={this.state.modalOpen}
            onClose={this.handleClose}
            basic
            size='small'
          >
          
        <Header icon='browser' content='Tell me the city you want to know the meteo' />
        
        <Modal.Content>
        
        <Gmaps cityChange = {this.props.cityChange}></Gmaps>
        
        </Modal.Content>
        
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}