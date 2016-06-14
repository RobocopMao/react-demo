import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import SocialShare from 'material-ui/svg-icons/social/share';
import NotificationMore from 'material-ui/svg-icons/notification/more';

const styles = {
  paper: {
    margin: 10,
    padding: 16
  },
  topContainer: {
    position: 'relative'
  },
  titleContainer: {
    paddingBottom: 16
  },
  span: {
    fontSize: '1em',
    color: '#9e9e9e'
  },
  h1: {
    overflow: 'hidden',
    marginTop: 0,
    marginBottom: '0.5em',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontWeight: 500,
    fontSize: '1.6em'
  },
  imgContainer: {
    // position: 'absolute',
    // top: 0,
    // right: 0
  },
  img: {
    width: '100%',
    maxWidth: '640px',
    textAlign: 'center'
  },
  content: {
    lineHeight: '1.6em',
    color: '#9e9e9e'
  }

};

export default class Article extends React.Component {
  render() {

    const articleItem = ARTICALS[this.props.params.id];

    return(
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Paper style={styles.paper} zDepth={1}>
        <div style={styles.topContainer}>
          <div style={styles.titleContainer}>
            <h1 style={styles.h1}>{articleItem.title}</h1>
            <span style={styles.span}>{articleItem.tag}</span>
          </div>
        </div>
        <div style={styles.imgContainer}>
          <img style={styles.img} src={require('./../../public/images/newyorkcity_big.jpg')} alt="this is a img." />
        </div>
        <p>
          <span style={styles.content}>
            {articleItem.content}
          </span>
        </p>
        <div>
          <FlatButton
            label="SHARE"
            linkButton={true}
            /*href="javascript:;"*/
            primary={true}
            icon={<SocialShare />}
          />
          <FlatButton
            label="MORE"
            linkButton={true}
            /*href="#/articles/article/1"*/
            primary={true}
            icon={<NotificationMore />}
          />
        </div>
      </Paper>
      </MuiThemeProvider>
    );
  }
}
