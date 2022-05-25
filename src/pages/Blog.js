import React from 'react';
import BlogsCard from '../components/Blogs/BlogsCard';

const Blog = () => {
    return (
        <div className='max-w-screen-xl w-11/12 mx-auto'>
            <div className='max-w-lg'>
                <div className='my-10'>
                    <BlogsCard questions='How will you improve the performance of a React Application?' Answer='রিঅ্যাক্ট পারফরম্যান্স অপ্টিমাইজেশান টুল ব্যবহার করে রিঅ্যাক্ট 16 এ নষ্ট রেন্ডার সনাক্ত করা । প্রতিক্রিয়াতে উপাদানগুলির অপ্রয়োজনীয় রেন্ডারিং ঠিক করে পারফরম্যান্স টিউনিং করুন৷ । PureComponent ব্যবহার করে অপ্রয়োজনীয় রেন্ডারের কারণে কর্মক্ষমতা উন্নত করা । টুলস রয়েছে যার দ্বারা অ্যাপ্লিকেশনটির বিল্ড সাইজ অপ্টিমাইজ করে লোডিং টাইম অপ্টিমাইজ করা যায়  । কোড স্প্লিটিং এর মাধ্যমে অ্যাপ লোডিং টাইম আরও অপ্টিমাইজ করা ।' />
                    <BlogsCard questions='What are the different ways to manage a state in a React application?' Answer='React components have a built-in state object. The state is encapsulated data where you store assets that are persistent between component renderings. সমস্যা দেখা দিলে react state components উপরে ভাগ করে এবং সমস্যা বের করে । কিছু ভুল হলে কী ঘটছে তা খুঁজে পাওয়া সত্যিই কঠিন । এই কারণে react State components' />
                    <BlogsCard questions='How does prototypical inheritance work?' Answer='prototypical inheritance হল জাভাস্ক্রিপ্টের একটি methods এবং  properties in objects । এটি এমন একটি পদ্ধতি যার মাধ্যমে একটি বস্তু অন্য বস্তুর বৈশিষ্ট্য এবং পদ্ধতির উত্তরাধিকারী হতে পারে । আমার বাবার ১০ টাকা আছে আমি আমার বাবার সন্তান উত্তরাধিকারী হিসাবে ১০ টাকার ভাগ পাবো  ।' />
                    <BlogsCard questions='You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?' Answer='আমি Array থেকে name গুলা নেয়ার জন্য filter  করবো । If key element is found name, push the all keys value empty array variable।' />
                    <BlogsCard questions='What is a unit test? Why should write unit tests?' Answer='একটি এপ্লিকেশন সকল ইন্টারফেস সঠিক ভাবে কাজ করছে কিনা সেটা confirm করার জন্য unity test প্রয়োজন। পদ্ধতিটি হল সমস্ত ফাংশন এবং পদ্ধতির জন্য পরীক্ষার কেস লেখা যাতে যখনই কোনও পরিবর্তন কোনও ত্রুটির কারণ হয়, এটি দ্রুত সনাক্ত করা যায় এবং ঠিক করা যায় ।  উচ্চ মানের পৃথক উপাদান সামগ্রিক সিস্টেম স্থিতিস্থাপকতা তৈরি করে। ' />
                </div>
            </div>
        </div>
    );
};

export default Blog;