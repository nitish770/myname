import React, { useState } from 'react'

function Contact() {
  const [data, setData] = useState({
    FullName: '',
    PhoneNumbr: '',
    email: '',
    Messages: '',
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.FullName},
       My mobile number is ${data.PhoneNumbr},
        and email is ${data.email}, 
        Here is what I want to say ${data.Messages}`
    );
  };
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'> Contact Us </h1>
      </div>
      <div className='container contact_div'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>

            <form onSubmit={formSubmit}>
              <div class="mb-3">
                Full Name
                <input type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name='FullName'
                  value={data.FullName}
                  onChange={InputEvent}
                  placeholder="Enter your full name" />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1"
                  class="form-label">Phone Numbr
                </label>
                <input type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name='PhoneNumbr'
                  value={data.PhoneNumbr}
                  onChange={InputEvent}
                  placeholder="Mobile number" />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1"
                  class="form-label">Email address
                </label>
                <input type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name='email'
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com" />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1"
                  class="form-label">Messages
                </label>
                <input type="message"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name='Messages'
                  value={data.Messages}
                  onChange={InputEvent}
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1"
                  class="form-label">Example textarea
                </label>
                <textarea class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3">
                </textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-success" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact;