import { useParams } from 'react-router-dom';

const About = () => {
    const { id }  = useParams();
    return (
        <div>
            <h1>I am an About Page</h1>
            {id}
        </div>
    );
}

export default About;