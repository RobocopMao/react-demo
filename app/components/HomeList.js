import React from 'react';
import HomeListItem from './HomeListItem';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import { Link } from 'react-router';

// const styles = {
//   HomeListContainer: {
//     position: 'absolute',
//     top: 64,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     overflowX: 'hidden',
//     overflowY: 'scroll'
//   }
// }

export default class HomeList extends React.Component {
  render() {
    const articles = ARTICALS;
    {/*console.log(articles)*/}
    return(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          {articles.map(article => (
            <HomeListItem key={article.id} articleItem={articles[article.id]} />
          ))}
        </div>
      </MuiThemeProvider>
    );
  }
}
