import React, { Component } from 'react';
import { Grid, Header, Container, Icon, Image } from 'semantic-ui-react';
import styled from 'styled-components';
import img from '../images/computer-desk.jpg';
import Typist from 'react-typist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

class HomePage extends Component{


    render(){
        const Content = styled.div`
            height: 100vh;
            background-image: url(${img});
            background-size: cover;
            background-repeat:   no-repeat;
            background-position: center center; 
            z-index: -1;
        `;

        return (
                <Container fluid={true}>
                    <Content>
                        <Grid >
                            <Grid.Row verticalAlign="middle" centered>
                                <Grid.Column>
                                    <Typist className="name-header"cursor={{ hideWhenDone: true }}>
                                        Hi, I'm Jeffrey!
                                        <br/>
                                        I am a developer
                                        <Typist.Backspace count={9} delay={1500}/>
                                        student
                                        <Typist.Backspace count={7} delay={1500}/>
                                        designer
                                        <Typist.Backspace count={9} delay={1500}/>
                                        n optimist
                                        <Typist.Backspace count={8} delay={1500}/>
                                        entrepreneur
                                        <Typist.Backspace count={12} delay={1500}/>
                                        innovator
                                    </Typist>
                                </Grid.Column>
                            </Grid.Row>
                            {/*<Grid.Row>*/}
                                {/*<Grid.Column>*/}
                                    {/*<Typist className="name-header"cursor={{ hideWhenDone: true }}>*/}
                                        {/*<Typist.Delay ms={5000} />*/}
                                        {/*I am a engineer*/}
                                    {/*</Typist>*/}

                                {/*</Grid.Column>*/}
                            {/*</Grid.Row>*/}
                            <Grid.Row className="icon-grid">
                                <Grid.Column>
                                    <a href="https://github.com/jeffreysu1355">
                                        <FontAwesomeIcon icon={['fab','github'] } className="icons" color="rgb(61, 192, 176)"/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/jeffreysu2/">
                                        <FontAwesomeIcon icon={['fab','linkedin'] } className="icons" color="rgb(61, 192, 176)"/>
                                    </a>
                                    <a href="mailto:jeffreysu1355@gmail.com">
                                        <FontAwesomeIcon icon="envelope" className="icons" color="rgb(61, 192, 176)"/>
                                    </a>

                                    <a href="https://github.com/jeffreysu1355">
                                        <FontAwesomeIcon icon={['fab','facebook'] } className="icons" color="rgb(61, 192, 176)"/>
                                    </a>
                                </Grid.Column>

                            </Grid.Row>
                        </Grid>
                    </Content>
                </Container>

        );
    }

}

export default HomePage;