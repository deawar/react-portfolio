import React from 'react';
import 'materialize-css';
import {Row, Col} from  'react-materialize';

export default function HorCards() {
    return (
        <>   
            <div className="container">
                <div className="section">
                    <h4 className="center" id="portfolio">Interesting Articles</h4>
                    <Row>
                        <Col>
                            <div className="s12 m4 hoverable">
                                <div className="card hoverable">
                                    <div className="card-image">
                                        <img src="Assets/Images/circuit-board-design-and-neon-light-circles-blue-header.jpg" alt="Blue Circuitboard"/>
                                        <span className="card-title center"> A little Self reflection by Dean Warren: Why Do I Feel So Dumb!?!</span>
                                    </div>
                                        <h2 className="Center brown-text"><i className="medium material-icons">school</i></h2>
                                        <div className="container left-align flow-text">                                
                                            <p className="light"><p>Why do I feel so dumb?</p>
                                            <p>I am in the process of a career transition. I am going to school. Working very hard to learn and absorb all that I am being taught. Struggling with assignments and projects and at times feeling as though I haven&rsquo;t moved. The truth is I have &ldquo;moved&rdquo;, I have learned, and I have improved my skills, not a little, but by leaps and bounds. I think my problem is one of perception. I am comparing myself to others who have been coding and learning intensely for years and I wonder why I am still not on par with them. As any good Full Stack Dev does I googled the problem and came across an interesting article that really applies to my current situation and maybe to yours as well if you are trying to learn something new. The funny part is that it came from a totally unexpected source, learning to dance at the&nbsp;<a href="https://www.arthurmurraydancing.com/dance-blog/5-ways-to-tell-if-youre-making-progress" target="_blank" rel="noopener noreferrer">Arthur Murray Dance Center Website</a>&nbsp;in the section headed 5 Ways to tell if you&rsquo;re making progress by Juan de Dios Garcia. If the link doesn&rsquo;t get you to the site then search for &ldquo;5 Ways to tell if you&rsquo;re making progress&rdquo;.</p>
                                            <p>A quick recap of the article is this: &ldquo;We are our own worst critic.&rdquo; This certainly applies to me. The author goes on to say, &ldquo;Everyone expects to see results just after one week going to the gym. However, every trainer will tell you, it doesn&rsquo;t work that way. Results take time and so does progress.&rdquo; I have tried to learn ballroom dancing and it was hard. Here are the 5 tips stolen from this article that I find have also applied to my Full Stack Dev learning process:</p>
                                            <p>1. IT&rsquo;S EASIER. Repetition is the key to getting your mind to remember what to do. The more you do it, the easier it gets. When a process for setting up an application or writing a JavaScript function gets easier to remember, that is a sure sign you are getting it. It is an indication that you are on your way to understanding that piece.</p>
                                            <p>2. IT&rsquo;S HARDER. In my Full Stack Dev course, each week has been much more challenging than the last. The instructor,&nbsp;<a href="http://linkedin.com/in/esterling-accime-324a4181" target="_blank" rel="noopener noreferrer">Esterling Accime</a>, pushes us to try new technologies at every turn. Try the hard stuff. Learn how to ask questions and research. Why, because he knows we are ready to progress to the next level.</p>
                                            <p>3. GOOD JOB. When you are progressing others will probably notice before you do. Sometimes it&rsquo;s as if you are fish not realizing you live in water. Our progress can be similar. You might only be able to tell by the compliments you get. Compliments like &ldquo;Way to Go!&rdquo; and &rdquo;Good Job!&rdquo; are not nearly as empty as we may think because these can indicate that, yes, you have made some progress. It can be hard to accept compliments. Just say, &ldquo;Thank you!&rdquo; It is the easiest way to accept. If you really want to know why you might ask, &ldquo;Why do you think I did a good job?&rdquo; The answer should prove that you are moving in the right direction.</p>
                                            <p>4. PICTURE PERFECT As a developer, the goal is to create products and websites, whether personal projects or professional ones. A quick review of an earlier project can tell you a lot. You either like it or not.&nbsp;If you review a past project and say, &rdquo;What the heck was I thinking!?!&rdquo; That is a concrete sign you have progressed.</p>
                                            <p>5. NEXT LEVEL As you progress and learn new coding skills your projects will reflect this. You may not see this, partly because you are focused on the goal at hand and involved in doing the work, but others will. Typically, readiness has to do with repeating patterns of coding without much prompting or simply put, the ability to do it on your own. If you find yourself moving on from one level to the next, take that as a sign of progression.</p>
                                            <p>The learning process is as much about learning about yourself as it is progression. I found all these points applied to me and it made me realize, while I have a long way to go, I have definitely made progress. The challenge now is to make the progress a sustainable practice and to stay consistent in learning. I hope this gives you hope that you are in fact learning and progressing as well!</p></p>
                                        </div>
                            
                                    <div className="card-action">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/pulse/am-i-making-progress-dean-warren/?trackingId=9vCz7qlQ0ND9gcLjkMKGFw%3D%3D"><span class="fa fa-linkedin" ></span></a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="s12 m4 hoverable">
                                <h2 className="header">Docker Commands and Cheatsheet</h2>
                                        <img src="https://miro.medium.com/max/336/0*iXuwZtbBvsYPPkrY.png" width="100" height="80" className="left-align card-image responsive-img" alt="Docker Icon"/>
                                <div className="card hoverable">
                                    
                                    
                                    <div className="card-stacked">
                                        <div className="card-content left-align flow-text">
                                            
                                            <h3>Basic Docker Commands </h3>
                                            
                                            <p>Before we begin working with docker, let's quickly go over its available commands to refresh our memory from our first Getting Started article. </p>
                                            <h5>Running the docker daemon and CLI Usage</h5>
                                            <p>Upon installation, the docker daemon should be running in the background, ready to accept commands sent by the docker CLI. For certain situations where it might be necessary to manually run docker, use the following. </p>
                                            <p>Running the docker daemon: </p>
                                            <p><b>sudo docker -d &</b> (Please note this is for Ubuntu or other Debian based builds.)</p>
                                            
                                            <h3>Docker Comands to Build and app</h3>
                                            <h5>Build the app</h5>
                                            <p>We are ready to build the app. Make sure you are still at the top level of your new directory. Here’s what ls should show:<br/> 

                                            <b>$ ls</b><br/> 
                                            <i>Dockerfile app.py requirements.txt</i><br/><br/> 
            

                                            Now run the build command. This creates a Docker image, which we’re going to tag using "-t" so it has a friendly name. <br/><br/>

                                            <b>docker build -t friendlyhello .</b> <br/><br/>
            

                                            Where is your built image? It’s in your machine’s local Docker image registry:<br/> 

                                            <b>$ docker images</b> <br/>
            

                                            <i>REPOSITORY            TAG                 IMAGE ID</i> <br/>
                                            <i>friendlyhello         latest              326387cea398</i> <br/><br/>
            

                                            Tip: You can use the commands <b>docker images</b> or the newer <b>docker image ls</b> to list images. They give you the same output. 

                                            <h5>Run the app</h5>

                                            Run the app, mapping your machine’s port 4000 to the container’s published port 80 using -p: <br/><br/>

                                            <b>docker run -p 4000:80 friendlyhello</b> <br/><br/>
            

                                            You should see a notice that Python is serving your app at http://0.0.0.0:80. But that message is coming from inside the container, which doesn’t know you mapped port 80 of that container to 4000, making the correct URL <i>http://localhost:4000.</i> </p>
                                        </div>    
                                        
                                        <div className="card-action">
                                            <a target="_blank" rel="noopener noreferrer" href="https://docs.docker.com/get-started/part2/#build-the-app">This is a link to the Docker Documentation these commands were taken from.</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>    
                        {/* <Col className="s12 m4 hoverable">
                            <div className="icon-block">
                                <h2 className="Center brown-text"><i className="material-icons">school</i></h2>
                                <h5 className="Center">Why Do I Feel So Dumb!?!</h5>
                                <div className="responsive card-image">
                                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/pulse/am-i-making-progress-dean-warren/?trackingId=9vCz7qlQ0ND9gcLjkMKGFw%3D%3D"><img src="https://media-exp1.licdn.com/dms/image/C4E12AQG36MYsigOTlQ/article-cover_image-shrink_720_1280/0?e=1601510400&v=beta&t=XybbSSFFJDxx1Oz4iGcSoyOzFqelD0RKv9i4RjiPqOc" width="380" height="380" alt="Computer Code"  className="responsive-img" /></a>
                                </div>
                                <div className="d-block p-1 rounded bg-dark text-white">
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/pulse/am-i-making-progress-dean-warren/?trackingId=9vCz7qlQ0ND9gcLjkMKGFw%3D%3D" className="text-light">LinkedIn Article </a>
                                </div>
                                <p className="light"><p>Why do I feel so dumb?</p>
                                <p>I am in the process of a career transition. I am going to school. Working very hard to learn and absorb all that I am being taught. Struggling with assignments and projects and at times feeling as though I haven&rsquo;t moved. The truth is I have &ldquo;moved&rdquo;, I have learned, and I have improved my skills, not a little, but by leaps and bounds. I think my problem is one of perception. I am comparing myself to others who have been coding and learning intensely for years and I wonder why I am still not on par with them. As any good Full Stack Dev does I googled the problem and came across an interesting article that really applies to my current situation and maybe to yours as well if you are trying to learn something new. The funny part is that it came from a totally unexpected source, learning to dance at the&nbsp;<a href="https://www.arthurmurraydancing.com/dance-blog/5-ways-to-tell-if-youre-making-progress" target="_blank" rel="noopener noreferrer">Arthur Murray Dance Center Website</a>&nbsp;in the section headed 5 Ways to tell if you&rsquo;re making progress by Juan de Dios Garcia. If the link doesn&rsquo;t get you to the site then search for &ldquo;5 Ways to tell if you&rsquo;re making progress&rdquo;.</p>
                                <p>A quick recap of the article is this: &ldquo;We are our own worst critic.&rdquo; This certainly applies to me. The author goes on to say, &ldquo;Everyone expects to see results just after one week going to the gym. However, every trainer will tell you, it doesn&rsquo;t work that way. Results take time and so does progress.&rdquo; I have tried to learn ballroom dancing and it was hard. Here are the 5 tips stolen from this article that I find have also applied to my Full Stack Dev learning process:</p>
                                <p>1. IT&rsquo;S EASIER. Repetition is the key to getting your mind to remember what to do. The more you do it, the easier it gets. When a process for setting up an application or writing a JavaScript function gets easier to remember, that is a sure sign you are getting it. It is an indication that you are on your way to understanding that piece.</p>
                                <p>2. IT&rsquo;S HARDER. In my Full Stack Dev course, each week has been much more challenging than the last. The instructor,&nbsp;<a href="http://linkedin.com/in/esterling-accime-324a4181" target="_blank" rel="noopener noreferrer">Esterling Accime</a>, pushes us to try new technologies at every turn. Try the hard stuff. Learn how to ask questions and research. Why, because he knows we are ready to progress to the next level.</p>
                                <p>3. GOOD JOB. When you are progressing others will probably notice before you do. Sometimes it&rsquo;s as if you are fish not realizing you live in water. Our progress can be similar. You might only be able to tell by the compliments you get. Compliments like &ldquo;Way to Go!&rdquo; and &rdquo;Good Job!&rdquo; are not nearly as empty as we may think because these can indicate that, yes, you have made some progress. It can be hard to accept compliments. Just say, &ldquo;Thank you!&rdquo; It is the easiest way to accept. If you really want to know why you might ask, &ldquo;Why do you think I did a good job?&rdquo; The answer should prove that you are moving in the right direction.</p>
                                <p>4. PICTURE PERFECT As a developer, the goal is to create products and websites, whether personal projects or professional ones. A quick review of an earlier project can tell you a lot. You either like it or not.&nbsp;If you review a past project and say, &rdquo;What the heck was I thinking!?!&rdquo; That is a concrete sign you have progressed.</p>
                                <p>5. NEXT LEVEL As you progress and learn new coding skills your projects will reflect this. You may not see this, partly because you are focused on the goal at hand and involved in doing the work, but others will. Typically, readiness has to do with repeating patterns of coding without much prompting or simply put, the ability to do it on your own. If you find yourself moving on from one level to the next, take that as a sign of progression.</p>
                                <p>The learning process is as much about learning about yourself as it is progression. I found all these points applied to me and it made me realize, while I have a long way to go, I have definitely made progress. The challenge now is to make the progress a sustainable practice and to stay consistent in learning. I hope this gives you hope that you are in fact learning and progressing as well!</p></p>
                            </div>
                        </Col> */}

                    </Row>
                </div>
            </div>            
        </>    
    )
}


 