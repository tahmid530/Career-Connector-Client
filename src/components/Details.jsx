// import { useState } from "react";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
// import Swal from "sweetalert2";

const Details = () => {
    const [job, setJob] = useState({})

    const jobs = useLoaderData();
    // console.log(jobs)

    const { id } = useParams()
    // console.log(id);

    useEffect(() => {
        const findJob = jobs.find(job => job._id === id)
        setJob(findJob);
    }, [id, jobs])
    // console.log(job);

    const handleApplied = jobs => {
        console.log(jobs);

        const keysToRemove = ['_id'];
        const modifiedData = { ...jobs };
        keysToRemove.forEach(_id => delete modifiedData[_id]);
        console.log(modifiedData);

        fetch('https://assignment-11-server-smoky-one.vercel.app/apply', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobs)
        })

            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Job Applied Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    // console.log(handleApplied);

    return (
        <div>
            <div className="flex flex-col-reverse items-center lg:my-20">

                <div className="card grid grid-cols-1">
                   
                    <div key={job._id} className="card w-full lg:w-96 border-2 border-black shadow-md mx-auto lg:mx-0">
                        <img src={job.image} alt="" className="rounded-xl w-[320px] mx-auto mt-10" />
                        <div className="card-body items-center text-center">

                            <h2 className="card-title text-[#444444] text-2xl font-bold">{job.name}</h2>
                            <h2 className="card-title text-[#444444]">Job Category: {job.category}</h2>
                            <h3 className="text-[#FF3811] text-xl font-semibold">Salary Range: {job.salary}</h3>
                            <h2 className="card-title text-[#444444]">Job Description: {job.description}</h2>
                            <h2 className="card-title text-[#444444]">Job Posting Date: {job.posting}</h2>
                            <h2 className="card-title text-[#444444]">Application Deadline: {job.deadline}</h2>
                        </div>
                        <div className="flex justify-center gap-3 pb-5">
                            <button className="btn btn-outline" onClick={() => handleApplied(job)}>Apply</button>
                        </div>
                    </div>

                </div>
            </div >
        </div>
    );
};

export default Details;