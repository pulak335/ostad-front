import React from 'react';
import Computer from '../assets/logo/computer.png'
import { Container } from '../UI/Container';
import Typography from '../UI/Typography';
import Books from '../assets/icon/books.png'
import People from '../assets/icon/people.png'
import ButtonT from '../UI/ButtonT';
import Right from '../assets/icon/Right.png'

const Cover = () => {
    return (
        <div className='hero'>
            <Container>
                <div className='hero-box'>
                <img className='computer' src={Computer}/>
                <div className='hero-info'>
                    <Typography title='Tech and development' classes='heading-1'/>
                    <p className='sub-text'>স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে। স্কিল ডেভেলপ করুন দেশের সেরা ইন্সট্রাক্টরদের সাথে, ক্লিক করুন নিচের বাটনে।</p>
                    <div className='notes'>
                        <div className='box'><img src={Books}/><p>৭টি লাইভ কোর্স</p></div>
                        <div className='box'><img src={People}/><p>১৪২৪৫ জন Ostad গ্র্যাজুয়েট</p></div>
                    </div>
                    <div className='hero-btn'>
                        <ButtonT title="Start Learning" classes='btn-primary-2' icons={Right} others = "btn-icon"/>
                        <ButtonT title="assessment" classes='btn-primary-1' />
                    </div>
                </div>
                </div>
            </Container>
        </div>
    );
};

export default Cover;