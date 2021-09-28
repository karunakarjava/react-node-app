import moment from "moment";

const HelperUtils={

    formateDate:(date)=>{
        if ( date!== undefined) {
                return moment(date).format('YYYY-MM-DD');
        }
    },
    validateDate:(date)=>{
        //Validating Sting Date using moment
        if ( date!== undefined) {
            return moment(date, 'YYYY-MM-DD', true).isValid();
        }
    },
    validateMaxDate:(date)=>{
        if ( date!== undefined && date!== null && date!== "") {
            return  moment(date, 'YYYY-MM-DD', true).isBefore('2099-12-31');
        }
    },
    validateMinDate:(date)=>{
        if ( date!== undefined && date!== null && date!== "") {
            return moment(date, 'YYYY-MM-DD', true).isAfter('1900-01-01');
        }
    },
    validateEmail: (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    },
    validatePhoneNumber: (phone) => {
        var re = /^\d{10}$/;
        return re.test(String(phone));
    }

}
export default HelperUtils;