# JUSFOOTBALL

a football news app

# User Story

## As a user I want to...
- Log in/create an account.
- View footbal updates, schedules and scores.
- Be able to segment data by conference.

# Code Snippets
## Component

```
import React, { Component } from "react";

class Event extends Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (


            <tr key={this.props.index}>
                <td width="5%"><i className="fa fa-bell-o"></i></td>
                <td>{this.props.title}</td>
                <td className="level-right"><a className="button is-small is-primary" href="#">Action</a></td>
            </tr>

        );

    }
}


export default Event;
```

## Data
```
const scoress = [
    {
        teamOne: 'Patriots 17',
        teamTwo: 'Colts 27'
    },
    {
        teamOne: 'Cheifs 34',
        teamTwo: 'Chargers 28'
    },
    {
        teamOne: 'Panthers 21',
        teamTwo: 'Bills 42'
    },
    {
        teamOne: 'Jets 9',
        teamTwo: 'Dolphins 21'
    },
    {
        teamOne: 'Cowboys 36',
        teamTwo: 'Giants 3'
    }
];
```

## Test
```
import { render, screen } from '@testing-library/react';
import Admin from './Admin'

test('renders Dashboard tag', () => {
  render(<Admin />);
  const spanElement = screen.getByText(/Dashboard/i);
  expect(spanElement).toBeInTheDocument();
});
```
# Installation Instructions
1. The first thing that we are going to do is fork and clone
2. Now we are going to install the current dependencies that are listed inside of package.json
```
npm install
```
3. Make a commit.
```
git add .
git commit -m "Install dependencies for project"
```
4. Start up server and test out the app!
```
npm start
```

# Screenshots

![Modules](./img/jusfootball.png)