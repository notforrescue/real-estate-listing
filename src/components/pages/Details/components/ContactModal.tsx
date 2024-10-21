import { Button, Form, Modal, type ModalProps } from 'react-bootstrap'
import { type FC } from 'react'

interface IContactModalProps extends ModalProps {
  toggleShow: () => void
}

const ContactModal: FC<IContactModalProps> = ({ toggleShow, ...props }) => {
  return (
    <Modal {...props} onHide={toggleShow}>
      <Modal.Header closeButton>
        <Modal.Title>Kapcsolat</Modal.Title>
      </Modal.Header>

      <Form>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Üzenet</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="primary p-3" onClick={toggleShow}>
            Mégse
          </Button>
          <Button variant="secondary p-3" onClick={toggleShow}>
            Küldés
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default ContactModal
