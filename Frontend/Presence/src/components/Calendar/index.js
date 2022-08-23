import React from "react";
import DatePicker from 'react-native-modern-datepicker';

const MonthYearExample = () => {
  const [date, setDate] = useState('');}

export default function Calendar(){
    return(
        <DatePicker
          options={{
            backgroundColor: 'rgba(44,94,122,0)',
            textHeaderColor: 'white',
            textDefaultColor: 'white',
            selectedTextColor: 'black',
            mainColor: '#69D498',
            textSecondaryColor: '#9DCEFF',
            borderColor: 'rgba(122, 146, 165, 0.6)',
            defaultFont: 'poppinsr',
            headerFont: 'poppinsb',
          }}
          mode="monthYear"
          selectorStartingYear={2000}
          onMonthYearChange={selectedDate => setDate(selectedDate)}
          style={{ borderRadius: 10, marginTop: 5 }}
        />
    );
}
