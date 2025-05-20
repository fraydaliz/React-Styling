import { motion } from 'framer-motion';
import { Card, Button } from 'react-bootstrap';

export default function CardComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="card">
        <Card.Body>
          <Card.Title>Mountain</Card.Title>
            <Card.Img variant="top" src="image.png" />
          <Card.Text>
         serene landscapes
          </Card.Text>
          <Button variant="primary">Click Me</Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
}