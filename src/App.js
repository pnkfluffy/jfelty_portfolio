import React, { Component } from "react";
import "./App.css";

//	https://github.com/gitname/react-gh-pages

class App extends Component {
  render() {
	  return (
		  <div className="app">
        <div className="top_box">
          <div className="top_left_box">
            <div className="bookmark">
				<div className="name">
					Jackson Felty
				</div>
				<div className="title">
					full stack developer
				</div>
				<div className="contacts">
					<a>jacksonfelty@gmail.com</a>
					<a>(281) 781-9760</a>
				<div className="resume">
					resume
				</div>
				</div>
				<div className="bookmark_circle">
					<div className="headshot">
						<img className="me" src='https://i.pinimg.com/originals/08/f2/b5/08f2b500d9bb9e17b49fc65581080595.jpg' alt="headshot"/>
					</div>
				</div>
			</div>
          </div>
          <div className="top_right_box">
            <div classname="about_me">
				<h2>About Me</h2>
				<p>blah blah blah</p>
			</div>
            <div className="languages_and_technologies">
				<h3>Languages</h3>
				<div>blah blah blah</div>
				<h3>Technologies</h3>
				<div>blah blah blah</div>
			</div>
            <div className="timeline_box">
              <div className="timeline_bar"></div>
              <div className="timeline_content">
                <div className="content">
                  {/* content */}
                  <div className="content_left">
                    <div className="content_display">
						GifMe
                      <img></img>
                    </div>
                    <div className="content_github">
						github
						</div>
                  </div>
                  <div className="content_description">
					  blah blah blah blah blah
				  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
		<div className="circle_overlay"></div>
        <div className="bottom_box">
          <div className="social_box">
            <div className="social_links">{/* four social links */}</div>
          </div>
          <div className="hobbies_title"></div>
          <div className="hobbies_icons">{/* emt and other hobbies */}</div>
        </div>
      </div>
    );
}
}


export default App;
