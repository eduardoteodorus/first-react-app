import React from 'react';
import Post from './Post';

export default class App extends React.Component {

    render() {
        return (
            <div>
                <Post title="Fazer café" />
                <Post title="Estudar ReactJS"/>
            </div>
        )
    }

}