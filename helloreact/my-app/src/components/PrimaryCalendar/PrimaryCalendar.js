import React, { Component } from 'react';
import './PrimaryCalendar.sass';
import {profileImage} from "./images";
import * as moment from "moment";

class PrimaryCalendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currrentWeek:moment().week(),
            currentDay: moment().format("D"),
            isCurrentDay:true
        };
        this.onPrevSubmit=this.onPrevSubmit.bind(this);
        this.onNextSubmit=this.onNextSubmit.bind(this);
        this.onChangeCurrentForm1=this.onChangeCurrentForm1.bind(this);
        this.onChangeCurrentForm2=this.onChangeCurrentForm2.bind(this);
        this.onChangeCurrentForm3=this.onChangeCurrentForm3.bind(this);
        this.onChangeCurrentForm4=this.onChangeCurrentForm4.bind(this);
        this.onChangeCurrentForm5=this.onChangeCurrentForm5.bind(this);
        this.onChangeCurrentForm6=this.onChangeCurrentForm6.bind(this);
        this.onChangeCurrentForm7=this.onChangeCurrentForm7.bind(this);
    }
    onPrevSubmit(event) {
        this.setState( {
            currrentWeek: this.state.currrentWeek-1,
            isCurrentDay: false
        });
    };
    onNextSubmit(event) {
        this.setState( {
            currrentWeek: this.state.currrentWeek+1,
            isCurrentDay: false
        });
    };
    onChangeCurrentForm1(){
        if(this.state.isCurrentDay) {
        if(moment().day(1).isoWeek(this.state.currrentWeek).format("D") === this.state.currentDay) {

        return(<div  className={"forms"} style={{backgroundColor:'#0B3157'}} >
                <div className={"formsBottom"} >
                <div className={"formDays"} style={{color:'red'}} >{moment().day(2).isoWeek(this.state.currrentWeek).format("D")}</div>
                </div>
                </div>);

        }
        }
    };
    onChangeCurrentForm2(){
        if(this.state.isCurrentDay) {
        if(moment().day(2).isoWeek(this.state.currrentWeek).format("D") === this.state.currentDay) {

            return(<div  className={"forms"} style={{backgroundColor:'#0B3157'}} >
                     <div className={"formsBottom"} >
                <div className={"formDays"} style={{color:'red'}} >{moment().day(2).isoWeek(this.state.currrentWeek).format("D")}</div>
            </div>
            </div>);

        }
        }

    };
    onChangeCurrentForm3(){
        if(this.state.isCurrentDay) {
        if(moment().day(3).isoWeek(this.state.currrentWeek).format("D") === this.state.currentDay) {
            return(<div  className={"forms"} style={{backgroundColor:'#0B3157'}} >
        <div className={"formsBottom"} >
                <div className={"formDays"} style={{color:'red'}} >{moment().day(2).isoWeek(this.state.currrentWeek).format("D")}</div>
            </div>
            </div>);
        }
        }
    };
    onChangeCurrentForm4(){
        if(this.state.isCurrentDay) {
        if(moment().day(4).isoWeek(this.state.currrentWeek).format("D") === this.state.currentDay) {
            return(<div  className={"forms"} style={{backgroundColor:'#0B3157'}} >
        <div className={"formsBottom"} >
                <div className={"formDays"} style={{color:'red'}} >{moment().day(2).isoWeek(this.state.currrentWeek).format("D")}</div>
            </div>
            </div>);
        }
        }
    };
    onChangeCurrentForm5(){
        if(this.state.isCurrentDay) {
        if(moment().day(5).isoWeek(this.state.currrentWeek).format("D") === this.state.currentDay) {
            return(<div  className={"forms"} style={{backgroundColor:'#0B3157'}} >
        <div className={"formsBottom"} >
                <div className={"formDays"} style={{color:'red'}} >{moment().day(2).isoWeek(this.state.currrentWeek).format("D")}</div>
            </div>
            </div>);
        }
        }
    };
    onChangeCurrentForm6(){
        if(this.state.isCurrentDay) {
        if(moment().day(6).isoWeek(this.state.currrentWeek).format("D") === this.state.currentDay) {
            return(<div  className={"forms"} style={{backgroundColor:'#0B3157'}} >
        <div className={"formsBottom"} >
                <div className={"formDays"} style={{color:'red'}} >{moment().day(2).isoWeek(this.state.currrentWeek).format("D")}</div>
            </div>
            </div>);
        }
        }
    };
    onChangeCurrentForm7(){
        if(this.state.isCurrentDay) {
        if(moment().day(7).isoWeek(this.state.currrentWeek).format("D") === this.state.currentDay) {
            return(<div  className={"forms"} style={{backgroundColor:'#0B3157'}} >
        <div className={"formsBottom"} >
                <div className={"formDays"} style={{color:'red'}} >{moment().day(2).isoWeek(this.state.currrentWeek).format("D")}</div>
            </div>
            </div>);
        }
        }
    };
    render() {
        const{currrentWeek, currentDay}=this.state;
        return (
            <div className="mainContainer">
                <div className="CalendarContainer">
                    <div className="header" ></div>
                    <div className="headerMonth">
                        <div className="headerMonthInner">
                            <button className="prev" onClick={this.onPrevSubmit}>
                                <span>PREV</span>
                            </button>
                            <div className="month">
                                <span>{moment(moment().day("Monday").isoWeek(currrentWeek)).format("MMM DD")}-{moment(moment().day(7).isoWeek(currrentWeek)).format("MMM DD")}</span>
                                <div  className="arrow" style={{backgroundImage: `url(${profileImage})`} }></div>
                            </div>
                            <button className="next" onClick={this.onNextSubmit}>
                                <span>NEXT</span>
                            </button>
                        </div>
                    </div>
                    <div className="headerWeek">
                        <label className="daysWeeks">S</label>
                        <label className="daysWeeks">M</label>
                        <label className="daysWeeks">T</label>
                        <label className="daysWeeks">W</label>
                        <label className="daysWeeks">T</label>
                        <label className="daysWeeks">F</label>
                        <label className="daysWeeks">S</label>
                    </div>
                    <div className="headerDays">
                        <div className="forms">
                            <div className="formDays">{moment().day(7).isoWeek(currrentWeek).format("D")}</div>
                                   {this.onChangeCurrentForm7()}
                        </div>
                        <div className="forms">
                            <div className="formDays">{moment().day(1).isoWeek(currrentWeek).format("D")}</div>
                                   {this.onChangeCurrentForm1()}
                        </div>
                        <div className="forms">
                            <div className="formDays">{moment().day(2).isoWeek(currrentWeek).format("D")}</div>
                                   {this.onChangeCurrentForm2()}
                        </div>
                        <div className="forms">
                            <div className="formDays">{moment().day(3).isoWeek(currrentWeek).format("D")}</div>
                                    {this.onChangeCurrentForm3()}
                        </div>
                        <div className="forms">
                            <div className="formDays">{moment().day(4).isoWeek(currrentWeek).format("D")}</div>
                                    {this.onChangeCurrentForm4()}
                        </div>
                        <div className="forms">
                            <div className="formDays">{moment().day(5).isoWeek(currrentWeek).format("D")}</div>
                                     {this.onChangeCurrentForm5()}
                        </div>
                        <div className="forms">
                            <div className="formDays">{moment().day(6).isoWeek(currrentWeek).format("D")}</div>
                                    {this.onChangeCurrentForm6()}
                        </div>

                    </div>
                    </div>
                </div>


        );
    }
}

export default PrimaryCalendar;
