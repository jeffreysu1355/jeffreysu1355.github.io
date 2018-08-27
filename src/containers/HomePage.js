import React, { Component } from 'react';
import { Grid, Header, Container } from 'semantic-ui-react';
import styled from 'styled-components';
import img from '../images/computer-desk.jpg';
import Typist from 'react-typist';

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
                                    <Typist className="name-header">
                                        {/*<Header className="name-header">Hi, I'm Jeffrey!</Header>*/}
                                        Hi, I'm Jeffrey!
                                    </Typist>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>

                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Content>


                </Container>


        );
    }

}

export default HomePage;