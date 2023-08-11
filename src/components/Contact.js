import React, { useState } from 'react';
import styled from 'styled-components';
import { Heading } from './Heading';

const Wr = styled.div`
   background-color: #ebfff4;
   padding-top: 70px;
   padding-bottom: 50px;
`;

const Btn = styled.button`
   background-color: #18d26e;
   color: #fff;
   &:hover {
    background-color: #18d26e;
    color: #010101;
   }
`;

export const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === '' || email === '' || subject === '' || message === '') {
      alert('Por favor, completa todos los campos.');
    } else {
      alert('Formulario enviado exitosamente.');
    }
  };

  return (
    <Wr id='gymcontact'>
      <div className="container px-0">
        <Heading title='Contact' parr='How to contact Us'/>
        <div className="row mt-5 mx-0">
            <div className="col-12 px-0" style={{height: '500px'}}>
                <div className="position-relative h-100">
                <iframe className="position-relative w-100 h-100"
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3136.7249762945767!2d-85.70593712354307!3d38.16983078930445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88690c15d8ba5f37%3A0xc4d3a86f9563fa8c!2s5549%20Mildenhall%20Way%2C%20Louisville%2C%20KY%2040213!5e0!3m2!1sen!2sus!4v1691259036604!5m2!1sen!2sus" frameborder="0" style={{border: '0'}} allowfullscreen="" aria-hidden="false"
                tabindex="0"></iframe>
                </div>
            </div>
        </div>
        <div className="row mx-0 justify-content-center">
          <div className="col-lg-12 col-md-8 col-sm-10 px-0">
            <div className="contact-form bg-transparent rounded p-5">
              <div id="success"></div>
              <form id="contactForm" onSubmit={handleSubmit} noValidate>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control bg-light border-2 p-2"
                        placeholder="Your Name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ marginBottom: '10px' }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control bg-light border-2 p-2"
                        placeholder="Your Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ marginBottom: '15px' }}
                      />
                    </div>
                  </div>
                </div>
                <div className="control-group">
                  <input
                    type="text"
                    className="form-control bg-light border-2 p-2"
                    placeholder="Subject"
                    required
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    style={{ marginBottom: '15px' }}
                  />
                </div>
                <div className="control-group">
                  <textarea
                    className="form-control bg-light border-2 py-3 px-4"
                    rows="5"
                    placeholder="Message"
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ marginBottom: '15px' }}
                  />
                </div>
                <div className="text-center">
                  <Btn className="btn text-uppercase py-2 px-4" type="submit" id="sendMessageButton">Send Message</Btn>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Wr>
  );
};