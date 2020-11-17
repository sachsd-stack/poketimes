import React from 'react'

const Contact = (props) => {
    setTimeout(() => {
        props.history.push('/about')
    }, 2000);
    return (
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat, enim? Commodi laborum doloremque ab ullam iusto veritatis earum? Iure cum fugit mollitia ratione reiciendis, quisquam voluptas perspiciatis quis amet, tenetur voluptatibus, veritatis quas. Possimus minima, asperiores similique distinctio quisquam nihil eos aspernatur optio? Voluptatum non nihil porro sit. Ut, dolorum!
            </p>
        </div>
    )
}

export default Contact
