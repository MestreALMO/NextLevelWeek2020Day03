import React, { useState } from 'react';

import PageHeader from '../../components/PageHeader';

import './styles.css';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm() {
    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ]);

        scheduleItems.push({
            week_day: 0,
            from: '',
            to: ''
        })
    }

    return(
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="It's incredible that you want to teach."
                description="The first step is to fill this subscription form"
            />

            <main>
                <fieldset>
                    <legend>Your data</legend>

                    <Input name="name" label="Complete name"/>
                    <Input name="avatar" label="Avatar"/>
                    <Input name="whatsapp" label="WhatsApp name"/>
                    <Textarea name="bio" label="Biography" />
                </fieldset>

                <fieldset>
                    <legend>About the class</legend>

                    <Select 
                        name="subject" 
                        label="Subject"
                        options={[
                            { value: 'Arts', label: 'Arts' },
                            { value: 'Biology', label: 'Biology' },
                            { value: 'Sciences', label: 'Sciences' },
                            { value: 'Physical Education', label: 'Physical Education' },
                            { value: 'Physics', label: 'Physics' },
                            { value: 'Geography', label: 'Geography' },
                            { value: 'History', label: 'History' },
                            { value: 'Math', label: 'Math' },
                            { value: 'English', label: 'English' },
                            { value: 'Chemistry', label: 'Chemistry' },
                        ]}
                    />
                    <Input name="cost" label="Cost of your class by hour"/>
                </fieldset>

                <fieldset>
                    <legend>
                        Time availability
                        <button type="button" onClick={addNewScheduleItem}>
                            + New time
                        </button>
                    </legend>

                    {scheduleItems.map(scheduleItem => {
                        return (
                            <div key={scheduleItem.week_day} className="schedule-item">
                                <Select 
                                    name="week_day" 
                                    label="Day of the week"
                                    options={[
                                        { value: '0', label: 'Sunday' },
                                        { value: '1', label: 'Monday' },
                                        { value: '2', label: 'Tuesday' },
                                        { value: '3', label: 'Wendnesday' },
                                        { value: '4', label: 'Thursday' },
                                        { value: '5', label: 'Friday' },
                                        { value: '6', label: 'Saturday' },
                                    ]}
                                />
                                <Input name="from" label="From" type="time" />
                                <Input name="to" label="To" type="time" />
                            </div>
                        );
                    })}
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Important warning" />
                        Important <br />
                        Fill all data
                    </p>
                    <button type="button">
                        Save subscription
                    </button>
                </footer>
            </main>
        </div>
    )
}

export default TeacherForm;