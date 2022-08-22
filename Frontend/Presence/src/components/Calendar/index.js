import React from "react";
import DatePicker from 'react-native-modern-datepicker';


export default function Calendar(){
    return(
        <DatePicker
          options={{
            backgroundColor: 'rgba(44,94,122,1)',
            textHeaderColor: 'white',
            textDefaultColor: 'white',
            selectedTextColor: 'black',
            mainColor: '#69D498',
            textSecondaryColor: '#9DCEFF',
            borderColor: 'rgba(122, 146, 165, 0.6)',
            defaultFont: 'poppinsr',
            headerFont: 'poppinsb',
          }}
          selected="2022-08-20"
          mode="calendar"
          minuteInterval={30}
          style={{ borderRadius: 10, marginTop: 30 }}

        />
    );
}
