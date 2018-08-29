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
                                    </Typist>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Typist className="name-header"cursor={{ hideWhenDone: true }}>
                                        I am a engineer
                                    </Typist>

                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <FontAwesomeIcon icon={['fab','github'] } className="icons"/>
                                    {/*<i className="fab fa-github"></i>*/}
                                    {/*<Icon name="github"/>*/}
                                    {/*<Image src='https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png'/>*/}
                                    <FontAwesomeIcon icon={['fab','linkedin'] } className="icons"/>
                                    <FontAwesomeIcon icon="envelope" className="icons"/>
                                    <FontAwesomeIcon icon={['fab','facebook'] } className="icons"/>
                                </Grid.Column>

                            </Grid.Row>
                        </Grid>
                    </Content>
                </Container>

        );
    }

}

export default HomePage;