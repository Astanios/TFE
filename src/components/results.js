import React from 'react';
import { connect } from 'react-redux';
import renderHTML from 'react-render-html';
import {Calendar, CalendarControls} from 'react-yearly-calendar';
import moment from 'moment';
import safeEval from 'notevil';

import { update, site } from '../reducers/resultsReducer';

class Results extends React.Component {
  constructor(props) {
    super(props);

    const today = moment();

    const customCSSclasses = {
      holidays: ['2018-04-25', '2018-05-01', '2018-06-02', '2018-08-15', '2018-11-01'],
    };
    // alternatively, customClasses can be a function accepting a moment object. For example:
    // day => (day.isBefore(moment([day.year(),2,21])) || day.isAfter(moment([day.year(),11,21]))) ? 'winter': 'summer'

    this.state = {
      year: today.year(),
      selectedDay: today,
      showWeekSeparators: true,
      firstDayOfWeek: 0, // sunday
      customCSSclasses
    };
  }
  onPrevYear() {
    this.setState(prevState => ({
      year: prevState.year - 1
    }));
  }

  onNextYear() {
    this.setState(prevState => ({
      year: prevState.year + 1
    }));
  }

  goToToday() {
    const today = moment();

    this.setState({
      selectedDay: today,
      selectedRange: [today, moment(today).add(15, 'day')],
      year: today.year()
    });
  }

  datePicked(date) {
    this.setState({
      selectedDay: date,
      selectedRange: [date, moment(date).add(15, 'day')]
    });
  }

  rangePicked(start, end) {
    this.setState({
      selectedRange: [start, end],
      selectedDay: start
    });
  }

  toggleShowWeekSeparators() {
    this.setState(prevState => ({
      showWeekSeparators: !prevState.showWeekSeparators
    }));
  }

  selectFirstDayOfWeek(event) {
    this.setState({
      firstDayOfWeek: parseInt(event.target.value, 10)
    });
  }

  updateClasses() {
    const { customCSSclasses } = this.state;
    const input = this.customClassesInput.value;
    const context = { customCSSclasses, moment };

    try {
      safeEval(input, context);

      const nextCustomCSSclasses = context.customCSSclasses;
      this.setState({
        customCSSclasses: nextCustomCSSclasses,
        customClassesError: false
      });
    } catch (e) {
      this.setState({
        customClassesError: true
      });
      throw e;
    }
  }
  onChange = date => alert({ date })
  
  onDatePicked(date) {
    alert(date);
  }
  reateMarkup() {
    return { __html: this.props.content };
  }
  render() {
    const {
      year,
      selectedDay,
      showWeekSeparators,
      firstDayOfWeek,
      customCSSclasses
    } = this.state;
    const {
      content,
      html,
    } = this.props;

    return (
      <div className='App-results'>
        <div className='App-text'>
          <h1>Búsqueda: <b>{content.url}</b></h1>
          <h4>Resultados: {content.results}</h4>
          { content.type === 'url' ?
            <div className='App-url-results'>
              <div className='App-url-results'>
                {content.list.map( (version, index) =>
                <li
                  className='App-link'
                  key={index}
                  onClick={() =>
                      this.props.site({ 'site_version': version })
                  }
                >
                  {version}
                </li>
                )}
              </div>
              <div id="calendar">
                <CalendarControls
                  year={year}
                  showTodayButton={false}
                  onPrevYear={() => this.onPrevYear()}
                  onNextYear={() => this.onNextYear()}
                  goToToday={() => this.goToToday()}
                />
                <Calendar
                  year={year}
                  selectedDay={selectedDay}
                  showWeekSeparators={showWeekSeparators}
                  firstDayOfWeek={firstDayOfWeek}
                  onPickDate={(date, classes) => this.datePicked(date, classes)}
                  onPickRange={(start, end) => this.rangePicked(start, end)}
                  customClasses={customCSSclasses}
                />
              </div>

        <div className="options">
          <div className="half">
            <b>Demo Options</b>
            <br />
            <ul>
              <li>
                <input
                  id="showWeekSeparators"
                  type="checkbox"
                  checked={showWeekSeparators}
                  onChange={() => this.toggleShowWeekSeparators()}
                />
                <label htmlFor="showWeekSeparators">Show week separators</label>
              </li>
              <li>
                <label htmlFor="firstDayOfWeek">First day of week</label>
                <select id="firstDayOfWeek" value={firstDayOfWeek} onChange={e => this.selectFirstDayOfWeek(e)}>
                  {[0, 1, 2, 3, 4, 5, 6].map(i => (
                    <option key={i} value={i}>
                      {moment()
                        .weekday(i)
                        .format('ddd')}
                    </option>
                  ))}
                </select>
              </li>
            </ul>
            <br />

          </div>

        </div>

            </div>
            
          :
            <div className='App-keyword-results'>
              {content.list.map( (version, index) =>
              <li
                className='App-link'
                key={index}
                onClick={() =>
                    this.props.site({ 'site_version': version })
                }
              >
                {version}
              </li>
              )}
            </div>
          }

          
          <div className='app'>
            {renderHTML(html)}
          </div>
        </div>
      </div>
    )
  }
}

const mS = state => {
  return {
    html: state.results.html,
    content: state.results.content,
    showExternalHTML: state.results.showExternalHTML
  };
};

const mD = {
  update,
  site
};

export default connect(mS, mD)(Results);

/*
  <div dangerouslySetInnerHTML={this.createMarkup()} >
  </div>
  <div className='app'>
    {renderHTML(this.createMarkup())}
  </div>
*/