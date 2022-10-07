import React from 'react';
import { animated, useSpring } from '@react-spring/web';

function Component2() {

    const styles = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        config: { duration: 1000, decay: 1000 }
    });

    return (
        <animated.div style={styles}>
            <div style={c2Style}>
                <h1>Component 2</h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                    making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text,
                    and a search for 'lorem ipsum' will uncover many web sites still in their infancy. </p>
            </div>
        </animated.div>
    );
}

const c2Style = {
    background: 'slateblue',
    color: 'white',
    padding: '1.5rem'
}

export default Component2;