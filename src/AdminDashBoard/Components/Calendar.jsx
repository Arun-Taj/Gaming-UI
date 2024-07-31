import React, { useState } from 'react';
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addMonths, subMonths, isSameMonth, isSameDay, addDays } from 'date-fns';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import styled from 'styled-components';

const CalendarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

const CalendarContainer = styled.div`
  padding: 20px;
  margin: 20px;
  background-color: #f7fafc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  max-width: 320px;
  border: 1px solid #e53e3e;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const HeaderTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

const ArrowIcon = styled.div`
  cursor: pointer;
  color: #e53e3e;
`;

const DaysRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Day = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CellsRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const Cell = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${({ isNotSameMonth }) => isNotSameMonth && `
    color: #d1d5db;
  `}
  ${({ isSelected }) => isSelected && `
    background-color: #e53e3e;
    color: #fff;
    border-radius: 50%;
  `}
`;

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const renderHeader = () => {
    return (
      <Header>
        <ArrowIcon onClick={prevMonth}>
          <IoIosArrowBack />
        </ArrowIcon>
        <HeaderTitle>{format(currentMonth, 'MMMM yyyy')}</HeaderTitle>
        <ArrowIcon onClick={nextMonth}>
          <IoIosArrowForward />
        </ArrowIcon>
      </Header>
    );
  };

  const renderDays = () => {
    const days = [];
    const startDate = startOfWeek(currentMonth, { weekStartsOn: 0 });

    for (let i = 0; i < 7; i++) {
      days.push(
        <Day key={i}>
          {format(addDays(startDate, i), 'EEE')}
        </Day>
      );
    }

    return <DaysRow>{days}</DaysRow>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { weekStartsOn: 0 });
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, 'd');
        const cloneDay = day;
        days.push(
          <Cell
            key={day}
            isNotSameMonth={!isSameMonth(day, monthStart)}
            isSelected={isSameDay(day, selectedDate)}
            onClick={() => onDateClick(cloneDay)}
          >
            {formattedDate}
          </Cell>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <CellsRow key={day}>
          {days}
        </CellsRow>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  const onDateClick = day => {
    setSelectedDate(day);
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  return (
    <CalendarWrapper>
      <CalendarContainer>
        {renderHeader()}
        {renderDays()}
        {renderCells()}
      </CalendarContainer>
    </CalendarWrapper>
  );
};

export default Calendar;
