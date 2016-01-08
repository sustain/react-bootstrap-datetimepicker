import React, { Component } from "react"
import MomentPropTypes from "react-moment-proptypes"
import classNames from "classnames"
import moment from "moment"
import TimePickerTime from "./time.js"
import TimePickerHours from "./hours.js"
import TimePickerMinutes from "./minutes.js"
import {
    VIEW_MODE_TIME,
    VIEW_MODE_HOURS,
    VIEW_MODE_MINUTES
} from "../config.js"

class TimePicker extends Component {

    static propTypes = {
        dateTime   : MomentPropTypes.momentObj,
        locale     : React.PropTypes.string,
        onChange   : React.PropTypes.func,
        sideBySide : React.PropTypes.bool
    };

    constructor (...args) {
        super(...args)

        this.state = Object.assign({}, this.state, { use24Hours : this.get24HoursFlag() })
    }

    state = {
        use24Hours : false,
        viewMode   : VIEW_MODE_TIME
    };

    componentWillReceiveProps () {
        this.setState({ use24Hours : this.get24HoursFlag() })
    }

    get24HoursFlag () {
        const { locale } = this.props
        const momentLocale = moment().locale(locale)
        const actualFormat = ["LT", "LTS"].map((f) => momentLocale.localeData().longDateFormat(f)).join(" ")

        return (
            actualFormat.toLowerCase().indexOf("a") < 1 && actualFormat.replace(/\[.*?\]/g, "").indexOf("h") < 1
        )
    }

    onClickHours = (e) => {
        e.preventDefault()
        this.setState({
            viewMode : VIEW_MODE_HOURS
        })
    };

    onClickMinutes = (e) => {
        e.preventDefault()
        this.setState({
            viewMode : VIEW_MODE_MINUTES
        })
    };

    onSelectTime = (date) => {
        const {
            dateTime,
            onChange
        } = this.props

        onChange(moment(dateTime).hour(date.hour()).minutes(date.minutes()))

        this.setState({
            viewMode : VIEW_MODE_TIME
        })
    };

    renderViewMode () {
        const {
            use24Hours,
            viewMode
        } = this.state

        switch (viewMode) {
            case VIEW_MODE_HOURS :
                return (
                    <TimePickerHours { ...this.props }
                                     use24Hours={ use24Hours }
                                     onSelect={ this.onSelectTime } />
                )

            case VIEW_MODE_MINUTES :
                return (
                    <TimePickerMinutes { ...this.props }
                                       onSelect={ this.onSelectTime } />
                )

            default :
                return (
                    <TimePickerTime use24Hours={ use24Hours }
                                    onClickHours={ this.onClickHours }
                                    onClickMinutes={ this.onClickMinutes }
                                    onSelect={ this.onSelectTime }
                                    { ...this.props } />
                )
        }
    }

    render () {
        const { sideBySide } = this.props
        const classes = classNames("timepicker", { "col-md-6" : sideBySide })
        return (
            <div className={ classes }>
                { this.renderViewMode() }
            </div>
        )
    }

}

export default TimePicker
