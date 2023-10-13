import React from 'react'
import Card from 'react-bootstrap/Card';
import { ProjectContext } from '../Context/UserContext';
import { useContext } from 'react';
function Notescontext() {
   let {content} = useContext(ProjectContext)
   let {days} = useContext(ProjectContext)
//   console.log(content)
  return <>
  <div className="notesbox">
       <div className="noteshead">
         <h4 className="mynotes">My Notes</h4>
         <h5>Recently Viewed</h5>
       </div>
      {[
        'FeedBacks',
        'Weekly Task',
        'Lyrics',
      ].map((content) => (
        <Card
          style={{ width: '18rem' }}
          className="mb-2"
        >
          <Card.Header>{content}</Card.Header>
          <Card.Body>
            
            <Card.Text>
             Lorem ipsum dolor sit amet consectetur.sollicitudin enim risus ut vestibulum morbi tellus sit ac.Fames auctor quisque et aliquam maecenas sed at vitae facilisis<br/>
            5 days ago
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
      </div>
    </>
    
  
}

export default Notescontext