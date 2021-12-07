import React from 'react';

import { FullBackground } from './background';

import Navbar from '../../components/navbar/index';

import CalenderBlock from '../../components/calenderBlock/index';
import NotesBlocks from '../../components/notesBlock/index';
import TodoBlock from '../../components/todoBlock';
import QuicklinkBlock from '../../components/quicklinkBlock/index';
import EventsBlock from '../../components/eventsBlock/index';
import ProgressBlock from '../../components/progressBlock/index';

function Home() {
    document.getElementById("title").innerHTML = "Mind Map";
    
    return (
        <>
            <FullBackground>
            <Navbar/>
            <CalenderBlock/>
            <NotesBlocks/>
            <TodoBlock/>
            <QuicklinkBlock/>
            <EventsBlock/>
            <ProgressBlock/>
            </FullBackground>
        </>
    )

}

export default Home;