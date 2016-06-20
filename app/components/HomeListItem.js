import React from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';
import SocialShare from 'material-ui/svg-icons/social/share';
import NotificationMore from 'material-ui/svg-icons/notification/more';
// import ListItemContent from './ListItemContent';
import { Link } from 'react-router';

const styles = {
  paper: {
    margin: 10,
    padding: 16
  },
  topContainer: {
    position: 'relative'
  },
  titleContainer: {
    marginRight: 91,
    paddingTop: 12,
    paddingBottom: 5
  },
  span: {
    fontSize: '1em',
    color: '#9e9e9e'
  },
  h1: {
    overflow: 'hidden',
    marginTop: '0.2em',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontWeight: 500,
    fontSize: '1.6em'
  },
  imgContainer: {
    position: 'absolute',
    top: 0,
    right: 0
  },
  img: {
    width: 75,
    height: 75
  },
  content: {
    lineHeight: '1.6em',
    color: '#9e9e9e'
  }

};

export default class HomeListItem extends React.Component {
  render() {
    {/*console.log(this.props)*/}
    const { articleItem } = this.props;
    return(
      <Paper style={styles.paper} zDepth={1}>
        <div style={styles.topContainer}>
          <div style={styles.titleContainer}>
            <span style={styles.span}>{articleItem.tag}</span>
            <h1 style={styles.h1}>{articleItem.title}</h1>
          </div>
          <div style={styles.imgContainer}>
            <img style={styles.img} src={require('./../../public/images/newyorkcity.png')} alt="this is a img.75 x 75px" />
          </div>
        </div>
        <p>
          <span style={styles.content}>
            {articleItem.summary}
          </span>
        </p>
        <div>
          <Link to="">
            <FlatButton
              label="SHARE"
              linkButton={true}
              /*href="javascript:;"*/
              primary={true}
              icon={<SocialShare />}
            />
          </Link>
          <Link to={`/articles/${articleItem.id}`}>
            <FlatButton
              label="MORE"
              linkButton={true}
              /*href="#/articles/article/1"*/
              primary={true}
              icon={<NotificationMore />}
            />
          </Link>
        </div>
      </Paper>
    );
  }
}
