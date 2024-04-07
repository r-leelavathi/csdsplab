import React from 'react'

import One from '../programs/One';
import Two from '../programs/Two';
import Three from '../programs/Three';
import Four from '../programs/Four';
import Five from '../programs/Five';
import Six from '../programs/Six';
import Seven from '../programs/Seven';
import Eight from '../programs/Eight';
import Nine from '../programs/Nine';
import ten from '../programs/ten';
import eleven from '../programs/eleven';
import twelve from '../programs/twelve';
import Thirteen from '../programs/Thirteen';
import Fourteen from '../programs/Fourteen';
import Fifteen from '../programs/Fifteen';
import Sixteen from '../programs/Sixteen';
import Seventeen from '../programs/Seventeen';
import Eighteen from '../programs/Eighteen';
import Nineteen from '../programs/Nineteen';
import Twenty from '../programs/Twenty';
import Twentyone from '../programs/Twentyone';
import Twentythree from '../programs/Twentythree';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Body.css'
import Twentytwo from '../programs/Twentytwo';

const Body = () => {
    return (
        <div className='body__container'>
            <div className='navmenu'>
                <Navbar />
            </div>
            <div className="maincontent">
                <Routes>
                    <Route path='/' Component={One} />
                    <Route path='/two' Component={Two} />
                    <Route path='/three' Component={Three} />
                    <Route path='/four' Component={Four} />
                    <Route path='/five' Component={Five} />
                    <Route path='/six' Component={Six} />
                    <Route path='/seven' Component={Seven} />
                    <Route path='/eight' Component={Eight} />
                    <Route path='/nine' Component={Nine} />
                    <Route path='/ten' Component={ten} />
                    <Route path='/eleven' Component={eleven} />
                    <Route path='/twelve' Component={twelve} />
                    <Route path='/thirteen' Component={Thirteen} />
                    <Route path='/fourteen' Component={Fourteen} />
                    <Route path='/fifteen' Component={Fifteen} />
                    <Route path='/sixteen' Component={Sixteen} />
                    <Route path='/seventeen' Component={Seventeen} />
                    <Route path='/eighteen' Component={Eighteen} />
                    <Route path='/nineteen' Component={Nineteen} />
                    <Route path='/twenty' Component={Twenty} />
                    <Route path='/twentyone' Component={Twentyone} />
                    <Route path='/twentytwo' Component={Twentytwo} />
                    <Route path='/twentythree' Component={Twentythree} />
                </Routes>
            </div>
        </div>
    )
}

export default Body
