import React from 'react';
import { animated, useSpring } from 'react-spring';
import { Spring } from 'react-spring';

function Component1() {
    const styles = useSpring({
        from: {
            opacity: 0, marginTop: -500
        },
        to: {
            opacity: 1, marginTop: 0
        }
    });

    return (
        <animated.div style={styles}>
            <div style={c1Style}>
                <h1>Component 1</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. </p>
            </div>
            <Spring from={{ number: 0 }} to={{ number: 10 }}>
                {props => (<div style={props}>
                    <h1 style={counter}>{props.number.toFixed()}</h1>
                </div>)}
            </Spring>
        </animated.div>
    );
}

const c1Style = {
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem'
}

const counter = {
    background: "#333",
    textAlign: 'center',
    width: '100px',
    borderRadius: '50%',
    margin: '1rem auto'
}

export default Component1;