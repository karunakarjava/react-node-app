import React, { useContext, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import TopicContext from '../Context/TopicContext/TopicContext';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function TopicModel(props) {

    const [data, setData] = useState({ topicName: "", description: "", _id: ""});
    const [errors, setErrors] = useState({ topicName: "", description: "" });
    const { saveTopic, updateTopic } = useContext(TopicContext);

    console.log(errors);

    useEffect(() => {
        //Edit Topic data Model
        if (props.data.topicName !== undefined && props.data.description !== undefined) {
            setData({
                topicName: props.data.topicName,
                description: props.data.description,
                _id: props.data._id
            });
            setErrors({
                topicName: "",
                description: ""
            });
        } else {
            //Add Topic data Model
            setData({
                topicName: "",
                description: "",
            });
            setErrors({
                topicName: "",
                description: ""
            });
        }
    }, [props.data]);
    const handleSubmit = () => {
        if (validate()) {
            if (props.data._id !== undefined && props.data._id !== "") {
                updateTopic(data);
                props.handleClose();
            } else {
                saveTopic(data);
                props.handleClose();
            }
            setErrors({
                topicName: "",
                description: ""
            });
        }
    }
    const validate = () => {
        let isValid = true;
        let errorsObj = {};
        if (data.topicName==="") {
            isValid = false;
            errorsObj["topicName"] = "Topic Name is required";
        }
        if (data.description==="") {
            isValid = false;
            errorsObj["description"] = "Topic Name is required";
        }
        setErrors(errorsObj);
        return isValid;

    }
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    

    return (
        <div className="AddTopicContainer">
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                className="MuiDialog-paper-AddTopicModel"
            >
                <DialogTitle id="alert-dialog-title">Add Topic </DialogTitle>
                <DialogContent>
                    <TextField
                        error={errors.topicName !== "" ? true : false}
                        helperText={errors.topicName}
                        className="TopicName"
                        id="outlined-basic"
                        variant="outlined"
                        label="TopicName"
                        type="text"
                        name="topicName"
                        value={data.topicName}
                        onChange={handleChange}
                    /><br /><br />
                    <TextField
                        error={errors.description !== "" ? true : false}
                        helperText={errors.description}
                        className="Description"
                        id="outlined-basic"
                        variant="outlined"
                        label="DescriptionName"
                        type="text"
                        name="description"
                        value={data.description}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmit} color="primary" variant="contained">
                        Submit
                    </Button>
                    <Button onClick={props.handleClose} color="primary" autoFocus variant="contained">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}