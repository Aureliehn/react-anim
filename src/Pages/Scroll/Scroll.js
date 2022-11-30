import React, { useState } from 'react';
import "./Scroll.css";
import { Waypoint } from 'react-waypoint';
import { useSpring, animated } from 'react-spring';
export default function Scroll() {

    const[toggleTxt, setToggleTxt] = useState(false);

    const animation = useSpring({
        opacity: toggleTxt?1 :0,
        transform: toggleTxt? "translateX(0)": "translateX(-50%)"
    })

  return (
    <div>
        <p className="scroll-txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in dapibus massa. Quisque sit amet justo auctor, malesuada justo ac, pulvinar augue. Morbi lacus erat, sodales id leo at, aliquet scelerisque est. Nunc tempus magna non sodales aliquam. Praesent aliquam risus felis. Phasellus consequat, risus quis dapibus fermentum, justo nisi cursus nunc, ut tincidunt enim odio et lacus. Maecenas pulvinar ligula sem, vitae aliquam quam vulputate nec. Nunc ultrices odio ligula, eu posuere sapien lacinia eu. Vivamus at justo sit amet nulla blandit porta et sit amet elit. Quisque ullamcorper dui id pharetra tempor. Sed hendrerit, dui vel ultricies varius, velit libero ultrices felis, vel rutrum augue odio vitae nisl.
            Maecenas pulvinar ligula sem, vitae aliquam quam vulputate nec. Nunc ultrices odio ligula, eu posuere sapien lacinia eu. Vivamus at justo sit amet nulla blandit porta et sit amet elit. Quisque ullamcorper dui id pharetra tempor. Sed hendrerit, dui vel ultricies varius, velit libero ultrices felis, vel rutrum augue odio vitae nisl.
        </p>
        <p className="scroll-txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in dapibus massa. Quisque sit amet justo auctor, malesuada justo ac, pulvinar augue. Morbi lacus erat, sodales id leo at, aliquet scelerisque est. Nunc tempus magna non sodales aliquam. Praesent aliquam risus felis. Phasellus consequat, risus quis dapibus fermentum, justo nisi cursus nunc, ut tincidunt enim odio et lacus. Maecenas pulvinar ligula sem, vitae aliquam quam vulputate nec. Nunc ultrices odio ligula, eu posuere sapien lacinia eu. Vivamus at justo sit amet nulla blandit porta et sit amet elit. Quisque ullamcorper dui id pharetra tempor. Sed hendrerit, dui vel ultricies varius, velit libero ultrices felis, vel rutrum augue odio vitae nisl.
        </p>
        <p className="scroll-txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in dapibus massa. Quisque sit amet justo auctor, malesuada justo ac, pulvinar augue. Morbi lacus erat, sodales id leo at, aliquet scelerisque est. Nunc tempus magna non sodales aliquam. Praesent aliquam risus felis. Phasellus consequat, risus quis dapibus fermentum, justo nisi cursus nunc, ut tincidunt enim odio et lacus. Maecenas pulvinar ligula sem, vitae aliquam quam vulputate nec. Nunc ultrices odio ligula, eu posuere sapien lacinia eu. Vivamus at justo sit amet nulla blandit porta et sit amet elit. Quisque ullamcorper dui id pharetra tempor. Sed hendrerit, dui vel ultricies varius, velit libero ultrices felis, vel rutrum augue odio vitae nisl.
        </p>
        <Waypoint 
        bottomOffset="30%"
        onEnter={()=>{
            if(!toggleTxt){
                setToggleTxt(true)
            }
        }}/>
        <animated.div style={animation} className="cta-section">
            <h2>Animation ici</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </animated.div>
        <p className="scroll-txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in dapibus massa. Quisque sit amet justo auctor, malesuada justo ac, pulvinar augue. Morbi lacus erat, sodales id leo at, aliquet scelerisque est. Nunc tempus magna non sodales aliquam. Praesent aliquam risus felis. Phasellus consequat, risus quis dapibus fermentum, justo nisi cursus nunc, ut tincidunt enim odio et lacus. Maecenas pulvinar ligula sem, vitae aliquam quam vulputate nec. Nunc ultrices odio ligula, eu posuere sapien lacinia eu. Vivamus at justo sit amet nulla blandit porta et sit amet elit. Quisque ullamcorper dui id pharetra tempor. Sed hendrerit, dui vel ultricies varius, velit libero ultrices felis, vel rutrum augue odio vitae nisl.
        </p>
        <p className="scroll-txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in dapibus massa. Quisque sit amet justo auctor, malesuada justo ac, pulvinar augue. Morbi lacus erat, sodales id leo at, aliquet scelerisque est. Nunc tempus magna non sodales aliquam. Praesent aliquam risus felis. Phasellus consequat, risus quis dapibus fermentum, justo nisi cursus nunc, ut tincidunt enim odio et lacus. Maecenas pulvinar ligula sem, vitae aliquam quam vulputate nec. Nunc ultrices odio ligula, eu posuere sapien lacinia eu. Vivamus at justo sit amet nulla blandit porta et sit amet elit. Quisque ullamcorper dui id pharetra tempor. Sed hendrerit, dui vel ultricies varius, velit libero ultrices felis, vel rutrum augue odio vitae nisl.
        </p>
        <p className="scroll-txt">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in dapibus massa. Quisque sit amet justo auctor, malesuada justo ac, pulvinar augue. Morbi lacus erat, sodales id leo at, aliquet scelerisque est. Nunc tempus magna non sodales aliquam. Praesent aliquam risus felis. Phasellus consequat, risus quis dapibus fermentum, justo nisi cursus nunc, ut tincidunt enim odio et lacus. Maecenas pulvinar ligula sem, vitae aliquam quam vulputate nec. Nunc ultrices odio ligula, eu posuere sapien lacinia eu. Vivamus at justo sit amet nulla blandit porta et sit amet elit. Quisque ullamcorper dui id pharetra tempor. Sed hendrerit, dui vel ultricies varius, velit libero ultrices felis, vel rutrum augue odio vitae nisl.
        </p>
    </div>
  )
}
