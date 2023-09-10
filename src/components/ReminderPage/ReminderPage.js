import React from 'react';
import './ReminderPage.scss';
import Todolist from '../../reminders/Todolist';

function ReminderPage() {
  return (
    <section className="reminderSection">
      <div className="to-do-app">
        <Todolist />
      </div>
    </section>
  );
}

export default ReminderPage;
