
import React from "react";
import  Button  from 'react-bootstrap/Button';
import './webpage.css';
import Card from 'react-bootstrap/Card';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container, Navbar } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';


const Home = () => {


        /*function magnify(imgID, zoom) {
            var img, glass, w, h, bw;
            img = document.getElementById(imgID);
          
            
            glass = document.createElement("DIV");
            glass.setAttribute("class", "img-magnifier-glass");
          
            
            img.parentElement.insertBefore(glass, img);
          
            
            glass.style.backgroundImage = "url('" + img.src + "')";
            glass.style.backgroundRepeat = "no-repeat";
            glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
            bw = 3;
            w = glass.offsetWidth / 2;
            h = glass.offsetHeight / 2;
          
            
            glass.addEventListener("mousemove", moveMagnifier);
            img.addEventListener("mousemove", moveMagnifier);
          
            
            glass.addEventListener("touchmove", moveMagnifier);
            img.addEventListener("touchmove", moveMagnifier);
            function moveMagnifier(e) {
              var pos, x, y;
              
              e.preventDefault();
              
              pos = getCursorPos(e);
              x = pos.x;
              y = pos.y;
             
              if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
              if (x < w / zoom) {x = w / zoom;}
              if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
              if (y < h / zoom) {y = h / zoom;}
              
              glass.style.left = (x - w) + "px";
              glass.style.top = (y - h) + "px";
              
              glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
            }
          
            function getCursorPos(e) {
              var a, x = 0, y = 0;
              e = e || window.event;
              
              a = img.getBoundingClientRect();
             
              x = e.pageX - a.left;
              y = e.pageY - a.top;

              x = x - window.pageXOffset;
              y = y - window.pageYOffset;
              return {x : x, y : y};
            }
          }
          */
        
          
    return(
        
        <div className='Zine'>
            <div>
            </div>
            <div className='wlcmHome'>
            <div className='lgnhdr'>
            <Navbar bg='light' expand="lg">
                    <Container>
                        <Navbar.Brand href="/home"style={{fontFamily: 'Myriad Pro Regular'}}>Zine</Navbar.Brand>
                        <Navbar.Toggle aria-controls='basic-navbar-nav' />
                        <Navbar.Collapse id='basic-navbar-nav'>
                            <Nav className='me-auto' style={{fontFamily: 'Myriad Pro Regular'}}>
                                <Nav.Link href='/home'>Home</Nav.Link>
                                <Nav.Link href='/Login'>Login</Nav.Link>
                                <Nav.Link href='profile'>Profile</Nav.Link>
                                <NavDropdown title="Settings" id="basic-nav-dropdown">
                                    
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <h1 className='header'>Insert Something</h1>
            </div>
            <br></br>
            <h3 style={{fontFamily: 'Myriad Pro Regular'}}>Zine of the week</h3>
            <div class="img-magnifier-container">
                
                
        <img id="thrasher" src="https://www.thrashermagazine.com/images/TH1020Cover.jpg" height={550} alt="thrashermag" />
        </div><br></br>
        <div className='Description'>
            <Card>
                <Card.Header as="h5" style={{fontFamily: 'Myriad Pro Regular'}}>Description</Card.Header>
                <Card.Body>
                <Card.Text style={{fontFamily: 'Myriad Pro Regular'}}>
                Published monthly in San Francisco, CA since January 1981, Thrasher is the longest-running, best-selling skateboard magazine of all time—its name synonymous with both skateboarding’s roots and constant evolution;
                 its staff dedicated to defining this evolution and the adventurous spirit of their readership. 
                Say “1981” out loud. It may not have the same ring as “1969” or “Y2K,” but that second year of the 1980s was one of historical firsts: NASA launched the first reusable space shuttle, Columbia, that Spring.
                 IBM introduced the first personal computer. That Summer spawned the premier of MTV. But to start the year off, before any of these other events took place, a group of skateboarders in a corner of San Francisco were putting together the first issue of Thrasher magazine. Thrasher quickly became the most revered skate mag in the world; skateboarding had found a mouthpiece and imposed itself on the landscape because of it. What started as a 32-page tabloid developed into several respected brands—including Juxtapoz and SLAP magazines—along with a series of books, ramp building manuals, Skate Rock albums, Thrasher videos and DVDs, an enormously popular product and softgoods line, and the number-one authority for skateboarding online, thrashermagazine.com. Today, Thrasher is bigger and better than ever, its name synonymous with both skateboarding’s roots and constant evolution; its staff dedicated to defining this evolution and the adventurous spirit of their readership. International corporate big-wigs try to buy into our credibility, while kids tattoo the magazine’s mantra, “Skate And Destroy,” into their skin. Like those tattoos carved into the arms of skaters worldwide, Thrasher is forever.
                </Card.Text>
                <Button style={{fontFamily: 'Myriad Pro Regular'}} variant="outline-secondary" href='https://www.thrashermagazine.com/'>Go To Website</Button>
                </Card.Body>
            </Card>
        </div>
    </div>
    );
}

export default Home;