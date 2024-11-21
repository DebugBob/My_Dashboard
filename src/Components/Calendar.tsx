import * as React from "react";
import { Calendar, defaultCalendarStrings, initializeIcons } from "@fluentui/react";

initializeIcons();

export const Fluent_Calendar: React.FunctionComponent =
  () => {
    const [selectedDate, 
        // setSelectedDate
    ] = React.useState<Date>();

    // const onSelectDate = React.useCallback(
    //   (date: Date, dateRangeArray: Date[]): void => {
    //     setSelectedDate(date);
    //   },
    //   []
    // );



    return (
      <div className="shadow-sm p-3 mb-5 bg-white rounded">
        {/* <div>Selected date: {selectedDate?.toLocaleString() || "Not set"}</div> */}

        <Calendar
          showMonthPickerAsOverlay
          highlightSelectedMonth
          showGoToToday={false}
            // onSelectDate={onSelectDate}
          value={selectedDate}
          // Calendar uses English strings by default. For localized apps, you must override this prop.
          strings={defaultCalendarStrings}
        />
      </div>
    );
  };
