import React, { useContext, useEffect, useState } from 'react'
import Home from '../HomeComponent/Home'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AccessAlarmsRoundedIcon from '@material-ui/icons/AccessAlarmsRounded';
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import BarChartRoundedIcon from '@material-ui/icons/BarChartRounded';


import "./dashboard.scss"
import QuestionsApiCall from '../ApiCalls/QuestionsApiCall';

function DashBoard() {
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [approvedQuestions, setApprovedQuestions] = useState(0);
    const [rejectedQuestions, setRejectedQuestions] = useState(0);
    const [pendingQuestions, setPendingQuestions] = useState(0);

    QuestionsApiCall.getQuestionsCountForDashBoard()
        .then(response => {
            setApprovedQuestions(response.data.approvedQuestionsCount);
            setRejectedQuestions(response.data.rejectedQuestionsCount);
            setPendingQuestions(response.data.pendingQuestionsCount);
            setTotalQuestions(response.data.totalQuestionsCount);
        })
        .catch(error => {

        })

    return (
        <div className="dashboard">
            <Home />
            <h4>Questions DashBoard</h4>
            <Grid container spacing={5}>
                <Grid item xs={5} sm={3}>
                    <Paper ><AccessAlarmsRoundedIcon style={{ color: "orange", fontSize: "3em" }} />InProgress <b> {pendingQuestions} </b>  </Paper>
                </Grid>
                <Grid item xs={5} sm={3}>
                    <Paper > <CheckRoundedIcon style={{ color: "green", fontSize: "3em" }} />Approved {approvedQuestions} </Paper>
                </Grid>
                <Grid item xs={5} sm={3}>
                    <Paper > <ClearRoundedIcon style={{ color: "red", fontSize: "3em" }} />Rejected {rejectedQuestions}</Paper>
                </Grid>
                <Grid item xs={5} sm={3}>
                    <Paper ><BarChartRoundedIcon style={{ fontSize: "3em" }} />Total Questions {totalQuestions}</Paper>
                </Grid>
                <Grid item xs={12} className="chart" >
                    <Paper >Total Records Chart</Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default DashBoard
