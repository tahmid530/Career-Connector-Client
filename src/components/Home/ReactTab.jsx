import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ReactTab = () => {
    const [jobs, setJobs] = useState([])

    const handleJob = () => {
        fetch('https://assignment-11-server-smoky-one.vercel.app/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }
    const handleJob2 = () => {
        fetch('https://assignment-11-server-smoky-one.vercel.app/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }
    const remainingData2 = jobs.filter(job => job.category === 'Full Time');
    const handleJob3 = () => {
        fetch('https://assignment-11-server-smoky-one.vercel.app/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }
    const remainingData3 = jobs.filter(job => job.category === 'Part Time');
    const handleJob4 = () => {
        fetch('https://assignment-11-server-smoky-one.vercel.app/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }
    const remainingData4 = jobs.filter(job => job.category === 'Remote');

    return (
        <div className='my-10 px-12'>
            <Tabs>
                <TabList>
                    <Tab onClick={handleJob}>All Jobs</Tab>
                    <Tab onClick={handleJob2}>Full Time</Tab>
                    <Tab onClick={handleJob3}>Part Time</Tab>
                    <Tab onClick={handleJob4}>Remote Job</Tab>
                </TabList>

                <TabPanel>
                    <div className="flex flex-col-reverse lg:flex-row gap-6 lg:justify-evenly pb-10 lg:my-20">

                        <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-20 px-6">
                            {
                                jobs.map(job => (


                                    <div key={job._id} className="card w-full lg:w-96 border-2 border-black shadow-md mx-auto lg:mx-0">
                                        <img src={job.image} alt="" className="rounded-xl w-[320px] mx-auto mt-10" />
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title text-[#444444] text-2xl font-bold">{job.name}</h2>
                                            <h2 className="card-title text-[#444444]">Job Category: {job.category}</h2>
                                            <h3 className="text-[#FF3811] text-xl font-semibold">Salary Range: ${job.salary}</h3>
                                        </div>
                                        <div className="flex justify-center gap-3 pb-5">
                                            <Link to={`/jobs/${job._id}`}><button className="btn btn-outline">Details</button></Link>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div >
                </TabPanel>
                <TabPanel>
                    <div className="flex flex-col-reverse lg:flex-row gap-6 lg:justify-evenly pb-10 lg:my-20">

                        <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-20 px-6">
                            {
                                remainingData2.map(job => (


                                    <div key={job._id} className="card w-full lg:w-96 border-2 border-black shadow-md mx-auto lg:mx-0">
                                        <img src={job.image} alt="" className="rounded-xl w-[320px] mx-auto mt-10" />
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title text-[#444444] text-2xl font-bold">{job.name}</h2>
                                            <h2 className="card-title text-[#444444]">Job Category: {job.category}</h2>
                                            <h3 className="text-[#FF3811] text-xl font-semibold">Salary Range: ${job.salary}</h3>
                                        </div>
                                        <div className="flex justify-center gap-3 pb-5">
                                            <Link to={`/jobs/${job._id}`}><button className="btn btn-outline">Details</button></Link>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div >
                </TabPanel>
                <TabPanel>
                    <div className="flex flex-col-reverse lg:flex-row gap-6 lg:justify-evenly pb-10 lg:my-20">

                        <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-20 px-6">
                            {
                                remainingData3.map(job => (


                                    <div key={job._id} className="card w-full lg:w-96 border-2 border-black shadow-md mx-auto lg:mx-0">
                                        <img src={job.image} alt="" className="rounded-xl w-[320px] mx-auto mt-10" />
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title text-[#444444] text-2xl font-bold">{job.name}</h2>
                                            <h2 className="card-title text-[#444444]">Job Category: {job.category}</h2>
                                            <h3 className="text-[#FF3811] text-xl font-semibold">Salary Range: ${job.salary}</h3>
                                        </div>
                                        <div className="flex justify-center gap-3 pb-5">
                                            <Link to={`/jobs/${job._id}`}><button className="btn btn-outline">Details</button></Link>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div >
                </TabPanel>
                <TabPanel>
                    <div className="flex flex-col-reverse lg:flex-row gap-6 lg:justify-evenly pb-10 lg:my-20">

                        <div className="card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-20 px-6">
                            {
                                remainingData4.map(job => (


                                    <div key={job._id} className="card w-full lg:w-96 border-2 border-black shadow-md mx-auto lg:mx-0">
                                        <img src={job.image} alt="" className="rounded-xl w-[320px] mx-auto mt-10" />
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title text-[#444444] text-2xl font-bold">{job.name}</h2>
                                            <h2 className="card-title text-[#444444]">Job Category: {job.category}</h2>
                                            <h3 className="text-[#FF3811] text-xl font-semibold">Salary Range: ${job.salary}</h3>
                                        </div>
                                        <div className="flex justify-center gap-3 pb-5">
                                            <Link to={`/jobs/${job._id}`}><button className="btn btn-outline">Details</button></Link>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </div >
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReactTab;