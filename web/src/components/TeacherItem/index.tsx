import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/29152190?s=460&u=da5ebb3798057a82a6fe3cd3e6665a316abd34d8&v=4" alt="André Lusegardis"/>
                <div>
                    <strong>André Lusegardis</strong>
                    <span>Programming</span>
                </div>
            </header>
            <p>
                Teacher of programming that had great success.
                <br/><br/>
                Lot's of students say they love him and will never forget.
            </p>

            <footer>
                <p>
                    Hour/Price
                    <strong>$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Contact
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;