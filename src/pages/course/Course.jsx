import { useParams } from 'react-router-dom';
import './Course.css'
import { data } from '../../data';
function Course() {

  const courseID = useParams().courseID
  const courseinfo = data.find(course => course.id == courseID)
  console.log(courseinfo);
  
  return (
    <>
      <h1>Course Page</h1>
    </>
  );
}

export default Course