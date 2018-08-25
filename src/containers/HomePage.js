import React, { Component } from 'react';
import { Grid, Header, Container } from 'semantic-ui-react';
import styled from 'styled-components';
import img from '../images/computer-desk.jpg';
import img2 from '../images/Random.png';

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
        // const style={
        //     height: "100vh",
        //     background-image: url(${img});
        //
        // };
        return (
                <Container fluid={true}>
                    <Content>
                        <Grid >
                                <Grid.Row verticalAlign="middle" centered>
                                    <Grid.Column>
                                        <Header className="name-header">Jeffrey Su</Header>
                                    </Grid.Column>
                                </Grid.Row>
                        </Grid>
                    </Content>

                </Container>


        );
    }

}

export default HomePage;