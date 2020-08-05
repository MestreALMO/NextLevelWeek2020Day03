import React from 'react';

import './styles.css';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

function TeacherList() {
    return(
        <div id="page-teacher-list" className="container">
            <PageHeader title="Those are the available teachers.">
                <form id="search-teachers">
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
                    <Input type="time" name="time" label="Hour" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )
}

export default TeacherList;