import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from './../components/Menu';

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/4240497/pexels-photo-4240497.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="Edit" />
            </Link>
            <img src={Delete} alt="Delete" />
          </div>
        </div>
        <h1>Lorem Ipsum.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          volutpat scelerisque ex, sit amet elementum turpis accumsan vel. Proin
          nunc lorem, commodo vel dignissim eget, porttitor sit amet mauris.
          Donec ac auctor sem. Sed at elit vel tortor congue iaculis. Mauris
          ultricies dolor non tortor varius feugiat. Aenean id purus auctor,
          aliquet tellus in, dignissim orci. Phasellus et metus scelerisque
          sapien finibus auctor. Donec scelerisque lectus quis orci fermentum
          consequat. Nunc vestibulum vehicula finibus. Proin at dignissim mi.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut
          velit felis. Fusce iaculis pellentesque justo, vel lobortis magna
          commodo quis. Aliquam in sapien pharetra, lobortis nisi eu, gravida
          mi. Etiam velit sem, interdum laoreet placerat in, sodales eget arcu.
          Donec at congue ante.
        </p>
        <p>
          Integer vel metus vitae nulla vestibulum cursus ut nec libero. Nam
          ultrices leo est, ut dapibus ligula convallis eget. Donec vitae orci
          sit amet lacus vestibulum convallis a congue eros. Nam vitae eleifend
          nulla. Duis id risus faucibus, scelerisque felis in, mattis erat.
          Aliquam finibus sollicitudin ante, et malesuada quam posuere in.
          Mauris condimentum eros libero, id mollis augue consectetur quis.
          Proin magna massa, aliquam eu dictum sollicitudin, eleifend tristique
          augue. In hac habitasse platea dictumst. Donec suscipit neque a
          malesuada aliquet. Etiam pulvinar cursus purus, ut facilisis odio
          ultrices vulputate. Nam interdum hendrerit massa, vitae elementum
          sapien luctus a. In vehicula quis erat in volutpat.
        </p>
        <p>
          Proin ante ex, feugiat a faucibus egestas, tristique in sem. Ut at sem
          vel nisi scelerisque hendrerit. Curabitur sed pulvinar enim.
          Pellentesque consequat tristique aliquet. Mauris metus ipsum,
          consectetur non lacus eget, maximus consectetur lacus. Maecenas
          fringilla dolor ipsum, quis porttitor lectus sodales at. Nulla ut
          risus porta, dictum leo porta, mattis nisl. Quisque semper odio orci,
          ut ultricies odio euismod eu. Nunc ut tempor est. Nulla sit amet
          rhoncus justo. Nunc lacinia euismod sodales.
        </p>
      </div>
      <Menu/>
    </div>
  );
};

export default Single;
