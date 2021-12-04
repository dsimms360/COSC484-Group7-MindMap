import Block from 'react-blocks';
import styles from './styles';
import { Link } from "react-router-dom";


import Logout from '../GoogleLogin/googleLogout';



function UserBlock (){

    const authData = JSON.parse(localStorage.getItem("userToken"));


    let { header } = styles;
	return (
		<Block style={header.block} el="header">
            <img style={header.Image} src={authData.imageUrl || 'null'} alt="user profile" />
            <div id="username"> User: {authData.name || 'null'} <Link to="/"><Logout /> </Link></div>
            {/* <div id="accType">Student Account</div> <br /> */}

            {/* <div id="signOut"><Link to="/"><Logout /> </Link></div> */}



			{/* <h1 style={header.h1}>
				React Blocks<br/>
				<Block style={header.small} el="small">
					Just the layout, no more, no less.
				</Block>
			</h1> */}

			{/* <section>
				<p>React blocks uses a <i>declarative approach</i> to build complex layouts on top of CSS Flexbox. Flexbox properties are exposed as attributes on a higher-level react component. Supports media-queries via predefined <i>mobile-first</i> queries. Further custom media queries can be specified in a styles object. </p>
				<p>Please note, it does <b>NOT</b> handle mising browser features. Please use <a href="http://modernizr.com/">Modernizr</a> with Polyfills to achieve that.</p>
				<p>Test code</p>
			</section> */}
			{/* <p><a href="https://github.com/whoisandie/react-blocks">View on Github</a></p> */}
		</Block>
	);
}

export default UserBlock;