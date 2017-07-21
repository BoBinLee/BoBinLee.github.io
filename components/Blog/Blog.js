import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  List,
  RaisedButton,
} from 'material-ui';
import _ from 'lodash';
import './Blog.scss';
import BlogCard from './BlogCard';

const propTypes = {
  rssUrl: PropTypes.string,
  blogUrl: PropTypes.string
};

const defaultProps = {
  rssUrl: 'http://cultist-tp.tistory.com/rss',
  blogUrl : 'http://cultist-tp.tistory.com',
};

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    this.requestTistoryRSS();
  }

  requestTistoryRSS = () => {
    const { rssUrl } = this.props;
    feednami.load(rssUrl, (res) => {
      const articles = _.map(res.feed.entries, article => {
        return {
          guid : article.guid,
          title : article.title,
          link : article.link,
          date : article.date,
          description: article.description,
        };
      });
      this.setState({articles});
    });
  };

  render() {
    const { blogUrl } = this.props;
    const articles = this.state.articles.map(article => <BlogCard key={article.guid} article={article} />);
    return (
      <div className="blog">
        <List>
          {articles}
          <RaisedButton href={blogUrl} label="More" primary className="blog-more-button" />
        </List>
      </div>
    );
  }
}

Blog.propTypes = propTypes;
Blog.defaultProps = defaultProps;

export default Blog;