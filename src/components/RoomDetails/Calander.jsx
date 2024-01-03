/* eslint-disable react/prop-types */
import { DateRange } from "react-date-range";

const Calander = ({value}) => {
    console.log(value)
    return (
      
            <DateRange
            rangeColors={['#F43F5E']}
            direction="vartical"
            showDateDisplay={false}
            ranges={[value]}
            // onChange={hanldeSelect}
            // date={value.startDate}
            // showDateDisplay={false}
            minDate={value.startDate}
            maxDate={value.endDate}
            >

            </DateRange>
        
    );
};

export default Calander;