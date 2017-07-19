import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';

const propTypes = {};

const defaultProps = {};

const content = `
Career
--------
* 2012.7 국군지휘통신사령부 합동상호운용성센터 소프트웨어관리병 근무
* 2015.1 DailyHotel / Server  
 * trello 사진 참조
* 2015.6 - 2017.7 Coupang / Finance 

Activity
--------
* [SOPT](http://sopt.org/wp/)
* [Nexters](http://teamnexters.com/)
 * -ing
* [Github](https://github.com/BoBinLee)
 * every day
* [Tistory](http://cultist-tp.tistory.com/)
 * sometimes

ETC
--------
* [RRR](https://www.instagram.com/runrabbitrun_seoul/)
 * a week
* [Thenx](https://www.youtube.com/watch?v=iqBAR0rfjiI)
 * two times a week
`;

const Career = () => {
  return (
    <div dangerouslySetInnerHTML={{__html: marked(content)}}>
    </div>
  );
};

Career.propTypes = propTypes;
Career.defaultProps = defaultProps;

export default Career;
