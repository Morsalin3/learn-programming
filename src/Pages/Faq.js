import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Faq = () => {
    return (
    <div className='w-75 m-auto'>
            <h2 className='mb-3'> General queries related to the course</h2>
            <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header>Who can do this courses?</Accordion.Header>
                <Accordion.Body>
                Who wants to become a web developer or digital marketer or graphics designer. For those who want to learn web development from scratch and then get a job in a software company as a web developer or digital marketer. For those who don't know much about programming or web development or digital marketing.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>What is in the courses?</Accordion.Header>
                <Accordion.Body>
                You can understand that by looking at the course curriculum. This course has everything you need to become a serious web developer today. In short, from HTML, CSS to bootstrap, JavaScript, Git, ES6, REST API, server, JSON are there. Along with that, the framework that has the most jobs at the moment is React. In addition, there are many other things including node, database (mongodb), debug, problem solving, interview questions. Besides, there is graphic design and digital marketing
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>What is the educational qualification required to do the course?</Accordion.Header>
                <Accordion.Body>
                We have designed the course in such a way that academic background does not matter. You can do this course from any academic background. University students, college students, job seekers, unemployed, young men and women can all learn from scratch. But must give time 5-6 hours.
                </Accordion.Body>
            </Accordion.Item>
         </Accordion>
    </div>
    );
};

export default Faq;